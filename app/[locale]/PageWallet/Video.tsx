import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

const Video = () => {
  const t = useTranslations("Wallet");

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
        sx={{
          bgcolor: "black",
          width: { xs: "90%", sm: "300px", md: "500px", lg: "700px" },
          height: { xs: "500px", sm: "300px", md: "500px", lg: "700px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
            src="https://www.youtube.com/embed/naDjl-XjLiM?si=ySz-bb3GoA2lcc5b"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </Box>
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
              fontSize: { xs: "45px", sm: "30px", md: "35px", lg: "45px" },
              width: { xs: "100%", sm: "260px", md: "260px", lg: "280px" },
              height: { xs: "auto", sm: "220px", md: "300px", lg: "450px" },
              wordWrap: {
                xs: "normal",
                sm: "break-word",
                md: "break-word",
                lg: "break-word",
              },
            }}
          >
            <span style={{ fontWeight: 900, color: "#FFC72C" }}>
              {t.raw("video")[0]}
            </span>{" "}
            <span style={{ fontSize: "25px" }}>{t.raw("video")[1]}</span>{" "}
            <span
              style={{ fontWeight: 900, color: "#FFC72C", fontSize: "25px" }}
            >
              {t.raw("video")[2]}
            </span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Video;
