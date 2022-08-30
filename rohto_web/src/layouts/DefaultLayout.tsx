// import React, { Suspense, useLayoutEffect } from 'react';
import { useAppSelector } from 'hooks/hookStore';
import React, { Suspense } from 'react';
import { useLocation } from 'react-router';
import './styles/_layout.scss';
// import { useNavigate } from 'react-router-dom';
// import { isLogin } from 'utils/jwt';
const Sidebar = React.lazy(() => import('./Sidebar'));
const PermissionContent = React.lazy(() => import('middleware/PermissionContent'));

const loading = () => <div className="animated fadeIn text-center">Loading 1...</div>;

const DefaultLayout = () => {
  const isCloseSidebar = useAppSelector((state: any) => state.common.isCloseSidebar);
  const { pathname } = useLocation();

  return (
    <div
      className={`site-layout display-flex full-width ${isCloseSidebar ? 'site-layout__open' : ''} ${
        pathname.includes('/profile') ? 'side-layout-profile' : ''
      }`}
    >
      <Suspense fallback={loading()}>
        <Sidebar />
      </Suspense>
      <main className="main-layout position-rel effect-transition-fast full-width mt-36 mb-24">
        <Suspense fallback={loading()}>
          <PermissionContent />
        </Suspense>
      </main>
    </div>
  );
};

export default DefaultLayout;
