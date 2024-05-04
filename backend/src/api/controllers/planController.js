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

        const plan = await PlanSchema.findById(req.params.planId)
            .populate('rejectedUsers')
            .populate('acceptedUsers')
            .exec();

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

const addRejectedUser = async (req, res) => {
    try {

        const user = await UserSchema.findOne({ nic: req.body.nic });
        console.log(user._id);

        const updatedPlan = await PlanSchema.findByIdAndUpdate(
            req.params.planId,
            { $push: { rejectedUsers: user._id } },
            { new: true },
        );

        logger.info("Add rejected user query was successful");
        return res.status(201).json(
            new SuccessResponse(
                201,
                "Add rejected user query was successful",
                updatedPlan
            )
        );
    } catch (error) {
        logger.error("Add rejected user query was failed");
        logger.error(error.message);
        res.status(500).json(
            new ErrorResponse(
                500,
                "Add rejected user Internal Server Error",
                error.message
            )
        );
    }
}
const addAcceptedUser = async (req, res) => {
    try {

        const user = await UserSchema.findOne({ nic: req.body.nic });
        console.log(user._id);

        const updatedPlan = await PlanSchema.findByIdAndUpdate(
            req.params.planId,
            { $push: { acceptedUsers: user._id } },
            { new: true },
        );

        logger.info("Add accepted user query was successful");
        return res.status(201).json(
            new SuccessResponse(
                201,
                "Add accepted user query was successful",
                updatedPlan
            )
        );
    } catch (error) {
        logger.error("Add accepted user query was failed");
        logger.error(error.message);
        res.status(500).json(
            new ErrorResponse(
                500,
                "Add accepted user Internal Server Error",
                error.message
            )
        );
    }
}
const removeRejectedUser = async (req, res) => {
    try {

        const user = await UserSchema.findOne({ nic: req.body.nic });
        console.log(user._id);

        const updatedPlan = await PlanSchema.findByIdAndUpdate(
            req.params.planId,
            { $pull: { rejectedUsers: user._id } },
            { new: true },
        );

        logger.info("Remove rejected user query was successful");
        return res.status(201).json(
            new SuccessResponse(
                201,
                "Remove rejected user query was successful",
                updatedPlan
            )
        );
    } catch (error) {
        logger.error("Remove rejected user query was failed");
        logger.error(error.message);
        res.status(500).json(
            new ErrorResponse(
                500,
                "Remove rejected user Internal Server Error",
                error.message
            )
        );
    }
}

const removeAcceptedUser = async (req, res) => {
    try {

        const user = await UserSchema.findOne({ nic: req.body.nic });
        console.log(user._id);

        const updatedPlan = await PlanSchema.findByIdAndUpdate(
            req.params.planId,
            { $pull: { acceptedUsers: user._id } },
            { new: true },
        );

        logger.info("Remove accepted user query was successful");
        return res.status(201).json(
            new SuccessResponse(
                201,
                "Remove accepted user query was successful",
                updatedPlan
            )
        );
    } catch (error) {
        logger.error("Remove accepted user query was failed");
        logger.error(error.message);
        res.status(500).json(
            new ErrorResponse(
                500,
                "Remove accepted user Internal Server Error",
                error.message
            )
        );
    }
}

module.exports = {
    addPlan,
    getPlan,
    getPlans,
    getPlansByCompanyId,
    addRejectedUser,
    addAcceptedUser,
    removeRejectedUser,
    removeAcceptedUser
};
