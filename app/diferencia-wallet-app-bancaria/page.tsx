import { Box } from "@mui/material";
// import Header from "./Header";
import Header from "../PageBlogArticulo/Header";
// import Articulo from "./Articulo";
import Articulo from "./Articulo";

export default function diferenciaWalletAppBancaria () {
    return (
        <Box sx={{
            color: 'white'
        }}>
            <Header />
            <Articulo />
        </Box>
    );
}
