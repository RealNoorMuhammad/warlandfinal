import React from "react";

const HeroSection = () => {
  return (
    <div className="p-5  bg-imagew">
      <div className="sections">
        <div className="firstLayer ">
          <div
            className="mHead pt-5"
            style={{
              display: "flex",
            }}
          >
            <p style={{}}>WE ARE WARLAND</p>
          </div>
          <div
            className="mHeadx pt-5"
            style={{
              display: "flex",
            }}
          >
            <p style={{}}>
              WarLand is a P2E MMORPG game with NFT integration. We are focused
              and working hard on developing the best gaming environment
              experience, different combat modes, utilities and resources. Our
              collection has 600 unique swords that were made on solana
              blockchain, and for each minted sword we will offer a free NFT, a
              full body armour for you to use in the game. Things like free
              membership in the WarLand game, staking and access to the
              metaverse club is also available but only for holders.
            </p>


            
          </div>
          <div class="wrapper" style={{ justifyContent: "center",
          textAlign: "center", display:"flex"}}>
          <a href="https://swords.warlandnft.art/" className="as">
            <span> Mint </span>
          </a>
        </div>
         
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
