import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

const ServiciosVideo = () => {
  const t = useTranslations("Tokenize.services");

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        flexDirection: {
          xs: "column-reverse",
          sm: "column-reverse",
          md: "row",
          lg: "row",
        },
      }}
    >
      <Box
        className="flex items-center justify-center"
        sx={{
          width: { xs: "90%", sm: "350px", md: "500px", lg: "700px" },
          height: { xs: "500px", sm: "350px", md: "500px", lg: "700px" },
        }}
      >
        <iframe
          style={{
            width: "100%",
            height: "100%",
          }}
          src="https://www.youtube.com/embed/_nxmKgWeZx8?si=B00p0K9r5XzMvDLp"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: {
            xs: "center",
            sm: "flex-start",
            md: "flex-start",
            lg: "flex-start",
          },
          width: { xs: "90%", sm: "auto", md: "auto", lg: "auto" },
        }}
      >
        <Box
          sx={{
            textAlign: { xs: "center", sm: "left", md: "left", lg: "left" },
          }}
        >
          <Typography
            sx={{
              wordWrap: {
                xs: "normal",
                sm: "break-word",
                md: "break-word",
                lg: "break-word",
              },
              width: { xs: "100%", sm: "330px", md: "330px", lg: "360px" },
              fontSize: { xs: "30px", sm: "30px", md: "55px", lg: "55px" },
            }}
          >
            {t.raw("title")[0]}{" "}
            <span style={{ color: "#FFC72C" }}> {t.raw("title")[1]} </span>
            {t.raw("title")[2]}{" "}
            <span style={{ color: "#FFC72C" }}>{t.raw("title")[3]}</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ServiciosVideo;
