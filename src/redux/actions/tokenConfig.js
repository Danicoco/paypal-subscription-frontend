export const tokenConfig = getState => {
    //request to backend
    const token = getState().auth.token;

    //add token to headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    //if token is avaliable, add to headers
    if(token) {
        config.headers['x-auth-token'] = token;
        return config;
    }

    return config;
} 