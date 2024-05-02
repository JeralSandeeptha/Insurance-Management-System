const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const CompanyModel = require('../models/Company');
const logger = require('../../utils/logger');
const SuccessResponse = require('../../utils/SuccessResponse');
const ErrorResponse = require('../../utils/ErrorResponse');

const registerCompany = async (req, res) => {
    const { name, email, contact, address, password } = req.body;
        try {
            const salt = await  bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);

            const newUser = new CompanyModel({
                name: name,
                email: email,
                contact: contact,
                address: address,
                password: hashPassword,
            });

            const user = await newUser.save();

            logger.info("Company register query was successful");
            res.status(201).json(
                new SuccessResponse(
                    201,
                    "Company register query was successful",
                    user
                )
            );
        } catch (error) {
            logger.error("Company register query was failed");
            logger.error(error.message);
            res.status(500).json(
                new ErrorResponse(
                    500,
                    "Company register query was failed",
                    error.message
                )
            );
        }         
}

const loginCompany = async (req, res) => {
    try {
        const admin = await CompanyModel.findOne({ email: req.body.email }).exec();
        if (!admin){ 
            logger.error("Email not found"); 
            return res.status(404).json(
                new ErrorResponse(
                    400,
                    "Company login query was failed",
                    "Email not found"
                )
            );
        }
        const validPassword = await bcrypt.compare(req.body.password, admin.password);
        if (!validPassword){
            return res.status(400).json(
                new ErrorResponse(
                    400,
                    "Company login query was failed",
                    "Password not found"
                )
            );
        }

        const { password, ...others } = admin._doc;

        const token = jwt.sign({ id: admin._id }, 'privateKey');

        return res.status(200).json(
            new SuccessResponse(
                200,
                "Company login query was successful",
                {
                    ...others,
                    token
                }
            )
        ); 

    } catch (error) {
        logger.error("Company login query was internal server error");
        logger.error(error.message);
        return res.status(500).json(
            new ErrorResponse(
                500,
                "Company login query was internal server error",
                error.message
            )
        );
    }
}

const getCompany = async (req, res) => {
    try {
        const admin = await CompanyModel.findById(req.params.companyId);
        if (admin) {
            logger.info("Get company query was successful");
            return res.status(200).json(
                new SuccessResponse(
                    200,
                    "Get company query was successful",
                    admin
                ) 
            );
        }else {
            logger.info("Get company query was failed");
            return new ErrorResponse(
                200,
                "Get company query was faild",
                "Company id not found"
            ) 
        }
    } catch (error) {
        logger.error("Get company query was internal server error");
        logger.error(error.message);
        return res.status(500).json(
            new ErrorResponse(
                500,
                "Get company query was internal server error",
                error.message
            )
        );
    }
}

const getAllCompanies = async (req, res) => {
    try {
        const companies = await CompanyModel.find();
        logger.info("Get companies query was successful");
        return res.status(200).json(
            new SuccessResponse(
                200,
                "Get companies query was successful",
                companies
            ) 
        );
    } catch (error) {
        logger.error("Get companies query was internal server error");
        logger.error(error.message);
        return res.status(500).json(
            new ErrorResponse(
                500,
                "Get companies query was internal server error",
                error.message
            )
        );
    }
}

module.exports = {
    registerCompany,
    loginCompany,
    getCompany,
    getAllCompanies
}