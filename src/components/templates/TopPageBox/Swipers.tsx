// import Swiper core and required modules
import React from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Swiper, SwiperSlide } from "swiper/react";

import NowAnimeCards from "../Cards/NowAnimeCards";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { TitleOutlined } from "@material-ui/icons";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

const useStyles = makeStyles((theme) => ({
  Swipers: {
    padding: 3,
  },
  SwiperCards: {
    padding: "0px 0px 50px",
  },
}));

const Swipers: React.FC = () => {
  interface eachData {
    title: string;
  }

  const eachData = [
    {
      title: "",
    },
    {
      title: "",
    },
    {
      title: "",
    },
    {
      title: "",
    },
    {
      title: "",
    },
    {
      title: "",
    },
    {
      title: "",
    },
    {
      title: "",
    },
    {
      title: "",
    },
    {
      title: "",
    },
    {
      title: "",
    },
  ];

  const classes = useStyles();

  return (
    <Swiper
      pagination
      className={classes.Swipers}
      spaceBetween={20}
      slidesPerView={3}
      navigation={{
        prevEl: ".button_prev",
        nextEl: ".button_next",
      }}
    >
      {eachData.map((data) => (
        <SwiperSlide className={classes.SwiperCards}>
          <h2>{data.title}</h2>
          <NowAnimeCards />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Swipers;
