import React, { useEffect } from "react";
import RubberBand from "react-reveal/RubberBand";
import Team1 from "../../images/Team1.PNG";
import Team2 from "../../images/Team2.PNG";
import Team3 from "../../images/TeamGrs.jpg";
import Team4 from "../../images/Team4.PNG";
import Team5 from "../../images/Team5.PNG";
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

const Team = () => {
  return (
    <div
      id="team"
      color="white"
      style={{ height: "100%", borderRadius: "30px" }}
      className="gradient-bg-welcomes"
    >
      <br />
      <br />
      <div className="container">
        <Bounce top>
          <div
            style={{
              color: "#FFFF",
              fontSize: "3rem",
              fontWeight: "bold",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <h1 className="mHeads ">
              <span> THE </span>WARRIORS<span> </span>
            </h1>{" "}
          </div>
        </Bounce>

        <br />

        <Bounce right>
          <Grid container spacing={1}>
            <Grid
              item
              xs={12}
              md={4}
              lg={4}
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
                <MDBCardBody>
                  <MDBCardTitle
                    style={{
                      color: "#fff",
                      justifyContent: "center",
                      textAlign: "center",
                      fontSize: "2.2rem",
                    }}
                  >
                    Alexei Tolkunov
                  </MDBCardTitle>
                  <MDBCardText
                    style={{
                      color: "#fff",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    Dev and Founder
                    <section className="mb-4">
                      <RubberBand>
                        <a
                          className="btn btn-outline-light m-3"
                          href="https://twitter.com/AlexeiStream"
                          role="button"
                          style={{ borderRadius: "20px" }}
                        >
                          <BsTwitter />
                        </a>
                      </RubberBand>

                      <RubberBand>
                        <a
                          className="btn btn-outline-light m-3"
                          href="https://www.instagram.com/alex_2780_russo/"
                          role="button"
                          style={{ borderRadius: "20px" }}
                        >
                          <BsInstagram />
                        </a>
                      </RubberBand>
                    </section>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              lg={4}
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
                <MDBCardBody style={{}}>
                  <MDBCardTitle
                    style={{
                      color: "#fff",
                      justifyContent: "center",
                      textAlign: "center",
                      fontSize: "2rem",
                    }}
                  >
                    Bogdan Shaktarin
                  </MDBCardTitle>
                  <MDBCardText
                    style={{
                      color: "#fff",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    Dev and Co-Founder
                    <section className="mb-4">
                      <RubberBand>
                        <a
                          className="btn btn-outline-light m-3"
                          href="https://www.instagram.com/killuminati_russo/"
                          role="button"
                          style={{ borderRadius: "20px" }}
                        >
                          <BsInstagram />
                        </a>
                      </RubberBand>
                    </section>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              lg={4}
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
                <MDBCardBody>
                  <MDBCardTitle
                    style={{
                      color: "#fff",
                      justifyContent: "center",
                      textAlign: "center",
                      fontSize: "2rem",
                    }}
                  >
                    Sofia Ferreira
                  </MDBCardTitle>
                  <MDBCardText
                    style={{
                      color: "#fff",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    Marketing Manager
                    <section className="mb-4">
                      <RubberBand>
                        <a
                          className="btn btn-outline-light m-3"
                          href="https://twitter.com/CollectorSophie?t=58ux_DCatgKUjctqQH8oWQ&s=09"
                          role="button"
                          style={{ borderRadius: "20px" }}
                        >
                          <BsTwitter />
                        </a>
                      </RubberBand>

                   
                    </section>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
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
                <MDBCardBody style={{}}>
                  <MDBCardTitle
                    style={{
                      color: "#fff",
                      justifyContent: "center",
                      textAlign: "center",
                      fontSize: "2rem",
                    }}
                  >
                    Marcelo Correia
                  </MDBCardTitle>
                  <MDBCardText
                    style={{
                      color: "#fff",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    Social Media Manager
                    <section className="mb-4">
                      <RubberBand>
                        <a
                          className="btn btn-outline-light m-3"
                          href="https://twitter.com/1Million2Be"
                          role="button"
                          style={{ borderRadius: "20px" }}
                        >
                          <BsTwitter />
                        </a>
                      </RubberBand>

                      <RubberBand>
                        <a
                          className="btn btn-outline-light m-3"
                          href="https://www.instagram.com/halfblindinyourmind/"
                          role="button"
                          style={{ borderRadius: "20px" }}
                        >
                          <BsInstagram />
                        </a>
                      </RubberBand>
                    </section>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
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
                    src={Team5}
                    fluid
                    alt="..."
                    style={{ borderRadius: "15px" }}
                  />

                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </MDBRipple>
                <MDBCardBody>
                  <MDBCardTitle
                    style={{
                      color: "#fff",
                      justifyContent: "center",
                      textAlign: "center",
                      fontSize: "2rem",
                    }}
                  >
                    Rodrigo Fernandes
                  </MDBCardTitle>
                  <MDBCardText
                    style={{
                      color: "#fff",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    Special Adviser
                    <section className="mb-4">
                      <RubberBand>
                        <a
                          className="btn btn-outline-light m-3"
                          href="https://www.instagram.com/farnie21/"
                          role="button"
                          style={{ borderRadius: "20px" }}
                        >
                          <BsInstagram />
                        </a>
                      </RubberBand>
                    </section>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </Grid>
          </Grid>
        </Bounce>

        <br />
      </div>
    </div>
  );
};

export default Team;
