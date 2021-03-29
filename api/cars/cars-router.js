const express = require('express');
const Cars = require('./cars-model.js');
const checkCarId = require('./cars-middleware.js').checkCarId;
const checkCarPayload = require('./cars-middleware.js').checkCarPayload;
const checkVinNumberUnique = require('./cars-middleware.js').checkVinNumberUnique;
const checkVinNumberValid = require('./cars-middleware.js').checkVinNumberValid;
const ExpressError = require('../expressError.js');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        res.status(200).json(await Cars.getAll());
    } catch (err) {
        next(new ExpressError(err,500))
    }
})

router.get('/:id', checkCarId, (req, res) => {
    res.status(200).json(req.car);
})

router.post('/', checkCarPayload, checkVinNumberUnique, checkVinNumberValid, async (req, res, next) => {
    try {
        const data = await Cars.create(req.body);
        res.status(201).json(data);
    } catch (err) {
        next(new ExpressError(err,500))
    }
})

module.exports = router;
