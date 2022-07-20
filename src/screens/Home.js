import React from "react";
import Header from "../components/Header";

import RubberBand from "react-reveal/RubberBand";
import Team1 from "../images/common.gif";
import Team2 from "../images/rare.gif";
import Team3 from "../images/epic.gif";
import Team4 from "../images/legendary.gif";
import Team5 from "../images/Team5.PNG";
import { BsTelegram, BsInstagram, BsTwitter, BsDiscord } from "react-icons/bs";
import { Grid } from "@mui/material";
import Bounce from "react-reveal/Bounce";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";


function Home() {
  return (
    <div className="home">
      {" "}
      {/* This css code is  use for the height of the home Page*/}
      <Header hClass={"hPosAbsolute "} />
      <br/>
      <br/>
      <br/>
      <br/>
     
      <div className="">
     
    
      <br/>
      <br/>
      <Bounce right>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={12}
            lg={3}
            style={{
              display: "inline-grid",
              justifyContent: "center",
            }}
          >
            {" "}
            <MDBCard
              style={{
                maxWidth: "25rem",

                borderRadius: "20px",
                border: "3px solid #DAA520",
                backgroundColor: "#0054",
              }}
            >
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage
                  src={Team1}
                  fluid
                  alt="..."
                  style={{ borderRadius: "15px" }}
                />

                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </MDBRipple>
             
            </MDBCard>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            lg={3}
            style={{
              display: "inline-grid",
              justifyContent: "center",
            }}
          >
            {" "}
            <MDBCard
              style={{
                maxWidth: "25rem",

                borderRadius: "20px",
                border: "3px solid #DAA520",
                backgroundColor: "#0054",
              }}
            >
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage
                  src={Team2}
                  fluid
                  alt="..."
                  style={{ borderRadius: "15px" }}
                />

                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </MDBRipple>
            
            </MDBCard>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            lg={3}
            style={{
              display: "inline-grid",
              justifyContent: "center",
            }}
          >
            {" "}
            <MDBCard
              style={{
                maxWidth: "25rem",

                borderRadius: "20px",
                border: "3px solid #DAA520",
                backgroundColor: "#0054",
              }}
            >
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage
                  src={Team3}
                  fluid
                  alt="..."
                  style={{ borderRadius: "15px" }}
                />

                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </MDBRipple>
            
            </MDBCard>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            lg={3}
            style={{
              display: "inline-grid",
              justifyContent: "center",
            }}
          >
            {" "}
            <MDBCard
              style={{
                maxWidth: "25rem",

                borderRadius: "20px",
                border: "3px solid #DAA520",
                backgroundColor: "#0054",
              }}
            >
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage
                  src={Team4}
                  fluid
                  alt="..."
                  style={{ borderRadius: "15px" }}
                />

                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </MDBRipple>
         
            </MDBCard>
          </Grid>
         
        </Grid>
      </Bounce>

      <br />


      <Bounce top>
      <div class="wrapper" style={{ justifyContent: "center",
      textAlign: "center", display:"flex"}}>
      <a href="https://swords.warlandnft.art/" className="as">
        <span> Mint </span>
      </a>
    </div>
      </Bounce>

    </div>
      {/* THIS JAVASCRIPT CODE IS FOR Background Image we have on the Home Page*/}{" "}
      {/* THIS JAVASCRIPT CODE IS FOR Header on the Home Page*/}


  
     
    </div>
  );
}

export default Home;
