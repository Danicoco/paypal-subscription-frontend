import { baseURL } from '../baseInfo';
import axios from 'axios';

const config = {
    headers: {
        "Content-Type": 'application/json',
        'x-auth-token': localStorage.getItem('token')
    }
}

export const registerUser = async(values) => {
    try {
        const response = await axios.post(`${baseURL}/users`, values);
        return response.data.data;
    } catch (error) {
        if(error.response) throw new Error(error.response.data.message);
        if(!error.response) throw new Error("There is an issue with your internet connection");
    }
}

export const getUser = async() => {
    try {
        const response = await axios.get(`${baseURL}/users`, config);
        return response.data.data;
    } catch (error) {
        if(error.response) throw new Error(error.response.data.message);
        if(!error.response) throw new Error("There is an issue with your internet connection");
    }
}

export const subscribeToPlan = async(values) => {
    try {
        const response = await axios.post(`${baseURL}/subscribe/create`, values, config);
        return response.data.data;
    } catch (error) {
        if(error.response) throw new Error(error.response.data.message);
        if(!error.response) throw new Error("There is an issue with your internet connection");
    }
}

export const currentPlan = async() => {
    try {
        const response = await axios.get(`${baseURL}/subscribe/plan`, config);
        return response.data.data;
    } catch (error) {
        if(error.response) throw new Error(error.response.data.message);
        if(!error.response) throw new Error("There is an issue with your internet connection");
    }
}


export const showProduct = async() => {
    try {
        const response = await axios.get(`${baseURL}/users/product`, config);
        return response.data.data;
    } catch (error) {
        if(error.response) throw new Error(error.response.data.message);
        if(!error.response) throw new Error("There is an issue with your internet connection");
    }
}