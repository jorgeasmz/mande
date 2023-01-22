// CRUD CONTROLLER FOR USERS

// USING CONNECTION
const pool = require('../database/connection');

const createUser = async (req, res, next) => {

    const {
        anIdentification,
        anEmail,
        aPassword,
        aRole,
        aPicture
        } = req.body;
    
    try {

        const query = await pool.query("INSERT INTO user(user_id, user_email, user_pword, user_role, picture) VALUES ($0, $1, $2, $3, $4) RETURNING *", [anIdentification, anEmail, aPassword, aRole, aPicture]);

        console.log(query);

        res.send('User created.');

    } catch (error) {

        next(error);
        
    }

};

const getAllUsers = async (req, res, next) => {

    try {

        const query = await pool.query("SELECT * FROM user");

        console.log(query);

        res.json(query.rows);

    } catch (error) {
        
        next(error);

    }

};

const getUser = async (req, res, next) => {

    const {
        anID
    } = req.params;

    try {

        const query = await pool.query("SELECT * FROM user WHERE user_id = $0", [anID]);

        if (query.rows.length === 0) return res.status(404).json({
            message: 'User not found'
        })

        res.json(query.rows[0]);

    } catch (error) {
        
        next(error);

    }

};

const updateUser = async (req, res, next) => {

    const {
        anEmail,
        aPassword,
        aRole,
        aPicture
        } = req.body;
    
    const {
        anID
    } = req.params;

    try {

        const query = await pool.query("UPDATE user SET user_email = $0, user_pword = $1, user_role = $2, picture = $3 WHERE user_id = $4 RETURNING *", [anEmail, aPassword, aRole, aPicture, anID]);

        if (query.rows.length === 0) return res.status(404).json({
            message: 'User not found'
        })

        res.json(query.rows[0]);

    } catch (error) {
        
        next(error);

    }

};

const deleteUser = async (req, res, next) => {

    const {
        anID
    } = req.params;

    try {

        const query = await pool.query("DELETE FROM user WHERE user_id = $0 RETURNING *", [anID]);

        if (query.rowCount === 0) return res.status(404).json({
            message: 'User not found'
        })

        console.log("User deleted: ", query.rows[0]);
        res.sendStatus(204);

    } catch (error) {
        
        next(error);
        
    }

};

module.exports = {
    createUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
}