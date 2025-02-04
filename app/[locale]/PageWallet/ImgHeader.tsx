import { Box } from "@mui/material";
import Image from "next/image";
import ImgHeaderWallet from "@/public/img/imgHeader.png"

const ImgHeader = () => {
    return (
        <Box>
            <Box>
                <Image 
                    src={ImgHeaderWallet}
                    alt="Wallet Fital"
                />
            </Box>
        </Box>
    )
}

export default ImgHeader