import * as React from 'react';
import { useSlotProps } from './SlotsProvider';

interface Props {
  slot?: string;
  children: React.ReactElement;
}

const SlotWrapper = (props: Props) => {
  props = useSlotProps(props, 'text');
  const { children, ...otherProps } = props;

  return React.cloneElement(children, {
    ...otherProps,
  });
};

export default SlotWrapper;
