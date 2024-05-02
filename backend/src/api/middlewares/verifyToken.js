const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    const authHeader = req.headers.token

    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, 'privateKey', (error, user) => {
            if (error) {
                return res.status(403).json({
                    message: "Token is not valid"
                });
            }
            req.user = user;
            next();
        });
    }else {
        return res.status(401).json({
            message: "User not authenticated"
        })
    }
}

const verifyTokenAndAuthorization = async (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        }else {
            res.status(403).json({
                message: "User not allowed to do this operation"
            });
        }
    });

}

const verifyTokenAndAdmin = async (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        }else {
            res.status(403).json({
                message: "User not allowed to do this operation. This is an admin task."
            });
        }
    });

} 

module.exports = {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin
}