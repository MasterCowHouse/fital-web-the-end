import { Box, Typography } from "@mui/material";
import Image from "next/image";
import imagenEtapasDeLaTokenización from "@/public/img/imagenEtapasDeLaTokenizacion.png";
import { useTranslations } from "next-intl";

const EtapasTokenizacion = () => {
  const t = useTranslations("Tokenize.stages");

  return (
    <Box
      sx={{
        padding: "100px 0px",
      }}
    >
      <Box>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "35px", sm: "60px", md: "60px", lg: "60px" },
            color: "#FFC72C",
          }}
        >
          {t("title")}
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "25px", sm: "40px", md: "40px", lg: "40px" },
          }}
        >
          <span style={{ color: "#26D3CA" }}>{t.raw("description")[0]}</span>{" "}
          {t.raw("description")[1]}{" "}
          <span style={{ color: "#FFC72C" }}>{t.raw("description")[2]}</span>
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
          marginTop: "100px",
        }}
      >
        <Box
          sx={{
            textAlign: { xs: "left", sm: "left", md: "right", lg: "right" },
            width: { xs: "350px", sm: "400px", md: "auto", lg: "auto" },
            paddingLeft: { xs: "25px", sm: "0px", md: "0px", lg: "0px" },
            // border: {xs: '1px solid black', sm: '1px solid pink', md: '1px solid green', lg: '1px solid red',},
          }}
        >
          <Typography
            sx={{
              marginBottom: "50px",
              color: "#26D3CA",
            }}
          >
            {t("contract")}
          </Typography>
          <Typography
            sx={{
              marginBottom: "50px",
              marginRight: {
                xs: "100px",
                sm: "100px",
                md: "50px",
                lg: "100px",
              },
            }}
          >
            <span style={{ color: "#26D3CA" }}>
              {t("dataCollection.title")}
            </span>
            <br />
            {t.raw("dataCollection.description")[0]}
            <br />
            {t.raw("dataCollection.description")[1]}
            <br />
            {t.raw("dataCollection.description")[2]}
            <br />
            {t.raw("dataCollection.description")[3]}
          </Typography>
          <Typography
            sx={{
              marginBottom: "50px",
              marginRight: {
                xs: "150px",
                sm: "150px",
                md: "100px",
                lg: "150px",
              },
              color: "#26D3CA",
            }}
          >
            {t("asset")}
          </Typography>
          <Typography
            sx={{
              marginBottom: "50px",
              marginRight: {
                xs: "150px",
                sm: "150px",
                md: "100px",
                lg: "150px",
              },
              color: "#26D3CA",
            }}
          >
            {t("trustService")}
          </Typography>
          <Typography
            sx={{
              marginBottom: "50px",
              marginRight: {
                xs: "100px",
                sm: "100px",
                md: "50px",
                lg: "100px",
              },
              color: "#26D3CA",
            }}
          >
            {t("trustCreation")}
          </Typography>
          <Typography
            sx={{
              marginBottom: "50px",
              color: "#26D3CA",
            }}
          >
            {t("propertyContribution")}
          </Typography>
        </Box>
        <Box
          sx={{
            transform: {
              xs: `rotate(45deg)`,
              sm: `rotate(45deg)`,
              md: `rotate(0deg)`,
              lg: `rotate(0deg)`,
            },
            width: { xs: "70%", sm: "400px", md: "400px", lg: "400px" },
          }}
        >
          <Image src={imagenEtapasDeLaTokenización} alt="img" />
        </Box>
        <Box
          sx={{
            textAlign: { xs: "right", sm: "right", md: "left", lg: "left" },
            width: { xs: "350px", sm: "auto", md: "auto", lg: "auto" },
            paddingRight: { xs: "25px", sm: "0px", md: "0px", lg: "0px" },
          }}
        >
          <Typography
            sx={{
              marginBottom: "50px",
            }}
          >
            <span style={{ color: "#FFC72C" }}>
              {t("dataCollection2.title")}
            </span>
            <br />
            {t.raw("dataCollection2.description")[0]}
            <br />
            {t.raw("dataCollection2.description")[1]}
          </Typography>
          <Typography
            sx={{
              marginBottom: "50px",
              marginLeft: { xs: "100px", sm: "100px", md: "50px", lg: "100px" },
            }}
          >
            <span style={{ color: "#FFC72C" }}>{t("smartContract.title")}</span>
            <br />
            {t.raw("smartContract.description")[0]}
            <br />
            {t.raw("smartContract.description")[1]}
            <br />
            {t.raw("smartContract.description")[2]}
          </Typography>
          <Typography
            sx={{
              marginBottom: "50px",
              marginLeft: {
                xs: "150px",
                sm: "150px",
                md: "100px",
                lg: "150px",
              },
            }}
          >
            <span style={{ color: "#FFC72C" }}>{t("tokenization.title")}</span>
            <br />
            {t.raw("tokenization.description")[0]}
            <br />
            {t.raw("tokenization.description")[1]}
            <br />
            {t.raw("tokenization.description")[2]}
            <br />
            {t.raw("tokenization.description")[3]}
          </Typography>
          <Typography
            sx={{
              marginBottom: "50px",
              marginLeft: { xs: "100px", sm: "100px", md: "50px", lg: "100px" },
            }}
          >
            <span style={{ color: "#FFC72C" }}>{t("pti.title")}</span>
            <br />
            {t.raw("pti.description")[0]}
            <br />
            {t.raw("pti.description")[1]}
            <br />
            {t.raw("pti.description")[2]}
          </Typography>
          <Typography>
            <span style={{ color: "#FFC72C" }}>{t("management.title")}</span>
            <br />
            {t.raw("management.description")[0]}
            <br />
            {t.raw("management.description")[1]}
            <br />
            {t.raw("management.description")[2]}
            <br />
            {t.raw("management.description")[3]}
          </Typography>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default EtapasTokenizacion;
