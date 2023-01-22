// CRUD ROUTES FOR CLIENTS

const { Router } = require('express');
const {
    createClient,
    getAllClients,
    getClient,
    updateClient,
    deleteClient
    } = require('../controllers/client.controller');

const router = Router();

router.post('/clients', createClient);

router.get('/clients', getAllClients);

router.get('/clients/:anID', getClient);

router.put('/clients/:anID', updateClient);

router.delete('/clients/:anID', deleteClient);

module.exports = router;