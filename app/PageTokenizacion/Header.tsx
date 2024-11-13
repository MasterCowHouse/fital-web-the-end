import { Box, Typography } from "@mui/material";
import Link from "next/link";

interface CustomVideo {
  id: number;
  video: string;
}

const customVideo: CustomVideo[] = [
  {
    id: 1,
    video: "/img/Tokenizacion.gif",
  },
];

const Header = () => {
  return (
    <Box>
      {customVideo.map(({ video }, id) => (
        <Box
          key={id}
          sx={{
            // bgcolor: '#7366A0',
            bgcolor: "black",
            backgroundImage: `url(${video})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: {
              xs: "center center",
              sm: "200px center",
              md: "200px center",
              lg: "200px center",
            },
            backgroundSize: "cover",
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
            border: {
              xs: "1px solid black",
              sm: "1px solid pink",
              md: "1px solid green",
              lg: "1px solid red",
            },
          }}
        >
          <Box
            sx={{
              marginLeft: { xs: "0px", sm: "0px", md: "130px", lg: "130px" },
              border: {
                xs: "1px solid black",
                sm: "1px solid pink",
                md: "1px solid green",
                lg: "1px solid red",
              },
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
              Tokeniza tus Inmuebles:
              <br />
              El futuro del mercado
              <br />
              inmobiliario con FITAL
            </Typography>
          </Box>
          <Box
            sx={{
              marginLeft: { xs: "0px", sm: "20px", md: "130px", lg: "130px" },
              marginTop: { xs: "350px", sm: "50px", md: "50px", lg: "50px" },
            }}
          >
            <Link
              href={
                "https://api.whatsapp.com/send?phone=+525619776800&text=Quiero%20tokenizar%20mi%20proyecto%20%F0%9F%8F%A0"
              }
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
                Empieza ahora
              </Box>
            </Link>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Header;
