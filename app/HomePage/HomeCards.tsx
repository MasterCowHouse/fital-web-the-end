import { Box, Typography } from "@mui/material";
import Link from "next/link";

interface CustomCards {
  id: number;
  icono: string;
  titulo: JSX.Element;
  hrefBtn: string;
  btnText: string;
  bgCirculo: string;
}

const customCards: CustomCards[] = [
  {
    id: 1,
    icono: "../img/icono1.svg",
    titulo: (
      <span>
        Tokenización <br />
        de inmuebles
      </span>
    ),
    hrefBtn: "/PageTokenizacion",
    btnText: "Descubre más",
    bgCirculo: "#FFC72C",
  },
  {
    id: 2,
    icono: "../img/icono2.svg",
    titulo: (
      <span>
        Fideicomiso <br />
        digital
      </span>
    ),
    hrefBtn: "/PageFideicomiso",
    btnText: "Descubre más",
    bgCirculo: "#524092",
  },
  {
    id: 3,
    icono: "../img/icono3.svg",
    titulo: (
      <span>
        FITAL <br />
        Wallet
      </span>
    ),
    hrefBtn: "/PageWallet",
    btnText: "Descubre más",
    bgCirculo: "#A6024F",
  },
  {
    id: 4,
    icono: "../img/icono4.svg",
    titulo: (
      <span>
        Compra de <br />
        Tokens <br />
        (Activo Virtual)
      </span>
    ),
    hrefBtn: "/PageCompraDeTokens",
    btnText: "Descubre más",
    bgCirculo: "#62D625",
  },
];
const HomeCards = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        flexWrap: "wrap",
        padding: "100px 0px",
      }}
    >
      {customCards.map(({ icono, titulo, hrefBtn, btnText, bgCirculo }, id) => (
        <Box
          key={id}
          sx={{
            backgroundColor: "#210044",
            padding: "70px 55px",
            marginTop: { xs: "50px", sm: "50px", md: "50px", lg: "0px" },
          }}
        >
          <Box
            sx={{
              backgroundColor: `${bgCirculo}`,
              borderRadius: "200px",
              padding: "50px",
              position: "relative",
              marginTop: "-150px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component={"img"}
              src={icono}
              sx={{
                width: "110px",
                height: "110px",
              }}
            />
          </Box>
          <Box
            sx={{
              marginTop: "50px",
              marginBottom: "50px",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "30px",
              }}
            >
              {titulo}
            </Typography>
          </Box>
          <Box>
            <Link
              href={hrefBtn}
              style={{
                textAlign: "center",
                fontSize: "20px",
              }}
            >
              <Box
                sx={{
                  border: "1px solid #FFC72C",
                  borderRadius: "50px",
                  padding: "20px 0px",
                }}
              >
                {btnText}
              </Box>
            </Link>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default HomeCards;
