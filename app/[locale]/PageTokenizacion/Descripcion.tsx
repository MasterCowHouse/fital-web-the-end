import { Box, Typography } from "@mui/material";
import Image from "next/image";
import destellos from "@/public/img/destellos1.png";
import { useTranslations } from "next-intl";

const Descripcion = () => {
  const t = useTranslations("Tokenize.description");

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
              fontSize: { xs: "60px", sm: "60px", md: "60px", lg: "60px" },
            }}
          >
            {t("title")}
          </Typography>
        </Box>
        <Box
          sx={{
            marginBottom: "50px",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "20px", sm: "20px", md: "30px", lg: "30px" },
            }}
          >
            {t("description")}
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
