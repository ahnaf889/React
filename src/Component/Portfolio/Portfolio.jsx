import React, { useState } from "react";
import "./Portfolio.css";
import AllComponent from "../../AllComponent/AllComponent";
import { FaAngleRight } from "react-icons/fa6";
import Demo1 from "../../assets/Demo1.png";
import Demo2 from "../../assets/Demo2.png";
const Portfolio = () => {
  const [show, setshow] = useState(false);
  const Hello = () => {
    setshow(!show);
  };
  let baby = ``
  baby = `Hello world`
  return (
    <>
      <div className="portfolio__bg">
        <div className="container">
          <div className="portfolio__head">
            <div>
              <AllComponent
                title={"Our Work Portfolio"}
                text={`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.`}
              />
            </div>

            <div onClick={Hello}>
              <picture className="portfolio__absulit">
                <img src={Demo1} alt="" />
                {show && (
                  <div className="portfolio__position">
                    <div className="portfolio__main">
                      <h2 className="portfolio__title">Graphic Design</h2>
                      <p className="portfolio__text">
                        See Details
                        <span className="portfolio__icon">
                          <FaAngleRight />
                          {baby}
                        </span>
                      </p>
                    </div>
                  </div>
                )}
              </picture>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;

// {show && (
//     <div className="portfolio__position">
//       <div className="portfolio__main">
//         <h2 className="portfolio__title">Graphic Design</h2>
//         <p className="portfolio__text">
//           See Details
//           <span className="portfolio__icon">
//             <FaAngleRight />
//           </span>
//         </p>
//       </div>
//     </div>
//   )}


