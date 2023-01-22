// CRUD ROUTES FOR USERS

const { Router } = require('express');
const {
    createUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
    } = require('../controllers/user.controller');

const router = Router();

router.post('/users', createUser);

router.get('/users', getAllUsers);

router.get('/users/:anID', getUser);

router.put('/users/:anID', updateUser);

router.delete('/users/:anID', deleteUser);

module.exports = router;