import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { alpha } from "@mui/material";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

interface CustomBlog {
  id: number;
  bg: string;
  numero: string;
  corazon: string;
  // fecha: string;
  texto: JSX.Element;
  hrefLink: string;
}

const customBlog: CustomBlog[] = [
  {
    id: 1,
    bg: "../img/fideicomiso.png",
    numero: "5",
    corazon: "../img/corazon.svg",
    // fecha: '09/09/2024',
    texto: (
      <span>
        La evolución del Fideicomiso <br />
        tradicional al digital.
      </span>
    ),
    hrefLink: "/fideicomiso-digital-beneficios",
  },
  {
    id: 2,
    bg: "../img/Que-es-el-blockchain.png",
    numero: "5",
    corazon: "../img/corazon.svg",
    // fecha: '16/09/2024',
    texto: (
      <span>
        ¿Qué es el blockchain?
        <br />
        ¿Qué ventajas tiene adentrarse <br />
        al mundo del blockchain?
      </span>
    ),
    hrefLink: "/Que-es-el-blockchain",
  },
  {
    id: 3,
    bg: "../img/que-es-la-tokenizacion-inmobiliaria-3.png",
    numero: "5",
    corazon: "../img/corazon.svg",
    // fecha: '14/08/2024',
    texto: (
      <span>
        ¿Qué es la Tokenización <br />
        Inmobiliaria? <br />
        Guía Completa para Principiantes
      </span>
    ),
    hrefLink: "/que-es-la-tokenizacion-inmobiliaria",
  },
  {
    id: 4,
    bg: "../img/claves-invertir-bienes-raices-criptomonedas.png",
    numero: "5",
    corazon: "../img/corazon.svg",
    // fecha: '14/08/2024',
    texto: (
      <span>
        Claves para Invertir <br />
        en Bienes Raíces con Criptomonedas
      </span>
    ),
    hrefLink: "/claves-invertir-bienes-raices-criptomonedas",
  },
  {
    id: 5,
    bg: "../img/diferencia-entre-venta-tradicional-de-inmuebles-y-tokenizacion-de-inmuebles.png",
    numero: "5",
    corazon: "../img/corazon.svg",
    // fecha: '14/08/2024',
    texto: (
      <span>
        ¿Qué Diferencias hay entre la Venta Tradicional de Inmuebles y la
        Tokenización?
      </span>
    ),
    hrefLink:
      "/diferencia-entre-venta-tradicional-de-inmuebles-y-tokenizacion-de-inmuebles",
  },
  {
    id: 6,
    bg: "../img/diferencia-wallet-app-bancaria.png",
    numero: "5",
    corazon: "../img/corazon.svg",
    // fecha: '14/08/2024',
    texto: (
      <span>
        Wallet vs. App Bancaria: <br />
        ¿Cuál es la diferencia?
      </span>
    ),
    hrefLink: "/diferencia-wallet-app-bancaria",
  },
];

const Articulos = () => {
  const t = useTranslations("Blog.body");

  const customBlog: CustomBlog[] = [
    {
      id: 1,
      bg: "../img/fideicomiso.png",
      numero: "5",
      corazon: "../img/corazon.svg",
      // fecha: '09/09/2024',
      texto: (
        <span>
          {t.raw("traditional")[0]} <br />
          {t.raw("traditional")[1]}
        </span>
      ),
      hrefLink: "/fideicomiso-digital-beneficios",
    },
    {
      id: 2,
      bg: "../img/Que-es-el-blockchain.png",
      numero: "5",
      corazon: "../img/corazon.svg",
      // fecha: '16/09/2024',
      texto: (
        <span>
          {t.raw("blockchain")[0]}
          <br />
          {t.raw("blockchain")[1]} <br />
          {t.raw("blockchain")[2]}
        </span>
      ),
      hrefLink: "/Que-es-el-blockchain",
    },
    {
      id: 3,
      bg: "../img/que-es-la-tokenizacion-inmobiliaria-3.png",
      numero: "5",
      corazon: "../img/corazon.svg",
      // fecha: '14/08/2024',
      texto: (
        <span>
          {t.raw("tokenization")[0]} <br />
          {t.raw("tokenization")[1]} <br />
          {t.raw("tokenization")[2]}
        </span>
      ),
      hrefLink: "/que-es-la-tokenizacion-inmobiliaria",
    },
    {
      id: 4,
      bg: "../img/claves-invertir-bienes-raices-criptomonedas.png",
      numero: "5",
      corazon: "../img/corazon.svg",
      // fecha: '14/08/2024',
      texto: (
        <span>
          {t.raw("investing")[0]} <br />
          {t.raw("investing")[1]}
        </span>
      ),
      hrefLink: "/claves-invertir-bienes-raices-criptomonedas",
    },
    {
      id: 5,
      bg: "../img/diferencia-entre-venta-tradicional-de-inmuebles-y-tokenizacion-de-inmuebles.png",
      numero: "5",
      corazon: "../img/corazon.svg",
      // fecha: '14/08/2024',
      texto: <span>{t("differences")}</span>,
      hrefLink:
        "/diferencia-entre-venta-tradicional-de-inmuebles-y-tokenizacion-de-inmuebles",
    },
    {
      id: 6,
      bg: "../img/diferencia-wallet-app-bancaria.png",
      numero: "5",
      corazon: "../img/corazon.svg",
      // fecha: '14/08/2024',
      texto: (
        <span>
          {t.raw("vs")[0]} <br />
          {t.raw("vs")[1]}
        </span>
      ),
      hrefLink: "/diferencia-wallet-app-bancaria",
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {customBlog.map(({ bg, numero, corazon, texto, hrefLink }, id) => (
          <Box
            key={id}
            sx={{
              padding: { xs: "25px", sm: "100px", md: "100px", lg: "100px" },
            }}
          >
            <Box
              sx={{
                width: { xs: "350px", sm: "300px", md: "300px", lg: "300px" },
                height: { xs: "350px", sm: "300px", md: "300px", lg: "300px" },
                backgroundColor: alpha("#210044", 0.5),
              }}
            >
              <Box
                component={"img"}
                src={bg}
                sx={{
                  zIndex: -999,
                  position: "absolute",
                  objectFit: "cover",
                  width: { xs: "350px", sm: "300px", md: "300px", lg: "300px" },
                  height: {
                    xs: "350px",
                    sm: "300px",
                    md: "300px",
                    lg: "300px",
                  },
                }}
              />
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                  padding: "10px",
                  gap: 1,
                }}
              >
                <Typography>{numero}</Typography>
                <Image src={corazon} alt="Blog" width={15} height={15} />
              </Box>

              <Box
                sx={{
                  marginTop: {
                    xs: "200px",
                    sm: "150px",
                    md: "150px",
                    lg: "150px",
                  },
                  padding: "0px 0px 0px 20px",
                }}
              >
                <Box>
                  {/* <Typography>
                                        {fecha}
                                    </Typography> */}
                  <Typography>{texto}</Typography>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "25px",
              }}
            >
              {/* <Link href={'/'}> */}
              <Link href={hrefLink}>
                <Typography
                  sx={{
                    border: "2px solid #FFC72C",
                    borderRadius: "50px",
                    width: "150px",
                    textAlign: "center",
                    padding: "10px 0px",
                  }}
                >
                  {t("button")}
                </Typography>
              </Link>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Articulos;
