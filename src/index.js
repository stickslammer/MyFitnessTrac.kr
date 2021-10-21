import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { App } from './components';
const { REACT_APP_API_URL } = process.env;

export const callApi = async ({ url, method, token, body }) => {
    try {
        const options = {
            method: method ? method.toUpperCase() : 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        };
        if (token) options.headers['Authorization'] = `Bearer ${token}`;

        const response = await fetch(`${REACT_APP_API_URL}${url}`, options);
        const data = await response.json();
        if (data.error) {
            return ({ error: data.error })
        }
        return data;
    } catch (error) {
        console.error(error);
    }
}