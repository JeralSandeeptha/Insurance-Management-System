const express = require('express');
const { verifyToken, verifyTokenAndAuthorization } = require('../middlewares/verifyToken');
const { registerEmployee, loginEmployee, getEmployeesByCompanyId } = require('../controllers/employeeController');

const router = express.Router();

router.post('/', registerEmployee);
router.post('/login', loginEmployee);
router.get('/getByComanyId/:companyId', getEmployeesByCompanyId);

module.exports = router;