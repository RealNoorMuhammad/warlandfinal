import React from "react";

function SlideCard1({ smallScreen }) {
  return (
    <div style={{ width: "100%", color: "#FFF" }}>
      {/* This is used Changing the Color and Size og the First Slide Top Text*/}
      <h1 className="c1Head  fw900" style={{ color: "#FFD700" }}>
        ROADMAP{" "}
      </h1>
      <h1 className="c1Head">
        {/* This is used Changing the Color and Size og the First Slide Top Text*/}
      </h1>
      <p
        className="py-1 px-2   fw900"
        style={{ fontSize: "24px", fontWeight: "700" }}
      >

        <b style={{ color: "#FFD700" }}>1 :</b> NFT & Game Development
        <br data-reactroot />
        <b style={{ color: "#FFD700" }}>2 :</b> Website & Social Media
        <br data-reactroot />
        {/* This is used for changing the Gradient Color*/}
        <b style={{ color: "#FFD700" }}>3 :</b> Community Growth
        <br data-reactroot />
        <b style={{ color: "#FFD700" }}>4 :</b> Mint of 600 Swords
        <br data-reactroot />
        <b style={{ color: "#FFD700" }}>5 :</b> Free airdrop of 600 3D Full Body Armour 
        <br data-reactroot />
        <b style={{ color: "#FFD700" }}>6 :</b>  Token airdrop and DEX listing 
        <br data-reactroot />
        <b style={{ color: "#FFD700" }}>7 :</b>  Mint of 300 Lands
        <br data-reactroot />
        <b style={{ color: "#FFD700" }}>8 :</b>  BETA game release 
        <br data-reactroot />
        <b style={{ color: "#FFD700" }}>9 :</b> Mint of 600 Mythical Pets
        <br data-reactroot />
        <b style={{ color: "#FFD700" }}>10 :</b> Metaverse Club release
        <br data-reactroot />
        
      </p>
      {!smallScreen && (
        <p style={{ display: "flex", fontSize: "20px", fontWeight: "800" }}>
   
          {/*This is used for the Button on the First Slide of the Park Page*/}
         
        </p>
      )}
    </div>
  );
}

export default SlideCard1;
