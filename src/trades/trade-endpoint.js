function handeTradeRequest (httpObject) {
    switch (httpObject.method) {
        case 'GET':
            // Call GET service
            return {
                statusCode: 200,
                data: 'Hello World'
            }
            break

        case 'POST':
            // Call POST service
            break

        default:
            // 404
            break
    }
}

module.exports = handeTradeRequest