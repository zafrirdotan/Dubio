import { httpPost } from '../CRUDService';

export const login = async (userName: string, password: string) => {
  return await httpPost('/api/User/Login', { userName, password }, false);
};
