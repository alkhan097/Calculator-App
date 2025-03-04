const logger = require('../logger');

exports.calculate = (req, res) => {
    const { operation, number1, number2 } = req.body;
    logger.info(`Received request: ${operation} ${number1} ${number2}`);

    try {
        let result;
        switch (operation) {
            case  number1 || number2===null:
                return res.status(400).json({ error: 'Invalid null number' });
            case 'add':
                result = number1 + number2;
                break;
            case 'subtract':
                result = number1 - number2;
                break;
          
            default:
                return res.status(400).json({ error: 'Invalid operation' });
        }
        logger.info(`Operation result: ${result}`);

        res.status(200).json({ result });
    } catch (error) {
        logger.error(`Error processing request: ${error.message}`);

        res.status(500).json({ error: 'Server error' });
    }
};
