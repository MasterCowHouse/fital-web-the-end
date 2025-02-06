import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

interface CustomComoEmpiezo {
  id: number;
  numero: string;
  texto: JSX.Element;
  imgIcono: string;
  textAlt: string;
}

const ComoEmpiezoResponsive = () => {
  const t = useTranslations("BuyToken.invest");

  const customComoEmpiezo: CustomComoEmpiezo[] = [
    {
      id: 1,
      numero: "1",
      texto: (
        <span>
          {t.raw("steps.first")[0]} {t.raw("steps.first")[1]}{" "}
          {t.raw("steps.first")[2]} {t.raw("steps.first")[3]}{" "}
          {t.raw("steps.first")[4]}
        </span>
      ),
      imgIcono: "../img/Registrate.png",
      textAlt: "Regístrate",
    },
    {
      id: 2,
      numero: "2",
      texto: (
        <span>
          {t.raw("steps.second")[0]} {t.raw("steps.second")[1]}
        </span>
      ),
      imgIcono: "../img/Selecciona el inmueble.png",
      textAlt: "Selecciona el inmueble",
    },
    {
      id: 3,
      numero: "3",
      texto: (
        <span>
          {t.raw("steps.third")[0]} {t.raw("steps.third")[1]}{" "}
          {t.raw("steps.third")[2]} {t.raw("steps.third")[3]}{" "}
          {t.raw("steps.third")[4]}
          <br />
          {t.raw("steps.third")[5]} {t.raw("steps.third")[6]}
        </span>
      ),
      imgIcono: "../img/Diversifica.png",
      textAlt: "Diversifica",
    },
    {
      id: 4,
      numero: "4",
      texto: (
        <span>
          {t.raw("steps.fourth")[0]} {t.raw("steps.fourth")[1]}{" "}
          {t.raw("steps.fourth")[2]} {t.raw("steps.fourth")[3]}{" "}
          {t.raw("steps.fourth")[4]} {t.raw("steps.fourth")[5]}{" "}
          {t.raw("steps.fourth")[6]}
        </span>
      ),
      imgIcono: "../img/Adquiere tus tokens.png",
      textAlt: "Adquiere tus tokens",
    },
  ];
  return (
    <Box>
      <Box
        sx={{
          paddingTop: "50px",
        }}
      >
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: 900,
            textAlign: "center",
          }}
        >
          {t.raw("steps.title")[0]} {t.raw("steps.title")[1]}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 2,
          padding: "0px 20px",
        }}
      >
        {customComoEmpiezo.map(({ numero, texto, imgIcono, textAlt }, id) => (
          <Box
            key={id}
            sx={{
              bgcolor: "#524092",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: "50px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "100px",
                  color: "#210044",
                  fontWeight: 900,
                  margin: "0px 30px 0px 30px",
                }}
              >
                {numero}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: "25px",
                  margin: "0px 30px 0px 0px",
                }}
              >
                {texto}
              </Typography>
            </Box>
            <Box>
              <Box component={"img"} src={imgIcono} alt={textAlt} />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ComoEmpiezoResponsive;
