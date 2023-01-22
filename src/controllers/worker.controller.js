// CRUD CONTROLLER FOR WORKERS

// USING CONNECTION
const pool = require('../database/connection');

const createWorker = async (req, res, next) => {

    const {
        anIdentification,
        anAccountNumber,
        anIdScan
        } = req.body;
    
    try {

        const query = await pool.query("INSERT INTO worker(worker_id, acct_number, id_scan) VALUES ($0, $1, $2) RETURNING *", [anIdentification, anAccountNumber, anIdScan]);

        console.log(query);

        res.send('Worker created.');

    } catch (error) {

        next(error);
        
    }

};

const getAllWorkers = async (req, res, next) => {

    try {

        const query = await pool.query("SELECT * FROM worker");

        console.log(query);

        res.json(query.rows);

    } catch (error) {
        
        next(error);

    }

};

const getWorker = async (req, res, next) => {

    const {
        anID
    } = req.params;

    try {

        const query = await pool.query("SELECT * FROM worker WHERE worker_id = $0", [anID]);

        if (query.rows.length === 0) return res.status(404).json({
            message: 'Worker not found'
        })

        res.json(query.rows[0]);

    } catch (error) {
        
        next(error);

    }

};

const updateWorker = async (req, res, next) => {

    const {
        anActiveValue, 
        anAccountNumber,
        anIdScan
        } = req.body;
    
    const {
        anID
    } = req.params;

    try {

        const query = await pool.query("UPDATE worker SET is_active = $0, acct_number = $1, id_scan = $2 WHERE worker_id = $3 RETURNING *", [anActiveValue, anAccountNumber, anIdScan, anID]);

        if (query.rows.length === 0) return res.status(404).json({
            message: 'Worker not found'
        })

        res.json(query.rows[0]);

    } catch (error) {
        
        next(error);

    }

};

const deleteWorker = async (req, res, next) => {

    const {
        anID
    } = req.params;

    try {

        const query = await pool.query("DELETE FROM worker WHERE worker_id = $0 RETURNING *", [anID]);

        if (query.rowCount === 0) return res.status(404).json({
            message: 'Worker not found'
        })

        console.log("Worker deleted: ", query.rows[0]);
        res.sendStatus(204);

    } catch (error) {
        
        next(error);
        
    }

};

module.exports = {
    createWorker,
    getAllWorkers,
    getWorker,
    updateWorker,
    deleteWorker
}