import { Box, Typography } from "@mui/material";
import Image from "next/image";
import imgERC from "@/public/img/imgERC.png";
import { useTranslations } from "next-intl";

interface CustomPuntosERC {
  id: number;
  texto: JSX.Element;
}

const ERC = () => {
  const t = useTranslations("Tokenize.standards");

  const customPuntosERC: CustomPuntosERC[] = [
    {
      id: 1,
      texto: <span>{t.raw("list")[0]}</span>,
    },
    {
      id: 2,
      texto: <span>{t.raw("list")[1]}</span>,
    },
    {
      id: 3,
      texto: <span>{t.raw("list")[2]}</span>,
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
        padding: "100px 0px",
      }}
    >
      <Box
        sx={{
          padding: { xs: "0px 20px", sm: "0px 20px", md: "0px", lg: "0px" },
        }}
      >
        <Box
          sx={{
            marginBottom: "50px",
            marginLeft: { xs: "0px", sm: "0px", md: "100px", lg: "100px" },
          }}
        >
          <Typography
            sx={{
              fontSize: "35px",
            }}
          >
            <span style={{ color: "#FFC72C" }}>{t.raw("title")[0]}</span>{" "}
            {t.raw("title")[1]}{" "}
            <span style={{ fontWeight: 900 }}>
              {t.raw("title")[2]} <br /> {t.raw("title")[3]}
            </span>{" "}
            {t.raw("title")[4]}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
            marginLeft: { xs: "0px", sm: "0px", md: "100px", lg: "100px" },
          }}
        >
          {customPuntosERC.map(({ texto }, id) => (
            <Box
              key={id}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "25px",
              }}
            >
              <Box>
                <Box
                  sx={{
                    backgroundColor: "#FFC72C",
                    width: "30px",
                    height: "30px",
                    borderRadius: "100px",
                  }}
                >
                  {/* Circulos */}
                </Box>
              </Box>
              <Box
                sx={{
                  marginLeft: "15px",
                }}
              >
                <Typography>{texto}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            marginLeft: { xs: "0px", sm: "0px", md: "100px", lg: "100px" },
          }}
        >
          <Typography
            sx={{
              color: "#FFC72C",
            }}
          >
            {t("benefits.title")}
          </Typography>
        </Box>
        <Box
          sx={{
            marginLeft: { xs: "0px", sm: "0px", md: "100px", lg: "100px" },
          }}
        >
          <Typography>
            <span style={{ fontWeight: 900 }}>
              {t("benefits.security.title")}
            </span>{" "}
            {t("benefits.security.description")}
            <br />
            <span style={{ fontWeight: 900 }}>
              {t("benefits.flexibility.title")}
            </span>{" "}
            {t("benefits.flexibility.description")}
            <br />
            <span style={{ fontWeight: 900 }}>
              {t("benefits.compliance.title")}
            </span>{" "}
            {t("benefits.compliance.description")}
          </Typography>
        </Box>
      </Box>
      <Box>
        <Image src={imgERC} alt="Estándar ERC-3643" />
      </Box>
    </Box>
  );
};

export default ERC;
