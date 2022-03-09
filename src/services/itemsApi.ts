import api from './api';
import { ResponseListAnnouncement } from './types';

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

export { getListItems };
