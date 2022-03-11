import api from './api';
import { ResponseListAnnouncement, ResponseDetailsAnnouncement } from './types';

const getListItems = async (
  query: string
): Promise<ResponseListAnnouncement> => {
  try {
    const { data } = await api.get('/items', { params: { q: query } });

    return data;
  } catch (error: any) {
    return Promise.reject(error);
  }
};

const getDetailsList = async (
  id: string
): Promise<ResponseDetailsAnnouncement> => {
  try {
    const { data } = await api.get(`/items/${id}`);

    return data;
  } catch (error: any) {
    return Promise.reject(error);
  }
};

export { getListItems, getDetailsList };
