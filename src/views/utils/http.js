import axios from 'axios';
import { HTTP_CODE } from '../config/dict';
import { ElMessage } from 'element-plus';
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true;
const baseURL =
  process.env.VUE_APP_MOCK === 'true' ? '/mock' : process.env.VUE_APP_BASE_API;
const request = axios.create({
  timeout: 100000,
  baseURL,
});
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => Promise.reject(err)
);
request.interceptors.response.use(
  (response) => {
    // 拦截11001 用户名或密码错误
    if (response.data.code === 11001) {
      ElMessage({
        message: '用户名或密码错误',
        type: 'error',
      });
      return;
    }
    if (response.data.code === 200 || response.data.code === 0) {
      return Promise.resolve(response.data || []);
    } else {
      if (response.status === 200 && response.config.responseType === 'blob') {
        return Promise.resolve(response || []);
      } else {
        let tips =
          response.data.code in HTTP_CODE
            ? HTTP_CODE[response.data.code]
            : '系统错误，请联系管理员';
        if (response.data.code === 20000) {
          tips = response.data.message;
        }
        ElMessage({
          message: tips,
          type: 'error',
        });
        if (response.data.code === 401) {
          window.location.href = '/login';
        }
        return Promise.reject(response.data.msg);
      }
    }
  },
  (error) => {
    console.log(error);
    if (error !== null) {
      ElMessage({
        message: '系统错误，请联系管理员',
        type: 'error',
      });
    }
  }
);
export default request;

export const get = (url, params = {}, config = {}) => {
  return new Promise((resolve, reject) =>
    request({ method: 'get', url, params, ...config }).then(resolve, reject)
  );
};
export const post = (url, data = {}, config = {}) => {
  return new Promise((resolve, reject) =>
    request({ method: 'post', url, data, ...config }).then(resolve, reject)
  );
};

function getFileName(response) {
  const disposition = response.headers['content-disposition'];
  let fileName;
  if (disposition && disposition.indexOf('filename=') > 0) {
    fileName = disposition.substring(
      disposition.indexOf('filename=') + 9,
      disposition.length
    );
    fileName = decodeURI(fileName);
    fileName = fileName.replace(/\\'/g, '');
  } else {
    fileName = Date.parse(new Date()) + '.xlsx';
  }
  return fileName;
}

function setConfig(defaultConfig = {}, config = {}) {
  for (const name in defaultConfig) {
    if (Object.prototype.hasOwnProperty.call(config, name)) {
      if (
        typeof defaultConfig[name] === 'object' &&
        typeof config[name] === 'object'
      ) {
        setConfig(defaultConfig[name], config[name]);
      } else {
        config[name] = defaultConfig[name];
      }
    } else {
      config[name] = defaultConfig[name];
    }
  }
  return config;
}

export function getDownloadExcel(url, params = {}, config = {}) {
  const defaultConfig = { responseType: 'blob' };
  return new Promise((resolve, reject) => {
    request({
      method: 'get',
      url,
      params,
      ...setConfig(defaultConfig, config),
    }).then((response) => {
      const link = document.createElement('a');
      const blob = new Blob([response.data], {
        type: 'application/vnd.ms-excel',
      });
      link.style.display = 'none';
      link.href = URL.createObjectURL(blob);
      const fileName = getFileName(response);
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      resolve(response);
    }, reject);
  });
}
