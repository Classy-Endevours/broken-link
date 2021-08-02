const express = require('express');
const cors = require('cors');
const siteChecker = require('./app.js')

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// setting up the PORT
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`server is listening at PORT ${PORT}`));
