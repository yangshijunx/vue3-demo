import axios, {
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse
} from "axios";
const config = {
  // 默认地址请求地址，可在 .env 开头文件中修改
  baseURL: import.meta.env.VITE_API_URL as string,
  // 设置超时时间（10s）
  timeout: 10 * 1000
  // 跨域时候允许携带凭证,需后端配合设置具体的域名
  // withCredentials: true
};
const _axios: AxiosInstance = axios.create(config);
// 请求拦截器
_axios.interceptors.request.use((config: AxiosRequestConfig) => {
  // 在请求前做些什么
  return config;
});
// 响应拦截器
_axios.interceptors.response.use((response: AxiosResponse) => {
  // 在这里对返回的数据进行处理
  return response;
});
// 封装axios的get请求
export function get(url: string, params = {}) {
  console.log(url, params, import.meta.env.VITE_API_URL);
  return new Promise((resolve, reject) => {
    _axios
      .get(url, {
        params
      })
      .then((response: AxiosResponse) => {
        resolve(response.data);
      })
      .catch((err: AxiosError) => {
        reject(err);
      });
  });
}
// 封装axios的post请求
export function post(url: string, data = {}) {
  return new Promise((resolve, reject) => {
    _axios
      .post(url, data)
      .then((response: AxiosResponse) => {
        resolve(response.data);
      })
      .catch((err: AxiosError) => {
        reject(err);
      });
  });
}
// 封装axios的put请求
export function put(url: string, data = {}) {
  return new Promise((resolve, reject) => {
    _axios
      .put(url, data)
      .then((response: AxiosResponse) => {
        resolve(response.data);
      })
      .catch((err: AxiosError) => {
        reject(err);
      });
  });
}
