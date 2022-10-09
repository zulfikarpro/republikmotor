import React from 'react';
const Landing = () => {
  return (
    <div
      className="slider-activation"
      style={{
        background: `url(assets/images/bgpage/BG1.jpg)`,
        backgroundSize: '100%',
      }}
    >
      {/* Start Single Slide */}
      <div
        className="slide slide-style-1 slider-fixed--height d-flex align-items-center bg_image bg_image--1"
        data-black-overlay="6"
      >
        <div className="container" style={{ maxWidth: '90%' }}>
          <div className="row align-items-center">
            <div className="col-lg-12 align-items-center">
              <div className="inner">
                <div className="front-title">
                  REPUBLIK
                  <br /> MOTOR
                </div>
                <h5 className="h5">
                  The future of automotive technology, design, research, and
                  <br />
                  development
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
