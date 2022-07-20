import React from "react";
import flogo1 from "../../images/flogo1.png";
import flogo2 from "../../images/flogo2.png";
import flogo3 from "../../images/flogo3.png";
import flogo from "../../images/cal.png";
import flog from "../../images/nftjet.png";
import flo from "../../images/un.png";
import fl from "../../images/ren.png";
import open from "../../images/sea.png";
import Bounce from "react-reveal/Bounce";

import Wobble from "react-reveal/Wobble";
const Tokenmic = () => {
  return (
    <div>
      {" "}
      <div className="section5 mt-5">
        <Bounce left>
          <h2
            className="text-white text-center mt-5 pt-5 joinCom"
            style={{ fontFamily: "ethnocentric" }}
          >
            Partners & advisors
          </h2>
        </Bounce>
        <div className="row Con10sec4 pb-5">
          <div className="col-md-12">
            <div className="fContainer">
              <Wobble>
                <img src={flogo1} alt="..." className="F1Log" />
              </Wobble>

              <Wobble>
                <img src={flogo2} alt="..." className="F2Log" />
              </Wobble>

              <Wobble>
                <img src={flogo3} alt="..." className="F2Log" />
              </Wobble>
            </div>
          </div>

          <div className="col-md-12">
            <div className="fContainer">
              <Wobble>
                <img src={flogo} alt="..." className="F1Log" />
              </Wobble>

              <Wobble>
                <img src={flog} alt="..." className="F2Log" />
              </Wobble>

              <Wobble>
                <img src={flo} alt="..." className="F2Log" />
              </Wobble>
            </div>
          </div>


          <div className="col-md-12">
            <div className="fContainer">
              <Wobble>
                <img src={fl} alt="..." className="F1Log" />
              </Wobble>

              <Wobble>
                <img src={open} alt="..." className="F2Log" />
              </Wobble>

              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Tokenmic;
