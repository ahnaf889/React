import React from "react";
import "../Banner/Banner.css";
import banner from "../../assets/Banner.png";

const Banner = () => {
  return (
    <>
      <div className="banner__bg">
        <div className="container">
          <div className="banner__part">
            <div className="banner__Left">
              <h2 className="banner__title">
                We Are Digital Product Design Agency
              </h2>
              <p className="banner__text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <button className="banner__btn">Get Started</button>
            </div>
            <div className="banner__Right">
              <picture>
                <img src={banner} alt={banner} />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
