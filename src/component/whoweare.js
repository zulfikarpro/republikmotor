import React, { Component } from 'react';

const WhoWeAre = () => {
  const title = 'Who We Are',
    description1 =
      'Republik Motor is a subsidiary company of Republikorp which engages in the field of automotive technology,design, research, and development.',
    description2 =
      'We take pride in our cooperation with international \n partners and our own indigenous automotive design specifically made for Indonesian market.';
  return (
    <div id="" className="fix">
      <div className="">
        <div id="whoweare" className="about-area">
          <div className="about-wrapper">
            <div className="container my-auto" style={{ maxWidth: '90%' }}>
              <div className="row h-100">
                <div className="col-lg-6"></div>
                <div className="col-lg-4 align-items-center justify-content-center">
                  <div className="content">
                    <div className="">
                      <h2 className="title">Who We Are</h2>
                      <div />
                      <h4 className="description text-light text-justify">
                        Republik Motor is a subsidiary company of Republikorp
                        which engages in the field of automotive technology,
                        design, research, and development.
                      </h4>
                      <h4 className=" description text-light text-justify">
                        We take pride in our cooperation with international
                        partners and our own indigenous automotive design
                        specifically made for Indonesian market.
                      </h4>
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-5 my-auto h-100 bg-dark">
                  <div
                    className="about-inner"
                  >
                    <div className="section-title">
                      <h3 className="title">Who We Are</h3>
                      <div />
                      <h4 className="description text-light text-justify">
                        Republik Motor is a subsidiary company of Republikorp
                        <br /> which engages in the field of automotive
                        technology,
                        <br />
                        design, research, and development.
                      </h4>
                      <h4 className=" description text-light text-justify">
                        We take pride in our cooperation with international
                        <br />
                        partners and our own indigenous automotive design
                        <br />
                        specifically made for Indonesian market.
                      </h4>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
