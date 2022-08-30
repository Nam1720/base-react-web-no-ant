import React, { useState } from 'react';
import { TabMenuProps, DetaiTabMenuModel } from 'store/common/interface';
import './_tabMenu.scss';

const TabMenu: React.FC<TabMenuProps> = ({ listMenu, acTabMenuActive, typeButton }): JSX.Element => {
  const [tabActive, setTabActive] = useState(0);

  const changeTabActive = (tabIndex: number) => {
    setTabActive(tabIndex);
    acTabMenuActive(tabIndex);
  };

  return (
    <div className="tab-menu">
      {typeButton ? (
        <div className="tab-menu__button">
          {listMenu &&
            listMenu.map((item: any) => (
              <button
                key={item.id}
                className={`btn  ${item.id === tabActive ? 'btn--primary' : 'btn--grey'}`}
                onClick={() => changeTabActive(item.id)}
              >
                {item?.title}
              </button>
            ))}
        </div>
      ) : (
        <ul className="list-style-none display-flex padding-0">
          {listMenu?.map((item: DetaiTabMenuModel) => (
            <li
              key={item.id}
              className={`item color-grey-text font-weight-6 font-txt-normal ${
                tabActive === item.id && 'item--active'
              }`}
            >
              <a
                href="javscript:;"
                className="p-16 display-flex color-grey-text"
                onClick={() => changeTabActive(item.id)}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TabMenu;
