import { reverse } from 'named-urls/src';
import service from './service';
import { getApiUrl } from '../utils/getApiURL'


const CREATE_BUG__ENDPOINT = 'report';
const ADD_MESSAGE_ENDPOINT = 'message/add';
const REPORT_MESSAGES__ENDPOINT = 'report/:id/messages';
const ALL_REPORTS__ENDPOINT = 'reports/:page';
const MY_REPORTS__ENDPOINT = 'reports/my';

export default {
    createReport: async (data) => {
        const res = await service.post(getApiUrl(CREATE_BUG__ENDPOINT), data);
        return res.data;
    },
    createMessageToReport: async (data) => {
        const res = await service.post(getApiUrl(ADD_MESSAGE_ENDPOINT), data);
        return res.data;
    },
    getReportMessages: async (id) => {
        const res = await service.get(getApiUrl(reverse(REPORT_MESSAGES__ENDPOINT, id)));
        return res.data;
    },
    getAllReports: async (page = 1) => {
        const res = await service.get(getApiUrl(reverse(ALL_REPORTS__ENDPOINT, page)));
        return res.data;
    },
    getMyReportsList: async () => {
        const res = await service.get(getApiUrl(MY_REPORTS__ENDPOINT));
        return res.data;
    },


}
