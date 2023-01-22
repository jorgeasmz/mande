// CRUD CONTROLLER FOR WORKER-TASKS

// USING CONNECTION
const pool = require('../database/connection');

const createWorkerTask = async (req, res, next) => {

    const {
        aWorkerID,
        aTaskID,
        aPrice
        } = req.body;
    
    try {

        const query = await pool.query("INSERT INTO worker-task(id_worker, id_task, price) VALUES ($0, $1, $2) RETURNING *", [aWorkerID, aTaskID, aPrice]);

        console.log(query);

        res.send('WorkerTask created.');

    } catch (error) {

        next(error);
        
    }

};

const getAllWorkerTasks = async (req, res, next) => {

    try {

        const query = await pool.query("SELECT * FROM worker-task");

        console.log(query);

        res.json(query.rows);

    } catch (error) {
        
        next(error);

    }

};

const getWorkerTask = async (req, res, next) => {

    const {
        anID
    } = req.params;

    try {

        const query = await pool.query("SELECT * FROM worker-task WHERE worker-task_id = $0", [anID]);

        if (query.rows.length === 0) return res.status(404).json({
            message: 'WorkerTask not found'
        })

        res.json(query.rows[0]);

    } catch (error) {
        
        next(error);

    }

};

const updateWorkerTask = async (req, res, next) => {

    const {
        aTaskID,
        aPrice
        } = req.body;
    
    const {
        anID
    } = req.params;

    try {

        const query = await pool.query("UPDATE worker-task SET id_task = $0, price = $1 WHERE worker-task_id = $2 RETURNING *", [aTaskID, aPrice, anID]);

        if (query.rows.length === 0) return res.status(404).json({
            message: 'WorkerTask not found'
        })

        res.json(query.rows[0]);

    } catch (error) {
        
        next(error);

    }

};

const deleteWorkerTask = async (req, res, next) => {

    const {
        anID
    } = req.params;

    try {

        const query = await pool.query("DELETE FROM worker-task WHERE worker-task_id = $0 RETURNING *", [anID]);

        if (query.rowCount === 0) return res.status(404).json({
            message: 'WorkerTask not found'
        })

        console.log("WorkerTask deleted: ", query.rows[0]);
        res.sendStatus(204);

    } catch (error) {
        
        next(error);
        
    }

};

module.exports = {
    createWorkerTask,
    getAllWorkerTasks,
    getWorkerTask,
    updateWorkerTask,
    deleteWorkerTask
}