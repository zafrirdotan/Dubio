import { httpGet } from '../CRUDService';

export const getPageSettings = async () => {
  return await httpGet('/Settings/Page', null, false);
};

export const getTagsSettings = async () => {
  return await httpGet('/Settings/Tags', null, false);
};
