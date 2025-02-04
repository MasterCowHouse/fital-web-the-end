import { Box } from "@mui/material";
import Header from "../fideicomiso-digital-beneficios/Header";
import Articulo from "./Articulo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "¿Qué es la Tokenización Inmobiliaria? Guía Completa para Principiantes",
  description:
    "Conocé qué es la tokenización inmobiliaria y cómo funciona. Aprende cómo el blockchain está revolucionando el mercado de bienes raíces, haciéndolo más accesible, seguro y eficiente.",
};

export default function queEsLaTokenizacionInmobiliaria() {
  return (
    <Box
      sx={{
        color: "white",
      }}
    >
      <Header />
      <Articulo />
    </Box>
  );
}
