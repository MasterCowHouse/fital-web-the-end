"use client";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
// Slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import styles from "./SliderTokens.styles";
import { alpha } from "@mui/material";

interface CustomSlider {
  id: number;
  precio?: string;
  texto: JSX.Element;
  imgSrc: string;
  linkNFTS: string;
  bgColor: {
    backgroundColor: string;
  };
  textoBtn: string;
  disabled?: boolean;
}

const customSlider: CustomSlider[] = [
  {
    id: 0,
    precio: "Desde 16,150 MXN",
    texto: <span>LOFTS BAWA</span>,
    imgSrc: "./img/bawa.png",
    linkNFTS: "https://bawa.fitalmx.com/",
    bgColor: {
      backgroundColor: "#FFC72C",
    },
    textoBtn: "Ver más",
  },
  {
    id: 1,
    precio: "Proximamente...",
    texto: <span>CowCoin</span>,
    imgSrc: "./img/cowhouse-pti.png",
    linkNFTS: "/",
    bgColor: {
      backgroundColor: "#505050",
    },
    textoBtn: "",
    disabled: true,
  },
];

const SliderTokens = () => {
  return (
    <Box sx={styles.rootContainer}>
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        navigation={true}
        scrollbar={{ draggable: true }}
        loop={true}
        modules={[Navigation]}
        style={styles.swiper}
      >
        {customSlider.map(
          ({ precio, texto, linkNFTS, bgColor, textoBtn, imgSrc }, id) => (
            <Box
              key={id}
              sx={{
                display: "flex",
                height: "100%",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: alpha("#595959", 0.25),
              }}
            >
              <SwiperSlide key={id} style={styles.swiperSlider}>
                <Box sx={{ height: "100%" }}>
                  <Box component={"img"} src={imgSrc} sx={styles.img} />
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    zIndex: 1,
                  }}
                >
                  <Typography
                    sx={{
                      ...bgColor,
                      ...styles.priceLabel,
                    }}
                  >
                    {precio}
                  </Typography>
                </Box>
                <Box sx={styles.infoContainer}>
                  <Typography sx={styles.infoLabel}>{texto}</Typography>
                  <Link href={linkNFTS} target="_blank" style={styles.link}>
                    {textoBtn}
                  </Link>
                </Box>
              </SwiperSlide>
            </Box>
          )
        )}
      </Swiper>
    </Box>
  );
};

export default SliderTokens;
