const express = require('express');
const {
    verifyToken,
    verifyTokenAndAdmin,
    verifyTokenAndAuthorization,
} = require('../middlewares/verifyToken');
const { addPlan, getPlan, getPlans, getPlansByCompanyId } = require('../controllers/planController');

const router = express.Router();

router.post('/', addPlan);
router.get('/', getPlans);
router.get('/getByCompanyId/:companyId', getPlansByCompanyId);
router.get('/:planId', getPlan);

module.exports = router;