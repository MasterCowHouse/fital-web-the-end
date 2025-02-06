import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

const EnFital = () => {
  const t = useTranslations("BuyToken.atFital");
  return (
    <Box>
      <Box
        sx={{
          display: "center",
          alignItems: "center",
          justifyContent: "center",
          padding: {
            xs: "50px 25px 0px 25px",
            sm: "50px 25px 0px 25px",
            md: "0px 100px",
            lg: "0px 100px",
          },
        }}
      >
        <Typography
          sx={{
            border: "2px solid #FFC72C",
            borderRadius: { xs: "50px", sm: "100px", md: "100px", lg: "100px" },
            padding: "20px 60px",
            fontSize: { xs: "20px", sm: "25px", md: "25px", lg: "25px" },
          }}
        >
          {t.raw("title")[0]}{" "}
          <span style={{ fontWeight: 900 }}>{t.raw("title")[1]}</span>
          {t.raw("title")[2]}
          <br />
          {t.raw("title")[3]}{" "}
          <span style={{ fontWeight: 900 }}>{t.raw("title")[4]}</span>
          {t.raw("title")[5]}
          <br />
          <span style={{ fontWeight: 900 }}>{t.raw("title")[6]}</span>
          {t.raw("title")[7]}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "25px", sm: "35px", md: "35px", lg: "35px" },
            padding: "50px 50px",
            textAlign: { xs: "left", sm: "center", md: "center", lg: "center" },
          }}
        >
          <span style={{ fontWeight: 900 }}>{t.raw("description")[0]}</span>{" "}
          {t.raw("description")[1]}
          <span style={{ fontWeight: 900 }}>{t.raw("description")[2]}</span>
          <br />
          {t.raw("description")[3]}
          <span style={{ color: "#FFC72C" }}>{t.raw("description")[4]}</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default EnFital;
