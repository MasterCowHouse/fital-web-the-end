import { Box } from "@mui/material";
// import Header from "./Header";
import Header from "../fideicomiso-digital-beneficios/Header";
// import Articulo from "./Articulo";
import Articulo from "./Articulo";

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
