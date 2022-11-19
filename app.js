const express = require('express');

const pokemonRoute = require('./routes/pokemon');

const app = express();

app.use('/', pokemonRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running on ${port}, http://localhost:${port}`));