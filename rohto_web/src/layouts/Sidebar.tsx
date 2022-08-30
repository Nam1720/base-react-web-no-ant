import React from 'react';
import PermissionRoute from 'middleware/PermissionRoute';
import './styles/_sidebar.scss';
import { collapseSidebar } from 'store/common/commonSlice';
import { useAppDispatch, useAppSelector } from 'hooks/hookStore';
import { Link, useNavigate } from 'react-router-dom';

const logo = require('assets/images/logo.svg');

const Sidebar = () => {
  const isCloseSidebar = useAppSelector((state: any) => state.common.isCloseSidebar);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const toggleLayout = (): void => {
    dispatch(collapseSidebar());
  };

  return (
    <div
      className={`position-rel sidebar display-flex-column bg-color-light cursor-pointer  ${
        !isCloseSidebar ? 'sidebar--close' : ''
      }`}
    >
      <div
        className={
          'sidebar__head full-width display-flex-center logo ' +
          `${!isCloseSidebar ? 'justify-content-center logo-close-sidebar' : ''}`
        }
        onClick={() => navigate('/')}
      >
        <img src={logo} alt="logo" />
      </div>
      <div className="sidebar__body">
        <PermissionRoute />
      </div>
      <div className="sidebar__footer display-flex-center justify-content-between position-rel">
        <div className="user display-flex-center">
          <Link to="/profile" className="color-txt-secondary display-flex-center">
            <img src={logo} alt="User" className="border-rd-50" />
            {isCloseSidebar && <span className="font-size-14">Username</span>}
          </Link>
        </div>
        <button
          className="cursor-pointer collapse-sidebar bg-transparent display-flex border-none-imp"
          onClick={toggleLayout}
        >
          <i className={`color-txt-secondary ${isCloseSidebar ? 'icon icon-arrow-right' : 'icon icon-arrow-left'}`} />
        </button>
        <ul className="list-style-none drop-down position-abs">
          <li className={`font-size-14 color-txt-primary ${!isCloseSidebar && 'text-center'}`}>
            <i className="icon icon-exit" /> {isCloseSidebar && <span className="title">Log out</span>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default React.memo(Sidebar);
