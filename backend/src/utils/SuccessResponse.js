class SuccessResponse {
    
    constructor(statusCode, message, data) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
    }

    static defaultSuccess() {
        return new SuccessResponse(200, "Success", "Success");
    }
}

module.exports = SuccessResponse;