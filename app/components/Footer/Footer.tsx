"use client";
import { Box, TextField, Typography } from "@mui/material";
import Image from "next/image";
import imgFooter from "@/public/img/logo-fital.svg";
import Link from "next/link";
//TextField
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import {
  createTheme,
  ThemeProvider,
  Theme,
  useTheme,
} from "@mui/material/styles";
import Button from "@mui/material/Button";

interface CustomBtnFooter {
  id: number;
  hrefFooterUno: string;
  texto: string;
}

const customBtnFooter: CustomBtnFooter[] = [
  {
    id: 1,
    hrefFooterUno: "/PageTokenizacion",
    texto: "Tokenización de inmuebles",
  },
  {
    id: 2,
    hrefFooterUno: "/PageFideicomiso",
    texto: "Fideicomiso digital",
  },
  {
    id: 3,
    hrefFooterUno: "/PageWallet",
    texto: "Fital Wallet",
  },
];

interface CustomFormFooter {
  id: number;
  hrefRedes: string;
  redesIcono: string;
}

const customFormFooter: CustomFormFooter[] = [
  {
    id: 1,
    hrefRedes: "https://i.mtr.cool/XSGNKEDUEK",
    redesIcono: "../img/x.svg",
  },
  {
    id: 2,
    hrefRedes: "https://i.mtr.cool/GJMQKSAQQG",
    redesIcono: "../img/whatsappFital.svg",
  },
  {
    id: 3,
    hrefRedes: "https://i.mtr.cool/OHTDZDXEWH",
    redesIcono: "../img/faceFital.svg",
  },
  {
    id: 4,
    hrefRedes: "https://www.linkedin.com/company/fital-mx/",
    redesIcono: "../img/linquedin.svg",
  },
  {
    id: 5,
    hrefRedes: "https://i.mtr.cool/NPHNCRUMYF",
    redesIcono: "../img/instaFital.svg",
  },
  {
    id: 6,
    hrefRedes: "https://i.mtr.cool/FVUFOOKMCK",
    redesIcono: "../img/tiktokFital.svg",
  },
];

interface CustomDatosContacto {
  id: number;
  imgDatosContacto: string;
  datos: JSX.Element;
}

const customDatosContacto: CustomDatosContacto[] = [
  {
    id: 1,
    imgDatosContacto: "../img/cartaFooter.svg",
    datos: (
      <span>
        coordinacion@fitalmx.com
        <br />
        marketing@fitalmx.com
        <br />
        marketingdigital@fitalmx.com
        <br />
        guillermo@fitalmx.com
      </span>
    ),
  },
  {
    id: 2,
    imgDatosContacto: "../img/telefonoFooter.svg",
    datos: (
      <span>
        55 7887 4806
        <br />
        55 2310 5517
        <br />
        56 6585 6742
      </span>
    ),
  },
];

//TextField
const customTheme = (outerTheme: Theme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "white",
            "--TextField-brandBorderHoverColor": "white",
            "--TextField-brandBorderFocusedColor": "white",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
            borderRadius: "100px",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            "&::before, &::after": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            "&::before": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });

const Footer = () => {
  // TextField
  const outerTheme = useTheme();
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
        }}
      >
        <Box
          sx={{
            width: "95%",
            border: "1px solid white",
            marginTop: "100px",
          }}
        >
          {/* Linea */}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "50px 0px",
        }}
      >
        <Image src={imgFooter} alt="Logo Fital Footer" />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
          },
        }}
      >
        <Box>
          <Box
            sx={{
              padding: "50px 0px",
              textAlign: {
                xs: "center",
                sm: "center",
                md: "center",
                lg: "left",
              },
            }}
          >
            <Typography>
              Pioneros en el modelo de
              <br />
              tokenización de inmuebles
              <br />
              más seguro de la web 3
            </Typography>
          </Box>
          {customBtnFooter.map(({ hrefFooterUno, texto }, id) => (
            <Box key={id}>
              <Link href={hrefFooterUno}>
                <Box
                  sx={{
                    backgroundColor: "#524092",
                    borderRadius: "100px",
                    padding: "10px 40px",
                    marginBottom: "10px",
                  }}
                >
                  {texto}
                </Box>
              </Link>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            padding: "50px 0px",
            width: { xs: "350px", sm: "auto", md: "auto", lg: "auto" },
          }}
        >
          <Box
            sx={{
              textAlign: {
                xs: "center",
                sm: "center",
                md: "center",
                lg: "left",
              },
            }}
          >
            <Typography>Suscríbete</Typography>
          </Box>
          <Box
            sx={{
              textAlign: {
                xs: "center",
                sm: "center",
                md: "center",
                lg: "left",
              },
            }}
          >
            <Typography>Suscríbete a nuestro News letter.</Typography>
          </Box>
          <Box
            sx={{
              padding: "20px 0px",
            }}
          >
            {/* input */}
            <ThemeProvider theme={customTheme(outerTheme)}>
              <Box
                sx={{
                  padding: "25px",
                }}
              >
                <TextField
                  label="porejemplo@gmail.com"
                  InputLabelProps={{
                    sx: {
                      color: "white",
                      fontSize: {
                        xs: "14px",
                        sm: "16px",
                        md: "16px",
                        lg: "16px",
                      },
                    },
                  }}
                  inputProps={{
                    sx: {
                      color: "white",
                    },
                  }}
                  sx={{
                    width: {
                      xs: "300px",
                      sm: "400px",
                      md: "400px",
                      lg: "400px",
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  padding: "25px",
                  marginTop: "-100px",
                  marginLeft: {
                    xs: "165px",
                    sm: "265px",
                    md: "265px",
                    lg: "265px",
                  },
                }}
              >
                <Button
                  sx={{
                    backgroundColor: "#FFC72C",
                    color: "#7F4CA5",
                    padding: "10px 25px",
                    borderRadius: "100px",
                  }}
                  className="normal-case"
                >
                  Suscríbirme
                </Button>
              </Box>
            </ThemeProvider>
            {/* end input */}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            {customFormFooter.map(({ hrefRedes, redesIcono }, id) => (
              <Box
                key={id}
                sx={{
                  backgroundColor: "#524092",
                  width: "50px",
                  height: "50px",
                  borderRadius: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link href={hrefRedes} target="_blank">
                  <Box
                    component={"img"}
                    src={redesIcono}
                    alt="Icono nombre de red"
                    sx={{
                      width: "25px",
                      height: "25px",
                    }}
                  />
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
        <Box>
          {customDatosContacto.map(({ imgDatosContacto, datos }, id) => (
            <Box
              key={id}
              sx={{
                border: "2px solid #524092",
                borderRadius: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: {
                  xs: "30px 50px",
                  sm: "30px 50px",
                  md: "30px 50px",
                  lg: "30px 100px",
                },
                marginBottom: "50px",
                gap: 5,
              }}
            >
              <Box>
                <Box
                  component={"img"}
                  src={imgDatosContacto}
                  alt="Datos de Contacto"
                />
              </Box>
              <Box>
                <Typography>{datos}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
