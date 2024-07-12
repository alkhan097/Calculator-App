const express = require('express');
const cors = require('cors');
const logger = require('./logger');

const calculatorRoutes = require('./routes/calculator');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    logger.info('Accessed the root endpoint');

    res.send('Hello World! This is my calculator app.');
});

// Use calculator routes
app.use('/calculate', calculatorRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
