import { Box, Typography } from "@mui/material";
import Image from "next/image";
import img from "@/public/img/Fital Ofrece.png";
import { useTranslations } from "next-intl";

interface CustomFitalOfrece {
  id: number;
  numero: string;
  titulo: string;
}

const HomeFitalOfrece = () => {
  const t = useTranslations("Home.offers");

  const customFitalOfrece: CustomFitalOfrece[] = [
    {
      id: 1,
      numero: "1",
      titulo: t.raw("offers")[0],
    },
    {
      id: 2,
      numero: "2",
      titulo: t.raw("offers")[1],
    },
    {
      id: 3,
      numero: "3",
      titulo: t.raw("offers")[2],
    },
    {
      id: 4,
      numero: "4",
      titulo: t.raw("offers")[3],
    },
    {
      id: 5,
      numero: "5",
      titulo: t.raw("offers")[4],
    },
    {
      id: 6,
      numero: "6",
      titulo: t.raw("offers")[5],
    },
    {
      id: 7,
      numero: "7",
      titulo: t.raw("offers")[6],
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
      }}
    >
      <Box>
        <Box
          sx={{
            marginLeft: "55px",
            padding: {
              xs: "0px 50px",
              sm: "0px 100px",
              md: "0px 0px 0px 100px",
              lg: "0px 0px 0px 100px",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "68px",
            }}
          >
            <span
              style={{
                color: "#FFC72C",
              }}
            >
              {t.raw("title")[0]}{" "}
            </span>
            {t.raw("title")[1]}
          </Typography>
        </Box>
        <Box
          sx={{
            padding: {
              xs: "0px 50px",
              sm: "0px 100px",
              md: "0px 0px 0px 100px",
              lg: "0px 0px 0px 100px",
            },
          }}
        >
          {customFitalOfrece.map(({ numero, titulo }, id) => (
            <Box
              key={id}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#210044",
                  borderRadius: "200px",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                }}
              >
                <Typography>{numero}</Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    marginLeft: "10px",
                    fontSize: {
                      xs: "16px",
                      sm: "25px",
                      md: "18px",
                      lg: "25px",
                    },
                  }}
                >
                  {titulo}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          padding: {
            xs: "0px 100px 0px 0px",
            sm: "0px 100px 0px 0px",
            md: "0px 100px 0px 0px",
            lg: "0px 100px 0px 0px",
          },
          width: { xs: "100%", sm: "100%", md: "40%", lg: "50%" },
        }}
      >
        <Image src={img} alt="image Fital Ofrece" />
      </Box>
    </Box>
  );
};

export default HomeFitalOfrece;
