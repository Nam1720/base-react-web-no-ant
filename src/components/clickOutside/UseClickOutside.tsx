import React, { useEffect } from 'react';
interface UseClickOutsideProps {
  children: any;
  data: any;
  clickOutside: () => void;
}

const UseClickOutside = (props: UseClickOutsideProps) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (props.data.current && !props.data.current.contains(event.target)) {
        props.clickOutside();
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [props.data]);

  return <>{props.children}</>;
};

export default UseClickOutside;
