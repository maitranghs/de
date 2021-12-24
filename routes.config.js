const EpcisEventController = require('./controllers/EpcisEvent.controller');

exports.routesConfig = function (app) {
    app.post('/epcisevent', [
        EpcisEventController.insert
    ]);
    app.get('/epcisevent', [
        EpcisEventController.find
    ]);
};