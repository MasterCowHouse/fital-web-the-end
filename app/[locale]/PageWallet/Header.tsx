import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations("Wallet");
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "end",
          justifyContent: "center",
          height: "350px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "35px", sm: "50px", md: "50px", lg: "50px" },
            fontWeight: 900,
          }}
        >
          {t.raw("header")[0]}
          <br />
          {t.raw("header")[1]}
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
