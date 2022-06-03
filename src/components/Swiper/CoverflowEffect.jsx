import React from "react";
import Swiper from "react-id-swiper";
import "../../../node_modules/swiper/swiper.min.css";
// import classes from "./CoverflowEffect.module.css";

const CoverflowEffect = () => {
  const params = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  };

  return (
    <Swiper {...params}>
      <div>
        <img
          // className={classes.img}
          src="https://cdn.europosters.eu/image/1300/julisteet/to-beer-or-not-to-beer-i110509.jpg"
          alt="beers"
        />
        <img
          // className={classes.img}
          src="https://images.alko.fi/images/cs_srgb,f_auto,t_medium/cdn/921525/the-original-small-beer-lager.jpg"
          alt="beers"
        />
        <img
          // className={classes.img}
          src="https://alkostore24.com/media/catalog/product/cache/d93fad4313d058678385fbb1227fb376/s/t/strongbearbeer.jpg"
          alt="beers"
        />
      </div>
    </Swiper>
  );
};

export default CoverflowEffect;
