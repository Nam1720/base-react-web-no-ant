import { useEffect, useState } from 'react';
import './_inputRangeCustom.scss';
const InputRangeCustom = () => {
  const [dataRange, setDataRange] = useState(10);
  const [leftRange, setLeftRange] = useState(0);
  const maxRange = 36;
  const minRange = 0;
  const getValue = (evt: any) => {
    console.log('vvv: ', Number(evt.target.value));
    const valueRange = (Number(evt.target.value) / maxRange) * 100;
    setDataRange(Number(evt.target.value));
    setLeftRange(valueRange);
  };

  useEffect(() => {
    const valueRange = (dataRange / maxRange) * 100;
    setLeftRange(valueRange);
  }, []);

  return (
    <div className="range-custom">
      <div className="range-slide position-rel">
        <div className="range-slide__rail position-abs full-width border-rd-20 bg-color-range" />
        <div className="range-slide__track position-abs bg-color-primary" style={{ width: `${leftRange}%` }} />
        <div className="range-slide__handle position-abs bg-color-primary bottom-0" style={{ left: `${leftRange}%` }}>
          <div className="handle position-abs border-rd-50">
            <div className="icon-handle display-flex-center justify-content-center border-rd-50">
              <div className="point bg-color-primary border-rd-50" />
            </div>
          </div>
          <div className="data-month position-abs display-flex font-size-12">
            <span className="font-weight-7">{dataRange}</span> months
          </div>
        </div>
        <input
          type="range"
          className="position-abs full-width opacity-0 bottom-0"
          min={minRange}
          max={maxRange}
          value={dataRange}
          onChange={getValue}
        />
      </div>
    </div>
  );
};

export default InputRangeCustom;
