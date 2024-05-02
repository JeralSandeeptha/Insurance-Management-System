const express = require('express');
const {
    verifyToken,
    verifyTokenAndAdmin,
    verifyTokenAndAuthorization,
} = require('../middlewares/verifyToken');
const { registerCompany, loginCompany, getCompany, getAllCompanies } = require('../controllers/companyController');

const router = express.Router();

router.post('/', registerCompany);
router.post('/login', loginCompany);
router.get('/:companyId', getCompany);
router.get('/', getAllCompanies);

module.exports = router;