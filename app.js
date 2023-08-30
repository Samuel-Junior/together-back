const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const cors = require('cors');
const { log } = require('console');

let jsonParser = bodyParser.json()

const corsOptions = {
    origin: 'http://localhost:4200',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "http://localhost:4200");
    res.header('Access-Control-Allow-Headers', true);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

// // Middleware pour vérifier si un élève existe
// function eleveExiste(req, res, next) {
//   const id = parseInt(req.params.id);
//   const eleve = eleves.find(e => e.id === id);
//   if (!eleve) {
//     return res.status(404).json({ message: "Élève non trouvé" });
//   }
// req.eleve = eleve
//   next();
// }
app.listen(port, () => {
  console.log( `Serveur démarré sur le port ${port}`);
});


