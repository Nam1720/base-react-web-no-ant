import { useScrollbarWidth } from './useScrollbarWidth';
import { useEffect } from 'react';

const useDisableBodyScroll = () => {
  const scrollWidth = useScrollbarWidth();
  const haveScrollBar = document.body.scrollHeight > window.innerHeight;

  useEffect(() => {
    if (haveScrollBar) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollWidth}px`;
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [haveScrollBar, scrollWidth]);
};

export default useDisableBodyScroll;
