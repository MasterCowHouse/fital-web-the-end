import { Box, Typography } from "@mui/material";

interface CustomBeneficios {
  id: number;
  iconoBeneficios: string;
  textAlt: string;
  titulo: string;
  texto: JSX.Element;
}

const customBeneficios: CustomBeneficios[] = [
  {
    id: 1,
    iconoBeneficios: "../img/AccesoyGestionenTiempoReal.svg",
    textAlt: "Acceso y Gestión en Tiempo Real",
    titulo: "Acceso y Gestión en Tiempo Real:",
    texto: (
      <span>
        Gestión y monitoreo de activos en <br />
        línea, desde cualquier lugar.
      </span>
    ),
  },
  {
    id: 2,
    iconoBeneficios: "../img/Mayor Transparencia.svg",
    textAlt: "Mayor Transparencia",
    titulo: "Mayor Transparencia:",
    texto: (
      <span>
        Registro inmutable de <br />
        transacciones con tecnología <br />
        blockchain.
      </span>
    ),
  },
  {
    id: 3,
    iconoBeneficios: "../img/Reduccion de Costos y Eficiencia.svg",
    textAlt: "Reducción de Costos y Eficiencia",
    titulo: "Reducción de Costos y Eficiencia:",
    texto: (
      <span>
        Menos intermediarios, procesos <br />
        más rápidos y automatizados.
      </span>
    ),
  },
  {
    id: 4,
    iconoBeneficios: "../img/Flexibilidad y Personalizacion.svg",
    textAlt: "Flexibilidad y Personalización",
    titulo: "Flexibilidad y Personalización:",
    texto: (
      <span>
        Ajustes rápidos y personalizados en <br />
        la distribución de activos.
      </span>
    ),
  },
];

interface CustomBeneficiosDos {
  id: number;
  iconoBeneficiosDos: string;
  textAltDos: string;
  tituloDos: string;
  textoDos: JSX.Element;
}

const customBeneficiosDos: CustomBeneficiosDos[] = [
  {
    id: 1,
    iconoBeneficiosDos: "../img/Seguridad y Proteccion.svg",
    textAltDos: "Seguridad y Protección",
    tituloDos: "Seguridad y Protección:",
    textoDos: (
      <span>
        Mayor seguridad contra fraudes y <br />
        alteraciones con tecnología <br />
        avanzada.
      </span>
    ),
  },
  {
    id: 2,
    iconoBeneficiosDos: "../img/Acceso Global.svg",
    textAltDos: "Acceso Global",
    tituloDos: "Acceso Global:",
    textoDos: (
      <span>
        Administración y distribución de <br />
        activos sin barreras geográficas.
      </span>
    ),
  },
  {
    id: 3,
    iconoBeneficiosDos: "../img/Rapidez en la Implementacion.svg",
    textAltDos: "Rapidez en la Implementación",
    tituloDos: "Rapidez en la Implementación:",
    textoDos: (
      <span>
        Creación y activación del <br />
        fideicomiso de manera rápida y <br /> eficiente.
      </span>
    ),
  },
];

const Beneficios = () => {
  return (
    <Box>
      <Box
        sx={{
          padding: "50px 0px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "50px",
            fontWeight: 900,
          }}
        >
          Beneficios
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: { xs: "center", sm: "start", md: "start", lg: "start" },
          justifyContent: "center",
          flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
        }}
      >
        <Box
          sx={{
            padding: { xs: "0px", sm: "15px", md: "50px", lg: "50px" },
          }}
        >
          {customBeneficios.map(
            ({ iconoBeneficios, textAlt, titulo, texto }, id) => (
              <Box
                key={id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  marginBottom: "50px",
                }}
              >
                <Box
                  sx={{
                    width: {
                      xs: "100px",
                      sm: "125px",
                      md: "150px",
                      lg: "150px",
                    },
                    height: {
                      xs: "100px",
                      sm: "125px",
                      md: "150px",
                      lg: "150px",
                    },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component={"img"}
                    src={iconoBeneficios}
                    alt={textAlt}
                    sx={{
                      width: {
                        xs: "100px",
                        sm: "125px",
                        md: "150px",
                        lg: "150px",
                      },
                      height: {
                        xs: "100px",
                        sm: "125px",
                        md: "150px",
                        lg: "150px",
                      },
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    marginLeft: {
                      xs: "10px",
                      sm: "10px",
                      md: "40px",
                      lg: "40px",
                    },
                    width: { xs: "270px", sm: "auto", md: "auto", lg: "auto" },
                    height: { xs: "auto", sm: "auto", md: "auto", lg: "auto" },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FFC72C",
                      fontWeight: 900,
                      fontSize: {
                        xs: "16px",
                        sm: "14px",
                        md: "16px",
                        lg: "16px",
                      },
                    }}
                  >
                    {titulo}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "16px",
                        sm: "14px",
                        md: "16px",
                        lg: "16px",
                      },
                    }}
                  >
                    {texto}
                  </Typography>
                </Box>
              </Box>
            )
          )}
        </Box>
        <Box
          sx={{
            padding: { xs: "0px", sm: "15px", md: "50px", lg: "50px" },
          }}
        >
          {customBeneficiosDos.map(
            ({ iconoBeneficiosDos, textAltDos, tituloDos, textoDos }, id) => (
              <Box
                key={id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  marginBottom: "50px",
                }}
              >
                <Box
                  sx={{
                    width: {
                      xs: "100px",
                      sm: "125px",
                      md: "150px",
                      lg: "150px",
                    },
                    height: {
                      xs: "100px",
                      sm: "125px",
                      md: "150px",
                      lg: "150px",
                    },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component={"img"}
                    src={iconoBeneficiosDos}
                    alt={textAltDos}
                    sx={{
                      width: {
                        xs: "100px",
                        sm: "125px",
                        md: "150px",
                        lg: "150px",
                      },
                      height: {
                        xs: "100px",
                        sm: "125px",
                        md: "150px",
                        lg: "150px",
                      },
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    marginLeft: {
                      xs: "10px",
                      sm: "10px",
                      md: "40px",
                      lg: "40px",
                    },
                    width: { xs: "270px", sm: "auto", md: "auto", lg: "auto" },
                    height: { xs: "auto", sm: "auto", md: "auto", lg: "auto" },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FFC72C",
                      fontWeight: 900,
                      fontSize: {
                        xs: "16px",
                        sm: "14px",
                        md: "16px",
                        lg: "16px",
                      },
                    }}
                  >
                    {tituloDos}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "16px",
                        sm: "14px",
                        md: "16px",
                        lg: "16px",
                      },
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
    </Box>
  );
};

export default Beneficios;
