import React, { useRef } from 'react';
import UseClickOutside from './UseClickOutside';

interface ClickOutsideProps {
  handleClickOutside: () => void;
}
const ClickOutside: React.FC<ClickOutsideProps> = ({ children, handleClickOutside }) => {
  const wrapperRef = useRef(null);
  return (
    <UseClickOutside data={wrapperRef} clickOutside={handleClickOutside}>
      <div ref={wrapperRef}>{children}</div>
    </UseClickOutside>
  );
};

export default ClickOutside;
