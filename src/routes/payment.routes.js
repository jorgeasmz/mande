// CRUD ROUTES FOR PAYMENTS

const { Router } = require('express');
const {
    createPayment,
    getAllPayments,
    getPayment,
    updatePayment,
    deletePayment
    } = require('../controllers/payment.controller');

const router = Router();

router.post('/payments', createPayment);

router.get('/payments', getAllPayments);

router.get('/payments/:anID', getPayment);

router.put('/payments/:anID', updatePayment);

router.delete('/payments/:anID', deletePayment);

module.exports = router;