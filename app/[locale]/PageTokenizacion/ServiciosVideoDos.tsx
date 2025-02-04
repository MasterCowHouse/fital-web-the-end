import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

const ServiciosVideoDos = () => {
  const t = useTranslations("Tokenize.services2");

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        flexDirection: {
          xs: "column-reverse",
          sm: "row",
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
          src="https://www.youtube.com/embed/xSScs4tfga4?si=cFrfQd5_JBXrEp9o"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: {
            xs: "center",
            sm: "flex-start",
            md: "flex-start",
            lg: "flex-start",
          },
          justifyContent: "center",
          flexDirection: "column",
          width: { xs: "90%", sm: "auto", md: "auto", lg: "auto" },
        }}
      >
        <Box
          sx={{
            marginBottom: { xs: "0px", sm: "50px", md: "50px", lg: "50px" },
            textAlign: { xs: "center", sm: "left", md: "left", lg: "left" },
          }}
        >
          <Typography
            sx={{
              fontSize: "45px",
              color: "#FFC72C",
              fontWeight: 900,
              width: { xs: "100%", sm: "260px", md: "260px", lg: "260px" },
              height: "200px",
              wordWrap: {
                xs: "normal",
                sm: "break-word",
                md: "break-word",
                lg: "break-word",
              },
            }}
          >
            {t("title")}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "25px",
              width: { xs: "100%", sm: "260px", md: "260px", lg: "260px" },
              wordWrap: {
                xs: "normal",
                sm: "break-word",
                md: "break-word",
                lg: "break-word",
              },
              textAlign: { xs: "center", sm: "left", md: "left", lg: "left" },
            }}
          >
            {t("description")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ServiciosVideoDos;
