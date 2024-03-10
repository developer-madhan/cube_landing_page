import React from "react";
import "./About.css"
import { MdKeyboardArrowDown, MdBrush, MdPalette, MdBusinessCenter, MdShoppingCart } from "react-icons/md";


const Service = () => {
  return (
    <div>
      <section id="service" className="section-title text-center">
        <div className="container relative">
          <h2>Services</h2>
          <a href="#service" className="section-anchor">
          <MdKeyboardArrowDown />
          </a>
        </div>
      </section>
      <section className="top-full bottom-half">
        <div className="container">
          <div className="section-intro text-center">
            <h4>
              <span>Services We Provide</span>
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
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="service-item reverse text-center">
                <div className="service-inner">
                  <span className="icon">
                  <MdBrush />
                  </span>
                  <h3>Design</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="service-item reverse text-center">
                <div className="service-inner">
                  <span className="icon">
                  <MdPalette />
                  </span>
                  <h3>Branding</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="service-item reverse text-center">
                <div className="service-inner">
                  <span className="icon">
                  <MdBusinessCenter />
                  </span>
                  <h3>Marketing</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="service-item reverse text-center">
                <div className="service-inner">
                  <span className="icon">
                  <MdShoppingCart />
                  </span>
                  <h3>E-Commerce</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="top-half bottom-full">
        <div className="container">
          <div className="section-intro text-center">
            <h4>
              <span>Services We Provide</span>
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
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="service-item reverse text-center">
                <div className="service-inner">
                  <span className="icon">
                    <i className="material-icons">brush</i>
                  </span>
                  <h3>SEO</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="service-item reverse text-center">
                <div className="service-inner">
                  <span className="icon">
                    <i className="material-icons">storage</i>
                  </span>
                  <h3>Hosting</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="service-item reverse text-center">
                <div className="service-inner">
                  <span className="icon">
                    <i className="material-icons">group</i>
                  </span>
                  <h3>Social</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="service-item reverse text-center">
                <div className="service-inner">
                  <span className="icon">
                    <i className="material-icons">help</i>
                  </span>
                  <h3>24/7 Support</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor
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
export default Service;
