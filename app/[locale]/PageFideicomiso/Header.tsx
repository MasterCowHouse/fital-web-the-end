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
    video: "/img/Fideicomiso.gif",
  },
];

const Header = () => {
  const t = useTranslations("DigitalTrust.header");
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
              xs: "center 480px",
              sm: "200px center",
              md: "200px center",
              lg: "200px center",
            },
            backgroundSize: {
              xs: "70%",
              sm: "cover",
              md: "cover",
              lg: "cover",
            },
            width: "100%",
            height: "100vh",
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
                fontSize: { xs: "43px", sm: "43px", md: "63px", lg: "63px" },
              }}
            >
              {t("title")}
              <br />
              {t.raw("description")[0]}
              <br />
              {t.raw("description")[1]}
            </Typography>
          </Box>
          <Box
            sx={{
              marginLeft: { xs: "0px", sm: "20px", md: "130px", lg: "130px" },
              marginTop: { xs: "50px", sm: "50px", md: "50px", lg: "50px" },
            }}
          >
            <Link
              href={"https://imperio.fitalmx.com/"}
              style={{
                fontSize: "30px",
              }}
            >
              <Box
                sx={{
                  border: "2px solid #FFC72C",
                  padding: "20px 30px",
                  borderRadius: "100px",
                }}
              >
                {t("button")}
              </Box>
            </Link>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Header;
