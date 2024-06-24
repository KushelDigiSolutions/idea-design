"use client"
import Footer from './components/Footer'
import { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import Link from 'next/link';

const About = () => {
  const [start4, setStart4] = useState(false);
  const [start5, setStart5] = useState(false);
  const [start6, setStart6] = useState(false);

  const stylePeer4 = {
    display: start4 ? "block" : "none"
  }


  const stylePeer5 = {
    display: start5 ? "block" : "none"
  }


  const stylePeer6 = {
    display: start6 ? "block" : "none"
  }

  const sliderRef3 = useRef(null);

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
    <>

      <Header />

      <div id="become-first">
        <div className="become-first-container">
          <div className="become-first-main">
            <h1>
            Join Our <span>Expert Network&nbsp;</span>  at iWhims
            </h1>
            <div className="become-first-btnun">
            <Link href="/becomeprofessional">  <button className="btn btn-outline-primary navbar-round" href="#">
                Become Professional
              </button> </Link>
            </div>
          </div>
        </div>
      </div>

      <div id="become-second">
        <div className="become-second-container">
          <div className="become-second-main">
            <h2>
            Transform Your Expertise into &nbsp;
              <span>Impact and Income</span> 
              
            </h2>
            <img src="./images/become-img.png" alt="" />
          </div>
        </div>
      </div>

      <div id="become-third">
        <div className="become-third-container">
          <div className="become-third-main">
            <h2>It’s easier than you think.</h2>
            <h2 className="become-third-heading">
              <span>Join us</span>.&nbsp;We’ll help you every step of the way.
            </h2>
            <div className="become-third-btnun">
           <Link href="/becomeprofessional"><button className="btn btn-outline-primary navbar-round" href="#">
                Become Professional
              </button> </Link> 
            </div>
          </div>
          <div class="crouser-become-third">
            <div ref={sliderRef3} className="become-third-crouser">
              <div className="become-crouser">
                <div className="crouser-third-imag">
                  <img src="./images/becomecrouser1.png" alt="" />
                </div>
                <div className="crouser-third-bottom">
                  <h3>Feel empowered</h3>
                  <p>
                    Excellent communication, writing, and research skills Analytical
                    and problem-solving abilities Strong work ethic and attention to
                    detail
                  </p>
                </div>
              </div>
              <div className="become-crouser">
                <div className="crouser-third-imag">
                  <img src="./images/becomecrouser1.png" alt="" />
                </div>
                <div className="crouser-third-bottom">
                  <h3>Feel empowered</h3>
                  <p>
                    Excellent communication, writing, and research skills Analytical
                    and problem-solving abilities Strong work ethic and attention to
                    detail
                  </p>
                </div>
              </div>
              <div className="become-crouser">
                <div className="crouser-third-imag">
                  <img src="./images/becomecrouser1.png" alt="" />
                </div>
                <div className="crouser-third-bottom">
                  <h3>Feel empowered</h3>
                  <p>
                    Excellent communication, writing, and research skills Analytical
                    and problem-solving abilities Strong work ethic and attention to
                    detail
                  </p>
                </div>
              </div>
              <div className="become-crouser">
                <div className="crouser-third-imag">
                  <img src="./images/becomecrouser1.png" alt="" />
                </div>
                <div className="crouser-third-bottom">
                  <h3>Feel empowered</h3>
                  <p>
                    Excellent communication, writing, and research skills Analytical
                    and problem-solving abilities Strong work ethic and attention to
                    detail
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div id="become-four">
        <div className="become-four-container">
          <div className="become-four-main">
            <div className="become-four-img">
              <img src="./images/become-img2.png" alt="" />
            </div>
            <div className="become-four-text">
              <h2>Partnered professional</h2>
              <p>
                Partnered mentors are mentors that join the community referred by
                organizations that we work with. On their profile, you can recognize
                them with a partner tag!
              </p>
              <div className="become-btun-four">
              <Link href="/becomeprofessional">  <button className="btn btn-outline-primary navbar-round" href="#">
                  Become Professional
                </button> </Link>
              </div>
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
                <button onClick={() => setStart4(!start4)} class="accordion-button faq22 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  What is your design process like?
                </button>
              </h2>
              <div style={stylePeer4} id="flush-collapseOne" class="accordion-collapse collapse faq223" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl felis, blandit in laoreet sed, malesuada id elit. Duis sed odio blandit tortor maximus euismod. Phasellus convallis dolor vel suscipit sagittis. Donec aliquam leo suscipit, semper dui a, condimentum sem. </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button onClick={() => setStart5(!start5)} class="accordion-button faq22 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  What is your design process like?
                </button>
              </h2>
              <div style={stylePeer5} id="flush-collapseTwo" class="accordion-collapse collapse faq223" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button onClick={() => setStart6(!start6)} class="accordion-button faq22 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  What is your design process like?
                </button>
              </h2>
              <div style={stylePeer6} id="flush-collapseThree" class="accordion-collapse collapse faq223" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </>
  )
}

export default About