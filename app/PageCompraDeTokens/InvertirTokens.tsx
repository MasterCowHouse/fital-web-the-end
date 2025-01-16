"use client";
import { Box, TextField, Typography } from "@mui/material";
import Image from "next/image";
import styles from "@/app/PageCompraDeTokens/component.module.css";
import imgIconoUno from "@/public/img/Registrate.png";
import imgIconoDos from "@/public/img/Selecciona el inmueble.png";
import imgIconoTres from "@/public/img/Diversifica.png";
import imgIconoCuatro from "@/public/img/Adquiere tus tokens.png";
import ComoEmpiezoResponsive from "./ComoEmpiezoResponsive";
// Modal
import React, { FormEvent, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
//TextField
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import {
  createTheme,
  ThemeProvider,
  Theme,
  useTheme,
} from "@mui/material/styles";
import { createContact } from "../services/contact";
import Swal from "sweetalert2";

// Modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#210044",
  boxShadow: 24,
  p: 4,
};

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
            "--TextField-brandBorderColor": "#FFC72C",
            "--TextField-brandBorderHoverColor": "#FFC72C",
            "--TextField-brandBorderFocusedColor": "#FFC72C",
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

const InvertirTokens = () => {
  const [formData, setFormData] = useState({
    owner_id: "",
    campaign_id: "",
    name: "",
    telephone: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const payload = {
      createLeadDto: {
        owner_id: "7c1e8371-047e-44d5-b123-1b40775346fc",
        campaign_id: "6bd12de8-d67f-438a-a4c2-58dac330cd3a",
        name: formData.name,
        description: "",
      },
      createContactDto: {
        name: formData.name,
        telephone: formData.telephone,
        email: formData.email,
      },
    };

    (async () => {
      const response = await createContact(payload);
      if (response?.success) {
        handleClose();
        Swal.fire({
          title: "¡Registro exitoso!",
          icon: "success",
        });
        setFormData({
          owner_id: "",
          campaign_id: "",
          name: "",
          telephone: "",
          email: "",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "No se pudo completar el registro.",
          icon: "error",
        });
      }
      console.log(response?.data, response);
    })();
  };
  // modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // end modal
  // TextField
  const outerTheme = useTheme();
  return (
    <Box mt={4}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "28px", sm: "40px", md: "40px", lg: "50px" },
            marginBottom: "25px",
            textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
          }}
        >
          Invertir en nuestros tokens inmobiliarios (activos virtuales)
          <br />
          es{" "}
          <span style={{ color: "#26D3CA" }}>
            asegurar tu patrimonio con rendimientos.
          </span>
        </Typography>
        {/* //Modal */}
        <Button
          onClick={handleOpen}
          className="normal-case"
          sx={{
            border: "2px solid #FFC72C",
            padding: "10px 50px",
            borderRadius: "100px",
            color: "#FFFFFF",
          }}
        >
          Regístrate
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
                sx={{
                  color: "#FFFFFF",
                  textAlign: "center",
                  mb: 3,
                  wordWrap: "normal",
                }}
              >
                ¡Regístrate ahora y comienza a comprar tokens inmobiliarios
                (activos virtuales)!
              </Typography>
              {/* <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography> */}
              <ThemeProvider theme={customTheme(outerTheme)}>
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Nombre del Contacto"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    sx={{ mb: 4 }}
                    InputLabelProps={{
                      sx: {
                        color: "white",
                      },
                    }}
                    inputProps={{
                      sx: {
                        color: "white",
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Teléfono"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    required
                    type="tel"
                    sx={{ mb: 4 }}
                    InputLabelProps={{
                      sx: {
                        color: "white",
                      },
                    }}
                    inputProps={{
                      sx: {
                        color: "white",
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    type="email"
                    sx={{ mb: 4 }}
                    InputLabelProps={{
                      sx: {
                        color: "white",
                      },
                    }}
                    inputProps={{
                      sx: {
                        color: "white",
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                    sx={{ marginTop: 2 }}
                  >
                    Enviar
                  </Button>
                </form>
              </ThemeProvider>
            </Box>
          </Fade>
        </Modal>
        {/* End Modal */}
      </Box>
      {/* //Container Responsive*/}
      <Box
        sx={{
          display: { xs: "flex", sm: "flex", md: "none", lg: "none" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ComoEmpiezoResponsive />
      </Box>
      {/* //Container */}
      <Box
        className={styles.container}
        sx={{
          padding: "50px 100px",
          display: {
            xs: "none !important",
            sm: "none !important",
            md: "grid !important",
            lg: "grid !important",
          },
        }}
      >
        <Box
          className={styles.textoUno}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#524092",
          }}
        >
          <Typography
            sx={{
              fontSize: "100px",
              color: "#210044",
              fontWeight: 900,
            }}
          >
            1
          </Typography>
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: "25px",
            }}
          >
            Regístrate para entrar
            <br />
            a la revolución
            <br />
            inmobiliaria. A partir
            <br />
            de ahí te apoyaremos
            <br />
            en cada paso.
          </Typography>
          <Image
            src={imgIconoUno}
            alt="Regístrate para entrar a la revolución inmobiliaria. A partir de ahí te apoyaremos en cada paso."
            width={250}
            height={250}
          />
        </Box>
        <Box
          className={styles.textoDos}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            bgcolor: "#524092",
          }}
        >
          <Typography
            sx={{
              fontSize: "100px",
              color: "#210044",
              fontWeight: 900,
            }}
          >
            2
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: 900,
              fontSize: "25px",
            }}
          >
            Selecciona el
            <br />
            inmueble
          </Typography>
          <Image
            src={imgIconoDos}
            alt="Regístrate para entrar a la revolución inmobiliaria. A partir de ahí te apoyaremos en cada paso."
            width={250}
            height={250}
          />
        </Box>
        <Box
          className={styles.textoTres}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#524092",
          }}
        >
          <Image
            src={imgIconoTres}
            alt="Regístrate para entrar a la revolución inmobiliaria. A partir de ahí te apoyaremos en cada paso."
            width={250}
            height={250}
          />
          <Typography
            sx={{
              fontSize: "100px",
              color: "#210044",
              fontWeight: 900,
            }}
          >
            3
          </Typography>
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: "25px",
            }}
          >
            Diversifica tu
            <br />
            portfolio comprando
            <br />
            uno o varios inmuebles.
            <br />
            La oferta de tokens
            <br /> (activos virtuales) varía.
            <br />
            <br />
            <span style={{ fontWeight: 900 }}>
              ¡Algunos inmuebles <br />
              duran pocos minutos!
            </span>
          </Typography>
        </Box>
        <Box
          className={styles.textoCuatro}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            bgcolor: "#524092",
          }}
        >
          <Image
            src={imgIconoCuatro}
            alt="Regístrate para entrar a la revolución inmobiliaria. A partir de ahí te apoyaremos en cada paso."
            width={250}
            height={250}
          />
          <Typography
            sx={{
              fontSize: "100px",
              color: "#210044",
              fontWeight: 900,
            }}
          >
            4
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: 900,
              fontSize: "25px",
              marginBottom: "25px",
            }}
          >
            Adquiere tus tokens.
            <br />
            Puedes comprar con
            <br />
            pesos o cripto, guarda
            <br />
            tus tokens (activos virtuales)
            <br />
            e irás recibiendo tus
            <br />
            rendimientos todos
            <br />
            los meses.
          </Typography>
        </Box>
        <Box
          className={styles.textoCinco}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "50px",
              fontWeight: 900,
              textAlign: "center",
            }}
          >
            ¿Cómo
            <br />
            empiezo?
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default InvertirTokens;
