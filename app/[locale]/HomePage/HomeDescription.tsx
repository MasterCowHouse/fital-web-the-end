import { Box, Typography } from "@mui/material";
import Image from "next/image";
import destellos from "@/public/img/destellos1.png";
import logo from "@/public/img/logo-fital.svg";
import { useTranslations } from "next-intl";

const HomeDescription = () => {
  const t = useTranslations("Home");
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
            xs: "50px 25px",
            sm: "50px 25px",
            md: "50px 100px",
            lg: "50px 100px",
          },
        }}
      >
        <Box>
          <Image
            src={logo}
            alt="Logo FItal"
            style={{
              marginTop: "50px",
              marginBottom: "50px",
            }}
          />
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

export default HomeDescription;
