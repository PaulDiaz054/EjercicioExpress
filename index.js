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
app.get('/nombre', (req, res) => {
    res.json(lista);
});

app.get('/Paul', (req, res) => {
    res.send('Mi nombre es Paul, tengo 20 años y entre mis hobbies favoritos estan los videojuegos y la natacion');
});

app.get('/suma', (req, res) => {
    let num1 = 2;
    let num2 = 1;
    let suma = num1 + num2;
    res.send(suma+'');
});

app.get('/suma/:n1', (req, res) => {
    let num1 = parseInt(req.params.n1);
    let num2 = 3;
    let sum = num1 + num2;
    res.send('el resultado de la suma es: '+sum);
});

app.listen(3000, ()=> {
    console.log("Servicio corriendo...");
});
