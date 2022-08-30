import React, { Suspense } from 'react';
import { useAppSelector } from 'hooks/hookStore';
import './styles/_layout.scss';

const Sidebar = React.lazy(() => import('./Sidebar'));
// const PermissionContent = React.lazy(() => import('pages/profile/profile'));
const SidebarProfile = React.lazy(() => import('./SidebarProfile'));

const loading = () => <div className="animated fadeIn text-center">Loading 1...</div>;

const ProfileLayout = () => {
  const isCloseSidebar = useAppSelector((state: any) => state.common.isCloseSidebar);
  // const navigate = useNavigate();
  // const authLogged = isLogin();

  // useLayoutEffect((): void => {
  //   if (!authLogged) {
  //     navigate('/login');
  //   }
  // });

  return (
    <div
      className={`side-layout-profile site-layout display-flex full-width ${isCloseSidebar ? 'site-layout__open' : ''}`}
    >
      <Suspense fallback={loading()}>
        <Sidebar />
      </Suspense>
      <main className="main-layout position-rel effect-transition-fast full-width">
        <Suspense fallback={loading()}>
          <SidebarProfile />
          <div className="main-layout__profile">{/*<PermissionContent />*/}</div>
        </Suspense>
      </main>
    </div>
  );
};

export default ProfileLayout;
