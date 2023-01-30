// CRUD CONTROLLER FOR SERVICES

// USING CONNECTION
const pool = require('../database/connection');

const createService = async (req, res, next) => {

    const {
        aDescription,
        aClientID,
        aPaymentID,
        aWorkerTaskID
        } = req.body;
    
    try {

        const firstQuery = await pool.query('INSERT INTO service (service_desc, "time", date, id_client, id_payment, "id_worker-task") VALUES ($1, (SELECT CURRENT_TIME), (SELECT CURRENT_DATE), $2, $3, $4) RETURNING *', [aDescription, aClientID, aPaymentID, aWorkerTaskID]);

        const secondQuery = await pool.query('UPDATE worker SET is_active = true RETURNING *');

        console.log(firstQuery, secondQuery);

        res.send('Service created.');

    } catch (error) {

        next(error);
        
    }

};

const getAllServices = async (req, res, next) => {

    try {

        const query = await pool.query("SELECT * FROM service");

        console.log(query);

        res.json(query.rows);

    } catch (error) {
        
        next(error);

    }

};

const getService = async (req, res, next) => {

    const {
        anID
    } = req.params;

    try {

        const query = await pool.query("SELECT * FROM service WHERE service_id = $1", [anID]);

        if (query.rows.length === 0) return res.status(404).json({
            message: 'Service not found'
        })

        res.json(query.rows[0]);

    } catch (error) {
        
        next(error);

    }

};

const updateService = async (req, res, next) => {

    const {
        aDescription,
        aTime,
        aDate,
        aClientID,
        aPaymentID,
        aWorkerTaskID
        } = req.body;
    
    const {
        anID
    } = req.params;

    try {

        const query = await pool.query('UPDATE service SET service_desc = $1, "time" = $2, date = $3, id_client = $4, id_payment = $5, "id_worker-task" = $6 WHERE service_id = $7 RETURNING *', [aDescription, aTime, aDate, aClientID, aPaymentID, aWorkerTaskID, anID]);

        if (query.rows.length === 0) return res.status(404).json({
            message: 'Service not found'
        })

        res.json(query.rows[0]);

    } catch (error) {
        
        next(error);

    }

};

const deleteService = async (req, res, next) => {

    const {
        anID
    } = req.params;

    try {

        const query = await pool.query("DELETE FROM service WHERE service_id = $1 RETURNING *", [anID]);

        if (query.rowCount === 0) return res.status(404).json({
            message: 'Service not found'
        })

        console.log("Service deleted: ", query.rows[0]);
        res.sendStatus(204);

    } catch (error) {
        
        next(error);
        
    }

};

module.exports = {
    createService,
    getAllServices,
    getService,
    updateService,
    deleteService
}