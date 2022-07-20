import React from "react";
import Bounce from "react-reveal/Bounce";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const FAQ = () => {
  return (
    <div>
      {" "}
      <Bounce left>
        <h2
          className="text-white text-center mt-5 pt-5 joinCom"
          style={{ fontSize: "60px", fontWeight: "800" }}
        >
          FAQ
        </h2>
      </Bounce>
      <div className="container">
        {" "}
        <br />
        <Bounce right>
          <Accordion
            style={{
              borderRadius: "20px",
              border: "3px solid #DAA520",
              backgroundColor: "#0054",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon style={{ color: "#fff", height: "20px" }} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ color: "#fff" }}>
                How many swords there are?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ color: "#fff" }}>
              <Typography>```600```</Typography>
            </AccordionDetails>
          </Accordion>
        </Bounce>
        <br />
        <Bounce left>
          <Accordion
            style={{
              borderRadius: "20px",
              border: "3px solid #DAA520",
              backgroundColor: "#0054",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon style={{ color: "#fff", height: "20px" }} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ color: "#fff" }}>
                What is the mint price?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ color: "#fff" }}>
              <Typography>
                0.4 SOL for WL and 0.65 SOL for public sale.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Bounce>
        <br />
        <Bounce right>
          <Accordion
            style={{
              borderRadius: "20px",
              border: "3px solid #DAA520",
              backgroundColor: "#0054",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon style={{ color: "#fff", height: "20px" }} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ color: "#fff" }}>
                When is the mint date?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ color: "#fff" }}>
              <Typography>
                The official date to mint is on 30/07 at 15:00 UTC
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Bounce>
        <br />
        <Bounce left>
          <Accordion
            style={{
              borderRadius: "20px",
              border: "3px solid #DAA520",
              backgroundColor: "#0054",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon style={{ color: "#fff", height: "20px" }} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ color: "#fff" }}>
                When is the Metaverse Club release?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ color: "#fff" }}>
              <Typography>
                Metaverse club will be released one week after the mint of pets
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Bounce>
        <br />
        <Bounce right>
          <Accordion
            style={{
              borderRadius: "20px",
              border: "3px solid #DAA520",
              backgroundColor: "#0054",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon style={{ color: "#fff", height: "20px" }} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ color: "#fff" }}>
                Will be there a Token?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ color: "#fff" }}>
              <Typography>
                Yes, after this mint, we're going to airdrop the WAR Token to
                all holders. This Token will be on DEX and will be used for the
                staking platform and game rewards (P2E)
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Bounce>
        <br />
        <br />
        <Bounce left>
          <Accordion
            style={{
              borderRadius: "20px",
              border: "3px solid #DAA520",
              backgroundColor: "#0054",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon style={{ color: "#fff", height: "20px" }} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ color: "#fff" }}>
              When is the beta game release?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ color: "#fff" }}>
              <Typography>
              The WarLand Beta game version will be launched 3 weeks after the mint of 300 Lands.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Bounce>
        <br />
        <br />
        <Bounce right>
          <Accordion
            style={{
              borderRadius: "20px",
              border: "3px solid #DAA520",
              backgroundColor: "#0054",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon style={{ color: "#fff", height: "20px" }} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ color: "#fff" }}>
              Who will receive a free 3D Full body armour?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ color: "#fff" }}>
              <Typography>
              Everyone who mints a sword will receive a free full body armour 3D NFT which you can also use in the game.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Bounce>
        <br />
        <br />
        <Bounce left>
          <Accordion
            style={{
              borderRadius: "20px",
              border: "3px solid #DAA520",
              backgroundColor: "#0054",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon style={{ color: "#fff", height: "20px" }} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ color: "#fff" }}>
              Who will have free membership?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ color: "#fff" }}>
              <Typography>
              All NFT holders will have a free membership in the game.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Bounce>
        <br />
        <br />
        <Bounce right>
          <Accordion
            style={{
              borderRadius: "20px",
              border: "3px solid #DAA520",
              backgroundColor: "#0054",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon style={{ color: "#fff", height: "20px" }} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ color: "#fff" }}>
              Will we Doxx?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ color: "#fff" }}>
              <Typography>
              Yes, on our Website the Founder, the artist and other core Team members are doxxed
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Bounce>
        <br />
        <br />
      </div>
    </div>
  );
};

export default FAQ;
