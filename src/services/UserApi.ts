import { httpPost } from './CRUDService';

// POST /api/User/Login
export const login = async (userName: string, password: string) => {
  await httpPost('/api/User/Login', { userName, password }, false);
};
