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
  let per = lado * 6;
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
app.listen(3000, () => {
  console.log("Servicio corriendo...");
});
