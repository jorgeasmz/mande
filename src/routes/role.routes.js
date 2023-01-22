// CRUD ROUTES FOR ROLES

const { Router } = require('express');
const {
    createRole,
    getAllRoles,
    getRole,
    updateRole,
    deleteRole
    } = require('../controllers/role.controller');

const router = Router();

router.post('/roles', createRole);

router.get('/roles', getAllRoles);

router.get('/roles/:anID', getRole);

router.put('/roles/:anID', updateRole);

router.delete('/roles/:anID', deleteRole);

module.exports = router;