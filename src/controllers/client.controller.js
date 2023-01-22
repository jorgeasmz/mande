// CRUD CONTROLLER FOR CLIENTS

// USING CONNECTION
const pool = require('../database/connection');

const createClient = async (req, res, next) => {

    const {
        anIdentification,
        aCardNumber
        } = req.body;
    
    try {

        const query = await pool.query("INSERT INTO client(client_id, card_number) VALUES ($0, $1) RETURNING *", [anIdentification, aCardNumber]);

        console.log(query);

        res.send('Client created.');

    } catch (error) {

        next(error);
        
    }

};

const getAllClients = async (req, res, next) => {

    try {

        const query = await pool.query("SELECT * FROM client");

        console.log(query);

        res.json(query.rows);

    } catch (error) {
        
        next(error);

    }

};

const getClient = async (req, res, next) => {

    const {
        anID
    } = req.params;

    try {

        const query = await pool.query("SELECT * FROM client WHERE client_id = $0", [anID]);

        if (query.rows.length === 0) return res.status(404).json({
            message: 'Client not found'
        })

        res.json(query.rows[0]);

    } catch (error) {
        
        next(error);

    }

};

const updateClient = async (req, res, next) => {

    const {
        aCardNumber
        } = req.body;
    
    const {
        anID
    } = req.params;

    try {

        const query = await pool.query("UPDATE client SET card_number = $0 WHERE client_id = $1 RETURNING *", [aCardNumber, anID]);

        if (query.rows.length === 0) return res.status(404).json({
            message: 'Client not found'
        })

        res.json(query.rows[0]);

    } catch (error) {
        
        next(error);

    }

};

const deleteClient = async (req, res, next) => {

    const {
        anID
    } = req.params;

    try {

        const query = await pool.query("DELETE FROM client WHERE client_id = $0 RETURNING *", [anID]);

        if (query.rowCount === 0) return res.status(404).json({
            message: 'Client not found'
        })

        console.log("Client deleted: ", query.rows[0]);
        res.sendStatus(204);

    } catch (error) {
        
        next(error);
        
    }

};

module.exports = {
    createClient,
    getAllClients,
    getClient,
    updateClient,
    deleteClient
}