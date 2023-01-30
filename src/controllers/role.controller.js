// CRUD CONTROLLER FOR ROLES

// USING CONNECTION
const pool = require('../database/connection');

const createRole = async (req, res, next) => {

    const {
        aRoleName,
        aRoleDesc
        } = req.body;
    
    try {

        const query = await pool.query("INSERT INTO role (role_name, role_desc) VALUES ($1, $2) RETURNING *", [aRoleName, aRoleDesc]);

        console.log(query);

        res.send('Role created.');

    } catch (error) {

        next(error);
        
    }

};

const getAllRoles = async (req, res, next) => {

    try {

        const query = await pool.query("SELECT * FROM role");

        console.log(query);

        res.json(query.rows);

    } catch (error) {
        
        next(error);

    }

};

const getRole = async (req, res, next) => {

    const {
        anID
    } = req.params;

    try {

        const query = await pool.query("SELECT * FROM role WHERE role_id = $1", [anID]);

        if (query.rows.length === 0) return res.status(404).json({
            message: 'Role not found'
        })

        res.json(query.rows[0]);

    } catch (error) {
        
        next(error);

    }

};

const updateRole = async (req, res, next) => {

    const {
        aRoleName,
        aRoleDesc
        } = req.body;
    
    const {
        anID
    } = req.params;

    try {

        const query = await pool.query("UPDATE role SET role_name = $1, role_desc = $2 WHERE role_id = $3 RETURNING *", [aRoleName, aRoleDesc, anID]);

        if (query.rows.length === 0) return res.status(404).json({
            message: 'Role not found'
        })

        res.json(query.rows[0]);

    } catch (error) {
        
        next(error);

    }

};

const deleteRole = async (req, res, next) => {

    const {
        anID
    } = req.params;

    try {

        const query = await pool.query("DELETE FROM role WHERE role_id = $1 RETURNING *", [anID]);

        if (query.rowCount === 0) return res.status(404).json({
            message: 'Role not found'
        })

        console.log("Role deleted: ", query.rows[0]);
        res.sendStatus(204);

    } catch (error) {
        
        next(error);
        
    }

};

module.exports = {
    createRole,
    getAllRoles,
    getRole,
    updateRole,
    deleteRole
}