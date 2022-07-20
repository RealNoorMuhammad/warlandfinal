import React from "react";

function Slide({ smallScreen }) {
  return (
    <div style={{ width: "100%", color: "#FFF" }}>
      {/* This is used Changing the Color and Size og the First Slide Top Text*/}
     
      <h1 className="c1Head">
        {/* This is used Changing the Color and Size og the First Slide Top Text*/}
      </h1>
      <p
        className="py-1 px-2   fw900"
        style={{ fontSize: "18px", fontWeight: "800" }}
      >
        <b style={{ color: "#FFD700" }}>8 :</b> Play and Earn (WarLand Beta Game
        release) Free membership for Holders
        <br data-reactroot />
        <b style={{ color: "#FFD700" }}></b> (This will be the first phase of
        the game. A huge world to explore with an Arena where you can test your
        Warrior Skills.)
        <br data-reactroot />
        {/* This is used for changing the Gradient Color*/}
        <b style={{ color: "#FFD700" }}>9 :</b> Mint of 600 unique Pets
        <br data-reactroot />
        <b style={{ color: "#FFD700" }}></b> keycap_ten Metaverse Club on
        SandBox
        <br />
        If you want to have access to this amazing club you need to own 1 sword,
        1 armour and 1 pet.
        <br />
        You will be able to use every NFT you have in the WarLand Game.
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

export default Slide;
