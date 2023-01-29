// CRUD CONTROLLER FOR PERSONS

// USING CONNECTION
const pool = require('../database/connection');

const createPerson = async (req, res, next) => {

    const {
        anIdentification,
        aFirstName,
        aLastName,
        anEmail,
        aPhoneNumber,
        aUtilityBill
        } = req.body;
    
    try {

        const query = await pool.query("INSERT INTO person(identification, first_name, last_name, email, phone_number, utility_bill) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [anIdentification, aFirstName, aLastName, anEmail, aPhoneNumber, aUtilityBill]);

        console.log(query);

        res.send('Person created.');

    } catch (error) {

        next(error);
        
    }

};

const getAllPersons = async (req, res, next) => {

    try {

        const query = await pool.query("SELECT * FROM person");

        console.log(query);

        res.json(query.rows);

    } catch (error) {
        
        next(error);

    }

};

const getPerson = async (req, res, next) => {

    const {
        anID
    } = req.params;

    try {

        const query = await pool.query("SELECT * FROM person WHERE identification = $1", [anID]);

        if (query.rows.length === 0) return res.status(404).json({
            message: 'Person not found'
        })

        res.json(query.rows[0]);

    } catch (error) {
        
        next(error);

    }

};

const updatePerson = async (req, res, next) => {

    const {
        aFirstName,
        aLastName,
        anEmail,
        aPhoneNumber,
        aUtilityBill
        } = req.body;
    
    const {
        anID
    } = req.params;

    try {

        const query = await pool.query("UPDATE person SET first_name = $1, last_name = $2, email = $3, phone_number = $4, utility_bill = $5 WHERE identification = $6 RETURNING *", [aFirstName, aLastName, anEmail, aPhoneNumber, aUtilityBill, anID]);

        if (query.rows.length === 0) return res.status(404).json({
            message: 'Person not found'
        })

        res.json(query.rows[0]);

    } catch (error) {
        
        next(error);

    }

};

const deletePerson = async (req, res, next) => {

    const {
        anID
    } = req.params;

    try {

        const query = await pool.query("DELETE FROM person WHERE identification = $1 RETURNING *", [anID]);

        if (query.rowCount === 0) return res.status(404).json({
            message: 'Person not found'
        })

        console.log("Person deleted: ", query.rows[0]);
        res.sendStatus(204);

    } catch (error) {
        
        next(error);
        
    }

};

module.exports = {
    createPerson,
    getAllPersons,
    getPerson,
    updatePerson,
    deletePerson
}