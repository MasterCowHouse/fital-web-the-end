"use client";
import { Box, Typography } from "@mui/material";
import { ComponentAnimationScroll } from "./ComponentAnimationScroll";
import { useTranslations } from "next-intl";

const SeccionUnoAmarillo = () => {
  const { elemtoRef: elemtoRef1, isIntersecting: isIntersecting1 } =
    ComponentAnimationScroll({
      threshold: 0.3,
    });
  const { elemtoRef: elemtoRef2, isIntersecting: isIntersecting2 } =
    ComponentAnimationScroll({
      threshold: 0.3,
    });
  const { elemtoRef: elemtoRef3, isIntersecting: isIntersecting3 } =
    ComponentAnimationScroll({
      threshold: 0.3,
    });

  const t = useTranslations("Wallet.body");

  return (
    <>
      <Box
        ref={elemtoRef1}
        sx={{
          backgroundColor: isIntersecting1 ? "#FFC72C" : "retransparent",
          transition: "all 1s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#FFC72C",
            padding: {
              // xs: "50px 35px",
              xs: "50px 5px",
              sm: "50px 35px",
              md: "50px 100px",
              lg: "50px 330px",
            },
            borderRadius: { xs: "20px", sm: "50px", md: "50px", lg: "50px" },
            position: "relative",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "25px", sm: "70px", md: "70px", lg: "70px" },
              letterSpacing: "20px",
            }}
          >
            {t.raw("yellow.title")[0]}
            <br />
            <span style={{ color: "#C69417" }}>
              {t.raw("yellow.title")[1]}
              <br />
              {t.raw("yellow.title")[2]}
              <br />
              {t.raw("yellow.title")[3]}
            </span>
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#210044",
            padding: {
              xs: "50px 25px",
              sm: "50px 25px",
              md: "50px 100px",
              lg: "50px 150px",
            },
            borderRadius: { xs: "20px", sm: "50px", md: "50px", lg: "50px" },
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column-reverse",
              sm: "column-reverse",
              md: "column-reverse",
              lg: "row",
            },
          }}
        >
          <Box component={"img"} src="../img/walletimgUno.png" />
          <Typography
            sx={{
              fontSize: { xs: "35px", sm: "35px", md: "45px", lg: "70px" },
            }}
          >
            {t.raw("yellow.card1")[0]}
            <br />
            {t.raw("yellow.card1")[1]}
            <br />
            <span style={{ color: "#FFC72C" }}>
              {t.raw("yellow.card1")[2]}
              <br />
              {t.raw("yellow.card1")[3]}
            </span>
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            padding: {
              xs: "50px 25px",
              sm: "50px 25px",
              md: "50px 100px",
              lg: "50px 150px",
            },
            borderRadius: { xs: "20px", sm: "50px", md: "50px", lg: "50px" },
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "column",
              lg: "row",
            },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "35px", sm: "35px", md: "45px", lg: "70px" },
                color: "#FFC72C",
              }}
            >
              {t.raw("yellow.card2.title")[0]}
              <br />
              {t.raw("yellow.card2.title")[1]}
              <br />
            </Typography>
            <Typography
              sx={{
                color: "black",
                fontSize: { xs: "25px", sm: "25px", md: "35px", lg: "35px" },
              }}
            >
              {t.raw("yellow.card2.description")[0]}
              <br />
              {t.raw("yellow.card2.description")[1]}
              <br />
              {t.raw("yellow.card2.description")[2]}
              <br /> {t.raw("yellow.card2.description")[3]} <br />{" "}
              {t.raw("yellow.card2.description")[4]} <br />
              {t.raw("yellow.card2.description")[5]}
            </Typography>
          </Box>
          <Box component={"img"} src="../img/walletimgDos.png" />
        </Box>
      </Box>
      <Box
        ref={elemtoRef2}
        sx={{
          backgroundColor: isIntersecting2 ? "#A6024F" : "retransparent",
          transition: "all 1s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#A6024F",
            padding: {
              xs: "50px 5px",
              sm: "50px 35px",
              md: "50px 100px",
              lg: "50px 330px",
            },
            borderRadius: { xs: "20px", sm: "50px", md: "50px", lg: "50px" },
            position: "relative",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "25px", sm: "70px", md: "70px", lg: "70px" },
              letterSpacing: "20px",
            }}
          >
            {t.raw("magenta.title")[0]}
            <br />
            <span style={{ color: "#680C3A" }}>
              {t.raw("magenta.title")[1]}
              <br />
              {t.raw("magenta.title")[2]}
              <br />
              {t.raw("magenta.title")[3]}
            </span>
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#210044",
            padding: {
              xs: "50px 25px",
              sm: "50px 25px",
              md: "50px 100px",
              lg: "50px 150px",
            },
            borderRadius: { xs: "20px", sm: "50px", md: "50px", lg: "50px" },
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: {
              xs: "column-reverse",
              sm: "column-reverse",
              md: "column-reverse",
              lg: "row",
            },
          }}
        >
          <Box component={"img"} src="../img/walletimgTres.png" />
          <Typography
            sx={{
              fontSize: { xs: "35px", sm: "35px", md: "45px", lg: "70px" },
            }}
          >
            {t.raw("magenta.card1")[0]}
            <span style={{ color: "#A6024F" }}>
              <br />
              {t.raw("magenta.card1")[1]}
              <br />
              {t.raw("magenta.card1")[2]}
            </span>
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            padding: {
              xs: "50px 25px",
              sm: "50px 25px",
              md: "50px 100px",
              lg: "50px 150px",
            },
            borderRadius: { xs: "20px", sm: "50px", md: "50px", lg: "50px" },
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "column",
              lg: "row",
            },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "35px", sm: "35px", md: "45px", lg: "70px" },
                color: "#A6024F",
              }}
            >
              {t.raw("magenta.card2.title")[0]}
              <br />
              {t.raw("magenta.card2.title")[1]}
            </Typography>
            <Typography
              sx={{
                color: "black",
                fontSize: { xs: "25px", sm: "25px", md: "35px", lg: "35px" },
              }}
            >
              {t.raw("magenta.card2.description")[0]}
              <br />
              {t.raw("magenta.card2.description")[1]}
              <br />
              {t.raw("magenta.card2.description")[2]}
              <br />
              {t.raw("magenta.card2.description")[3]}
              <br />
              {t.raw("magenta.card2.description")[4]}
            </Typography>
          </Box>
          <Box component={"img"} src="../img/walletimgCuatro.png" />
        </Box>
      </Box>
      <Box
        ref={elemtoRef3}
        sx={{
          backgroundColor: isIntersecting3 ? "#26D3CA" : "retransparent",
          transition: "all 1s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#26D3CA",
            padding: {
              xs: "50px 35px",
              sm: "50px 35px",
              md: "50px 100px",
              lg: "50px 330px",
            },
            borderRadius: { xs: "20px", sm: "50px", md: "50px", lg: "50px" },
            position: "relative",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "25px", sm: "70px", md: "70px", lg: "70px" },
              letterSpacing: "20px",
            }}
          >
            {t.raw("aqua.title")[0]}
            <br />
            <span style={{ color: "#146862" }}>
              {t.raw("aqua.title")[1]}
              <br />
              {t.raw("aqua.title")[2]}
              <br />
              {t.raw("aqua.title")[3]}
            </span>
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#210044",
            padding: {
              xs: "50px 25px",
              sm: "50px 25px",
              md: "50px 100px",
              lg: "50px 150px",
            },
            borderRadius: { xs: "20px", sm: "50px", md: "50px", lg: "50px" },
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: {
              xs: "column-reverse",
              sm: "column-reverse",
              md: "column-reverse",
              lg: "row",
            },
          }}
        >
          <Box component={"img"} src="../img/walletimgCinco.png" />
          <Typography
            sx={{
              fontSize: { xs: "35px", sm: "35px", md: "45px", lg: "70px" },
            }}
          >
            {t.raw("aqua.card1")[0]}
            <br />
            {t.raw("aqua.card1")[1]}
            <br />
            <span style={{ color: "#26D3CA" }}>
              {t.raw("aqua.card1")[2]}
              <br />
              {t.raw("aqua.card1")[3]}
            </span>
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            padding: {
              xs: "50px 25px",
              sm: "50px 25px",
              md: "50px 100px",
              lg: "50px 150px",
            },
            borderRadius: { xs: "20px", sm: "50px", md: "50px", lg: "50px" },
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "column",
              lg: "row",
            },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "35px", sm: "35px", md: "45px", lg: "70px" },
                color: "#26D3CA",
              }}
            >
              {t("aqua.card2.title")}
            </Typography>
            <Typography
              sx={{
                color: "black",
                fontSize: { xs: "25px", sm: "25px", md: "35px", lg: "35px" },
              }}
            >
              {t.raw("aqua.card2.description")[0]}
              <br />
              {t.raw("aqua.card2.description")[1]}
              <br />
              {t.raw("aqua.card2.description")[2]}
              <br />
              {t.raw("aqua.card2.description")[3]}
              <br />
              {t.raw("aqua.card2.description")[4]}
              <br />
              {t.raw("aqua.card2.description")[5]}
            </Typography>
          </Box>
          <Box component={"img"} src="../img/walletimgSeis.png" />
        </Box>
      </Box>
    </>
  );
};

export default SeccionUnoAmarillo;
