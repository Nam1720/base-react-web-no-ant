import React from 'react';

interface TagProps {
  isStatus: number;
}

const Tag: React.FC<TagProps> = ({ isStatus }) => {
  return (
    <>
      <div className="bg-color-border p-4-10 border-rd-20 display-flex-center width-tag justify-content-center">
        {isStatus === 1 && <span className="font-txt-normal font-size-12 color-green">Approved</span>}
        {isStatus === 2 && <span className="font-txt-normal font-size-12 color-yellow">Pending</span>}
        {isStatus === 3 && <span className="font-txt-normal font-size-12 color-red">Rejected</span>}
      </div>
    </>
  );
};

export default Tag;
