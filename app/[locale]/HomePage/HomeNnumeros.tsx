import { Link } from "@/navigation";
import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

interface CustomNumeros {
  id: number;
  titulo: JSX.Element;
  btnText: string;
  hrefNumeros: string;
  numero: string;
}

const HomeNumeros = () => {
  const t = useTranslations("Home.advantages");

  const customNumeros: CustomNumeros[] = [
    {
      id: 1,
      titulo: <span>{t.raw("cards")[0]}</span>,
      btnText: t("button"),
      hrefNumeros: "/PageTokenizacion",
      numero: "1",
    },
    {
      id: 2,
      titulo: <span>{t.raw("cards")[1]}</span>,
      btnText: t("button"),
      hrefNumeros: "/PageFideicomiso",
      numero: "2",
    },
    {
      id: 3,
      titulo: <span>{t.raw("cards")[2]}</span>,
      btnText: t("button"),
      hrefNumeros: "/PageWallet",
      numero: "3",
    },
  ];
  return (
    <Box
      sx={{
        bgcolor: "#29184A",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "25px",
        }}
      >
        <Typography
          sx={{
            fontSize: "37px",
            textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
          }}
        >
          {t("title")}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          flexWrap: "wrap",
          padding: "0px 0px 100px 0px",
        }}
      >
        {customNumeros.map(({ titulo, btnText, hrefNumeros, numero }, id) => (
          <Box
            key={id}
            sx={{
              border: "2px solid #524092",
              width: "430px",
              height: "350px",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "150px",
                  color: "#524092",
                  fontWeight: 900,
                  padding: { xs: "0px 25px", sm: "0px", md: "0px", lg: "0px" },
                }}
              >
                {numero}
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  width: "320px",
                  height: "105px",
                  marginTop: "-50px",
                  marginLeft: "20px",
                  padding: { xs: "0px 25px", sm: "0px", md: "0px", lg: "0px" },
                }}
              >
                {titulo}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "50px",
              }}
            >
              <Link href={hrefNumeros}>
                <Box
                  sx={{
                    background: "#524092",
                    width: "200px",
                    textAlign: "center",
                    borderRadius: "100px",
                    padding: "5px 0px",
                  }}
                >
                  {btnText}
                </Box>
              </Link>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HomeNumeros;
