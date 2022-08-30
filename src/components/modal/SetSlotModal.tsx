import * as React from 'react';
import { SlotProvider } from 'components/slot/SlotsProvider';
import './_modal.scss';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const SetSlotModal = (props: Props) => {
  return (
    <div className="modal">
      <div className="modal__content custom-scroll">
        <SlotProvider
          slots={{
            header: {
              className: 'header',
            },
            body: {
              className: 'body',
            },
            footer: {
              className: 'footer',
            },
          }}
        >
          {props.children}
        </SlotProvider>
      </div>
    </div>
  );
};

export default SetSlotModal;
