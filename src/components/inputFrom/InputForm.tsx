/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ChangeEvent, useState } from 'react';
import './_inputForm.scss';

interface InputFormProps {
  valueModel?: string;
  placeHolder?: string;
  [name: string]: any;
}

const InputForm: React.FC<InputFormProps> = ({ placeHolder, valueModel }) => {
  const [isEdit, setEdit] = useState(false);
  const [keyword, setKeyword] = useState(valueModel);

  const onChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setKeyword(value);
  };

  const handleSave = () => {
    valueModel = keyword;
    setEdit(false);
  };

  return (
    <>
      <div className="wrap-form display-flex-center color-txt-primary">
        {isEdit && (
          <div className="display-flex-center justify-content-between full-width form-input">
            <input
              type="text"
              className="input-form font-txt-normal font-size-14"
              value={keyword}
              placeholder={placeHolder}
              onChange={onChangeKeyword}
            />
            <div className="display-flex-center action justify-content-end">
              <a href="javascript:;" onClick={() => handleSave()}>
                <i className="font-size-14 icon-save color-primary" />
              </a>
              <a href="javascript:;" className="action-close mg-l-26" onClick={() => setEdit(false)}>
                <i className="font-size-14 icon-close color-txt-secondary" />
              </a>
            </div>
          </div>
        )}
        {!isEdit && (
          <div className="display-flex-center justify-content-between form-preview full-width">
            <div>
              <span className="font-size-14">{valueModel}</span>
            </div>
            <div className="display-flex-center">
              <a href="javascript:;" onClick={() => setEdit(true)}>
                <i className="font-size-14 icon-pen color-txt-secondary" />
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default InputForm;
