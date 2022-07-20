import React from "react";
import BluePrintMap from "../components/BluePrintMap";
import Header from "../components/HeaderBlue";

function BluePrint() {
  return (
    <>
      <div style={{ backgroundColor: "#000", minHeight: "100vh" }}>
       {/* THIS JAVASCRIPT CODE IS FOR Header of the BluePrint Page*/}
        <Header hClass={"hPosSticky bluePrintScreen"} />

         {/* THIS JAVASCRIPT CODE IS FOR the BluePrint  Page*/}
        <BluePrintMap />
      </div>
    </>
  );
}

export default BluePrint;
