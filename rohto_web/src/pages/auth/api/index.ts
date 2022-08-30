import HttpService from 'utils/http';
import { LoginReq } from './../model/LoginModel';
import { saveToken, saveAuth } from 'utils/jwt';

export const login = async (loginData: LoginReq) => {
  // Fake for FE pass Login:
  // const { email, password } = loginData;
  // if (email === 'admin@admin.com' && password === 'admin') {
  //   const token = 'testtokenloginapp';
  //   await saveToken(token);
  //   return Promise.resolve(token);
  // } else {
  //   return Promise.reject({ code: 401, data: null, message: ['Email/Password invalid'] });
  // }
  const apiEndpoint = 'token/create';
  return HttpService.post(apiEndpoint, loginData)
    .then(async (res: any) => {
      if (!res?.token) {
        return;
      }
      // console.log('res: ', res);

      const token = res?.token;
      const profile = { ...res?.user };
      // console.log('profile: ', profile);

      if (token) await saveToken(token);
      if (profile) await saveAuth(profile);
      // console.log('Repson login', token);
      return res || {};
    })
    .catch(() => {
      return false;
    });
};
