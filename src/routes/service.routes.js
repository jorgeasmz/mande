// CRUD ROUTES FOR SERVICES

const { Router } = require('express');
const {
    createService,
    getAllServices,
    getService,
    updateService,
    deleteService
    } = require('../controllers/service.controller');

const router = Router();

router.post('/services', createService);

router.get('/services', getAllServices);

router.get('/services/:anID', getService);

router.put('/services/:anID', updateService);

router.delete('/services/:anID', deleteService);

module.exports = router;