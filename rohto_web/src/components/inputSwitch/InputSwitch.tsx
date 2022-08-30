import React from 'react';
import './_inputSwitch.scss';

interface InputSwitchProps {
  checked?: boolean;
}
const InputSwitch: React.FC<InputSwitchProps> = ({ checked }): JSX.Element => {
  return (
    <label className="switch position-rel display-inline-block">
      <input type="checkbox" defaultChecked={checked} />
      <span className="slider position-abs cursor-pointer"></span>
    </label>
  );
};
export default InputSwitch;
