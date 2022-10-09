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
import Landing from '../component/landing';
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

  return (
    <>
      <div className="active-dark">
        <Helmet pageTitle="Republik Motor" />

        <HeaderThree
          className="mx-auto"
          homeLink="/"
          logo="symbol-dark"
          color="color-black"
        />
        {Landing()}
        {WhoWeAre()}
        {Whatwedo()}
        {ProductAi()}
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
                <h2 className="text-light text-center">Partners</h2>
              </div>
            </div>
            <div className="row pb--120 mb--100 justify-content-center">
              <div className="d-flex col-lg-4 col-sm-12 mt--100 align-items-center justify-content-center">
                <img
                  className="w--10 rounded my-auto "
                  src="/assets/images/partners/forcemotor.png"
                  alt="csg"
                  style={{ width: '40vw' }}
                />
              </div>
            </div>
          </div>
          {/* <div
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
                    src="/assets/images/logo/republikmotor.png"
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
                  © 2021 Republik Armamen. Trademarks and brands are the
                  property of their respective owners.
                </div>
              </div>
            </div>
          </div>

          <div className="backto-top">
            <ScrollToTop showUnder={160}>
              <FiChevronUp />
            </ScrollToTop>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default MainPage;
