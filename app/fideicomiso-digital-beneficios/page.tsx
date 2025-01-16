import { Box } from "@mui/material";
import Header from "./Header";
import Articulo from "./Articulo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "¿Qué es un Fideicomiso Digital y sus Beneficios para Inmuebles?",
  description:
    "Descubre qué es un fideicomiso digital y cómo puede beneficiar la gestión de inmuebles. Aprende sobre seguridad, eficiencia y más.",
};

export default function PageTokenizacion() {
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
