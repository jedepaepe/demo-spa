const express = require('express');
const cors = require('cors');

const app = express();
// mauvais au niveau sécurité, il faut limiter à certains sites
app.use(cors());

// HTTP Get sur la racine, la fonction donnée ici sera exécuté
app.get('/', (request, response) => {
    response.send("Hello World");
});

app.get('/api/products', (request, response) => {
    response.json([
        { id: 1, name: 'chocolat', price: 4.32 },
        { id: 2, name: 'voiture', price: 39987.87 },
    ]);
});

// démarre le serveur qui écoute sur port 3000
app.listen(3000, () => console.log("API écoute sur http://localhost:3000"));



