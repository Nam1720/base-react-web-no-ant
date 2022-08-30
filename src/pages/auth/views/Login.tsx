// import React, { useState, useLayoutEffect } from 'react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
// import { isLogin } from 'utils/jwt';
// import { login } from './../api/index';
import { LoginReq } from './../model/LoginModel';

import { LOGIN_TRADER, LOGIN_INVESTOR } from '../store/Constants';

const imgLogo = require('assets/images/logo.png');

const Login: React.FC = (): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [typeLogin, setTypeLogin] = useState<1 | 2>(LOGIN_TRADER);
  const [showPass, setShowPass] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginReq>();
  const navigate = useNavigate();
  // const authLogged = isLogin();

  // useLayoutEffect(() => {
  //   if (authLogged) {
  //     navigate('/');
  //   }
  // }, []);

  const onSubmitForm: SubmitHandler<LoginReq> = async (values: LoginReq) => {
    setLoading(true);
    console.log('Login form:', values, typeLogin);

    // const logged = await login(values);
    // if (!logged) {
    //   setLoading(false);
    //   return;
    // }
    setTimeout(() => {
      setLoading(false);
      navigate('/');
    }, 5000);
  };

  return (
    <div className="login full-screen display-flex-center justify-content-center position-rel">
      <div className="login__wrap bg-color-light border-rd-4">
        <div className="text-center">
          <img src={imgLogo} alt="Login" />
          <h1 className="mt-24 font-size-32 color-txt-primary font-weight-6">Wellcome Back</h1>
          <p className="color-txt-secondary mt-5">Log in to your Trading account</p>
        </div>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <div className="form-item mb-24">
            <label htmlFor="email">
              <span className="color-txt-primary">Email:</span>
            </label>
            <div className="form-item__input mt-5">
              <input id="email" className="form-control font-txt-normal" {...register('email', { required: true })} />
            </div>
            {errors.email && <span className="form-item__err">Email is required</span>}
          </div>
          <div className="form-item mb-24">
            <label htmlFor="password">
              <span className="color-txt-primary">Password:</span>
            </label>
            <div className="form-item__input form-item__input--icon form-item__input--icon--right mt-5">
              <input
                id="password"
                type={showPass ? 'text' : 'password'}
                className="form-control font-txt-normal"
                {...register('password', { required: true })}
              />
              <a href="javascript:;" onClick={() => setShowPass(!showPass)}>
                <i className={`font-size-12 color-txt-secondary ${showPass ? 'icon-no-eye' : 'icon-eyes'}`} />
              </a>
            </div>
            {errors.password && <span className="form-item__err">Password is required</span>}
          </div>
          <div className="display-flex-center mb-24">
            <input type="checkbox" className="mr-8" />
            Remember me
          </div>
          <button
            type="submit"
            className={`btn btn--large btn--primary mb-24 full-width ${loading && 'cursor-wait'}`}
            disabled={loading}
            onClick={() => setTypeLogin(LOGIN_TRADER)}
          >
            <div className="display-flex-center justify-content-center full-height">
              <span className="font-size-16">Log in as Trader</span>
            </div>
          </button>
          <button
            type="submit"
            className={`btn btn--large btn--primary-outline full-width ${loading && 'cursor-wait'}`}
            disabled={loading}
            onClick={() => setTypeLogin(LOGIN_INVESTOR)}
          >
            <div className="display-flex-center justify-content-center full-height">
              <span className="font-size-16">Log in as Investor</span>
            </div>
          </button>
        </form>
        {/* <div className="login__other">
          <div className="title color-txt-secondary font-size-11 font-weight-6 text-center position-rel">
            OR LOGIN WITH
          </div>
          <ul className="list-media flex-justify-center list-style-none padding-0">
            <li className="item cursor-pointer">
              <img src={iconFb} alt="fb" />
            </li>
            <li className="item cursor-pointer">
              <img src={iconGg} alt="gg" />
            </li>
            <li className="item cursor-pointer">
              <img src={iconTw} alt="tw" />
            </li>
          </ul>
        </div> */}
        <div className="login__forgot flex-justify-between">
          <a href="javascript:;" className="text-uppercase color-primary font-size-11 font-weight-7">
            Forgot password?
          </a>
          <a href="javascript:;" className="text-uppercase color-primary font-size-11 font-weight-7">
            Sign up new account?
          </a>
        </div>
        {/* <div className="login__footer text-center color-grey-text font-size-12">
          <span>Desktop</span>
          <span>Mobile</span>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
