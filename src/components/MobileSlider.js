import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Grid from "@mui/material/Grid";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import SlideCard1 from "./SlideCard1";
import Slide from "./Slide";


import { FreeMode, Navigation, Thumbs } from "swiper";

import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function MobileSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <>
      <Swiper
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Grid container px={2}>
            <SlideCard1 smallScreen={smallScreen} />
          </Grid>
        </SwiperSlide>

       
      </Swiper>
   
    </>
  );
}

export default MobileSlider;
