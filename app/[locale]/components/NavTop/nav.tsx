import { Box } from "@mui/material";
import Image from "next/image";
import logo from "@/public/img/logo-fital.svg";
import { Link } from "@/navigation";

interface CustomNav {
  id: number;
  textoLink: string;
  hrefLink: string;
}

const customNav: CustomNav[] = [
  {
    id: 1,
    textoLink: "Inicio",
    hrefLink: "/",
  },
  {
    id: 2,
    textoLink: "Servicios",
    hrefLink: "/PageTokenizacion",
  },
  {
    id: 3,
    textoLink: "Nosotros",
    hrefLink: "/PageFideicomiso",
  },
  {
    id: 4,
    textoLink: "Blog",
    hrefLink: "/PageCompraDeTokens",
  },
  {
    id: 5,
    textoLink: "Contacto",
    hrefLink: "/PageBlog",
  },
];

const NavTop = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        // backgroundColor: '#352B5E',
        backgroundColor: "#352B5F",
        padding: "20px 0px",
        position: "fixed",
        width: "100%",
        zIndex: 1,
      }}
    >
      <Box>
        <Link href={"/PageWallet"}>
          <Image src={logo} alt="Logo FItal" width={235} height={72} />
        </Link>
      </Box>
      {customNav.map(({ textoLink, hrefLink }, id) => (
        <Box
          key={id}
          sx={{
            fontSize: "22px",
          }}
        >
          <Link href={hrefLink}>{textoLink}</Link>
        </Box>
      ))}
      <Box
        sx={{
          backgroundColor: "#524092",
          padding: "10px 20px",
          borderRadius: "50px",
        }}
      >
        <Link href="/fideicomiso-digital-beneficios">Accede a tu Wallet</Link>
      </Box>
    </Box>
  );
};

export default NavTop;
