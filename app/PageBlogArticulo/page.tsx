import { Box } from "@mui/material";
import Header from "./Header";
import Articulo from "./Articulo";

export default function PageTokenizacion () {
    return (
        <Box sx={{
            color: 'white'
        }}>
            <Header />
            <Articulo />
        </Box>
    );
}
