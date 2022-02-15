import axios from 'axios';
import { auth } from 'firebase';

export namespace BackendService {
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
  });

  axiosInstance.interceptors.request.use(async (value) => {
    const token = await auth.currentUser?.getIdToken(true).catch((err) => {
      console.log(err);
    });
    return {
      ...value,
      headers: {
        ...value.headers,
        authtoken: token,
      },
    };
  });

  export const getUser = () => {
    return axiosInstance.request({
      method: 'get',
      url: '/users',
    });
  };

  export const addUser = (facebookaccesstoken: string) => {
    return axiosInstance.request({
      method: 'post',
      url: '/users',
      headers: {
        facebookaccesstoken,
      },
    });
  };
}
