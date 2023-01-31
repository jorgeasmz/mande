// CRUD CONTROLLER FOR PAYMENTS

// USING CONNECTION
const pool = require('../database/connection');

const createPayment = async (req, res, next) => {

    const {
        aServiceID,
        anAmount
        } = req.body;
    
    try {

        const firstQuery = await pool.query("INSERT INTO payment (id_service, amount) VALUES ($1, $2) RETURNING *", [aServiceID, anAmount]);

        const secondQuery = await pool.query('UPDATE worker SET is_active = false RETURNING *');

        console.log(firstQuery, secondQuery);

        res.send('Payment created.');

    } catch (error) {

        next(error);
        
    }

};

const getAllPayments = async (req, res, next) => {

    try {

        const query = await pool.query("SELECT * FROM payment");

        console.log(query);

        res.json(query.rows);

    } catch (error) {
        
        next(error);

    }

};

const getPayment = async (req, res, next) => {

    const {
        anID
    } = req.params;

    try {

        const query = await pool.query("SELECT * FROM payment WHERE payment_id = $1", [anID]);

        if (query.rows.length === 0) return res.status(404).json({
            message: 'Payment not found'
        })

        res.json(query.rows[0]);

    } catch (error) {
        
        next(error);

    }

};

const updatePayment = async (req, res, next) => {

    const {
        aServiceID,
        anAmount
        } = req.body;
    
    const {
        anID
    } = req.params;

    try {

        const query = await pool.query("UPDATE payment SET id_service = $1, amount = $2 WHERE payment_id = $3 RETURNING *", [aServiceID, anAmount, anID]);

        if (query.rows.length === 0) return res.status(404).json({
            message: 'Payment not found'
        })

        res.json(query.rows[0]);

    } catch (error) {
        
        next(error);

    }

};

const deletePayment = async (req, res, next) => {

    const {
        anID
    } = req.params;

    try {

        const query = await pool.query("DELETE FROM payment WHERE payment_id = $1 RETURNING *", [anID]);

        if (query.rowCount === 0) return res.status(404).json({
            message: 'Payment not found'
        })

        console.log("Payment deleted: ", query.rows[0]);
        res.sendStatus(204);

    } catch (error) {
        
        next(error);
        
    }

};

module.exports = {
    createPayment,
    getAllPayments,
    getPayment,
    updatePayment,
    deletePayment
}