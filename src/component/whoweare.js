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
            <div className="container" style={{ maxWidth: '90%' }}>
              <div className="row h-100">
                <div className="col-lg-6 align-content-end">
                  <div className="thumbnail">
                    {/* <img
                      className="responsive bg-primary"
                      src="/assets/images/whoweare/2 army.jpg"
                      alt="Who We Are Images"
                    /> */}
                  </div>
                </div>
                <div className="col-lg-5 my-auto">
                  <div
                    className="about-inner"
                    // style={{ marginTop: '30%' }}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
