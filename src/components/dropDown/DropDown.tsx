/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Nullable } from 'store/common/interface';
import ClickOutside from 'components/clickOutside/ClickOutside';
import ScrollLoadmore from 'components/scrollLoadmore/ScrollLoadmore';
import './_dropDown.scss';

const icon_information = require('assets/images/information-square.svg');

interface ItemData {
  id?: Nullable<number>;
  name?: Nullable<string>;
  [name: string]: any;
}

interface DropDownProps {
  listDrop?: ItemData[];
  handleChoose: (item: ItemData) => void;
}

const DropDown: React.FC<DropDownProps> = ({ listDrop, handleChoose }) => {
  const [isShowDrop, setShowDrop] = useState(false);
  const [valueActi, setValueActi] = useState(listDrop && listDrop[0].name);

  const changeParams = (val: any) => {
    console.log('changeParams: ', val);
  };

  const chooseOption = (item: ItemData) => {
    setValueActi(item.name);
    setShowDrop(false);
    handleChoose(item);
  };
  return (
    <>
      <ClickOutside handleClickOutside={() => setShowDrop(false)}>
        <div className="position-rel">
          <div
            className="bg-color-light display-flex-center justify-content-between preview full-width"
            onClick={() => setShowDrop(true)}
          >
            <a href="javascript:;" className="color-txt-secondary">
              <img src={icon_information} alt="icon_information" />
            </a>
            <span className="font-weight-6 font-sf-text-semibold">{valueActi}</span>
            <i className="icon-arrow-down color-txt-secondary font-size-10"></i>
          </div>
          {isShowDrop && (
            <ul className="drop-list margin-0 pd-10 position-abs bg-color-light full-width text-left custom-scroll">
              <div className="scroll-content">
                <ScrollLoadmore params={{ pageIndex: 1 }} changeParams={changeParams}>
                  {listDrop?.map((item: ItemData) => (
                    <li
                      key={item?.id}
                      className="pd-8 list-style-none cursor-pointer display-flex-center item"
                      onClick={() => chooseOption(item)}
                    >
                      <div className="item__content display-flex-center justify-content-between">
                        <p className="item__name font-size-14">{item.name}</p>
                      </div>
                    </li>
                  ))}
                </ScrollLoadmore>
              </div>
            </ul>
          )}
        </div>
      </ClickOutside>
    </>
  );
};

export default DropDown;
