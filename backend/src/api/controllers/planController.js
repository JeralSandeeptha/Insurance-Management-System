const UserSchema = require('../models/User');
const PlanSchema = require('../models/Plan');
const logger = require('../../utils/logger');
const SuccessResponse = require('../../utils/SuccessResponse');
const ErrorResponse = require('../../utils/ErrorResponse');

const addPlan = async (req, res) => {
    try {
        const { name, description, image, price, companyId } = req.body;

        const newPlan = new PlanSchema({
            image: image,
            description: description,
            name: name,
            price: price,
            companyId: companyId 
        });

        const plan = await newPlan.save();

        logger.info("Create plan query was successful");
        return res.status(201).json(
            new SuccessResponse(
                201,
                "Create plan query was successful",
                plan
            )
        );
    } catch (error) {
        logger.error("Create plan query was failed");
        logger.error(error.message);
        res.status(500).json(
            new ErrorResponse(
                500,
                "Create plan Internal Server Error",
                error.message
            )
        );
    }
}

const getPlan = async (req, res) => {
    try {

        const plan = await PlanSchema.findById(req.params.planId);

        logger.info("Get plan query was successful");
        return res.status(200).json(
            new SuccessResponse(
                200,
                "Get plan query was successful",
                plan
            )
        );
    } catch (error) {
        logger.error("Get plan query was failed");
        logger.error(error.message);
        res.status(500).json(
            new ErrorResponse(
                500,
                "Get plan Internal Server Error",
                error.message
            )
        );
    }
}

const getPlans = async (req, res) => {
    try {

        const plans = await PlanSchema.find();

        logger.info("Get plans query was successful");
        return res.status(200).json(
            new SuccessResponse(
                200,
                "Get plans query was successful",
                plans
            )
        );
    } catch (error) {
        logger.error("Get plans query was failed");
        logger.error(error.message);
        res.status(500).json(
            new ErrorResponse(
                500,
                "Get plans Internal Server Error",
                error.message
            )
        );
    }
}

const getPlansByCompanyId = async (req, res) => {
    try {

        const plans = await PlanSchema.find({ companyId: req.params.companyId });

        logger.info("Get plans by companyId query was successful");
        return res.status(200).json(
            new SuccessResponse(
                200,
                "Get plans by companyId query was successful",
                plans
            )
        );
    } catch (error) {
        logger.error("Get plans by companyId query was failed");
        logger.error(error.message);
        res.status(500).json(
            new ErrorResponse(
                500,
                "Get plans by companyId Internal Server Error",
                error.message
            )
        );
    }
}

module.exports = {
    addPlan,
    getPlan,
    getPlans,
    getPlansByCompanyId
};
