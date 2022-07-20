import { Grid } from "@mui/material";
import React from "react";
import gif from "../../images/wag.jpg";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
const About = () => {
  return (
    <div className="container">
      {" "}
      <h1
        className="text-white text-center mt-5 pt-5 joinCom"
        style={{ fontSize: "70px", fontWeight: "600" }}
      >
        DESCRIPTION
      </h1>
      <Grid container spacing={1}>
        <Grid
          md={6}
          lg={6}
          xs={12}
          sm={12}
          style={{
            borderRadius: "20px",
            border: "3px solid #DAA520",
            backgroundColor: "#0054",
          }}
        >
          {" "}
          <div
            style={{ fontSize: "23px", fontWeight: "200", lineHeight: "30px" }}
          >
            <p className="text-white text-center  pt-3 joinComs">
              MMORPG game | NFT | 600 unique swords | Solana | Staking |
              Metaverse Club| DAO | Casino | WAR Token WarLand is the next-level
              MMORPG game with NFT integration. Focused and working hard on
              developing the best gaming environment experience, different
              combat modes, utilities, and resources. Our collection has 600
              unique swords that were made on the Solana blockchain. Things like
              a free membership in the WarLand game, staking, and access to the
              metaverse club it is also available but only for holders.
            </p>
          </div>
        </Grid>
        <Grid
          md={6}
          lg={6}
          xs={12}
          sm={12}
          style={{
            display: "inline-grid",
            justifyContent: "center",
          }}
        >
          <MDBCard
            style={{
              maxWidth: "25rem",
              backgroundColor: "transparent ",
              borderRadius: "20px",
            }}
          >
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage
                src={gif}
                fluid
                alt="..."
                style={{ borderRadius: "20px", border: "3px solid #DAA520" }}
              />

              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </MDBRipple>
          </MDBCard>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
