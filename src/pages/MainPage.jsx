import React, { useState, useEffect } from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from 'react-icons/fi';
import Helmet from '../component/common/Helmet';
import TextLoop from 'react-text-loop';
import SliderFive from '../component/slider/SliderFive';
import HeaderThree from '../component/header/HeaderThree';
import FooterTwo from '../component/footer/FooterTwo';
import TabTwo from '../elements/tab/TabTwo';
import ContactThree from '../elements/contact/ContactThree';
import PortfolioList from '../elements/portfolio/PortfolioList';
import ServiceList from '../elements/service/ServiceList';
import BlogContent from '../elements/blog/BlogContent';
import HeaderFive from '../component/header/HeaderFive';
import HeaderSix from '../component/header/HeaderSix';
import SliderFour from '../component/slider/SliderFour';
import Portfolio from '../component/HomeLayout/homeOne/Portfolio';
import Carousel from 'react-bootstrap/Carousel';
import WhoWeAre from '../component/whoweare';
import Whatwedo from '../component/whatwedo';
import Products from '../component/products';
import ProductAi from '../component/productsai';
import MobileSOC from '../component/mobileSoc';
import AntiDrone from '../component/antidrone';

const SlideList = [
  {
    textPosition: 'text-left',
    category: 'Welcome to my World',
    description: '',
    buttonText: '',
    buttonLink: '',
  },
];

const bg1 = '/assets/images/bgpage/pag1.jpg';
const bg2 = '/assets/images/bgpage/pag2.jpg';
const bg3 = '/assets/images/bgpage/pag3.jpg';
const bg4 = '/assets/images/bgpage/pag4.jpg';

const MainPage = () => {
  const title = 'Who We Are',
    description1 =
      'PT. Republik Technology is part of RepubliKorp group that focuses on current technological advancements such as the conception, development and application or installation of IP based equipment and communication device, among others our current development is in the field of Computer Science and Artificial Intelligence.',
    description2 =
      'With the auspices of the Ministry of Defense, Republik Technology is developing Indonesia’s defensive capabilities to face the growing threats of instability in the Asia Pacific Region through developments of military technology advancements. All our procurement strategies are strictly aligned with operational directions from the Indonesian National Armed Forces';
  const PostList = BlogContent.slice(0, 3);
  // const [hashPosition, sethashPosition] = React.useState('');
  // const [yPosition, setYPosition] = React.useState('')
  // React.useEffect(() => {
  //     productImages()
  //     scrollListener()
  // }, [yPosition])
  // const scrollListener = () =>{
  //     window.addEventListener('scroll', (e) => {
  //         setYPosition(window.scrollY)log

  //         console.log(yPosition)
  //       });
  // }
  // scrollListener();

  const [scrollTop, setScrollTop] = useState();
  const [scrolling, setScrolling] = useState();
  const [selectedProduct, setSelectedProduct] = useState(0);
  const products = ['AKM.556 / AKMS.556 MOD 1', 'LUGER 9x19 mm', 'PLATFORMING'];
  const [indexProduct, setIndexProduct] = useState(0);
  const handleProduct = (selectedIndex, e) => {
    setIndexProduct(selectedIndex);
  };

  useEffect(() => {
    const onScroll = (e) => {
      // setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > 3000);
      // console.log(e.target.documentElement.scrollTop)
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // useEffect(() => {
  // setRerender(!rerender);
  // }, [scrolling]);

  // useEffect(() => {
  //     setRerender(!rerender);
  // }, [selectedProduct]);

  const tabsComponent = (wording, index) => {
    return (
      <div
        className="col mb-2"
        onClick={() => {
          setSelectedProduct(index);
        }}
      >
        <button style={{ border: '0px' }}>
          <p className="text-dark font-weight-bold mb-0 font-color">
            {wording}
          </p>
        </button>
        {selectedProduct === index ? (
          <hr class="my-0" style={{ width: '45%', height: '1px' }} />
        ) : (
          ''
        )}
      </div>
    );
  };

  // const productImages = () => {
  //   if (selectedProduct === 0) {
  //     return (
  //       <div className=" row mt-2" key="0">
  //         <div className="mx-auto col-lg-6">
  //           <img
  //             className="w-20 rounded test"
  //             src="/assets/images/products/ak1-2.jpg"
  //             alt="ak"
  //           />
  //         </div>
  //         <div className="mx-auto col-lg-6">
  //           <img
  //             className="w-20 rounded test"
  //             src="/assets/images/products/ak3.jpg"
  //             alt="ak3"
  //           />
  //         </div>
  //       </div>
  //     );
  //   }
  //   if (selectedProduct === 1) {
  //     return (
  //       <div className=" row mt-2" key="1">
  //         <div className="mx-auto col-lg-6">
  //           <img
  //             className="w-20 rounded test"
  //             src="/assets/images/products/luger1-2.jpg"
  //             alt="ak"
  //           />
  //         </div>
  //         <div className="mx-auto col-lg-6">
  //           <img
  //             className="w-20 rounded test"
  //             src="/assets/images/products/luger3.jpg"
  //             alt="ak3"
  //           />
  //         </div>
  //       </div>
  //     );
  //   }
  //   if (selectedProduct === 2) {
  //     return (
  //       <div className=" row mt-2" key="2">
  //         <div className="mx-auto col-lg-6">
  //           <img
  //             className="w-20 rounded test"
  //             src="/assets/images/products/platforming1-2.jpg"
  //             alt="ak"
  //           />
  //         </div>
  //         <div className="mx-auto col-lg-6">
  //           <img
  //             className="w-20 rounded test"
  //             src="/assets/images/products/platforming3.jpg"
  //             alt="ak3"
  //           />
  //         </div>
  //       </div>
  //     );
  //   }
  // };

  // const productWording = () => {
  //   return (
  //     <div className="col-lg-6 col-md-12 col-sm-12 col-12 my-auto">
  //       <h6 className="text-justify text-dark">
  //         AK. The 556 is a modernized version of the classic AK design suitable
  //         for the more modern and commonly used 5.56 x 45 mm NATO ammunition. It
  //         works on the principle of the Long piston, so that all residues
  //         resulting from the combustion of gunpowder remain in the piston.
  //       </h6>
  //       <h6 className="text-justify text-dark">
  //         The Mod 1 version is equipped with an aluminum handguard with a Rail
  //         Interface System that allows the installation of various accessories
  //         such as front grips, tactical lights, laser devices and other power
  //         multipliers. Mod 1 can be equipped with various muzzle devices such as
  //         break-compensators or flash hider devices or even silencers.
  //       </h6>
  //     </div>
  //   );
  // };

  return (
    <>
      <div
        className="position-absolute"
        style={{ height: '100vh', width: '100vw', zIndex: -1 }}
      >
        <div className="position-fixed d-inline-block h-100 w-100">
          <div className="row justify-content-center bg-success">
            <video
              className="hidden position-fixed d-inline-block videos"
              playsinline="playsinline"
              autoplay="autoplay"
              muted="muted"
              loop="loop"
              src="/assets/video/videofix2.mp4"
              style={{ zIndex: -1 }}
            />
          </div>
        </div>
      </div>
      <div className="active-dark bg-transparent" style={{ zIndex: 100 }}>
        <Helmet pageTitle="Republik Technology" />

        <HeaderThree
          className="mx-auto"
          homeLink="/"
          logo="symbol-dark"
          color="color-black"
        />

        <div id="home" className="fix">
          <div className="slider-wrapper ">
            <SliderFive />
          </div>
        </div>
        {/* Start Slider Area   */}
        {/* <div id="home" className="fix">
                <div className="slider-wrapper"> */}
        {/* Start Single Slide */}
        {/* {SlideList.map((value , index) => (
                        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25" key={index}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            <h1 className="title">Hi, I’m Jone Doe <br/>
                                            <TextLoop>
                                                <span> JS Developer.</span>
                                                <span> UI/UX Designer.</span>
                                                <span> Content Writter.</span>
                                            </TextLoop>{" "}
                                            </h1>
                                            <h2>based in USA.</h2>
                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                            {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))} */}
        {/* End Single Slide */}
        {/* </div>
            </div> */}
        {/* End Slider Area   */}

        {/* Start About Area */}
        {/* <div id="whoweare"> */}
        {WhoWeAre()}
        {/* </div> */}

        {/* End About Area */}

        {/* Start Service Area  */}
        {/* <div id="service" className="fix">
                <div className="service-area creative-service-wrapper ptb--120 bg_color--5" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                    <h2 className="title">My Awesome Service</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            <div className="col-lg-12">
                                <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
                            </div>
                        </div>
                    </div>
                </div>  
            </div> */}
        {/* End Service Area  */}

        {/* Start Portfolio Area */}

        {/* End Portfolio Area */}

        {Whatwedo()}
        {Products()}
        {ProductAi()}
        {/* <div className="vh-100">
          <div
            className="position-absolute"
            style={{ height: '100vh', width: '100vw', zIndex: 3 }}
          >
            <div className="container">
              <div className="row justify-content-center pt--100">
                <div className="col-lg-12 row justify-content-center title">
                  <span className="mx-auto">ARTIFICIAL INTELLIGENCE</span>
                </div>
                <div className="col-lg-12 row justify-content-center subtitle">
                  SURVEILLANCE, CYBER, AND MULTI-INTELLIGENCE{' '}
                </div>
              </div>
            </div>
          </div>
          <div>
          <Carousel showArrows={true}>
            <div>
              <img src="assets/images/bgpage/BGAI.jpg" />
              <p>test</p>
            </div>
            <div>
              <img src="assets/images/bgpage/BGAI2.jpg" />
            </div>
            <div>
              <img src="assets/images/bgpage/BGAI3.jpg" />
            </div>
            <div>
              <img src="assets/images/bgpage/BGAI4.jpg" />
            </div>
          </Carousel>
          </div>
        </div> */}
        {MobileSOC()}
        {AntiDrone()}
        <div className="groupComp">
          <div className="row justify-content-around">
            <div className="col-lg-5 col-sm-12 row justify-content-center">
              <h2 className="text my-auto">Part of Republikorp</h2>
            </div>
            <div className="col-lg-7 col-sm-12 row justify-content-center">
              <img
                className="thumbnail bg-transparent mx-auto"
                src="/assets/images/logo/republikorp.png"
                alt="republikorp"
                style={{ maxWidth: '60%' }}
              />
            </div>
          </div>
        </div>
        <div
          className="fix"
          style={
            {
              // background: `url(/assets/images/workshop/bg_workshop3.jpg)`,
            }
          }
        >
          <div
            id="partner"
            className="rn-blog-area ptb--100"
            style={{
              background: `url(assets/images/bgpage/bgpartner.png)`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="container">
              <div className="row align-items-end">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12 mx-auto">
                  <h1 className="text-light text-center">PARTNERS</h1>
                  {/* <hr class="mb-3 mx-auto col-lg-4" /> */}
                </div>
              </div>
              <div className="row pb--120 mb--100">
                <div className="d-flex col-lg-4 col-sm-12 mt--100 align-items-center justify-content-center">
                  <img
                    className="w--10 rounded my-auto "
                    src="/assets/images/partners/CSG.png"
                    alt="csg"
                    style={{ width: '40vw' }}
                  />
                </div>
                <div className="d-flex col-lg-4 col-sm-12 mt--100 align-items-center justify-content-center">
                  <img
                    className="inline-block rounded my-auto thumbnail"
                    src="/assets/images/partners/ex-army-02.png"
                    alt="ea"
                    style={{ width: '50vw' }}
                  />
                </div>
                <div className="d-flex col-lg-4 col-sm-12 mt--100 align-items-center justify-content-center">
                  <img
                    className="w--20 rounded"
                    src="/assets/images/partners/excaliburw.png"
                    alt="ei"
                    style={{ width: '50vw' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="fix row align-items-end pb--50"
          style={{
            background: `url(assets/images/bgpage/bgcontact.png)`,
            backgroundSize: 'cover',
            height: '50vh',
          }}
        >
          <div id="contactus" className="container">
            <div className="row justify-content-around">
              <div className="col-lg-5 col-sm-12">
                <img
                  src="/assets/images/logo/republikteknologi.png"
                  alt="logo"
                  style={{ maxWidth: '200px' }}
                  className="mb-4"
                />
                <p className="text-light">
                  RPX Building 9Th Floor, Ciputat Raya No. 99,
                  <br />
                  South Jakarta, Indonesia, 12310
                  <br />
                  +62 21 75 918 007
                  <br />
                  info@republikarmamen.com
                </p>
              </div>

              <div
                className="col-lg-7 col-md-12 col-sm-12 col-12 text-light footerText"
                // style={{ fontSize: '10px' }}
              >
                © 2021 Republik Armamen. Trademarks and brands are the property
                of their respective owners.
              </div>
            </div>
          </div>
          {/* <div
            id="contactus"
            className="rn-blog-area pt--200"
            }}
          >
            <div className="container pt--200">
              <div className="row align-items-end justify-content-around pb--40">
                <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                  <img
                    src="/assets/images/logo/republikteknologi.png"
                    alt="logo"
                    style={{ maxWidth: '200px' }}
                    className="mb-4"
                  ></img>
                  <p className="text-light">
                    RPX Building 9Th Floor, Ciputat Raya No. 99,
                    <br />
                    South Jakarta, Indonesia, 12310
                    <br />
                    +62 21 75 918 007
                    <br />
                    info@republikarmamen.com
                  </p>
                </div>

                <div
                  className="col-lg-7 col-md-12 col-sm-12 col-12 text-light text-right "
                  style={{ fontSize: '10px' }}
                >
                  © 2021 Republik Armamen. Trademarks and brands are the
                  property of their respective owners.
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}
      </div>
    </>
  );
};

export default MainPage;
