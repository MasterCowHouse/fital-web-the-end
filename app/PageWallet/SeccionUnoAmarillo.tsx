"use client";
import { Box, Typography } from "@mui/material";
import { ComponentAnimationScroll } from "./ComponentAnimationScroll";

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
            TOKENIZA
            <br />
            <span style={{ color: "#C69417" }}>
              COMPRA
              <br />
              VENDE
              <br />
              TRANSFIERE
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
            Revolucionando
            <br />
            el acceso a
            <br />
            <span style={{ color: "#FFC72C" }}>
              oportunidades
              <br />
              financieras.
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
              MERCADO
              <br />
              TOKEN
              <br />
            </Typography>
            <Typography
              sx={{
                color: "black",
                fontSize: { xs: "25px", sm: "25px", md: "35px", lg: "35px" },
              }}
            >
              Navega por un amplio
              <br />
              catálogo de Tokens
              <br />
              (Activos Virtuales)
              <br /> disponibles para <br /> compra, transferencia <br />y
              colección.
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
            CRYPTO
            <br />
            <span style={{ color: "#680C3A" }}>
              INTERCAMBIA
              <br />
              RÁPIDO
              <br />Y SEGURO
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
            Gestiona tus
            <span style={{ color: "#A6024F" }}>
              <br />
              criptomonedas
              <br />
              al instante
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
              MERCADO
              <br />
              CRYPTO
            </Typography>
            <Typography
              sx={{
                color: "black",
                fontSize: { xs: "25px", sm: "25px", md: "35px", lg: "35px" },
              }}
            >
              Accede a las cotizaciones
              <br />
              en tiempo real de
              <br />
              diversas criptomonedas
              <br />
              intercambia, compra y
              <br />
              vende.
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
            BILLETERA
            <br />
            <span style={{ color: "#146862" }}>
              ENVÍA
              <br />
              RECIBE
              <br />
              GESTIONA
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
            ¡Control
            <br />
            absoluto,
            <br />
            <span style={{ color: "#26D3CA" }}>
              justo cuando
              <br />
              lo necesitas!
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
              BILLETERA
            </Typography>
            <Typography
              sx={{
                color: "black",
                fontSize: { xs: "25px", sm: "25px", md: "35px", lg: "35px" },
              }}
            >
              Aquí obtendrás todas tus
              <br />
              billeteras, incluida la
              <br />
              predeterminada.
              <br />
              También puedes realizar
              <br />
              envíos y recepción de
              <br />
              criptomonedas.
            </Typography>
          </Box>
          <Box component={"img"} src="../img/walletimgSeis.png" />
        </Box>
      </Box>
    </>
  );
};

export default SeccionUnoAmarillo;
