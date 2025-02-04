import { Box } from "@mui/material";
import Header from "../fideicomiso-digital-beneficios/Header";
import Articulo from "./Articulo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "¿Qué es el blockchain? ¿Para qué sirve? ¿cómo funciona el blockchain?",
  description:
    "Descubre cómo el blockchain está transformando industrias, ofreciendo transparencia, seguridad y nuevas oportunidades. ¡Es hora de ser parte del futuro tecnológico!",
};

export default function QueEsElBlockchain() {
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
