const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.get( '/', async(req, res, next) => {

    try{
        res.status(200).json(await db('cars'));
    } catch (err) {
        next(err);
    }

});


server.post('/', async (req, res, next) => {

    const {VIN, 
           make, 
           model, 
           mileage, 
           trans_type = null, 
           status = null } = req.body
    try{
        await db('cars').insert({VIN: VIN,
                                    make: make,
                                    model: model,
                                    mileage: mileage,
                                    trans_type: trans_type,
                                    status: status });
        res.status(200).json(await db('cars').where({make: make}));
    } catch (err) {
        next(err.message);
    }
});


module.exports = server;