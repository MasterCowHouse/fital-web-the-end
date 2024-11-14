import { Box, Typography } from "@mui/material";

interface CustomComoEmpiezo {
  id: number;
  numero: string;
  texto: JSX.Element;
  imgIcono: string;
  textAlt: string;
}

const customComoEmpiezo: CustomComoEmpiezo[] = [
  {
    id: 1,
    numero: "1",
    texto: (
      <span>
        Regístrate para entrar a la <br />
        revolución inmobiliaria. <br />A partir de ahí te apoyaremos <br />
        en cada paso.
      </span>
    ),
    imgIcono: "../img/Registrate.png",
    textAlt: "Regístrate",
  },
  {
    id: 2,
    numero: "2",
    texto: <span>Selecciona el inmueble</span>,
    imgIcono: "../img/Selecciona el inmueble.png",
    textAlt: "Selecciona el inmueble",
  },
  {
    id: 3,
    numero: "3",
    texto: (
      <span>
        Diversifica tu portfolio <br />
        comprando uno o varios <br />
        inmuebles. La oferta de <br />
        tokens varía. <br />
        <br />
        ¡Algunos inmuebles duran <br />
        pocos minutos!
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
        Adquiere tus tokens. <br />
        Puedes comprar con pesos <br />o cripto, guarda tus tokens <br />e irás
        recibiendo tus <br />
        rendimientos todos los <br />
        meses.
      </span>
    ),
    imgIcono: "../img/Adquiere tus tokens.png",
    textAlt: "Adquiere tus tokens",
  },
];

const ComoEmpiezoResponsive = () => {
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
          ¿Cómo empiezo?
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
