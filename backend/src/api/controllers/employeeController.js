const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const EmployeeSchema = require('../models/Employee');
const logger = require('../../utils/logger');
const SuccessResponse = require('../../utils/SuccessResponse');
const ErrorResponse = require('../../utils/ErrorResponse');

const registerEmployee = async (req, res) => {
    const { email, password, name, companyId } = req.body;
        try {
            const salt = await  bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);

            const newUser = new EmployeeSchema({
                email: email,
                name: name,
                companyId: companyId,
                password: hashPassword,
            });

            const user = await newUser.save();

            logger.info("Employee register query was successful");
            res.status(201).json(
                new SuccessResponse(
                    201,
                    "Employee register query was successful",
                    user
                )
            );
        } catch (error) {
            logger.error("Employee register query was failed");
            logger.error(error.message);
            res.status(500).json(
                new ErrorResponse(
                    500,
                    "Employee register query was failed",
                    error.message
                )
            );
        }         
}

const loginEmployee = async (req, res) => {
    try {
        const admin = await EmployeeSchema.findOne({ email: req.body.email }).exec();
        if (!admin){ 
            logger.error("Email not found"); 
            return res.status(404).json(
                new ErrorResponse(
                    400,
                    "Employee login query was failed",
                    "Email not found"
                )
            );
        }
        const validPassword = await bcrypt.compare(req.body.password, admin.password);
        if (!validPassword){
            return res.status(400).json(
                new ErrorResponse(
                    400,
                    "Employee login query was failed",
                    "Password not found"
                )
            );
        }

        const { password, ...others } = admin._doc;

        const token = jwt.sign({ id: admin._id }, 'privateKey');

        return res.status(200).json(
            new SuccessResponse(
                200,
                "Employee login query was successful",
                {
                    ...others,
                    token
                }
            )
        ); 

    } catch (error) {
        logger.error("Employee login query was internal server error");
        logger.error(error.message);
        return res.status(500).json(
            new ErrorResponse(
                500,
                "Employee login query was internal server error",
                error.message
            )
        );
    }
}

const getEmployee = async (req, res) => {
    try {
        const employee = await EmployeeSchema.findById(req.params.employeeId).populate('companyId').exec();
        return res.status(200).json(
            new SuccessResponse(
                200,
                "Get employee query was successful",
                employee
            ) 
        );
    } catch (error) {
        logger.error("Get employee query was internal server error");
        logger.error(error.message);
        return res.status(500).json(
            new ErrorResponse(
                500,
                "Get employee query was internal server error",
                error.message
            )
        );
    }
}

const getEmployeesByCompanyId = async (req, res) => {
    try {
        const employees = await EmployeeSchema.find({ companyId: req.params.companyId });
        return res.status(200).json(
            new SuccessResponse(
                200,
                "Get all employees by companyId query was successful",
                employees
            ) 
        );
    } catch (error) {
        logger.error("Get all employees by companyId query was internal server error");
        logger.error(error.message);
        return res.status(500).json(
            new ErrorResponse(
                500,
                "Get all employees by companyId query was internal server error",
                error.message
            )
        );
    }
}

module.exports = {
    loginEmployee,
    registerEmployee,
    getEmployeesByCompanyId,
    getEmployee
}