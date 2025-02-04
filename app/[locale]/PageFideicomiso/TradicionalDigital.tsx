import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

interface CustomFideicomiso {
  id: number;
  textoUno: JSX.Element;
  icono: string;
  textIcono: JSX.Element;
  textAlt: string;
  textoDos: JSX.Element;
}

const TradicionalDigital = () => {
  const t = useTranslations("DigitalTrust.traditional");

  const customFideicomiso: CustomFideicomiso[] = [
    {
      id: 1,
      textoUno: <span>{t("creation.traditional")}</span>,
      icono: "../img/Procesodecreacion.svg",
      textIcono: <span>{t("creation.title")}</span>,
      textAlt: "Proceso de creación",
      textoDos: <span>{t("creation.digital")}</span>,
    },
    {
      id: 2,
      textoUno: <span>{t("management.traditional")}</span>,
      icono: "../img/Gestiondebienes.svg",
      textIcono: <span>{t("management.title")}</span>,
      textAlt: "Gestión de bienes",
      textoDos: <span>{t("management.digital")}</span>,
    },
    {
      id: 3,
      textoUno: <span>{t("transparency.traditional")}</span>,
      icono: "../img/TransparenciaySeguridad.svg",
      textIcono: <span>{t("transparency.title")}</span>,
      textAlt: "Transparencia y Seguridad",
      textoDos: <span>{t("transparency.digital")}</span>,
    },
    {
      id: 4,
      textoUno: <span>{t("flexibilty.traditional")}</span>,
      icono: "../img/Flexibilidad.svg",
      textIcono: <span>{t("flexibilty.title")}</span>,
      textAlt: "Flexibilidad",
      textoDos: <span>{t("flexibilty.digital")}</span>,
    },
    {
      id: 5,
      textoUno: <span>{t("cost.traditional")}</span>,
      icono: "../img/Costos.svg",
      textIcono: <span>{t("cost.title")}</span>,
      textAlt: "Costos",
      textoDos: <span>{t("cost.digital")}</span>,
    },
  ];
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "30px", sm: "40px", md: "40px", lg: "50px" },
            width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
            textAlign: {
              xs: "center",
              sm: "center",
              md: "center",
              lg: "center",
            },
          }}
        >
          Fideicomiso Tradicional{" "}
          <span style={{ color: "#FFC72C", fontWeight: 900 }}>VS</span>{" "}
          Fideicomiso Digital
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: "50px",
        }}
      >
        {customFideicomiso.map(
          ({ textoUno, icono, textIcono, textAlt, textoDos }, id) => (
            <Box
              key={id}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "50px",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#2B214C",
                  width: { xs: "150px", sm: "400px", md: "400px", lg: "400px" },
                  height: "130px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                <Typography
                  sx={{
                    padding: {
                      xs: "10px 10px",
                      sm: "10px 15px",
                      md: "10px 50px",
                      lg: "10px 50px",
                    },
                    fontSize: {
                      xs: "12px",
                      sm: "14px",
                      md: "16px",
                      lg: "16px",
                    },
                    width: { xs: "100px", sm: "100%", md: "100%", lg: "100%" },
                    height: { xs: "auto", sm: "auto", md: "auto", lg: "auto" },
                  }}
                >
                  {textoUno}
                </Typography>
              </Box>
              <Box
                sx={{
                  bgcolor: "#FFC72C",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  borderRadius: "25px",
                  width: { xs: "30%", sm: "auto", md: "auto", lg: "200px" },
                  height: {
                    xs: "200px",
                    sm: "200px",
                    md: "200px",
                    lg: "200px",
                  },
                }}
              >
                <Box
                  component={"img"}
                  src={icono}
                  alt={textAlt}
                  sx={{
                    width: "100px",
                    height: "100px",
                  }}
                />
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#524092",
                    fontWeight: 900,

                    width: "130px",
                    wordWrap: {
                      xs: "normal",
                      sm: "break-word",
                      md: "break-word",
                      lg: "break-word",
                    },
                  }}
                >
                  {textIcono}
                </Typography>
              </Box>
              <Box
                sx={{
                  bgcolor: "#2B214C",
                  width: { xs: "150px", sm: "400px", md: "400px", lg: "400px" },
                  height: "130px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    padding: {
                      xs: "10px 10px",
                      sm: "10px 15px",
                      md: "10px 50px",
                      lg: "10px 50px",
                    },
                    fontSize: {
                      xs: "12px",
                      sm: "14px",
                      md: "16px",
                      lg: "16px",
                    },
                    width: { xs: "100px", sm: "100%", md: "100%", lg: "100%" },
                    height: { xs: "auto", sm: "auto", md: "auto", lg: "auto" },
                  }}
                >
                  {textoDos}
                </Typography>
              </Box>
            </Box>
          )
        )}
      </Box>
    </Box>
  );
};

export default TradicionalDigital;
