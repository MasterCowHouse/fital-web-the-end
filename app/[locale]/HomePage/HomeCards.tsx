import { Link } from "@/navigation";
import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

interface CustomCards {
  id: number;
  icono: string;
  titulo: JSX.Element;
  hrefBtn: string;
  btnText: string;
  bgCirculo: string;
}

const HomeCards = () => {
  const t = useTranslations("Home");

  const customCards: CustomCards[] = [
    {
      id: 1,
      icono: "../img/icono1.svg",
      titulo: <span>{t.raw("cards.services")[0]}</span>,
      hrefBtn: "/PageTokenizacion",
      btnText: t("cards.button"),
      bgCirculo: "#FFC72C",
    },
    {
      id: 2,
      icono: "../img/icono2.svg",
      titulo: <span>{t.raw("cards.services")[1]}</span>,
      hrefBtn: "/PageFideicomiso",
      btnText: t("cards.button"),
      bgCirculo: "#524092",
    },
    {
      id: 3,
      icono: "../img/icono3.svg",
      titulo: (
        <span>
          <span>{t.raw("cards.services")[2]}</span>
        </span>
      ),
      hrefBtn: "/PageWallet",
      btnText: t("cards.button"),
      bgCirculo: "#A6024F",
    },
    {
      id: 4,
      icono: "../img/icono4.svg",
      titulo: <span>{t.raw("cards.services")[3]}</span>,
      hrefBtn: "/PageCompraDeTokens",
      btnText: t("cards.button"),
      bgCirculo: "#62D625",
    },
  ];
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
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#210044",
            padding: "70px 55px",
            marginTop: { xs: "50px", sm: "50px", md: "50px", lg: "0px" },
            maxWidth: 330,
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
              display: "flex",
              width: "100%",
              marginTop: "20px",
              marginBottom: "30px",
              justifyContent: "center",
              alignItems: "center",
              minHeight: 150,
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
