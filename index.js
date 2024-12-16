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

app.listen(3000, ()=> {
    console.log("Servicio corriendo...");
});
