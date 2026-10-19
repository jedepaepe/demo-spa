const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: 'http://localhost:8076' }));

app.get('/', (request, response) => {
    response.send("Hello World");
});

app.get('/api/products', (request, response) => {
    response.json([
        { id: 1, name: 'chocolat', price: 4.32 },
        { id: 2, name: 'voiture', price: 39987.87 },
    ]);
});

app.listen(3000, () => console.log("API écoute sur http://localhost:3000"));

