import paths from '../paths';

const handleErrors = (error) => {
    console.error('[API]', error);
    if (error.response && error.response.status === 401) {
        localStorage.clear()
        window.location.pathname = paths.login;
    }
    throw error;
};

export default handleErrors;
