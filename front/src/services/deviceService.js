import service from './service'
import { getApiUrl } from '../utils/getApiURL'

const DEVICE__ENDPOINT = 'tester';

export default {
    getUserDevices: async () => {
        const res = await service.get(getApiUrl(DEVICE__ENDPOINT));
        return res.data;
    },
    addDevice: async  (data) => {
        const res = await service.post(getApiUrl(DEVICE__ENDPOINT), data);
        return res.data;
    }

}
