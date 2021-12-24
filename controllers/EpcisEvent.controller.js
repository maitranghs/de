const EpcisEventModel = require('../models/EpcisEvent.model');

exports.insert = (req, res) => {
    var sussess = (result) => {
        console.log(`[SUCCEED][${__filename}] Time: ${Date.now()}`);
        res.status(201).send({id: result._id});
    };
    var fail = (err) => {
        console.log(`[FAILED][${__filename}] Time: ${Date.now()} || error: ${err}`);
    };
    EpcisEventModel.createEpcisEvent(req.body).then(sussess).catch(fail);
};

exports.find = (req, res) => {
    var sussess = (result) => {
        console.log(`[SUCCEED][${__filename}] Time: ${Date.now()}`);
        res.status(201).send(result);
    };
    var fail = (err) => {
        console.log(`[FAILED][${__filename}] Time: ${Date.now()} || error: ${err}`);
    };
    EpcisEventModel.findByLocationAndTime(
        req.query.read_point, 
        req.query.event_time_from, 
        req.query.event_time_to
    ).then(sussess).catch(fail);
};