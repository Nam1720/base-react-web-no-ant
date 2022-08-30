import React, { useContext, useMemo } from 'react';
import { ObjAny } from 'store/common/interface';

interface SlotProps {
  slot?: string;
}

interface SlotProviderProps {
  slots?: ObjAny;
  children: any;
}

const SlotContext = React.createContext(null);

export function useSlotProps<T>(props: T, defaultSlot?: string): T {
  const slot = (props as SlotProps).slot || defaultSlot;
  const { [slot]: slotProps = {} } = useContext(SlotContext) || {};
  return Object.assign(slotProps, props);
}

export function SlotProvider(props: SlotProviderProps) {
  const parentSlots = useContext(SlotContext);
  const { slots = {}, children } = props;

  // Merge props for each slot from parent context and props
  const value = useMemo(
    () =>
      parentSlots &&
      Object.keys(parentSlots)
        .concat(Object.keys(slots))
        .reduce(
          (o, p) => ({
            ...o,
            [p]: Object.assign(parentSlots[p] || {}, slots[p] || {}),
          }),
          {},
        ),
    [parentSlots, slots],
  );

  return <SlotContext.Provider value={value}>{children}</SlotContext.Provider>;
}
