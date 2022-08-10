// 网络请求：Axios
import axios from "axios";
import qs from "querystring";

const errorHandle = (status, info) => {
  switch (status) {
    case 400:
      console.log("服务器收到客户端请求提交的表示,但访问的域名未绑定");
      break;
    case 401:
      console.log("未提供认证证书");
      break;
    case 403:
      console.log("禁止访问");
      break;
    case 404:
      console.log("网络请求地址错误");
      break;
    case 500:
      console.log("服务器端程序运行出错");
      break;
    case 503:
      console.log("服务器端临时错误");
      break;
    default:
      console.log(info);
      break;
  }
};

// 创建axios的实例对象
const instance = axios.create({
  timeout: 5000,
});

// 处理并发请求方法
instance.all = axios.all;
instance.spread = axios.spread;

// 全局配置
instance.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

// 请求拦截和相应拦截
instance.interceptors.request.use(
  (config) => {
    if (config.method === "post") {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  (errcr) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) =>
    response.status === 200 ? Promise.resolve(response) : Promise.reject(error),
  (error) => {
    const { response } = error;
    if (response) {
      errorHeadle(response.status, response.data);
      return Promise.reject(response);
    } else {
      console.log("请求被中断");
    }
  }
);

// 提供get和post的请求方式
export function get(url, params) {
  return new Promise((resolve, reject) => {
    instance
      .get(url, {
        params,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

export function post(url, params) {
  return new Promise((resolve, reject) => {
    instance
      .post(url, params)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

export default instance;
