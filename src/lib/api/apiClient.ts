import axios, { AxiosError } from 'axios';

// axios.defaults.withCredentials = true;
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// const baseURL = `${process.env.REACT_APP_API_URL}`;

// if (!baseURL) {
//   throw new Error('BASE_URL IS MISSING');
// }

const baseURL = 'https://api.pppper.com';

const apiClient = axios.create({
  baseURL,
  // withCredentials: true,
});

apiClient.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err: AxiosError) => {
    //오류 응답 처리 루틴 설정
    return Promise.reject(err.response);
  }
);

export default apiClient;
