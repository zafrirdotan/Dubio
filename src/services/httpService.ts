import axios from 'axios';
import { httpMethod } from '../consts/types';

const baseURL =
  'http://dubio-env.eba-p2zxezup.us-east-1.elasticbeanstalk.com/api';
export const httpService = (
  method: httpMethod,
  url: string,
  Request: any,
  includeToken: boolean = true
) => {
  axios({
    method: method,
    url: baseURL + url,
    data: {
      LoginToken: includeToken
        ? {
            Token: '',
          }
        : undefined,
      Request: Request,
    },
  }).then((res) => {
    const persons = res.data;
    console.log('persons:', persons);
  });
};
