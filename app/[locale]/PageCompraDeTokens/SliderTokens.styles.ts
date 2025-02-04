import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

type StylesTypes = {
  rootContainer: SxProps;
  swiperContainer: SxProps;
  swiper: CSSProperties;
  swiperSlider: CSSProperties;
  img: SxProps;
  infoContainer: SxProps;
  priceLabel: SxProps;
  infoLabel: SxProps;
  link: CSSProperties;
  button: SxProps;
};

const styles: StylesTypes = {
  rootContainer: {
    display: "flex",
    justifySelf: "center",
    marginBottom: "50px",
    justifyContent: "center",
    width: { xs: "100%", md: "80%" },
  },
  swiperContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: { xs: "90%", md: "50%" },
    height: "200px",
    mt: 8,
  },
  swiper: { width: "80%", alignSelf: "center" },
  swiperSlider: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    maxWidth: 300,
    height: "300px",
    objectFit: "contain",
    borderRadius: 30,
    overflow: "hidden",
  },
  img: {
    display: "block",
    width: "100%",
    height: 170,
    objectFit: "cover",
  },
  infoContainer: {
    backgroundColor: "white",
    width: "100%",
    height: "150px",
    position: "absolute",
    marginTop: "150px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderTop: 1,
    borderColor: "#241441",
  },
  infoLabel: {
    color: "black",
    textAlign: "center",
  },
  priceLabel: { color: "black", padding: "10px", borderRadius: "100px" },
  link: {
    color: "#FFC72C",
    fontWeight: 900,
  },
  button: {
    bgcolor: "#7F4CA5",
    color: "white",
    height: 25,
    width: "90%",
    borderRadius: "21px",
  },
};

export default styles;
