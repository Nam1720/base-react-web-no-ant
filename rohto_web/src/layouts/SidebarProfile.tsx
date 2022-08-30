import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProgressBarCicrle from 'pages/profile/components/ProgressBarCicrle';
import { LIST_MENU_PROFILE } from 'pages/profile/store/constants';
import { ProfileNavModel } from 'pages/profile/model/ProfileModel';
const avatarDefault = require('assets/images/avatar-default.png');

const SidebarProfile = () => {
  const listMenu: ProfileNavModel[] = LIST_MENU_PROFILE;
  const [menuActive, setMenuActive] = useState(listMenu[0].id);
  return (
    <div className="sidebar-profile bg-color-light">
      <h3 className="font-size-18 font-weight-7">My Profile</h3>
      <div className="sidebar-profile__info text-center">
        <img className="border-rd-50" src={avatarDefault} alt="avatar" />
        <h4 className="font-size-16 font-weight-6 mt-5">Kai Doe</h4>
        <p className="font-size-14 mt-5">OTP: 207608</p>
        <ProgressBarCicrle />
      </div>
      <ul className="sidebar-profile__nav margin-0 padding-0 list-style-none">
        {listMenu &&
          listMenu.map((item: ProfileNavModel) => (
            <li key={item.id} className={`position-rel item ${menuActive === item.id && 'active'}`}>
              <Link
                to={item.url}
                className="color-txt-primary display-flex font-weight-4 border-rd-4"
                onClick={() => setMenuActive(item.id)}
              >
                {item?.icon && <i className={item.icon} />}
                <span className="menu-txt font-size-14">{item?.name}</span>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SidebarProfile;
