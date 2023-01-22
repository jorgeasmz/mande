// CRUD ROUTES FOR PERSONS

const { Router } = require('express');
const {
    createPerson,
    getAllPersons,
    getPerson,
    updatePerson,
    deletePerson
    } = require('../controllers/person.controller');

const router = Router();

router.post('/persons', createPerson);

router.get('/persons', getAllPersons);

router.get('/persons/:anID', getPerson);

router.put('/persons/:anID', updatePerson);

router.delete('/persons/:anID', deletePerson);

module.exports = router;