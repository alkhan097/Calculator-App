const express = require('express');
const cors = require('cors');
const calculatorRoutes = require('./routes/calculatorRoutes');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World! This is my calculator app.');
});

// Use calculator routes
app.use('/calculate', calculatorRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
