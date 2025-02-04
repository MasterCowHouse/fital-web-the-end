import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

interface CustomIconosVentajas {
  id: number;
  srcIcono: string;
  titulo: string;
  texto: JSX.Element;
}

const Ventajas = () => {
  const t = useTranslations("Tokenize.advantages");

  const customIconosVentajas: CustomIconosVentajas[] = [
    {
      id: 1,
      srcIcono: "../img/IconoVentajas1.svg",
      titulo: t("liquidity.title"),
      texto: <span>{t("liquidity.description")}</span>,
    },
    {
      id: 2,
      srcIcono: "../img/IconoVentajas2.svg",
      titulo: t("security.title"),
      texto: <span>{t("security.description")}</span>,
    },
    {
      id: 3,
      srcIcono: "../img/IconoVentajas3.svg",
      titulo: t("transparency.title"),
      texto: <span>{t("transparency.description")}</span>,
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#210044",
        marginTop: "100px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "100px",
          textAlign: { xs: "center", sm: "center", md: "center", lg: "center" },
        }}
      >
        <Typography
          sx={{
            fontSize: "50px",
          }}
        >
          {t("title")}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexWrap: "wrap",
          paddingBottom: "100px",
        }}
      >
        {customIconosVentajas.map(({ srcIcono, titulo, texto }, id) => (
          <Box
            key={id}
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 280,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: "50px",
              }}
            >
              <Box
                component={"img"}
                src={srcIcono}
                alt="Ventajas de la tokenización"
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#FFC72C",
                }}
              >
                {titulo}
              </Typography>
            </Box>
            <Box
              sx={{
                height: "150px",
              }}
            >
              <Typography>{texto}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Ventajas;
