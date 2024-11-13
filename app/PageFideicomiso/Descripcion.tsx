import { Box, Typography } from "@mui/material";
import Image from "next/image";
import destellos from "@/public/img/destellos1.png";

const Descripcion = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "100px 0px",
      }}
    >
      <Box>
        <Image
          src={destellos}
          alt="Destellos"
          style={{
            position: "relative",
          }}
        />
      </Box>
      <Box
        sx={{
          backgroundColor: "#341F5F",
          width: "90%",
          height: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          // padding: '50px 100px',
          padding: {
            xs: "50px 20px",
            sm: "50px 20px",
            md: "50px 20px",
            lg: "50px 100px",
          },
        }}
      >
        <Box>
          <Typography
            sx={{
              // fontSize: '60px'
              fontSize: { xs: "60px", sm: "60px", md: "60px", lg: "60px" },
            }}
          >
            ¿Qué es?
          </Typography>
        </Box>
        <Box
          sx={{
            marginBottom: "50px",
            border: {
              xs: "1px solid black",
              sm: "1px solid pink",
              md: "1px solid green",
              lg: "1px solid red",
            },
          }}
        >
          <Typography
            sx={{
              // fontSize: '30px',
              fontSize: { xs: "20px", sm: "20px", md: "30px", lg: "30px" },
            }}
          >
            Es el proceso de convertir activos inmobiliarios en tokens
            digitales. Esto permite que las
            <br />
            propiedades sean divididas en fracciones más pequeñas, facilitando
            la entrada en el mercado
            <br />
            inmobiliario con menos complicaciones. Además, al alojarse en una
            wallet el blockchain
            <br />
            garantiza transparencia y seguridad en todas las transacciones.
          </Typography>
        </Box>
      </Box>
      <Box>
        <Image
          src={destellos}
          alt="Destellos"
          style={{
            position: "relative",
          }}
        />
      </Box>
    </Box>
  );
};

export default Descripcion;
