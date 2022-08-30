/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect } from 'react';
import SetSlotConfirmModal from './SetSlotConfirmModal';
import SlotWrapper from 'components/slot/SlotWrapper';

interface ConfirmModalProps {
  children: React.ReactElement;
  isDisplayCloseBtn?: boolean;
  close: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = (props: ConfirmModalProps) => {
  const supportsPassive = true;
  // const overlayModalRef = useRef<any>(null);
  const preventDefault = (e: any) => {
    e.preventDefault();
  };

  useEffect(() => {
    disabledScrolling();
    return () => {
      enabledScrolling();
    };
  }, []);

  const disabledScrolling = () => {
    window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.addEventListener(
      'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel',
      preventDefault,
      supportsPassive ? { passive: false } : false,
    );
    window.addEventListener('touchmove', preventDefault, supportsPassive ? { passive: false } : false);
  };

  const enabledScrolling = () => {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(
      'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel',
      preventDefault,
      supportsPassive ? { passive: false } : false,
    );
    window.removeEventListener('touchmove', preventDefault, supportsPassive ? { passive: false } : false);
  };

  return (
    <>
      <SetSlotConfirmModal>
        <SlotWrapper slot="header">
          <div className="display-flex-center justify-content-end modal-confirm__head">
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
          <div className="modal-confirm__body">{props.children}</div>
        </SlotWrapper>
        <SlotWrapper slot="footer">
          <div className="modal-confirm__actions display-flex-center justify-content-end">
            <button className="btn btn--delete" onClick={props.close}>
              Xóa
            </button>
            <button className="btn btn--dark-outline" onClick={props.close}>
              Hủy
            </button>
          </div>
        </SlotWrapper>
      </SetSlotConfirmModal>
      <div className="modal__overlay" onClick={props.close} />
    </>
  );
};

export default ConfirmModal;
