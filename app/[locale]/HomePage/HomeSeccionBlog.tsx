import { Link } from "@/navigation";
import { Box, Typography } from "@mui/material";
import { alpha } from "@mui/material";
import { useTranslations } from "next-intl";

interface CustomBlog {
  id: number;
  bgBlog: string;
  fecha: string;
  texto: JSX.Element;
  hrefBtnBlog: string;
  btnText: string;
}

const HomeSeccionBlog = () => {
  const t = useTranslations("Home.blog");

  const customBlog: CustomBlog[] = [
    {
      id: 1,
      bgBlog: "./img/fideicomiso.png",
      fecha: "16/09/2024",
      texto: <span>{t.raw("blogs")[0]}</span>,
      hrefBtnBlog: "/fideicomiso-digital-beneficios",
      btnText: t("button"),
    },
    {
      id: 2,
      bgBlog:
        "../img/diferencia-entre-venta-tradicional-de-inmuebles-y-tokenizacion-de-inmuebles.png",
      fecha: "16/10/2024",
      texto: <span>{t.raw("blogs")[1]}</span>,
      hrefBtnBlog:
        "/diferencia-entre-venta-tradicional-de-inmuebles-y-tokenizacion-de-inmuebles",
      btnText: t("button"),
    },
    {
      id: 3,
      bgBlog: "../img/claves-invertir-bienes-raices-criptomonedas.png",
      fecha: "14/08/2024",
      texto: <span>{t.raw("blogs")[2]}</span>,
      hrefBtnBlog: "/claves-invertir-bienes-raices-criptomonedas",
      btnText: t("button"),
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#241441",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: { xs: "0px", sm: "100px", md: "100px", lg: "100px" },
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "58px", sm: "68px", md: "68px", lg: "68px" },
              textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
            }}
          >
            {t("title")}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "30px",
              textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
            }}
          >
            {t("description")}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          flexWrap: "wrap",
        }}
      >
        {customBlog.map(
          ({ bgBlog, fecha, texto, hrefBtnBlog, btnText }, id) => (
            <Box key={id} sx={{ padding: "0px 0px 50px 30px" }}>
              <Box
                sx={{
                  width: {
                    xs: "350px",
                    sm: "400px",
                    md: "400px",
                    lg: "400px",
                  },
                  height: "400px",
                  backgroundColor: alpha("#210044", 0.5),
                  zIndex: 999,
                }}
              >
                <Box
                  component={"img"}
                  src={bgBlog}
                  sx={{
                    zIndex: -2,
                    position: "absolute",
                    objectFit: "cover",
                    width: {
                      xs: "350px",
                      sm: "400px",
                      md: "400px",
                      lg: "400px",
                    },
                    height: "400px",
                  }}
                />
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    height: "100%",
                    width: "90%",
                    alignItems: "flex-start",
                    // justifyContent: "end",
                    flexDirection: "column-reverse",
                    padding: "10px",
                    gap: 1,
                    p: 4,
                  }}
                >
                  <Typography>{texto}</Typography>
                  <Typography>{fecha}</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "25px",
                  marginBottom: "100px",
                }}
              >
                <Link href={hrefBtnBlog}>
                  <Box
                    sx={{
                      border: "2px solid #FFC72C",
                      borderRadius: "100px",
                      padding: "10px 20px",
                      textAlign: "center",
                      width: "200px",
                    }}
                  >
                    {btnText}
                  </Box>
                </Link>
              </Box>
            </Box>
          )
        )}
      </Box>
    </Box>
  );
};

export default HomeSeccionBlog;
