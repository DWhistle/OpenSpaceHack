import service from './service'
import { getApiUrl } from '../utils/getApiURL'

const ASSIGN_REWARD__ENDPOINT = 'admin/reward';
const BUG_STATUS__ENDPOINT = 'admin/status';

export default {
    assignReward: async (data) => {
        const res = await service.post(getApiUrl(ASSIGN_REWARD__ENDPOINT), data);
        return res.data;
    },
    changeBugStatus: async (data) => {
        const res = await service.post(getApiUrl(BUG_STATUS__ENDPOINT), data);
        return res.data;
    }
}
