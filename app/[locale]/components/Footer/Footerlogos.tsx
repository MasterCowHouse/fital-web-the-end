"use client";

import { Box, Button, Fade, Modal, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { useState, useTransition } from "react";
import Backdrop from "@mui/material/Backdrop";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { useParams, usePathname } from "next/navigation";
interface CustomLogosFooter {
  id: number;
  logosFooter: string;
  linksImgs: string;
}

const customLogosFooter: CustomLogosFooter[] = [
  {
    id: 1,
    logosFooter: "../img/CNBV.svg",
    linksImgs:
      "https://www.gob.mx/cms/uploads/attachment/file/926341/TABLERO-DE-CONTROL-SOFOMES-ENR_05072024.pdf",
  },
  {
    id: 2,
    logosFooter: "../img/REDECO.svg",
    linksImgs: "",
  },
  {
    id: 3,
    logosFooter: "../img/REUNE.svg",
    linksImgs:
      "https://eduweb.condusef.gob.mx/Reune/consulta.aspx?69,Finganas%2c+S.A.P.I.+de+C.V.%2c+SOFOM%2c+E.N.R.,,9,,",
  },
  {
    id: 4,
    logosFooter: "../img/SHCP.svg",
    linksImgs: "",
  },
  // {
  //     id: 5,
  //     logosFooter: '../img/CONDUSEF.svg',
  //     linksImgs: 'https://webapps.condusef.gob.mx/SIPRES/jsp/home_publico.jsp?idins=15772',
  // },
];

const Footerlogos = () => {
  const [openTerms, setOpenTerms] = useState<boolean | null>(null);
  const [openPrivacy, setOpenPrivacy] = useState<boolean | null>(null);
  // const router = useRouter();
  const t = useTranslations("Footer");

  return (
    <Box
      sx={{
        color: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 2, sm: 5, md: 10, lg: 10 },
          padding: {
            xs: "0px",
            sm: "50px 0px",
            md: "50px 0px",
            lg: "50px 0px",
          },
          flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
        }}
      >
        <Link component={"button"} onClick={() => setOpenTerms(true)}>
          <Typography>{t.raw("legal.options")[0]}</Typography>
        </Link>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={openTerms!}
          onClose={() => setOpenTerms(false)}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={openTerms!}>
            <Box sx={style}>
              <Box
                sx={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "column",
                  color: "#999696",
                  p: 4,
                  marginBottom: 10,
                }}
              >
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                  sx={{
                    color: "#FFFFFF",
                    textAlign: "justify",
                    mb: 3,
                  }}
                >
                  {t.raw("legal.privacy")[0]} <br />
                  {t.raw("legal.privacy")[1]}
                  <br />
                  {t.raw("legal.privacy")[2]}
                  <br />
                  {t.raw("legal.privacy")[3]}
                  <br />
                  {t.raw("legal.privacy")[4]}
                  <br />
                  {t.raw("legal.privacy")[5]} <br />
                  {t.raw("legal.privacy")[6]}
                  <br />
                  {t.raw("legal.privacy")[7]}
                  <br />
                  {t.raw("legal.privacy")[8]}
                  <br />
                  {t.raw("legal.privacy")[9]} <br />
                  {t.raw("legal.privacy")[10]}
                  <br />
                  {t.raw("legal.privacy")[11]}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    borderColor: "#FFC72C",
                    border: 2,
                    borderRadius: 20,
                    width: 170,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                  }}
                >
                  <Button
                    sx={{
                      color: "#FFFFFF",
                      display: "flex",
                      width: "100%",
                      borderRadius: 20,
                    }}
                    onClick={() => setOpenTerms(false)}
                  >
                    OK
                  </Button>
                </Box>
              </Box>
            </Box>
          </Fade>
        </Modal>
        <Link component={"button"} onClick={() => setOpenPrivacy(true)}>
          <Typography>{t.raw("legal.options")[1]}</Typography>{" "}
        </Link>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={openPrivacy!}
          onClose={() => setOpenPrivacy(false)}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={openPrivacy!}>
            <Box sx={style}>
              <Box
                sx={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "column",
                  color: "#999696",
                  p: 4,
                  marginBottom: 10,
                }}
              >
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                  sx={{
                    color: "#FFFFFF",
                    textAlign: "justify",
                    mb: 3,
                  }}
                >
                  {t.raw("legal.terms")[0]} <br />
                  {t.raw("legal.terms")[1]} <br />
                  {t.raw("legal.terms")[2]}
                  <br />
                  {t.raw("legal.terms")[3]}
                  <br />
                  {t.raw("legal.terms")[4]}
                  <br />
                  {t.raw("legal.terms")[5]}
                  <br />
                  contacto@fitalmx.com
                  <br />
                  coordinacion@fitalmx.com
                  <br />
                  {t.raw("legal.terms")[6]}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    borderColor: "#FFC72C",
                    border: 2,
                    borderRadius: 20,
                    width: 170,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                  }}
                >
                  <Button
                    sx={{
                      color: "#FFFFFF",
                      display: "flex",
                      width: "100%",
                      borderRadius: 20,
                    }}
                    onClick={() => setOpenPrivacy(false)}
                  >
                    OK
                  </Button>
                </Box>
              </Box>
            </Box>
          </Fade>
        </Modal>
        <Link href={"/es/Questions"}>
          <Typography>{t.raw("legal.options")[2]}</Typography>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 2, sm: 2, md: 11, lg: 11 },
          padding: { xs: "20px", sm: "20px", md: "20px", lg: "0px 50px" },
        }}
      >
        {customLogosFooter.map(({ logosFooter, linksImgs }, id) => (
          <Box key={id}>
            <Link href={`${linksImgs}`} target="_blank">
              <Box component={"img"} src={logosFooter} alt="Credenciales" />
            </Link>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0px 0px 100px 0px",
        }}
      >
        <Typography>{t("legal.rights")}</Typography>
      </Box>
    </Box>
  );
};

export default Footerlogos;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  overflowY: "auto",
  width: { xs: "75vw", sm: "65vw", md: "35vw" },
  height: { xs: "60vh", sm: "62vh", md: "60vh", lg: "50vh" },
  bgcolor: "#210044",
  boxShadow: 30,
  p: 1,
  borderRadius: "40px",
  flex: 1,
  display: "flex",
};
