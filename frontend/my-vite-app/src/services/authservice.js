// src/services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const register = async (userData) => {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    return response.data;
};

export const login = async (userData) => {
    const response = await axios.post(`${API_URL}/users/login`, userData);
    return response.data;
};

export const getProfile = async (token) => {
    const response = await axios.get(`${API_URL}/users/profile`, {
        headers: { Authorization: token },
    });
    return response.data;
};

export const fetchJobs = async () => {
    const response = await axios.get(`${API_URL}/jobs`);
    return response.data;
};

export const applyForJob = async (jobId, token) => {
    const response = await axios.post(`${API_URL}/jobs/${jobId}/apply`, {}, {
        headers: { Authorization: token },
    });
    return response.data;
};
