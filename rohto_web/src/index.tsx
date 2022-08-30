import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './i18n';
import { rootStore } from './store';
import { Provider } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
import CatchError from './components/catchError/CatchError';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { BrowserRouter } from 'react-router-dom';
// import { history } from 'utils/history';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={rootStore}>
      {/* <BrowserRouter> */}
      <ErrorBoundary FallbackComponent={CatchError}>
        <App />
        <ToastContainer position="top-right" autoClose={5000} />
      </ErrorBoundary>
      {/* </BrowserRouter> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
