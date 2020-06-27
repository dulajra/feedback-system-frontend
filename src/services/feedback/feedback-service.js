const SERVICE_URL = process.env.REACT_APP_SERVICE_URL;
const defaultOptions = {
    mode: 'cors',
};

export const getAllFeedback = async (page = 1, size = 5) => {
    try {
        const response = await window.fetch(`${SERVICE_URL}/feedback?page=${page}&size=${size}`, defaultOptions);
        const data = await response.json();
        return Promise.resolve(data);
    } catch (error) {
        console.error('Get all feedback failed: ', error);
        return Promise.reject(error);
    }
};

export const saveFeedback = async (feedback) => {
    try {
        const response = await window.fetch(`${SERVICE_URL}/feedback`,
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
        await window.fetch(`${SERVICE_URL}/feedback/${id}`,
            {
                ...defaultOptions,
                method: 'DELETE',
            });
    } catch (error) {
        console.error('Delete feedback failed: ', error);
        return Promise.reject(error);
    }
};