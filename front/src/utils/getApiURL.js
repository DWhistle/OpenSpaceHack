export const getApiUrl = (endpoint) => {
    const baseApiUrl = 'http://localhost:5005/';
    return `${baseApiUrl}${endpoint}`;
};
