import React from 'react';
import { Link } from 'react-router-dom';
import navigation from 'routes/nav';
// import useRouter from 'hooks/useRouter';
// import { isEmpty } from 'utils/helpers';
// import {getAuth } from 'utils/jwt'
import { NavItem } from './../layouts/models/NavModel';

const rootSubmenuKeys: string[] = [];

const PermissionRoute = () => {
  // const navigate = useNavigate();

  // if (!isEmpty(userRoles)) {
  // } else {
  //   return false;
  // }

  // const [openKeys, setOpenKeys] = useState<string[]>([]);

  // const onOpenChangeMenu = (keys: string[]) => {
  //   const latestOpenKey: string | undefined = keys.find((key: string) => openKeys.indexOf(key) === -1);
  //   if (!latestOpenKey || rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
  //     setOpenKeys(keys);
  //   } else {
  //     setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  //   }
  // };

  const renderMenus = () => {
    if (!navigation) {
      return null;
    }
    return navigation.map((nav: any) => {
      if (nav.section) {
        return renderSectionItem(nav);
      }
      if (!nav.menus && !nav.section) {
        return renderMenuItem(nav);
      }
      return renderSubMenuItem(nav);
    });
  };

  function renderMenuItem(item: NavItem) {
    if (!item.children) {
      return (
        <li key={item.id} className="position-rel item">
          <Link to={item.url} className="color-txt-secondary display-block font-weight-6 border-rd-4">
            {item?.icon && <i className={`icon ${item.icon}`} />}
            <span className="menu-txt font-size-14">{item?.name}</span>
          </Link>
        </li>
      );
    }
    return renderSubMenuItem(item);
  }

  function renderSectionItem(item: NavItem) {
    return (
      <li key={item.id} className="font-size-11 font-weight-7 section">
        <span className="section__name display-block">{item?.section}</span>
        {item?.menus && renderSubMenuItem(item)}
      </li>
    );
  }

  function renderSubMenuItem(item: NavItem) {
    rootSubmenuKeys.push(`sub${item.id}`);
    return (
      <ul key={`sub${item.id}`} title={item.name} className="margin-0 padding-0 section__menu">
        {item?.menus &&
          item.menus.map((nav: NavItem) => {
            return renderMenuItem(nav);
          })}
      </ul>
    );
  }

  return <ul className="sidebar__menus margin-0 padding-0 menu-app">{renderMenus()}</ul>;
};

export default React.memo(PermissionRoute);
