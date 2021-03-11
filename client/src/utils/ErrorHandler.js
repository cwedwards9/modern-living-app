export default function errorHandler(err) {
    let errorResponse = err.response.data;
        if(errorResponse.type === "express-validator") {
            let errMessage = errorResponse.message[0].msg;
            return errMessage;
        } else {
            let errMessage = errorResponse.message;
            return errMessage;
        }
}