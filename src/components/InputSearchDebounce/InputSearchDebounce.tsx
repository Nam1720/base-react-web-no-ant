import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { InputSearchDebounceProps } from './InputSearchDebounceModel';

const InputSearchDebounce: React.FC<InputSearchDebounceProps> = ({
  fetchDataByKeyword,
  placeHolder,
  focus,
  initValue,
}) => {
  const [keyword, setKeyword] = useState('');
  const debounceRef = useRef<any>(null);

  useEffect(() => {
    setKeyword(initValue);
  }, [initValue]);

  const onChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setKeyword(value);

    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      fetchDataByKeyword(value);
    }, 600);
  };

  return (
    <input
      type="text"
      className="form-control font-txt-normal"
      value={keyword}
      placeholder={placeHolder}
      onChange={onChangeKeyword}
      onFocus={focus}
    />
  );
};

export default InputSearchDebounce;
