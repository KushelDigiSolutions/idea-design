"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef, useState } from 'react';
import { Inter } from 'next/font/google'
import Footer from './components/Footer';
const inter = Inter({ subsets: ['latin'] })
import Slider from "react-slick";
import Header from './components/Header';

export default function Home() {
  const [val, setVal] = useState({
    firstName1: "",
    lastName1: "",
    email: "",
  });

  const handleChange = (e) => {
    setVal({ ...val, [e.target.name]: e.target.value });
  };

  const [start1,setStrat1] = useState(false);

  const stylePeer1 = {
    display: start1 ? "block" : "none"
  }
  const [start2,setStrat2] = useState(false);

  const stylePeer2 = {
    display: start2 ? "block" : "none"
  }
  const [start3,setStrat3] = useState(false);

  const stylePeer3 = {
    display: start3 ? "block" : "none"
  }

  

  const handleType = (count) => {
   
    console.log(count)
  }

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerMode: true,
  };
  var settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  var setting2 = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };


  const sliderRef = useRef(null);
  const sliderRef2 = useRef(null);


  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  // for second crasoul 
  const scrollLeft2 = () => {
    if (sliderRef2.current) {
      sliderRef2.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };


  const scrollRight2 = () => {
    if (sliderRef2.current) {
      sliderRef2.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };


  const sliderRef3 = useRef(null);
  const sliderRef4 = useRef(null);

  useEffect(() => {
    const slider = sliderRef4.current;
    let scrollAmount = 0;

    const scrollStep = () => {
      scrollAmount += 1; // Change this value to adjust scroll speed
      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0;
        slider.scrollLeft = 0;
      }
      slider.scrollLeft = scrollAmount;
      requestAnimationFrame(scrollStep);
    };

    const cloneElements = () => {
      const children = Array.from(slider.children);
      children.forEach(child => {
        const clone = child.cloneNode(true);
        slider.appendChild(clone);
      });
    };

    cloneElements();
    requestAnimationFrame(scrollStep);
  }, []);

  useEffect(() => {
    const slider = sliderRef3.current;
    let scrollAmount = 0;

    const scrollStep = () => {
      scrollAmount += 1; // Change this value to adjust scroll speed
      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0;
        slider.scrollLeft = 0;
      }
      slider.scrollLeft = scrollAmount;
      requestAnimationFrame(scrollStep);
    };

    const cloneElements = () => {
      const children = Array.from(slider.children);
      children.forEach(child => {
        const clone = child.cloneNode(true);
        slider.appendChild(clone);
      });
    };

    cloneElements();
    requestAnimationFrame(scrollStep);
  }, []);

  return (
    < div className="indexwrap">
      <Header />

      <div id="First_section">

        <div className="seearbbar-containt">
          <div className="serach-bar">

            <div className="location-menu">
              <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 10.8974C8.55 10.8974 9.02083 10.7016 9.4125 10.3099C9.80417 9.91826 10 9.44743 10 8.89743C10 8.34743 9.80417 7.8766 9.4125 7.48493C9.02083 7.09326 8.55 6.89743 8 6.89743C7.45 6.89743 6.97917 7.09326 6.5875 7.48493C6.19583 7.8766 6 8.34743 6 8.89743C6 9.44743 6.19583 9.91826 6.5875 10.3099C6.97917 10.7016 7.45 10.8974 8 10.8974ZM8 18.2474C10.0333 16.3808 11.5417 14.6849 12.525 13.1599C13.5083 11.6349 14 10.2808 14 9.09743C14 7.28076 13.4208 5.79326 12.2625 4.63493C11.1042 3.4766 9.68333 2.89743 8 2.89743C6.31667 2.89743 4.89583 3.4766 3.7375 4.63493C2.57917 5.79326 2 7.28076 2 9.09743C2 10.2808 2.49167 11.6349 3.475 13.1599C4.45833 14.6849 5.96667 16.3808 8 18.2474ZM8 20.8974C5.31667 18.6141 3.3125 16.4933 1.9875 14.5349C0.6625 12.5766 0 10.7641 0 9.09743C0 6.59743 0.804167 4.60576 2.4125 3.12243C4.02083 1.6391 5.88333 0.89743 8 0.89743C10.1167 0.89743 11.9792 1.6391 13.5875 3.12243C15.1958 4.60576 16 6.59743 16 9.09743C16 10.7641 15.3375 12.5766 14.0125 14.5349C12.6875 16.4933 10.6833 18.6141 8 20.8974Z" fill="#0A243F" />
              </svg>

              <input type="text" placeholder="New Delhi" />

              <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 22.8474V20.8474C7.91672 20.6141 6.12922 19.7516 4.63755 18.2599C3.14588 16.7683 2.28338 14.9808 2.05005 12.8974H0.0500488V10.8974H2.05005C2.28338 8.81408 3.14588 7.02659 4.63755 5.53492C6.12922 4.04325 7.91672 3.18075 10 2.94742V0.947418H12V2.94742C14.0834 3.18075 15.8709 4.04325 17.3625 5.53492C18.8542 7.02659 19.7167 8.81408 19.95 10.8974H21.95V12.8974H19.95C19.7167 14.9808 18.8542 16.7683 17.3625 18.2599C15.8709 19.7516 14.0834 20.6141 12 20.8474V22.8474H10ZM11 18.8974C12.9334 18.8974 14.5834 18.2141 15.95 16.8474C17.3167 15.4808 18 13.8308 18 11.8974C18 9.96408 17.3167 8.31409 15.95 6.94742C14.5834 5.58075 12.9334 4.89742 11 4.89742C9.06672 4.89742 7.41672 5.58075 6.05005 6.94742C4.68338 8.31409 4.00005 9.96408 4.00005 11.8974C4.00005 13.8308 4.68338 15.4808 6.05005 16.8474C7.41672 18.2141 9.06672 18.8974 11 18.8974ZM11 15.8974C9.90005 15.8974 8.95838 15.5058 8.17505 14.7224C7.39172 13.9391 7.00005 12.9974 7.00005 11.8974C7.00005 10.7974 7.39172 9.85575 8.17505 9.07242C8.95838 8.28908 9.90005 7.89742 11 7.89742C12.1 7.89742 13.0417 8.28908 13.825 9.07242C14.6084 9.85575 15 10.7974 15 11.8974C15 12.9974 14.6084 13.9391 13.825 14.7224C13.0417 15.5058 12.1 15.8974 11 15.8974ZM11 13.8974C11.55 13.8974 12.0209 13.7016 12.4125 13.3099C12.8042 12.9183 13 12.4474 13 11.8974C13 11.3474 12.8042 10.8766 12.4125 10.4849C12.0209 10.0933 11.55 9.89742 11 9.89742C10.45 9.89742 9.97922 10.0933 9.58755 10.4849C9.19588 10.8766 9.00005 11.3474 9.00005 11.8974C9.00005 12.4474 9.19588 12.9183 9.58755 13.3099C9.97922 13.7016 10.45 13.8974 11 13.8974Z" fill="#909CA8" />
              </svg>
            </div>

            <div className="search-problem">

              <input type="text" placeholder="Search for any help" />

              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_169_117" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
                  <rect y="0.89743" width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_169_117)">
                  <path d="M19.6 21.8974L13.3 15.5974C12.8 15.9974 12.225 16.3141 11.575 16.5474C10.925 16.7808 10.2333 16.8974 9.5 16.8974C7.68333 16.8974 6.14583 16.2683 4.8875 15.0099C3.62917 13.7516 3 12.2141 3 10.3974C3 8.58076 3.62917 7.04326 4.8875 5.78493C6.14583 4.5266 7.68333 3.89743 9.5 3.89743C11.3167 3.89743 12.8542 4.5266 14.1125 5.78493C15.3708 7.04326 16 8.58076 16 10.3974C16 11.1308 15.8833 11.8224 15.65 12.4724C15.4167 13.1224 15.1 13.6974 14.7 14.1974L21 20.4974L19.6 21.8974ZM9.5 14.8974C10.75 14.8974 11.8125 14.4599 12.6875 13.5849C13.5625 12.7099 14 11.6474 14 10.3974C14 9.14743 13.5625 8.08493 12.6875 7.20993C11.8125 6.33493 10.75 5.89743 9.5 5.89743C8.25 5.89743 7.1875 6.33493 6.3125 7.20993C5.4375 8.08493 5 9.14743 5 10.3974C5 11.6474 5.4375 12.7099 6.3125 13.5849C7.1875 14.4599 8.25 14.8974 9.5 14.8974Z" fill="#909CA8" />
                </g>
              </svg>

            </div>

          </div>
        </div>

        <div className="container">
          <div className="row">

            <div className="col-lg-6">
              <h1>Ready to start by engaging <span>expert professionals.</span></h1>
              <p>Book and meet over 12,06+ professionals for solutions in our global community.</p>
            </div>

            <div className="col-lg-6 text-end">
              <div className="section1-slider-image">
                <Slider {...settings}>
                  <div className="slider1-image">
                    <img src="./images/home1slider.png" alt="sld" />
                  </div>
                  <div className="slider1-image">
                    <img src="./images/home1slider.png" alt="sld" />
                  </div>
                  <div className="slider1-image">
                    <img src="./images/home1slider.png" alt="sld" />
                  </div>
                  <div className="slider1-image">
                    <img src="./images/home1slider.png" alt="sld" />
                  </div>
                </Slider>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="second-section">
        <div className="second-sec-container">

          <div className="seconr-card-convert">
            <div className="red-sec2">
              <div className="sect2-image-count">
                <img src="/  ./images/Color Letter Avatar.png" alt="" />
              </div>
              <div className="title-sec2">
                <h2>An open access to the world’s best.</h2>
                <p>From Design to AI, there are thousands of top experts, you can get access for free.</p>
              </div>
            </div>
            <div className="blue-sec2">
              <div className="sect2-image-count">
                <img src="/  ./images/Color Letter Avatar (1).png" alt="" />
              </div>
              <div className="title-sec2">
                <h2>An open access to the world’s best.</h2>
                <p>From Design to AI, there are thousands of top experts, you can get access for free.</p>
              </div>
            </div>
            <div className="green-sec2">
              <div className="sect2-image-count">
                <img src="/  ./images/Color Letter Avatar (2).png" alt="" />
              </div>
              <div className="title-sec2">
                <h2>An open access to the world’s best.</h2>
                <p>From Design to AI, there are thousands of top experts, you can get access for free.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div id="third_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Discover top services</h2>
            </div>
          </div>
          <div className="row row2 text-center center-card">
            <div className="col-lg-2">
              <div className='inner_div'>
                <img src="./images/law1.png" alt="" />
                <p>Advocates</p>
              </div>
            </div>
            <div className="col-lg-2">
              <div className='inner_div'>
                <img src="  ./images/doctor1.png" alt="" />
                <p>Doctor</p>
              </div>
            </div>
            <div className="col-lg-2">
              <div className='inner_div'>
                <img src="  ./images/motivation1.png" alt="" />
                <p>Education</p>
              </div>
            </div>
            <div className="col-lg-2">
              <div className='inner_div'>
                <img src="  ./images/architect1.png" alt="" />
                <p>Architecture</p>
              </div>
            </div>
            <div className="col-lg-2">
              <div className='inner_div'>
                <img src="  ./images/bank-account1.png" alt="" />
                <p>Accountant</p>
              </div>
            </div>
            <div className="col-lg-2">
              <div className='inner_div'>
                <img src="  ./images/dentist1.png" alt="" />
                <p>Dentist</p>
              </div>
            </div>
            <div className="col-lg-2">
              <div className='inner_div'>
                <img src="  ./images/teacher1.png" alt="" />
                <p>Professor</p>
              </div>
            </div>
            <div className="col-lg-2">
              <div className='inner_div'>
                <img src="  ./images/motivation1.png" alt="" />
                <p>Education</p>
              </div>
            </div>
            <div className="col-lg-2">
              <div className='inner_div'>
                <img src="  ./images/electrician1.png" alt="" />
                <p>Electrician</p>
              </div>
            </div>
            <div className="col-lg-2">
              <div className='inner_div'>
                <img src="  ./images/artist1.png" alt="" />
                <p>Artist</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div id="fourth_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 fourth-top-sec">
              <img src="  ./images/fourth.png" alt="" />
            </div>
            <div className="col-lg-6">
              <p>Why ?</p>
              <h1>Ready to start by engaging <span>expert professionals.</span></h1>
              <p>Book and meet over 12,06+ professionals for solutions in our global community.</p>
              <div className="fourth-btn-div">
                <button type="button" className="btn btn-outline-primary btn-fourth">Know more</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="fifth_section">

        <div className="fifth-container">

          <div className="fifth-main-sec">

            <div className="top-fifth-sec">

              <div className="five-heading">
                <h2>Feeds</h2>
              </div>

              <div className="five-right-heading">
                <div className="five-right-btn">
                  <button type="button" className="btn btn-outline-primary btn-fourth">Explore all</button>
                </div>
                <div className="five-right-svg-btn">

                  <div className="five-prevbtn">
                    <svg onClick={scrollLeft} width="42" height="42" viewBox="0 0 42 42" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect width="42" height="42" fill="#F5F5F5" />
                      <g clip-path="url(#clip0_0_1)">
                        <rect width="1440" height="6626" transform="translate(-1214 -2147)" fill="white" />
                        <path
                          d="M24.3205 29.0448L25.5032 27.8621L18.6411 21L25.5032 14.1379L24.3205 12.9552L16.2757 21L24.3205 29.0448Z"
                          fill="#495D71" />
                        <circle cx="21" cy="21" r="20" stroke="#909CA8" stroke-width="2" />
                      </g>
                      <defs>
                        <clipPath id="clip0_0_1">
                          <rect width="1440" height="6626" fill="white"
                            transform="translate(-1214 -2147)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>

                  <div className="five-nextbtn">
                    <svg onClick={scrollRight} width="42" height="42" viewBox="0 0 42 42" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect width="42" height="42" fill="#F5F5F5" />
                      <g clip-path="url(#clip0_0_1)">
                        <rect width="1440" height="6626" transform="translate(-1268 -2147)" fill="white" />
                        <path
                          d="M17.6795 29.0448L16.4968 27.8621L23.3589 21L16.4968 14.1379L17.6795 12.9552L25.7243 21L17.6795 29.0448Z"
                          fill="#495D71" />
                        <circle cx="21" cy="21" r="20" stroke="#909CA8" stroke-width="2" />
                      </g>
                      <defs>
                        <clipPath id="clip0_0_1">
                          <rect width="1440" height="6626" fill="white"
                            transform="translate(-1268 -2147)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>

                </div>
              </div>
            </div>

            <div ref={sliderRef} className="fifth-section-crouser-sec">

              {/* <Slider {...settings1}> */}
              <div className="center-five">
                <div className="boottom-fifth-sec">
                  <div className="bottom-title">
                    <img src="  ./images/feed1.png" alt="" />
                    <div className="text-five-sec">
                      <p>Research articles, case studies, clinical practice updates.</p>
                      <span>2 days ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="center-five">
                <div className="boottom-fifth-sec">
                  <div className="bottom-title">
                    <img src="  ./images/feed2.png" alt="" />
                    <div className="text-five-sec">
                      <p>Research articles, case studies, clinical practice updates.</p>
                      <span>2 days ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="center-five">
                <div className="boottom-fifth-sec">
                  <div className="bottom-title">
                    <img src="  ./images/feed3.png" alt="" />
                    <div className="text-five-sec">
                      <p>Research articles, case studies, clinical practice updates.</p>
                      <span>2 days ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="center-five">
                <div className="boottom-fifth-sec">
                  <div className="bottom-title">
                    <img src="  ./images/feed4.png" alt="" />
                    <div className="text-five-sec">
                      <p>Research articles, case studies, clinical practice updates.</p>
                      <span>2 days ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="center-five">
                <div className="boottom-fifth-sec">
                  <div className="bottom-title">
                    <img src="  ./images/feed1.png" alt="" />
                    <div className="text-five-sec">
                      <p>Research articles, case studies, clinical practice updates.</p>
                      <span>2 days ago</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* </Slider> */}


            </div>

          </div>
        </div>
      </div>

      <div id="sixth_section">
        <div className="container-sixth">
          <div className="sixth-section">
            <h1>Ready to start by engaging <span>expert professionals.</span></h1>
            <p>We want to help you build an epic career with expert mentors.
              From junior to leadership, we are here to grow with you on this journey.</p>
            <div className="button-center-six">
              <button type="button" className="btn btn-outline-primary btn-sixth">Know more</button>
            </div>

          </div>
        </div>
      </div>

      <div id="discover-people-section">
        <div className="discover-container">
          <div className="disconer-main-sec">
            <div className="top-fifth-sec">

              <div className="five-heading">
                <h2>Discover the best professional</h2>
              </div>

              <div className="five-right-heading">
                <div className="five-right-btn">
                  <button type="button" className="btn btn-outline-primary btn-fourth">Explore all</button>
                </div>
                <div className="five-right-svg-btn">
                  <div className="five-right-prevbtn">
                    <svg onClick={scrollLeft2} width="42" height="42" viewBox="0 0 42 42" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect width="42" height="42" fill="#F5F5F5" />
                      <g clip-path="url(#clip0_0_1)">
                        <rect width="1440" height="6626" transform="translate(-1214 -2147)" fill="white" />
                        <path
                          d="M24.3205 29.0448L25.5032 27.8621L18.6411 21L25.5032 14.1379L24.3205 12.9552L16.2757 21L24.3205 29.0448Z"
                          fill="#495D71" />
                        <circle cx="21" cy="21" r="20" stroke="#909CA8" stroke-width="2" />
                      </g>
                      <defs>
                        <clipPath id="clip0_0_1">
                          <rect width="1440" height="6626" fill="white"
                            transform="translate(-1214 -2147)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="five-right-nextbtn">
                    <svg onClick={scrollRight2} width="42" height="42" viewBox="0 0 42 42" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect width="42" height="42" fill="#F5F5F5" />
                      <g clip-path="url(#clip0_0_1)">
                        <rect width="1440" height="6626" transform="translate(-1268 -2147)" fill="white" />
                        <path
                          d="M17.6795 29.0448L16.4968 27.8621L23.3589 21L16.4968 14.1379L17.6795 12.9552L25.7243 21L17.6795 29.0448Z"
                          fill="#495D71" />
                        <circle cx="21" cy="21" r="20" stroke="#909CA8" stroke-width="2" />
                      </g>
                      <defs>
                        <clipPath id="clip0_0_1">
                          <rect width="1440" height="6626" fill="white"
                            transform="translate(-1268 -2147)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

            </div>

            <div ref={sliderRef2} className="descover-slider">

              <div className="salah-container">
                <div className="salah-content-main">
                  <div className="salah-slider-images">
                    <img src="/  ./images/descover.png" alt="" />
                  </div>
                  <div className="salah-all-content">
                    <div className="salah-content-main-head">
                      <h2>Vibha Finaviya CA</h2>
                    </div>
                    <div className="salah-content-flex">
                      <div className="salah-slider-icon">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <mask id="mask0_205_70" maskUnits="userSpaceOnUse"
                            x="2" y="2" width="24" height="24">
                            <rect x="2" y="2" width="24" height="24" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_205_70)">
                            <path
                              d="M6 23C5.45 23 4.97917 22.8042 4.5875 22.4125C4.19583 22.0208 4 21.55 4 21V10C4 9.45 4.19583 8.97917 4.5875 8.5875C4.97917 8.19583 5.45 8 6 8H10V6C10 5.45 10.1958 4.97917 10.5875 4.5875C10.9792 4.19583 11.45 4 12 4H16C16.55 4 17.0208 4.19583 17.4125 4.5875C17.8042 4.97917 18 5.45 18 6V8H22C22.55 8 23.0208 8.19583 23.4125 8.5875C23.8042 8.97917 24 9.45 24 10V21C24 21.55 23.8042 22.0208 23.4125 22.4125C23.0208 22.8042 22.55 23 22 23H6ZM12 8H16V6H12V8ZM8 10H6V21H8V10ZM18 21V10H10V21H18ZM20 10V21H22V10H20Z"
                              fill="#0A243F" />
                          </g>
                        </svg>
                      </div>
                      <div className="salah-slider-para">
                        <p>Research articles, case studies, clinical practice updates.</p>
                        <div className="salah-slider-flex">
                          <div className="salah-slider-star-icon">
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M6.54679 0.972581C6.72623 0.5875 7.27377 0.587499 7.45321 0.972579L9.15407 4.62258C9.22693 4.77895 9.37525 4.88671 9.54647 4.90768L13.5434 5.39738C13.9651 5.44904 14.1343 5.96978 13.8235 6.25944L10.8778 9.00496C10.7516 9.12257 10.6949 9.29693 10.7279 9.46626L11.4973 13.4189C11.5784 13.8359 11.1355 14.1578 10.764 13.9517L7.24252 11.9985C7.09167 11.9148 6.90833 11.9148 6.75748 11.9985L3.23604 13.9517C2.86452 14.1578 2.42156 13.8359 2.50273 13.4189L3.27213 9.46626C3.30509 9.29693 3.24844 9.12257 3.12224 9.00496L0.176477 6.25944C-0.134305 5.96978 0.0348912 5.44904 0.456575 5.39738L4.45353 4.90768C4.62475 4.88671 4.77307 4.77895 4.84593 4.62258L6.54679 0.972581Z"
                                fill="#FFC200" />
                            </svg>
                          </div>
                          <div className="salah-slider-para2">
                            <p>New</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="salah-slider-flex-main">
                      <div className="salah-expirience">
                        <div className="salah-slider-flex-1"><p>Experience</p></div>
                        <div className="salah-slider-flex-2">
                          <p>8 years</p>
                        </div>
                      </div>
                      <div className="salah-reviews">
                        <div className="salah-slider-main-1">
                          <p>(28)</p>
                        </div>
                        <div className="salah-28years">
                          <p>reviews</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="salah-container">
                <div className="salah-content-main">
                  <div className="salah-slider-images">
                    <img src="/  ./images/descover2.png" alt="" />
                  </div>
                  <div className="salah-all-content">
                    <div className="salah-content-main-head">
                      <h2>Vibha Finaviya CA</h2>
                    </div>
                    <div className="salah-content-flex">
                      <div className="salah-slider-icon">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <mask id="mask0_205_70" maskUnits="userSpaceOnUse"
                            x="2" y="2" width="24" height="24">
                            <rect x="2" y="2" width="24" height="24" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_205_70)">
                            <path
                              d="M6 23C5.45 23 4.97917 22.8042 4.5875 22.4125C4.19583 22.0208 4 21.55 4 21V10C4 9.45 4.19583 8.97917 4.5875 8.5875C4.97917 8.19583 5.45 8 6 8H10V6C10 5.45 10.1958 4.97917 10.5875 4.5875C10.9792 4.19583 11.45 4 12 4H16C16.55 4 17.0208 4.19583 17.4125 4.5875C17.8042 4.97917 18 5.45 18 6V8H22C22.55 8 23.0208 8.19583 23.4125 8.5875C23.8042 8.97917 24 9.45 24 10V21C24 21.55 23.8042 22.0208 23.4125 22.4125C23.0208 22.8042 22.55 23 22 23H6ZM12 8H16V6H12V8ZM8 10H6V21H8V10ZM18 21V10H10V21H18ZM20 10V21H22V10H20Z"
                              fill="#0A243F" />
                          </g>
                        </svg>
                      </div>
                      <div className="salah-slider-para">
                        <p>Research articles, case studies, clinical practice updates.</p>
                        <div className="salah-slider-flex">
                          <div className="salah-slider-star-icon">
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M6.54679 0.972581C6.72623 0.5875 7.27377 0.587499 7.45321 0.972579L9.15407 4.62258C9.22693 4.77895 9.37525 4.88671 9.54647 4.90768L13.5434 5.39738C13.9651 5.44904 14.1343 5.96978 13.8235 6.25944L10.8778 9.00496C10.7516 9.12257 10.6949 9.29693 10.7279 9.46626L11.4973 13.4189C11.5784 13.8359 11.1355 14.1578 10.764 13.9517L7.24252 11.9985C7.09167 11.9148 6.90833 11.9148 6.75748 11.9985L3.23604 13.9517C2.86452 14.1578 2.42156 13.8359 2.50273 13.4189L3.27213 9.46626C3.30509 9.29693 3.24844 9.12257 3.12224 9.00496L0.176477 6.25944C-0.134305 5.96978 0.0348912 5.44904 0.456575 5.39738L4.45353 4.90768C4.62475 4.88671 4.77307 4.77895 4.84593 4.62258L6.54679 0.972581Z"
                                fill="#FFC200" />
                            </svg>
                          </div>
                          <div className="salah-slider-para2">
                            <p>New</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="salah-slider-flex-main">
                      <div className="salah-expirience">
                        <div className="salah-slider-flex-1"><p>Experience</p></div>
                        <div className="salah-slider-flex-2">
                          <p>8 years</p>
                        </div>
                      </div>
                      <div className="salah-reviews">
                        <div className="salah-slider-main-1">
                          <p>(28)</p>
                        </div>
                        <div className="salah-28years">
                          <p>reviews</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="salah-container">
                <div className="salah-content-main">
                  <div className="salah-slider-images">
                    <img src="/  ./images/descover3.png" alt="" />
                  </div>
                  <div className="salah-all-content">
                    <div className="salah-content-main-head">
                      <h2>Vibha Finaviya CA</h2>
                    </div>
                    <div className="salah-content-flex">
                      <div className="salah-slider-icon">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <mask id="mask0_205_70" maskUnits="userSpaceOnUse"
                            x="2" y="2" width="24" height="24">
                            <rect x="2" y="2" width="24" height="24" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_205_70)">
                            <path
                              d="M6 23C5.45 23 4.97917 22.8042 4.5875 22.4125C4.19583 22.0208 4 21.55 4 21V10C4 9.45 4.19583 8.97917 4.5875 8.5875C4.97917 8.19583 5.45 8 6 8H10V6C10 5.45 10.1958 4.97917 10.5875 4.5875C10.9792 4.19583 11.45 4 12 4H16C16.55 4 17.0208 4.19583 17.4125 4.5875C17.8042 4.97917 18 5.45 18 6V8H22C22.55 8 23.0208 8.19583 23.4125 8.5875C23.8042 8.97917 24 9.45 24 10V21C24 21.55 23.8042 22.0208 23.4125 22.4125C23.0208 22.8042 22.55 23 22 23H6ZM12 8H16V6H12V8ZM8 10H6V21H8V10ZM18 21V10H10V21H18ZM20 10V21H22V10H20Z"
                              fill="#0A243F" />
                          </g>
                        </svg>
                      </div>
                      <div className="salah-slider-para">
                        <p>Research articles, case studies, clinical practice updates.</p>
                        <div className="salah-slider-flex">
                          <div className="salah-slider-star-icon">
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M6.54679 0.972581C6.72623 0.5875 7.27377 0.587499 7.45321 0.972579L9.15407 4.62258C9.22693 4.77895 9.37525 4.88671 9.54647 4.90768L13.5434 5.39738C13.9651 5.44904 14.1343 5.96978 13.8235 6.25944L10.8778 9.00496C10.7516 9.12257 10.6949 9.29693 10.7279 9.46626L11.4973 13.4189C11.5784 13.8359 11.1355 14.1578 10.764 13.9517L7.24252 11.9985C7.09167 11.9148 6.90833 11.9148 6.75748 11.9985L3.23604 13.9517C2.86452 14.1578 2.42156 13.8359 2.50273 13.4189L3.27213 9.46626C3.30509 9.29693 3.24844 9.12257 3.12224 9.00496L0.176477 6.25944C-0.134305 5.96978 0.0348912 5.44904 0.456575 5.39738L4.45353 4.90768C4.62475 4.88671 4.77307 4.77895 4.84593 4.62258L6.54679 0.972581Z"
                                fill="#FFC200" />
                            </svg>
                          </div>
                          <div className="salah-slider-para2">
                            <p>New</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="salah-slider-flex-main">
                      <div className="salah-expirience">
                        <div className="salah-slider-flex-1"><p>Experience</p></div>
                        <div className="salah-slider-flex-2">
                          <p>8 years</p>
                        </div>
                      </div>
                      <div className="salah-reviews">
                        <div className="salah-slider-main-1">
                          <p>(28)</p>
                        </div>
                        <div className="salah-28years">
                          <p>reviews</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="salah-container">
                <div className="salah-content-main">
                  <div className="salah-slider-images">
                    <img src="/  ./images/descover.png" alt="" />
                  </div>
                  <div className="salah-all-content">
                    <div className="salah-content-main-head">
                      <h2>Vibha Finaviya CA</h2>
                    </div>
                    <div className="salah-content-flex">
                      <div className="salah-slider-icon">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <mask id="mask0_205_70" maskUnits="userSpaceOnUse"
                            x="2" y="2" width="24" height="24">
                            <rect x="2" y="2" width="24" height="24" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_205_70)">
                            <path
                              d="M6 23C5.45 23 4.97917 22.8042 4.5875 22.4125C4.19583 22.0208 4 21.55 4 21V10C4 9.45 4.19583 8.97917 4.5875 8.5875C4.97917 8.19583 5.45 8 6 8H10V6C10 5.45 10.1958 4.97917 10.5875 4.5875C10.9792 4.19583 11.45 4 12 4H16C16.55 4 17.0208 4.19583 17.4125 4.5875C17.8042 4.97917 18 5.45 18 6V8H22C22.55 8 23.0208 8.19583 23.4125 8.5875C23.8042 8.97917 24 9.45 24 10V21C24 21.55 23.8042 22.0208 23.4125 22.4125C23.0208 22.8042 22.55 23 22 23H6ZM12 8H16V6H12V8ZM8 10H6V21H8V10ZM18 21V10H10V21H18ZM20 10V21H22V10H20Z"
                              fill="#0A243F" />
                          </g>
                        </svg>
                      </div>
                      <div className="salah-slider-para">
                        <p>Research articles, case studies, clinical practice updates.</p>
                        <div className="salah-slider-flex">
                          <div className="salah-slider-star-icon">
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M6.54679 0.972581C6.72623 0.5875 7.27377 0.587499 7.45321 0.972579L9.15407 4.62258C9.22693 4.77895 9.37525 4.88671 9.54647 4.90768L13.5434 5.39738C13.9651 5.44904 14.1343 5.96978 13.8235 6.25944L10.8778 9.00496C10.7516 9.12257 10.6949 9.29693 10.7279 9.46626L11.4973 13.4189C11.5784 13.8359 11.1355 14.1578 10.764 13.9517L7.24252 11.9985C7.09167 11.9148 6.90833 11.9148 6.75748 11.9985L3.23604 13.9517C2.86452 14.1578 2.42156 13.8359 2.50273 13.4189L3.27213 9.46626C3.30509 9.29693 3.24844 9.12257 3.12224 9.00496L0.176477 6.25944C-0.134305 5.96978 0.0348912 5.44904 0.456575 5.39738L4.45353 4.90768C4.62475 4.88671 4.77307 4.77895 4.84593 4.62258L6.54679 0.972581Z"
                                fill="#FFC200" />
                            </svg>
                          </div>
                          <div className="salah-slider-para2">
                            <p>New</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="salah-slider-flex-main">
                      <div className="salah-expirience">
                        <div className="salah-slider-flex-1"><p>Experience</p></div>
                        <div className="salah-slider-flex-2">
                          <p>8 years</p>
                        </div>
                      </div>
                      <div className="salah-reviews">
                        <div className="salah-slider-main-1">
                          <p>(28)</p>
                        </div>
                        <div className="salah-28years">
                          <p>reviews</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="salah-container">
                <div className="salah-content-main">
                  <div className="salah-slider-images">
                    <img src="/  ./images/descover2.png" alt="" />
                  </div>
                  <div className="salah-all-content">
                    <div className="salah-content-main-head">
                      <h2>Vibha Finaviya CA</h2>
                    </div>
                    <div className="salah-content-flex">
                      <div className="salah-slider-icon">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <mask id="mask0_205_70" maskUnits="userSpaceOnUse"
                            x="2" y="2" width="24" height="24">
                            <rect x="2" y="2" width="24" height="24" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_205_70)">
                            <path
                              d="M6 23C5.45 23 4.97917 22.8042 4.5875 22.4125C4.19583 22.0208 4 21.55 4 21V10C4 9.45 4.19583 8.97917 4.5875 8.5875C4.97917 8.19583 5.45 8 6 8H10V6C10 5.45 10.1958 4.97917 10.5875 4.5875C10.9792 4.19583 11.45 4 12 4H16C16.55 4 17.0208 4.19583 17.4125 4.5875C17.8042 4.97917 18 5.45 18 6V8H22C22.55 8 23.0208 8.19583 23.4125 8.5875C23.8042 8.97917 24 9.45 24 10V21C24 21.55 23.8042 22.0208 23.4125 22.4125C23.0208 22.8042 22.55 23 22 23H6ZM12 8H16V6H12V8ZM8 10H6V21H8V10ZM18 21V10H10V21H18ZM20 10V21H22V10H20Z"
                              fill="#0A243F" />
                          </g>
                        </svg>
                      </div>
                      <div className="salah-slider-para">
                        <p>Research articles, case studies, clinical practice updates.</p>
                        <div className="salah-slider-flex">
                          <div className="salah-slider-star-icon">
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M6.54679 0.972581C6.72623 0.5875 7.27377 0.587499 7.45321 0.972579L9.15407 4.62258C9.22693 4.77895 9.37525 4.88671 9.54647 4.90768L13.5434 5.39738C13.9651 5.44904 14.1343 5.96978 13.8235 6.25944L10.8778 9.00496C10.7516 9.12257 10.6949 9.29693 10.7279 9.46626L11.4973 13.4189C11.5784 13.8359 11.1355 14.1578 10.764 13.9517L7.24252 11.9985C7.09167 11.9148 6.90833 11.9148 6.75748 11.9985L3.23604 13.9517C2.86452 14.1578 2.42156 13.8359 2.50273 13.4189L3.27213 9.46626C3.30509 9.29693 3.24844 9.12257 3.12224 9.00496L0.176477 6.25944C-0.134305 5.96978 0.0348912 5.44904 0.456575 5.39738L4.45353 4.90768C4.62475 4.88671 4.77307 4.77895 4.84593 4.62258L6.54679 0.972581Z"
                                fill="#FFC200" />
                            </svg>
                          </div>
                          <div className="salah-slider-para2">
                            <p>New</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="salah-slider-flex-main">
                      <div className="salah-expirience">
                        <div className="salah-slider-flex-1"><p>Experience</p></div>
                        <div className="salah-slider-flex-2">
                          <p>8 years</p>
                        </div>
                      </div>
                      <div className="salah-reviews">
                        <div className="salah-slider-main-1">
                          <p>(28)</p>
                        </div>
                        <div className="salah-28years">
                          <p>reviews</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>



          </div>
        </div>
      </div>

      

      <div id="great-mind">
        <div className="freat-mind-container">
          <div className="great-mind-main">
            <h2> Great mind think there</h2>
            <p>We want to help you build an epic career with expert mentors.</p>
          </div>
          <div className="salah-page-main1">
            <div className="salah-page-main-container">

{/* this is top slider  */}
               <div ref={sliderRef4} className="salahfirsli">

               <div className="salah-card-handler">
                <div className="salah-page-main-content1">
                  <div className="salah-page-main-content-flex">
                    <div className="salah-page-card-image">
                      <img src="  ./images/greatmindlogo.png" alt="" />
                    </div>
                    <div className="salahn-username">
                      <div className="salah-page-card-content">
                        <p>Joshua Sijo</p>
                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M7.28571 13.9583L5.54213 14.8597L4.41718 13.2512L2.45439 13.2391L2.2058 11.2921L0.473453 10.3693L1.15816 8.52973L0.0531211 6.90752L1.51427 5.59689L1.28969 3.64696L3.19255 3.16548L3.89987 1.33453L5.80852 1.79252L7.28571 0.5L8.76291 1.79252L10.6716 1.33453L11.3789 3.16548L13.2817 3.64696L13.0572 5.59689L14.5183 6.90752L13.4133 8.52973L14.098 10.3693L12.3656 11.2921L12.117 13.2391L10.1542 13.2512L9.0293 14.8597L7.28571 13.9583Z"
                            fill="#0B48B6" />
                          <ellipse cx="7.28574" cy="7.78568" rx="5.14286" ry="5.14286"
                            fill="#0B56E4" />
                          <path
                            d="M9.13127 6.04834L9.72582 6.66576L6.45585 9.81462L4.83978 8.19856L5.44587 7.59246L6.46711 8.61362L9.13127 6.04834Z"
                            fill="white" />
                        </svg>
                      </div>
                      <div className="salah-page-card-icon">
                        <p>Joshua Sijo</p>
                      </div>
                    </div>
                  </div>
                  <div className=" salah-page-card-para">
                    <p>
                      Being new to the App world, the
                      process of
                      developing an App seemed overwhelming to my company.
                    </p>
                  </div>
                </div>

              </div>

              <div className="salah-card-handler">
                <div className="salah-page-main-content1">
                  <div className="salah-page-main-content-flex">
                    <div className="salah-page-card-image">
                      <img src="  ./images/greatmindlogo.png" alt="" />
                    </div>
                    <div className="salahn-username">
                      <div className="salah-page-card-content">
                        <p>Joshua Sijo</p>
                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M7.28571 13.9583L5.54213 14.8597L4.41718 13.2512L2.45439 13.2391L2.2058 11.2921L0.473453 10.3693L1.15816 8.52973L0.0531211 6.90752L1.51427 5.59689L1.28969 3.64696L3.19255 3.16548L3.89987 1.33453L5.80852 1.79252L7.28571 0.5L8.76291 1.79252L10.6716 1.33453L11.3789 3.16548L13.2817 3.64696L13.0572 5.59689L14.5183 6.90752L13.4133 8.52973L14.098 10.3693L12.3656 11.2921L12.117 13.2391L10.1542 13.2512L9.0293 14.8597L7.28571 13.9583Z"
                            fill="#0B48B6" />
                          <ellipse cx="7.28574" cy="7.78568" rx="5.14286" ry="5.14286"
                            fill="#0B56E4" />
                          <path
                            d="M9.13127 6.04834L9.72582 6.66576L6.45585 9.81462L4.83978 8.19856L5.44587 7.59246L6.46711 8.61362L9.13127 6.04834Z"
                            fill="white" />
                        </svg>
                      </div>
                      <div className="salah-page-card-icon">
                        <p>Joshua Sijo</p>
                      </div>
                    </div>
                  </div>
                  <div className=" salah-page-card-para">
                    <p>
                      Being new to the App world, the
                      process of
                      developing an App seemed overwhelming to my company.
                    </p>
                  </div>
                </div>

              </div>

              <div className="salah-card-handler">
                <div className="salah-page-main-content1">
                  <div className="salah-page-main-content-flex">
                    <div className="salah-page-card-image">
                      <img src="  ./images/greatmindlogo.png" alt="" />
                    </div>
                    <div className="salahn-username">
                      <div className="salah-page-card-content">
                        <p>Joshua Sijo</p>
                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M7.28571 13.9583L5.54213 14.8597L4.41718 13.2512L2.45439 13.2391L2.2058 11.2921L0.473453 10.3693L1.15816 8.52973L0.0531211 6.90752L1.51427 5.59689L1.28969 3.64696L3.19255 3.16548L3.89987 1.33453L5.80852 1.79252L7.28571 0.5L8.76291 1.79252L10.6716 1.33453L11.3789 3.16548L13.2817 3.64696L13.0572 5.59689L14.5183 6.90752L13.4133 8.52973L14.098 10.3693L12.3656 11.2921L12.117 13.2391L10.1542 13.2512L9.0293 14.8597L7.28571 13.9583Z"
                            fill="#0B48B6" />
                          <ellipse cx="7.28574" cy="7.78568" rx="5.14286" ry="5.14286"
                            fill="#0B56E4" />
                          <path
                            d="M9.13127 6.04834L9.72582 6.66576L6.45585 9.81462L4.83978 8.19856L5.44587 7.59246L6.46711 8.61362L9.13127 6.04834Z"
                            fill="white" />
                        </svg>
                      </div>
                      <div className="salah-page-card-icon">
                        <p>Joshua Sijo</p>
                      </div>
                    </div>
                  </div>
                  <div className=" salah-page-card-para">
                    <p>
                      Being new to the App world, the
                      process of
                      developing an App seemed overwhelming to my company.
                    </p>
                  </div>
                </div>

              </div>

              <div className="salah-card-handler">
                <div className="salah-page-main-content1">
                  <div className="salah-page-main-content-flex">
                    <div className="salah-page-card-image">
                      <img src="  ./images/greatmindlogo.png" alt="" />
                    </div>
                    <div className="salahn-username">
                      <div className="salah-page-card-content">
                        <p>Joshua Sijo</p>
                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M7.28571 13.9583L5.54213 14.8597L4.41718 13.2512L2.45439 13.2391L2.2058 11.2921L0.473453 10.3693L1.15816 8.52973L0.0531211 6.90752L1.51427 5.59689L1.28969 3.64696L3.19255 3.16548L3.89987 1.33453L5.80852 1.79252L7.28571 0.5L8.76291 1.79252L10.6716 1.33453L11.3789 3.16548L13.2817 3.64696L13.0572 5.59689L14.5183 6.90752L13.4133 8.52973L14.098 10.3693L12.3656 11.2921L12.117 13.2391L10.1542 13.2512L9.0293 14.8597L7.28571 13.9583Z"
                            fill="#0B48B6" />
                          <ellipse cx="7.28574" cy="7.78568" rx="5.14286" ry="5.14286"
                            fill="#0B56E4" />
                          <path
                            d="M9.13127 6.04834L9.72582 6.66576L6.45585 9.81462L4.83978 8.19856L5.44587 7.59246L6.46711 8.61362L9.13127 6.04834Z"
                            fill="white" />
                        </svg>
                      </div>
                      <div className="salah-page-card-icon">
                        <p>Joshua Sijo</p>
                      </div>
                    </div>
                  </div>
                  <div className=" salah-page-card-para">
                    <p>
                      Being new to the App world, the
                      process of
                      developing an App seemed overwhelming to my company.
                    </p>
                  </div>
                </div>

              </div>

               </div>

{/* this is botom slider  */}
               <div ref={sliderRef3} className="salahfirsli">

               <div className="salah-card-handler">
                <div className="salah-page-main-content1">
                  <div className="salah-page-main-content-flex">
                    <div className="salah-page-card-image">
                      <img src="  ./images/greatmindlogo.png" alt="" />
                    </div>
                    <div className="salahn-username">
                      <div className="salah-page-card-content">
                        <p>Joshua Sijo</p>
                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M7.28571 13.9583L5.54213 14.8597L4.41718 13.2512L2.45439 13.2391L2.2058 11.2921L0.473453 10.3693L1.15816 8.52973L0.0531211 6.90752L1.51427 5.59689L1.28969 3.64696L3.19255 3.16548L3.89987 1.33453L5.80852 1.79252L7.28571 0.5L8.76291 1.79252L10.6716 1.33453L11.3789 3.16548L13.2817 3.64696L13.0572 5.59689L14.5183 6.90752L13.4133 8.52973L14.098 10.3693L12.3656 11.2921L12.117 13.2391L10.1542 13.2512L9.0293 14.8597L7.28571 13.9583Z"
                            fill="#0B48B6" />
                          <ellipse cx="7.28574" cy="7.78568" rx="5.14286" ry="5.14286"
                            fill="#0B56E4" />
                          <path
                            d="M9.13127 6.04834L9.72582 6.66576L6.45585 9.81462L4.83978 8.19856L5.44587 7.59246L6.46711 8.61362L9.13127 6.04834Z"
                            fill="white" />
                        </svg>
                      </div>
                      <div className="salah-page-card-icon">
                        <p>Joshua Sijo</p>
                      </div>
                    </div>
                  </div>
                  <div className=" salah-page-card-para">
                    <p>
                      Being new to the App world, the
                      process of
                      developing an App seemed overwhelming to my company.
                    </p>
                  </div>
                </div>

              </div>

              <div className="salah-card-handler">
                <div className="salah-page-main-content1">
                  <div className="salah-page-main-content-flex">
                    <div className="salah-page-card-image">
                      <img src="  ./images/greatmindlogo.png" alt="" />
                    </div>
                    <div className="salahn-username">
                      <div className="salah-page-card-content">
                        <p>Joshua Sijo</p>
                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M7.28571 13.9583L5.54213 14.8597L4.41718 13.2512L2.45439 13.2391L2.2058 11.2921L0.473453 10.3693L1.15816 8.52973L0.0531211 6.90752L1.51427 5.59689L1.28969 3.64696L3.19255 3.16548L3.89987 1.33453L5.80852 1.79252L7.28571 0.5L8.76291 1.79252L10.6716 1.33453L11.3789 3.16548L13.2817 3.64696L13.0572 5.59689L14.5183 6.90752L13.4133 8.52973L14.098 10.3693L12.3656 11.2921L12.117 13.2391L10.1542 13.2512L9.0293 14.8597L7.28571 13.9583Z"
                            fill="#0B48B6" />
                          <ellipse cx="7.28574" cy="7.78568" rx="5.14286" ry="5.14286"
                            fill="#0B56E4" />
                          <path
                            d="M9.13127 6.04834L9.72582 6.66576L6.45585 9.81462L4.83978 8.19856L5.44587 7.59246L6.46711 8.61362L9.13127 6.04834Z"
                            fill="white" />
                        </svg>
                      </div>
                      <div className="salah-page-card-icon">
                        <p>Joshua Sijo</p>
                      </div>
                    </div>
                  </div>
                  <div className=" salah-page-card-para">
                    <p>
                      Being new to the App world, the
                      process of
                      developing an App seemed overwhelming to my company.
                    </p>
                  </div>
                </div>

              </div>

              <div className="salah-card-handler">
                <div className="salah-page-main-content1">
                  <div className="salah-page-main-content-flex">
                    <div className="salah-page-card-image">
                      <img src="  ./images/greatmindlogo.png" alt="" />
                    </div>
                    <div className="salahn-username">
                      <div className="salah-page-card-content">
                        <p>Joshua Sijo</p>
                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M7.28571 13.9583L5.54213 14.8597L4.41718 13.2512L2.45439 13.2391L2.2058 11.2921L0.473453 10.3693L1.15816 8.52973L0.0531211 6.90752L1.51427 5.59689L1.28969 3.64696L3.19255 3.16548L3.89987 1.33453L5.80852 1.79252L7.28571 0.5L8.76291 1.79252L10.6716 1.33453L11.3789 3.16548L13.2817 3.64696L13.0572 5.59689L14.5183 6.90752L13.4133 8.52973L14.098 10.3693L12.3656 11.2921L12.117 13.2391L10.1542 13.2512L9.0293 14.8597L7.28571 13.9583Z"
                            fill="#0B48B6" />
                          <ellipse cx="7.28574" cy="7.78568" rx="5.14286" ry="5.14286"
                            fill="#0B56E4" />
                          <path
                            d="M9.13127 6.04834L9.72582 6.66576L6.45585 9.81462L4.83978 8.19856L5.44587 7.59246L6.46711 8.61362L9.13127 6.04834Z"
                            fill="white" />
                        </svg>
                      </div>
                      <div className="salah-page-card-icon">
                        <p>Joshua Sijo</p>
                      </div>
                    </div>
                  </div>
                  <div className=" salah-page-card-para">
                    <p>
                      Being new to the App world, the
                      process of
                      developing an App seemed overwhelming to my company.
                    </p>
                  </div>
                </div>

              </div>

              <div className="salah-card-handler">
                <div className="salah-page-main-content1">
                  <div className="salah-page-main-content-flex">
                    <div className="salah-page-card-image">
                      <img src="  ./images/greatmindlogo.png" alt="" />
                    </div>
                    <div className="salahn-username">
                      <div className="salah-page-card-content">
                        <p>Joshua Sijo</p>
                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M7.28571 13.9583L5.54213 14.8597L4.41718 13.2512L2.45439 13.2391L2.2058 11.2921L0.473453 10.3693L1.15816 8.52973L0.0531211 6.90752L1.51427 5.59689L1.28969 3.64696L3.19255 3.16548L3.89987 1.33453L5.80852 1.79252L7.28571 0.5L8.76291 1.79252L10.6716 1.33453L11.3789 3.16548L13.2817 3.64696L13.0572 5.59689L14.5183 6.90752L13.4133 8.52973L14.098 10.3693L12.3656 11.2921L12.117 13.2391L10.1542 13.2512L9.0293 14.8597L7.28571 13.9583Z"
                            fill="#0B48B6" />
                          <ellipse cx="7.28574" cy="7.78568" rx="5.14286" ry="5.14286"
                            fill="#0B56E4" />
                          <path
                            d="M9.13127 6.04834L9.72582 6.66576L6.45585 9.81462L4.83978 8.19856L5.44587 7.59246L6.46711 8.61362L9.13127 6.04834Z"
                            fill="white" />
                        </svg>
                      </div>
                      <div className="salah-page-card-icon">
                        <p>Joshua Sijo</p>
                      </div>
                    </div>
                  </div>
                  <div className=" salah-page-card-para">
                    <p>
                      Being new to the App world, the
                      process of
                      developing an App seemed overwhelming to my company.
                    </p>
                  </div>
                </div>

              </div>

               </div>
       

            </div>
          </div>
        </div>
      </div>

      <div id="india-fav">
        <div className="india-fav-container">
          <div className="india-fav-main">
            <div className="india-first-bane">
              <h2>India's favourite places to <span>get solutions?</span></h2>
            </div>
            <div className='india-fav-secondban-center'>
              <div className="second-bner">
                <div className="second-baner-main">
                  <div className="second-banerer">
                    <h2>89%</h2>
                    <p>Happy Members</p>
                  </div>
                  <div className="second-banerer">
                    <h2>89%</h2>
                    <p>Happy Members</p>
                  </div>
                  <div className="second-banerer">
                    <h2>89%</h2>
                    <p>Happy Members</p>
                  </div>
                  <div className="second-banerer">
                    <h2>89%</h2>
                    <p>Happy Members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="india-fav-800">
        <div className="india-fav-container-800">
          <div className="india-first-bane-800">
            <h2>India's favourite places to <span>get solutions?</span></h2>
          </div>
          <div className='india-fav-secondban-800'>
            <div className="second-bner-800">
              <div className="second-baner-main">
                <div className="second-banerer">
                  <h2>89%</h2>
                  <p>Happy Members</p>
                </div>
                <div className="second-banerer">
                  <h2>89%</h2>
                  <p>Happy Members</p>
                </div>
                <div className="second-banerer">
                  <h2>89%</h2>
                  <p>Happy Members</p>
                </div>
                <div className="second-banerer">
                  <h2>89%</h2>
                  <p>Happy Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="logo-slider-main">
        <section className="trigger section gutter-horizontal bg-gray gutter-vertical--m gutter-horizontal centere-in-max">
          <div className="customer-logos slider">
            <Slider {...setting2}>
              <div className="slide-in-right slide">
                <img src="./images/splide1.svg" alt="" />
              </div>
              <div className="slide-in-right slide">
                <img src="./images/splide2.svg" alt="" />
              </div>
              <div className="slide-in-right slide">
                <img src="./images/splide3.svg" alt="" />
              </div>
              <div className="slide-in-right slide">
                <img src="./images/splide4.svg" alt="" />
              </div>
              <div className="slide-in-right slide">
                <img src="./images/splide5.svg" alt="" />
              </div>
              <div className="slide-in-right slide">
                <img src="./images/splide6.svg" alt="" />
              </div>
            </Slider>
          </div>
        </section>
      </div>

      <div className="contac-salah">
        <div className="contac-salah-main">
          <div className="contac-salah-conatiners-main">
            <div className="contac-salah-container">
              <div className="left-main">
                <h2>Have a question? Here to help.</h2>
                <p>Our friendly customer support team is your
                  extended family. Speak your heart out. They
                  listen with undivided attention to resolve your
                  concerns. Give us a call, request a callback or
                  drop an email, to</p>
              </div>
              <div className="phone-salah">
                <div className="phone-icon">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect opacity="0.01" width="64" height="64" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M21.0286 18.7427V21.0284V27.4284C21.0286 28.2504 20.156 29.1762 19.4354 29.5755L15.7302 31.6286C16.8769 38.457 22.1114 43.9041 28.8393 45.3828L30.7366 41.9765C31.1369 41.2579 31.8614 40.6855 32.6857 40.6855H41.6C41.6 40.6855 41.6 41.8257 41.6 43.0758V48.7347C41.6 49.1578 41.3868 50.7773 40.6143 51.5461C39.8419 52.315 35.6881 52.5713 32.5202 52.5713C19.3568 52.5713 8.68573 41.9303 8.68573 28.804C8.68573 25.7767 9.25528 22.8231 10.3497 20.0644L10.4955 19.7057L10.7343 19.8043C11.1358 19.1666 11.8473 18.7427 12.6581 18.7427C15.4956 18.7427 18.1911 18.7427 21.0286 18.7427Z"
                      fill="#0B56E4" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M29.1919 11.8857H54.0082C54.7295 11.8857 55.3143 12.4742 55.3143 13.2V28.9714C55.3143 29.6972 54.6642 30.1715 53.9429 30.1715H32.9143L27.8857 34.2857V31.6V13.2C27.8857 12.4742 28.4705 11.8857 29.1919 11.8857Z"
                      fill="#D7DCE0" />
                    <ellipse cx="37.0286" cy="21.4857" rx="1.37143" ry="1.37143" fill="#0A243F" />
                    <ellipse cx="41.6" cy="21.4857" rx="1.37143" ry="1.37143" fill="#0A243F" />
                    <ellipse cx="46.1714" cy="21.4857" rx="1.37143" ry="1.37143" fill="#0A243F" />
                  </svg>
                </div>
                <div className="contact-name-salah">
                  <p>Customer Sales Enquires</p>
                  <span>1800-225-369</span>
                </div>

              </div>
              <div className="phone-salah">
                <div className="phone-icon">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect opacity="0.01" width="64" height="64" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M56.2286 25.4858C56.2286 23.2767 54.4377 21.4858 52.2286 21.4858H21.8286C19.6194 21.4858 17.8286 23.2767 17.8286 25.4858V43.0858C17.8286 45.295 19.6194 47.0858 21.8286 47.0858H48.9143L56.2286 52.5716V25.4858Z"
                      fill="#D7DCE0" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M7.77142 15.4287C7.77142 13.2196 9.56228 11.4287 11.7714 11.4287H42.1714C44.3806 11.4287 46.1714 13.2196 46.1714 15.4287V33.0287C46.1714 35.2378 44.3806 37.0287 42.1714 37.0287H15.0857L7.77142 42.5144V15.4287Z"
                      fill="#0B56E4" />
                    <rect x="16" y="17.8286" width="21.9429" height="1.82857" fill="white" />
                    <rect x="16" y="23.3145" width="21.9429" height="1.82857" fill="white" />
                    <rect x="16" y="28.8003" width="11.8857" height="1.82857" fill="white" />
                  </svg>
                </div>
                <div className="contact-name-salah">
                  <p>General Enquiries</p>
                  <span>care@shims.com</span>
                </div>

              </div>
            </div>
            <div className="img-contact-salah">
              <img src="./images/contact-img.png" alt="logo111" />
            </div>
          </div>

        </div>
      </div>

      <div className="Accordion">
        <div className="Accordion-main">
          <div className="Accordion-contai">
            <p>FAQ</p>
            <h2>Most asked questions</h2>
          </div>
          <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button onClick={()=> setStrat1(!start1)} class="accordion-button faq22 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              What is your design process like?
              </button>
            </h2>
            <div style={stylePeer1} id="flush-collapseOne" class="accordion-collapse collapse faq223" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl felis, blandit in laoreet sed, malesuada id elit. Duis sed odio blandit tortor maximus euismod. Phasellus convallis dolor vel suscipit sagittis. Donec aliquam leo suscipit, semper dui a, condimentum sem. </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button onClick={()=> setStrat2(!start2)} class="accordion-button faq22 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              What is your design process like?
              </button>
            </h2>
            <div style={stylePeer2} id="flush-collapseTwo" class="accordion-collapse collapse faq223" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button onClick={()=> setStrat3(!start3)}class="accordion-button faq22 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              What is your design process like?
              </button>
            </h2>
            <div style={stylePeer3} id="flush-collapseThree" class="accordion-collapse collapse faq223" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
          </div>
        </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
