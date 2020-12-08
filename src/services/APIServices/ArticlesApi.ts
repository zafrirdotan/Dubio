import { httpGet } from '../CRUDService';

export const getArticlesAsync = async () => {
    return await httpGet('/api/Article/0', null, false)
};

// export const getClaimsAsync = async () => {
//     return await httpGet('/api/')
// }