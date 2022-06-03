import React from "react";
import Swiper from "react-id-swiper";

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
      <img
        src="https://cdn.europosters.eu/image/1300/julisteet/to-beer-or-not-to-beer-i110509.jpg"
        alt="beers"
      />
      <img
        src="https://images.alko.fi/images/cs_srgb,f_auto,t_medium/cdn/921525/the-original-small-beer-lager.jpg"
        alt="beers"
      />
      <img
        src="https://alkostore24.com/media/catalog/product/cache/d93fad4313d058678385fbb1227fb376/s/t/strongbearbeer.jpg"
        alt="beers"
      />
      {/* <div
        style={{
          backgroundImage:
            "url(https://cdn.europosters.eu/image/1300/julisteet/to-beer-or-not-to-beer-i110509.jpg)",
        }}
      />
      <div
        style={{
          backgroundImage:
            "url(https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/AK57SD/093cf22b4133436093e62e8f282b3152.jpg/f/lyngby-glas-beer-glass-set-of-2-916247.jpg?borderless=1&width=1920)",
        }}
      />
      <div
        style={{
          backgroundImage:
            "url(https://etko.beer/wp-content/uploads/2021/08/ETKO_MixAndMatchVol5.png)",
        }}
      /> */}
    </Swiper>
  );
};

export default CoverflowEffect;
