import React from "react";
import Grid from "@mui/material/Grid";

import imgNotHover from "../images/imgNotHover.png";
import imgHover from "../images/imgHover.png";
{
  /*In this you can see on imgNotHover and imgHover Where you can add multiple pucyure in the Images Folder and then You can add here in the yop way as you can see and then ypu can chandr tha image data according to grid as you want under it*/
}

{
  /*This is the data of Images on the Second Slide of the Park Page Where You can Change Images on hover or not Hover State*/
}
const data = [
  {
    imgHover: imgHover,
    imgNotHover: imgNotHover,
    name: "2pm.flow",
    designation: "Engineer",
    description: "Engineer at 2pm.flow",
  },
  {
    imgHover: imgHover,
    imgNotHover: imgNotHover,
    name: "2pm.flow",
    designation: "Engineer",
    description: "Engineer at 2pm.flow",
  },
  {
    imgHover: imgHover,
    imgNotHover: imgNotHover,
    name: "2pm.flow",
    designation: "Engineer",
    description: "Engineer at 2pm.flow",
  },
  {
    imgHover: imgHover,
    imgNotHover: imgNotHover,
    name: "2pm.flow",
    designation: "Engineer",
    description: "Engineer at 2pm.flow",
  },
  {
    imgHover: imgHover,
    imgNotHover: imgNotHover,
    name: "2pm.flow",
    designation: "Engineer",
    description: "Engineer at 2pm.flow",
  },
  {
    imgHover: imgHover,
    imgNotHover: imgNotHover,
    name: "2pm.flow",
    designation: "Engineer",
    description: "Engineer at 2pm.flow",
  },
  {
    imgHover: imgHover,
    imgNotHover: imgNotHover,
    name: "2pm.flow",
    designation: "Engineer",
    description: "Engineer at 2pm.flow",
  },
  {
    imgHover: imgHover,
    imgNotHover: imgNotHover,
    name: "2pm.flow",
    designation: "Engineer",
    description: "Engineer at 2pm.flow",
  },
];

function SlideCard2({ smallScreen }) {
  return (
    <div style={{ width: "100%" }} className="slideCard2">
      <h1 className="c1Head"> {/*This is used for the second slide where YOU CAN CHANGE THE SIZE AND OTHER THINGS OF heading */}
        Created by Many <span className="Opacity10">//</span>
      </h1>
      <p style={{fontSize:"18px" , fontWeight:"800"}}>
        The core team is born in Los Angeles, CA - a team of human beans with
        backgrounds in crypto, technology, and gaming
        <span className="py-1 px-2  highlight fw600" data-reactroot>
          working to build a decentralized brand of the future.
        </span>
      </p>
      <Grid container>
        {!smallScreen
          ? data.map((item, index) => {
              return (
                <Grid item xs={4} md={3} p={1} className="gridImgCon" >
                  <div className="w-100 cardImgCon" >
                    <img
                      src={item.imgHover}
                      alt="..."
                      className="cardImgHover w-100"
                    />
                    <img
                      src={item.imgNotHover}
                      alt="..."
                      className="cardImgNotHover w-100"
                    />
                  </div>
                  <p className="ImgCardH pt-2" style={{fontSize:"15px" , fontWeight:"800"}}>{item.name}</p>
                  <p className="ImgCardD" style={{fontSize:"12px" , fontWeight:"800"}}>{item.designation}</p>
                  <p className="ImgCardD" style={{fontSize:"12px" , fontWeight:"800"}}>{item.description}</p>
                </Grid>
              );
            })
          : data.slice(0, 6).map((item, index) => {
              return (
                <Grid item xs={4} md={3} p={1} className="gridImgCon">
                  <div className="w-100 cardImgCon">
                    <img
                      src={item.imgHover}
                      alt="..."
                      className="cardImgHover w-100"
                    />
                    <img
                      src={item.imgNotHover}
                      alt="..."
                      className="cardImgNotHover w-100"
                    />
                  </div>
                  <p className="ImgCardH pt-2">{item.name}</p>
                  <p className="ImgCardD">{item.designation}</p>
                  <p className="ImgCardD">{item.description}</p>
                </Grid>
              );
            })}
      </Grid>
      {!smallScreen && (
        <p style={{ display: "flex" , fontSize:"20px" , fontWeight:"800" }} className="mt-4">
          <span>Together with</span>
          <a href="#s3" className="weDidBtn py-1 px-3 ml-2">
            The Azuki Community ↓
          </a>
        </p>
      )}
    </div>
  );
}

export default SlideCard2;
