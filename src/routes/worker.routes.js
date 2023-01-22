// CRUD ROUTES FOR WORKERS

const { Router } = require('express');
const {
    createWorker,
    getAllWorkers,
    getWorker,
    updateWorker,
    deleteWorker
    } = require('../controllers/worker.controller');

const router = Router();

router.post('/workers', createWorker);

router.get('/workers', getAllWorkers);

router.get('/workers/:anID', getWorker);

router.put('/workers/:anID', updateWorker);

router.delete('/workers/:anID', deleteWorker);

module.exports = router;