const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const admin = require("firebase-admin");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Firebase admin init (clé à remplacer)
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

// Exemple route
app.get("/", (req, res) => {
  res.send("Backend LearnUp actif 🚀");
});

// Lancer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
