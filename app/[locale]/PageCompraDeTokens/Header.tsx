import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface CustomVideo {
  id: number;
  video: string;
}

const customVideo: CustomVideo[] = [
  {
    id: 1,
    video: "/img/compra-de-tokens.gif",
  },
];

const Header = () => {
  const t = useTranslations("BuyToken.header");

  return (
    <Box>
      {customVideo.map(({ video }, id) => (
        <Box
          key={id}
          sx={{
            bgcolor: "black",
            backgroundImage: `url(${video})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: {
              xs: "center center",
              sm: "150px center",
              md: "200px center",
              lg: "450px center",
            },
            backgroundSize: "cover",
            width: "100%",
            height: { xs: "none", sm: "100vh", md: "100vh" },
            display: "flex",
            alignItems: {
              xs: "center",
              sm: "start",
              md: "start",
              lg: "cetert",
            },
            justifyContent: {
              xs: "start",
              sm: "center",
              md: "center",
              lg: "center",
            },
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              marginLeft: { xs: "0px", sm: "0px", md: "130px", lg: "130px" },
              padding: {
                xs: "150px 0px 0px 20px",
                sm: "0px 20px",
                md: "0px",
                lg: "0px",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "33px", sm: "40px", md: "63px", lg: "63px" },
              }}
            >
              {t.raw("title")[0]}
              <br />
              <span style={{ color: "#FFC72C", fontWeight: 900 }}>
                {t.raw("title")[1]}{" "}
              </span>
              <span style={{ color: "#FFC72C", fontWeight: 900 }}>
                {t.raw("title")[2]} <br />
                {t.raw("title")[3]}
              </span>
              <br />
              {t.raw("title")[4]}
            </Typography>
          </Box>
          <Box
            sx={{
              marginLeft: { xs: "0px", sm: "20px", md: "130px", lg: "130px" },
              marginTop: { xs: "0px", sm: "50px", md: "50px", lg: "50px" },
              padding: "10px 40px",
            }}
          >
            <Typography
              sx={{
                fontSize: "25px",
              }}
            >
              {t.raw("description")[0]}{" "}
              <span style={{ fontWeight: 900 }}>{t.raw("description")[1]}</span>
              {t.raw("description")[2]}
              <br />
              <span style={{ fontWeight: 900 }}>
                {t.raw("description")[3]}
              </span>{" "}
              {t.raw("description")[4]}
              <br />
              {t.raw("description")[5]}{" "}
              <span style={{ fontWeight: 900 }}>{t.raw("description")[6]}</span>
              .
            </Typography>
          </Box>
          <Box
            sx={{
              marginLeft: { xs: "0px", sm: "20px", md: "130px", lg: "130px" },
              marginTop: { xs: "50px", sm: "50px", md: "50px", lg: "50px" },
              position: "relative",
            }}
            m={4}
          >
            <Link href={"https://i.mtr.cool/GJMQKSAQQG"}>
              <Typography
                sx={{
                  border: "2px solid #FFC72C",
                  borderRadius: "50px",
                  padding: "10px 30px",
                }}
              >
                {t("button")}
              </Typography>
            </Link>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Header;
