import service from './service'
import { getApiUrl } from '../utils/getApiURL'


const LOGIN__ENDPOINT = 'auth/login';
const REGISTRATION__ENDPOINT = 'auth/register';

export default {
    login: async (data) => {
        const res = await service.post(getApiUrl(LOGIN__ENDPOINT), data);
        return res.data;
    },
    registration: async (data) => {
        const res = await service.put(getApiUrl(REGISTRATION__ENDPOINT), data);
        return res.status === 200;
    }
}
