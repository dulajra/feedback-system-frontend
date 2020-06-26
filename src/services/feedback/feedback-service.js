// import parse from 'parse-link-header';

const API_HOST = 'http://localhost:8080';
const defaultOptions = {
    mode: 'cors',
};

export const getAllFeedback = async (page = 1, limit = 5) => {
    try {
        const response = await window.fetch(`${API_HOST}/feedback?_page=${page}&_limit=${limit}`, defaultOptions);
        // const link = parse(response.headers.get('Link'));
        const data = await response.json();
        // return Promise.resolve({meta: {link}, data});
        return Promise.resolve(data);
    } catch (error) {
        console.error('Get all feedback failed: ', error);
        return Promise.reject(error);
    }
};

export const saveFeedback = async (feedback) => {
    try {
        const response = await window.fetch(`${API_HOST}/feedback`,
            {
                ...defaultOptions,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(feedback),
            });
        return response.json();
    } catch (error) {
        console.error('Save feedback failed: ', error);
        return Promise.reject(error);
    }
};

export const deleteFeedback = async (id) => {
    try {
        const response = await window.fetch(`${API_HOST}/feedback/${id}`,
            {
                ...defaultOptions,
                method: 'DELETE',
            });
        return response.json();
    } catch (error) {
        console.error('Delete feedback failed: ', error);
        return Promise.reject(error);
    }
};