import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Dudas = () => {
  const t = useTranslations("BuyToken.doubts");

  return (
    <Box>
      <Box
        sx={{
          padding: "50px 0px",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontWeight: 900,
              color: "#FFC72C",
              fontSize: "50px",
              textAlign: "center",
            }}
          >
            {t("title")}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "30px", sm: "35px", md: "50px", lg: "50px" },
              textAlign: "center",
            }}
          >
            {t.raw("description")[0]}{" "}
            <span style={{ fontWeight: 900 }}>{t.raw("description")[1]}</span>
            <br />
            {t.raw("description")[2]}{" "}
            <span style={{ fontWeight: 900 }}>{t.raw("description")[3]}</span>{" "}
            {t.raw("description")[4]}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link
          href={
            "https://api.whatsapp.com/send?phone=+525619776800&text=Quiero%20comprar%20tokens,%20me%20comparten%20m%C3%A1s%20informaci%C3%B3n%20%F0%9F%8F%A0%20"
          }
        >
          <Typography
            sx={{
              border: "2px solid #FFC72C",
              borderRadius: "100px",
              width: "200px",
              textAlign: "center",
              padding: "10px 0px",
            }}
          >
            {t("button")}
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Dudas;
