import './slider.css';
import React, { useEffect, useRef, useState } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
type SliderProps = {
  children: JSX.Element[];
};
const Slider = ({ children }: SliderProps) => {
  const slider = useRef<HTMLUListElement>(null);
  const [position, setPosition] = useState(0);
  const [imageList, setImageList] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (slider && slider.current) {
      slider.current.style.width = children.length * 100 + '%';
    }
    setImageList(
      children &&
        children.map((element, index) => <li key={`li-${index}`}>{element}</li>)
    );
  }, []);

  useEffect(() => {
    moveImage(position);
  }, [position]);

  const nextImage = () => {
    let currentPosition = position;
    if (currentPosition < children.length - 1) {
      currentPosition++;
      setPosition(currentPosition);
    }
  };
  const prevImage = () => {
    let currentPosition = position;
    if (currentPosition > 0) {
      currentPosition--;
      setPosition(currentPosition);
    }
  };

  const moveImage = (positionAct: number) => {
    const all = 100 / (children && children.length);
    if (slider && slider.current)
      slider.current.style.transform =
        'translateX(-' + positionAct * all + '%)';
  };

  return (
    <div className="sliderCont">
      <button className={'prev icon '} onClick={prevImage}>
        <LeftOutlined rev />
      </button>
      <div className={'contentList'}>
        <ul ref={slider}>{imageList}</ul>
      </div>
      <button className={'next icon '} onClick={nextImage}>
        <RightOutlined rev />
      </button>
    </div>
  );
};
Slider.defaultProps = {
  iconArrow: 'icon-cy_icon_arrow_right',
  actualPosition: null,
};
export default Slider;
