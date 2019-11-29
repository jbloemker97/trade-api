const httpObject = require('../helpers/adapt-request')
const handeTradeRequest = require('./trade-endpoint')


function tradeController (req, res) {
    // Get HTTP Object
    const httpRequest = httpObject(req);

    const { headers, statusCode, data } = handeTradeRequest(httpRequest);

    res
        .set(headers)
        .status(statusCode)
        .send(data)
}

module.exports = tradeController