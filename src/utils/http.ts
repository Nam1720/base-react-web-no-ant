import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { KEY_API_FAIL } from 'store/common/constants';
import { APP_CONFIG } from './env';
import { destroyLogged, getAccessToken, saveAuth } from './jwt';

interface TypeObjKey {
  [key: string]: any;
}

const DEFAULT_HEADERS: TypeObjKey = { 'Content-Type': 'application/json' };

// axios.defaults.credentials = 'include';

class HttpService {
  constructor() {
    // Set Header Auth for all APi
  }

  configRequest(multipart = false, optionsFile: any = {}) {
    let defaultHeaders = DEFAULT_HEADERS;
    // Set header for file
    if (multipart) {
      defaultHeaders = {};
    }
    // console.log(getAccessToken(), 'token config request');
    if (getAccessToken()) {
      defaultHeaders = {
        Authorization: `Bearer ${getAccessToken()}`,
        Accept: 'application/json',
        Cache: 'no-cache',
        common: {
          'X-Requested-With': 'XMLHttpRequest',
        },
        ...defaultHeaders,
      };
    }
    return {
      headers: defaultHeaders,
      ...optionsFile,
    };
  }

  querySearch(params: TypeObjKey = {}): string {
    return Object.keys(params)
      .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
      .join('&');
  }

  get(apiEndpoint: string, params = {}): Promise<any> {
    if (Object.keys(params).length > 0) {
      apiEndpoint = `${apiEndpoint}?${this.querySearch(params)}`;
    }
    return axios.get(APP_CONFIG.apiUrl + apiEndpoint, this.configRequest()).then(
      (res) => {
        if (res.data && res.data.status === KEY_API_FAIL) {
          this.handleError(res.data.errors);
          return;
        }

        return res.data;
      },
      (err) => {
        this.handleError(err);
      },
    );
  }

  post(apiEndpoint: string, payload: any): Promise<any> {
    return axios.post(APP_CONFIG.apiUrl + apiEndpoint, payload, this.configRequest()).then(
      (res) => {
        if (res?.data && res.data.status === KEY_API_FAIL) {
          this.handleError(res.data.errors);
          return;
        }
        return res.data.data;
      },
      (err) => {
        this.handleError(err);
      },
    );
  }

  put(apiEndpoint: string, payload: any): Promise<any> {
    return axios.put(APP_CONFIG.apiUrl + apiEndpoint, payload, this.configRequest()).then(
      (res: any) => {
        if (res.data && res.data.status === KEY_API_FAIL) {
          this.handleError(res.data.errors);
          return;
        }
        return res.data.data;
      },
      (err: any) => {
        this.handleError(err);
      },
    );
  }

  delete(apiEndpoint: string): Promise<any> {
    return axios.delete(APP_CONFIG.apiUrl + apiEndpoint, this.configRequest()).then(
      (res: any) => {
        if (res.data && res.data.status === KEY_API_FAIL) {
          this.handleError(res.data.errors);
          return;
        }
        return res.data.data;
      },
      (err: any) => {
        this.handleError(err);
      },
    );
  }

  deleteMulti(apiEndpoint: string, payload: number[]): Promise<any> {
    return axios.delete(APP_CONFIG.apiUrl + apiEndpoint, { data: { ids: payload }, ...this.configRequest() }).then(
      (res: any) => {
        if (res.data && res.data.status === KEY_API_FAIL) {
          this.handleError(res.data.errors);
          return;
        }
        return res.data.data;
      },
      (err: any) => {
        this.handleError(err);
      },
    );
  }

  async uploadFile(apiEndpoint: string, fileData: any, settingOptions: any, isMap = false): Promise<any> {
    // if (!this.errorAuth) {
    if (!fileData) {
      toast.error('Bạn chưa chọn file để tải lên');
      return;
    }
    let formData = fileData;
    if (isMap) {
      formData = await this.mapFilePayload(fileData);
    }
    if (formData) {
      return axios.post(APP_CONFIG.apiUrl + apiEndpoint, formData, this.configRequest(true, settingOptions)).then(
        (res: any) => {
          if (res.data && res.data.status === KEY_API_FAIL) {
            this.handleError(res.data.errors);
            return;
          }
          return res.data.data;
        },
        (err) => {
          this.handleError(err);
        },
      );
    }
  }

  mapFilePayload(data: any) {
    const formData = new FormData();
    Object.keys(data).map(function (key) {
      formData.append(key, data[key]);
    });
    return formData;
  }

  handleError(err: AxiosError) {
    if (axios.isAxiosError(err) && err?.response) {
      switch (err.response.status) {
        case 401:
          destroyLogged();
          saveAuth(null);
          window.location.replace(`${window.location.hostname}/login`);
          break;
        case 403:
          toast.error('your account has no access permission');
          break;
        case 404:
          toast.error('Url not found');
          break;
        case 500:
          toast.error('invalid data');
        default:
          toast.error('unknown errors occur');
          break;
      }
    } else {
      toast.error('System errors occur');
    }
  }
}

export default new HttpService();
