import { Box } from "@mui/material";
import HeaderBtn from "./HeaderBtn";
import HeaderLaEvolucion from "./HeaderLaEvolucion";
import Articulos from "./Articulos";

export default function PageCompraDeTokens() {
  return (
    <Box
      sx={{
        color: "white",
      }}
    >
      {/* <HeaderBtn /> */}
      <HeaderLaEvolucion />
      <Articulos />
    </Box>
  );
}
