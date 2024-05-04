const express = require('express');
const {
    verifyToken,
    verifyTokenAndAdmin,
    verifyTokenAndAuthorization,
} = require('../middlewares/verifyToken');
const { addPlan, getPlan, getPlans, getPlansByCompanyId, addRejectedUser, addAcceptedUser, removeAcceptedUser, removeRejectedUser, getAcceptedPlansByUserId, getRejectedPlansByUserId } = require('../controllers/planController');

const router = express.Router();

router.post('/', addPlan);
router.get('/', getPlans);
router.get('/getAcceptedPlansByUserId/:userId', getAcceptedPlansByUserId);
router.get('/getRejectedPlansByUserId/:userId', getRejectedPlansByUserId);
router.get('/getByCompanyId/:companyId', getPlansByCompanyId);
router.get('/:planId', getPlan);
router.put('/addRejectedUser/:planId', addRejectedUser);
router.put('/addAcceptedUser/:planId', addAcceptedUser);
router.put('/removeAcceptedUser/:planId', removeAcceptedUser);
router.put('/removeRejectedUser/:planId', removeRejectedUser);

module.exports = router;