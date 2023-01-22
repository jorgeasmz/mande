// CRUD ROUTES FOR WORKER-TASKS

const { Router } = require('express');
const {
    createWorkerTask,
    getAllWorkerTasks,
    getWorkerTask,
    updateWorkerTask,
    deleteWorkerTask
    } = require('../controllers/worker-task.controller');

const router = Router();

router.post('/worker-tasks', createWorkerTask);

router.get('/worker-tasks', getAllWorkerTasks);

router.get('/worker-tasks/:anID', getWorkerTask);

router.put('/worker-tasks/:anID', updateWorkerTask);

router.delete('/worker-tasks/:anID', deleteWorkerTask);

module.exports = router;