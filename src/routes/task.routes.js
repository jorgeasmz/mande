// CRUD ROUTES FOR TASKS

const { Router } = require('express');
const {
    createTask,
    getAllTasks,
    getTask,
    updateTask,
    deleteTask
    } = require('../controllers/task.controller');

const router = Router();

router.post('/tasks', createTask);

router.get('/tasks', getAllTasks);

router.get('/tasks/:anID', getTask);

router.put('/tasks/:anID', updateTask);

router.delete('/tasks/:anID', deleteTask);

module.exports = router;