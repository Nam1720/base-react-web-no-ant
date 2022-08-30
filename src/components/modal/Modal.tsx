/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import SetSlotModal from './SetSlotModal';
import SlotWrapper from 'components/slot/SlotWrapper';

interface Props {
  children: React.ReactElement;
  isDisplayCloseBtn: boolean;
  titleHeader: string;
  close: () => void;
}

const Modal: React.FC<Props> = (props: Props) => {
  // const supportsPassive = true;
  // const overlayModalRef = useRef<any>(null);
  // const preventDefault = (e: any) => {
  //   e.preventDefault();
  // };

  // useEffect(() => {
  //   disabledScrolling();
  //   return () => {
  //     enabledScrolling();
  //   };
  // }, []);

  // const disabledScrolling = () => {
  //   window.addEventListener('DOMMouseScroll', preventDefault, false);
  //   window.addEventListener(
  //     'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel',
  //     preventDefault,
  //     supportsPassive ? { passive: false } : false,
  //   );
  //   window.addEventListener('touchmove', preventDefault, supportsPassive ? { passive: false } : false);
  // };

  // const enabledScrolling = () => {
  //   window.removeEventListener('DOMMouseScroll', preventDefault, false);
  //   window.removeEventListener(
  //     'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel',
  //     preventDefault,
  //     supportsPassive ? { passive: false } : false,
  //   );
  //   window.removeEventListener('touchmove', preventDefault, supportsPassive ? { passive: false } : false);
  // };

  return (
    <>
      <SetSlotModal>
        <SlotWrapper slot="header">
          <div className="display-flex-center justify-content-between modal__head">
            <h3>{props.titleHeader}</h3>
            {!props.isDisplayCloseBtn && (
              <button
                type="button"
                className="btn-close color-txt-secondary cursor-pointer bg-transparent border-none"
                aria-label="Close modal"
                onClick={props.close}
              >
                <i className="icon-close font-size-10" />
              </button>
            )}
          </div>
        </SlotWrapper>
        <SlotWrapper slot="body">
          <div className="modal__body">{props.children}</div>
        </SlotWrapper>
      </SetSlotModal>
      <div className="modal__overlay" onClick={props.close} />
    </>
  );
};

export default Modal;
