import React from "react";
import "./About.css";
import {
  MdKeyboardArrowDown,
  MdPeople,
  MdTrendingUp,
  MdThumbUp,
} from "react-icons/md";

const About = () => {
  return (
    <div>
      <section id="about" className="section-title text-center">
        <div className="container relative">
          <h2>About</h2>
          <a href="#about" className="section-anchor">
            <MdKeyboardArrowDown />
          </a>
        </div>
      </section>
      <section className="top-full bottom-half">
        <div className="container">
          <div className="section-intro text-center">
            <h4>
              <span>Missions &amp; Targets</span>
            </h4>
            <span className="sep"></span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem.
            </p>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-4">
              <div className="service-item text-center">
                <div className="service-inner">
                  <span className="icon">
                    <MdPeople />
                  </span>
                  <h3>Who We Are</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <div className="service-item text-center">
                <div className="service-inner">
                  <span className="icon">
                    <MdTrendingUp />
                  </span>
                  <h3>Why Choose Us</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <div className="service-item text-center">
                <div className="service-inner">
                  <span className="icon">
                    <MdThumbUp />
                  </span>
                  <h3>Work Features</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
