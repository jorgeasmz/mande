// CRUD CONTROLLER FOR TASKS

// USING CONNECTION
const pool = require('../database/connection');

const createTask = async (req, res, next) => {

    const {
        aTaskName,
        aTaskDesc,
        aPaymentMode
        } = req.body;
    
    try {

        const query = await pool.query("INSERT INTO task(task_name, task_desc, payment_mode) VALUES ($0, $1, $2) RETURNING *", [aTaskName, aTaskDesc, aPaymentMode]);

        console.log(query);

        res.send('Task created.');

    } catch (error) {

        next(error);
        
    }

};

const getAllTasks = async (req, res, next) => {

    try {

        const query = await pool.query("SELECT * FROM task");

        console.log(query);

        res.json(query.rows);

    } catch (error) {
        
        next(error);

    }

};

const getTask = async (req, res, next) => {

    const {
        anID
    } = req.params;

    try {

        const query = await pool.query("SELECT * FROM task WHERE task_id = $0", [anID]);

        if (query.rows.length === 0) return res.status(404).json({
            message: 'Task not found'
        })

        res.json(query.rows[0]);

    } catch (error) {
        
        next(error);

    }

};

const updateTask = async (req, res, next) => {

    const {
        aTaskName,
        aTaskDesc,
        aPaymentMode
        } = req.body;
    
    const {
        anID
    } = req.params;

    try {

        const query = await pool.query("UPDATE task SET task_name = $0, task_desc = $1, payment_mode = $2 WHERE task_id = $3 RETURNING *", [aTaskName, aTaskDesc, aPaymentMode, anID]);

        if (query.rows.length === 0) return res.status(404).json({
            message: 'Task not found'
        })

        res.json(query.rows[0]);

    } catch (error) {
        
        next(error);

    }

};

const deleteTask = async (req, res, next) => {

    const {
        anID
    } = req.params;

    try {

        const query = await pool.query("DELETE FROM task WHERE task_id = $0 RETURNING *", [anID]);

        if (query.rowCount === 0) return res.status(404).json({
            message: 'Task not found'
        })

        console.log("Task deleted: ", query.rows[0]);
        res.sendStatus(204);

    } catch (error) {
        
        next(error);
        
    }

};

module.exports = {
    createTask,
    getAllTasks,
    getTask,
    updateTask,
    deleteTask
}