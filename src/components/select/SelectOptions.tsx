/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { Nullable } from 'store/common/interface';
import ClickOutside from 'components/clickOutside/ClickOutside';
import InputSearchDebounce from 'components/InputSearchDebounce/InputSearchDebounce';
import ScrollLoadmore from 'components/scrollLoadmore/ScrollLoadmore';
import './_select.scss';

interface ItemData {
  id?: Nullable<number>;
  name?: Nullable<string>;
  [name: string]: any;
}
interface SelectOptionsProps {
  listData?: ItemData[];
  placeholder?: string;
  showAvatar?: Nullable<boolean>;
  nameActive?: Nullable<string>;
  handleSelect: (item: ItemData) => void;
}

const SelectOptions: React.FC<SelectOptionsProps> = ({
  listData,
  showAvatar,
  nameActive,
  handleSelect,
  placeholder,
}) => {
  const [isShowDrop, setShowDrop] = useState(false);
  const [valueActi, setValueActi] = useState(nameActive);

  const fetchDataByKeyword = (value: any) => {
    console.log('vla: ', value);
  };
  const changeParams = (val: any) => {
    console.log('changeParams: ', val);
  };

  const chooseOption = (item: ItemData) => {
    setValueActi(item.name);
    setShowDrop(false);
    handleSelect(item);
  };
  return (
    <>
      <ClickOutside handleClickOutside={() => setShowDrop(false)}>
        <div className="position-rel">
          <InputSearchDebounce
            placeHolder={placeholder}
            focus={() => setShowDrop(true)}
            fetchDataByKeyword={fetchDataByKeyword}
            initValue={valueActi}
          />
          {isShowDrop && (
            <ul className="drop-list margin-0 pd-10 position-abs bg-color-light full-width text-left custom-scroll">
              <div className="scroll-content">
                <ScrollLoadmore params={{ pageIndex: 1 }} changeParams={changeParams}>
                  {listData?.map((item: ItemData) => (
                    <li
                      key={item?.id}
                      className="padding-5 list-style-none cursor-pointer display-flex-center item"
                      onClick={() => chooseOption(item)}
                    >
                      {showAvatar && (
                        <figure className="item__img">
                          <img className="border-rd-50" src={item.avatar} alt="avatar" />
                        </figure>
                      )}
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

export default SelectOptions;
