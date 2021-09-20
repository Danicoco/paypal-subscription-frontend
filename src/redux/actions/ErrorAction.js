export const Error = {
    GET_ERROR: "GET_ERROR",
    CLEAR_ERROR: "CLEAR_ERROR"
}

//Return errors
export const returnErrors = (msg, id) => {
    return {
        type: Error.GET_ERROR,
        payload: msg,
        id: id
    };
};

//Clear errors
export const clearErrors = () => {
    return {
        type: Error.CLEAR_ERROR
    };
};