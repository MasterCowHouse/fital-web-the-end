import { Box, Typography } from "@mui/material";
import Link from "next/link";

const HeaderLaEvolucion = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: {
          xs: "column-reverse",
          sm: "column-reverse",
          md: "row",
          lg: "row",
        },
        backgroundColor: "#2A2449",
        padding: "100px 0px",
      }}
    >
      <Box>
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "40px", sm: "40px", md: "30px", lg: "50px" },
              padding: {
                xs: "0px",
                sm: "0px",
                md: "0px 0px 0px 50px",
                lg: "0px",
              },
            }}
          >
            La <span style={{ color: "#FFC72C" }}>evolución del </span>
            <br />
            <span style={{ color: "#FFC72C" }}>Fideicomiso</span> tradicional
            <br />
            al digital.
            <br />
            <span style={{ color: "#FFC72C", fontSize: "30px" }}>
              16/10/2024
            </span>
          </Typography>
        </Box>
        <Box
          sx={{
            padding: {
              xs: "50px 0px",
              sm: "50px 0px",
              md: "50px 0px 50px 50px",
              lg: "50px 0px",
            },
          }}
        >
          <Link href={"/fideicomiso-digital-beneficios"}>
            <Typography
              sx={{
                border: "2px solid #FFC72C",
                borderRadius: "50px",
                width: { xs: "100%", sm: "100%", md: "200px", lg: "200px" },
                textAlign: "center",
                padding: "15px 0px",
              }}
            >
              Leer más
            </Typography>
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          padding: { xs: "20px", sm: "0px", md: "0px 50px 0px 0px", lg: "0px" },
        }}
      >
        <Box
          component={"img"}
          src="./img/fideicomiso.png"
          alt="Fideicomiso"
          sx={{
            width: { xs: "490px", sm: "560px", md: "760px", lg: "760px" },
            height: { xs: "320px", sm: "400px", md: "500px", lg: "500px" },
          }}
        />
      </Box>
    </Box>
  );
};

export default HeaderLaEvolucion;
