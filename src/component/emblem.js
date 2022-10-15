import React from 'react';
import Slider from 'react-slick';
import { slideEmblem } from '../page-demo/script';

const SlideList = [
  {
    image: `/assets/images/bgpage/emblem/gb1.png`,
  },
  {
    image: `/assets/images/bgpage/emblem/gb2.png`,
  },
  {
    image: `/assets/images/bgpage/emblem/gb3.png`,
  },
  {
    image: `/assets/images/bgpage/emblem/gb4.png`,
  },
  {
    image: `/assets/images/bgpage/emblem/gb5.png`,
  },
  {
    image: `/assets/images/bgpage/emblem/gb6.png`,
  },
  {
    image: `/assets/images/bgpage/emblem/gb7.png`,
  },
  {
    image: `/assets/images/bgpage/emblem/gb8.png`,
  },
  {
    image: `/assets/images/bgpage/emblem/gb9.png`,
  },
  {
    image: `/assets/images/bgpage/emblem/gb10.png`,
  },
];
const Emblem = () => {
  return (
    <div className="sluder-wrapper align-items-center vh-100">
      <div className="aiProducts" style={{ zIndex: 3 }}>
        <div className="container">
          <div className="row justify-content-center pt--100">
            <div className="col-lg-12 row justify-content-center titleWhite">
              <span className="mx-auto" style={{ color: `$theme-color` }}>
                {/* <u style={{}} className="theme-color"> */}
                Emblem Production List
                {/* </u> */}
              </span>
              <div
                style={{
                  width: '60%',
                  height: '2px',
                  backgroundColor: 'red',
                  marginBottom: '3%',
                }}
                className="theme-color"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="slider-activation">
        <Slider
          className="rn-slick-dot slider-style-4 dot-light "
          {...slideEmblem}
        >
          {SlideList.map((value, index) => (
            <div className="mw--100">
              <img
                src={value.image}
                alt={value.image}
                // style={{ margin: '0px' }}
                //   className="slide-style-3 "
              ></img>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Emblem;
