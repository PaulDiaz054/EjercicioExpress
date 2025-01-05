const express = require("express");
const app = express();

app.use(express.json());
var lista = [
  {
    id: "1",
    nombre: "Paul",
  },
  {
    id: "2",
    nombre: "Genesis",
  },
];
//progamar web service de tipo GET
app.get("/nombre", (req, res) => {
  res.json(lista);
});

app.get("/Paul", (req, res) => {
  res.send(
    "Mi nombre es Paul, tengo 20 años y entre mis hobbies favoritos estan los videojuegos y la natacion"
  );
});

app.get("/suma", (req, res) => {
  let num1 = 2;
  let num2 = 1;
  let suma = num1 + num2;
  res.send(suma + "");
});

app.get("/suma/:n1", (req, res) => {
  let num1 = parseInt(req.params.n1);
  let num2 = 3;
  let sum = num1 + num2;
  res.send("el resultado de la suma es: " + sum);
});

app.get("/rectangulo/:base&:altura", (req, res) => {
  let base = parseInt(req.params.base);
  let altura = parseInt(req.params.altura);
  let per = base * 2 + altura * 2;
  let area = base * altura;
  res.send("el area es: " + area + ", el perimetro es: " + per);
});

app.get("/pentagono/:lado&:apotema", (req, res) => {
  let lado = parseInt(req.params.lado);
  let apot = parseInt(req.params.apotema);
  let per = lado * 5;
  let area = (per * apot) / 2;
  res.send("el area es: " + area + ", el perimetro es: " + per);
});

app.get("/rombo/:dmenor&:dmayor&:lado", (req, res) => {
  let dmenor = parseInt(req.params.dmenor);
  let dmayor = parseInt(req.params.dmayor);
  let lado = parseInt(req.params.lado);
  let per = lado * 4;
  let area = (dmayor * dmenor) / 2;
  res.send("el area es: " + area + ", el perimetro es: " + per);
});

app.get("/trinomio/:a&:b", (req, res) => {
  let a = parseInt(req.params.a);
  let b = parseInt(req.params.b);

  if(!Number.isInteger(Math.sqrt(a)) && !Number.isInteger(Math.sqrt(b))){
    res.send("no es un trinomio cuadrado perfecto");
    return;
  }
  res.send("la expresion correcta es:" + a+ "x^2+" + (2*Math.sqrt(a)*Math.sqrt(b)) + "x+" + b +", el resultado es: (" + Math.sqrt(a) + "x+" + Math.sqrt(b)+ ")^2");
});

app.get("/adiccion", (req, res) => {
  let n1 = parseInt(req.query.num1);
  let n2 = parseInt(req.query.num2);
  let suma = n1 + n2;
  res.json({resultado: suma});
});

app.get("/resta", (req, res) => {
  let parametros = req.query;
  let n1 = parseInt(parametros.n1);
  let n2 = parseInt(parametros.n2);
  let resta;
  if (n1>n2){
    resta = n1 - n2;
  } else {
    resta = n2 - n1;
  }
  res.send(resta + "");
});
//calcular un servicio web mediante querys que nos permita conocer el valor a pagar en matriculacion vehicular seguiendo las pautas: 
// 1. el año del vehiculo: si año > 2000 pagara un subsicion de 2% del valor del vehiculo, si año < 2000 pagara el 5%
// 2. el valor de matriculacion esta figado en 96$
// 3. si el vehiculo posee una placa de imbabura, carchi, esmeraldas o sucumbios = descuento del 2.5%
// 4. si el vehiculo posee multas por cada una pagara 18$
// indicar los valores calculados en una estructura json y que indique el valor total a pagar
app.get("/matriculacion", (req, res) => {
  let valorV = parseInt(req.query.valorV);
  let anio = parseInt(req.query.anio);
  let matricula = req.query.matricula;
  let multas = parseInt(req.query.multas);
  let valorMatricula = 96;
  let subsidio;
  let descuento;
  let valorMultas;
  //calcular subsidio por contaminacion
  if (anio>2000){
    subsidio = (valorV * 0.02);
  } else {
    subsidio = (valorV * 0.05);
  }
  //calcular descuento por provincia
  if (matricula.charAt(0) == "i" || matricula.charAt(0) == "c" || matricula.charAt(0) == "e" || matricula.charAt(0) == "s"){
    descuento = valorMatricula * 0.025; 
  } else {
    descuento = 0;
  }
  //calcular multas
  valorMultas = multas * 18;

  let total = valorMatricula + subsidio - descuento + valorMultas;

  res.json({
    valorMatricula: valorMatricula,
    ValorVehiculo: valorV,
    anio: anio,
    subsidioContaminacion: subsidio,
    Matricula: matricula,
    descuento: descuento,
    NroMultas: multas,
    ValorPorMultas: valorMultas,
    ValorPagar: total
  });
});
app.listen(3000, () => {
  console.log("Servicio corriendo...");
});
