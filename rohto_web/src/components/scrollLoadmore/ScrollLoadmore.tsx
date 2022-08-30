import React, { useEffect, useRef } from 'react';
import { ParamsDefault } from 'store/common/interface';
interface ScrollLoadmoreProps {
  params?: ParamsDefault;
  changeParams: (params: ParamsDefault) => void;
}

const ScrollLoadmore: React.FC<ScrollLoadmoreProps> = ({ params, changeParams, children }) => {
  const prevRatio = 0;
  const elmEndItem = useRef(null);
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // console.log(entry.intersectionRatio);
      // console.log('entry.intersectionRatio: ', entry.intersectionRatio, prevRatio)
      if (entry.intersectionRatio > prevRatio) {
        // console.log('AAAAA', params);
        changeParams({ ...params });
        // console.log('scroll: ', params.pageIndex, totalPage, entry, options, totalRecord);
        // let pageContinute = params.pageIndex + 1;
        // // setTimeout(() => {
        // if (totalPage > params.pageIndex) {
        // changeParams({ ...params, pageIndex: pageContinute });
        // }
        // totalPage > params.pageIndex && changeParams({ ...params, pageIndex: pageContinute })
        // }, 1000)
      }
    }, options);
    if (elmEndItem.current) {
      observer.observe(elmEndItem.current);
    }
  }, [elmEndItem]);
  return (
    <div className="scroll-loadmore position-rel">
      {children}
      <div id="end_data" ref={elmEndItem} />
    </div>
  );
};

export default ScrollLoadmore;
