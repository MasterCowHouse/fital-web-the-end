"use client";
import {
  Backdrop,
  Box,
  Button,
  Fade,
  Modal,
  TextField,
  ThemeProvider,
  Typography,
  useTheme,
} from "@mui/material";
import { FormEvent, useState } from "react";
import { customTheme } from "../PageContacto/Header";
import { createContact } from "../services/contact";
import Swal from "sweetalert2";

const Video = () => {
  const outerTheme = useTheme();
  // modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // end modal

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
        campaign_id: "a58cb2ac-edf4-465c-9678-4d3b474f31e2",
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

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        flexDirection: {
          xs: "column-reverse",
          sm: "row",
          md: "row",
          lg: "row",
        },
      }}
    >
      <Box
        sx={{
          bgcolor: "black",
          width: { xs: "90%", sm: "300px", md: "500px", lg: "700px" },
          height: { xs: "500px", sm: "300px", md: "500px", lg: "700px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          className="flex items-center justify-center"
          sx={{
            width: { xs: "90%", sm: "350px", md: "500px", lg: "700px" },
            height: { xs: "500px", sm: "350px", md: "500px", lg: "700px" },
          }}
        >
          <iframe
            style={{
              width: "100%",
              height: "100%",
            }}
            src="https://www.youtube.com/embed/htYA_qEu8v0?si=HHGNSD6KMZY3azL6"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: {
            xs: "center",
            sm: "flex-start",
            md: "flex-start",
            lg: "flex-start",
          },
          justifyContent: "center",
          flexDirection: "column",
          width: { xs: "90%", sm: "auto", md: "auto", lg: "auto" },
        }}
      >
        <Box
          sx={{
            marginBottom: { xs: "0px", sm: "50px", md: "50px", lg: "50px" },
            textAlign: { xs: "center", sm: "left", md: "left", lg: "left" },
          }}
        >
          <Typography
            sx={{
              fontSize: "45px",
              width: { xs: "100%", sm: "260px", md: "260px", lg: "280px" },
              height: { xs: "auto", sm: "300px", md: "300px", lg: "300px" },
              wordWrap: {
                xs: "normal",
                sm: "break-word",
                md: "break-word",
                lg: "break-word",
              },
            }}
          >
            Gestiona tu{" "}
            <span style={{ fontWeight: 900 }}>Fideicomiso Digital</span> con{" "}
            <span style={{ color: "#FFC72C", fontWeight: 900 }}>Imperio</span>{" "}
            <span style={{ fontWeight: 900 }}>de FITAL</span>
          </Typography>
        </Box>
        <Box
          sx={{
            marginLeft: { xs: "0px", sm: "20px", md: "130px", lg: "130px" },
            marginTop: { xs: "50px", sm: "50px", md: "50px", lg: "50px" },
          }}
          onClick={handleOpen}
        >
          <Box
            sx={{
              border: "2px solid #FFC72C",
              padding: "10px 10px",
              borderRadius: "100px",
              m: 2,
            }}
          >
            Empieza ahora
          </Box>
        </Box>
      </Box>
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
              }}
            >
              ¡Regístrate ahora y comienza a comprar tokens inmobiliarios!
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
    </Box>
  );
};

export default Video;

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
