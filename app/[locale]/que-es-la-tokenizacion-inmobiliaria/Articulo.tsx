import { Box, Typography, TextField } from "@mui/material";
import Image from "next/image";
import corazon from "@/public/img/corazon.svg";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "@/navigation";

interface CustomLinks {
  id: number;
  ruta: string;
  links: string;
}

const customLinks: CustomLinks[] = [
  {
    id: 1,
    ruta: "/",
    links: "Septimbre 2023",
  },
  {
    id: 1,
    ruta: "/",
    links: "Octubre 2023",
  },
  {
    id: 1,
    ruta: "/",
    links: "Noviembre 2023",
  },
];

const Articulo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: { xs: "center", sm: "start", md: "start", lg: "start" },
        justifyContent: "center",
        flexDirection: {
          xs: "column-reverse",
          sm: "row",
          md: "row",
          lg: "row",
        },
        bgcolor: "white",
      }}
    >
      <Box
        sx={{
          marginTop: "100px",
          marginBottom: "100px",
          width: { xs: "90%", sm: "60%", md: "70%", lg: "70%" },
        }}
      >
        <Box>
          <Box
            component={"img"}
            src="../img/que-es-la-tokenizacion-inmobiliaria-3.png"
            alt="Tokenización Inmobiliaria"
            sx={{
              width: { xs: "100%", sm: "90%", md: "90%", lg: "70%" },
            }}
          />
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "40px",
              color: "#524092",
            }}
          >
            ¿Qué es la Tokenización Inmobiliaria?
            <br />
            Guía Completa para Principiantes
          </Typography>
          <Typography
            sx={{
              color: "#FFC72C",
            }}
          >
            16 de Octubre 2023
          </Typography>
          <Box
            sx={{
              display: "flex",
              borderTop: "1px solid grey",
              width: "200px",
            }}
          >
            <Typography
              sx={{
                color: "#524092",
              }}
            >
              5
            </Typography>
            <Image
              src={corazon}
              alt="Puntaje Articulo"
              width={15}
              height={15}
            />
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "50px",
          }}
        >
          <Typography
            sx={{
              color: "black",
            }}
          >
            ¿Alguna vez pensaste que podrías comprar una parte de un
            departamento
            <br />
            de airbnb con solo unos clics y desde la comodidad de tu hogar?
            <br />
            Bienvenido al futuro del mercado inmobiliario con Fital:
            <br />
            <br />
            En esta guía, te explicaremos en términos sencillos qué es la
            tokenización inmobiliaria,
            <br />
            cómo funciona con Fital y por qué está marcando un antes y un
            después en el mundo de las inversiones inmobiliarias.
            <br />
            <br />
            La tokenización inmobiliaria es el proceso de convertir los derechos
            de una propiedad en tokens digitales
            <br />
            que se registran previamente en un fideicomiso y digitalmente en una
            blockchain.
            <br />
            <br />
            Por ejemplo:
            <br />
            Imagina que hay una casa en Tulum que cuesta $1,000,000. En lugar de
            que una sola persona compre toda la propiedad,
            <br />
            el dueño decide tokenizarla dividiéndola en 1,000 tokens digitales,
            y cada token representa una fracción de la casa.
            <br />
            <br />
            Ahora tú, con solo $1,000, puedes comprar un token y convertirte en
            propietario de una parte de la casa.
            <br />
            Así no necesitas el millón completo, pero puedes empezar a invertir
            en bienes raíces.
            <br />
            <br />
            <span
              style={{ color: "#524092", fontWeight: 900, fontSize: "20px" }}
            >
              <Image
                src="/img/que-es-la-tokenizacion-inmobiliaria.png"
                alt=""
                width={700}
                height={700}
              />
            </span>
            <br />
            <br />
            <span
              style={{ color: "#524092", fontWeight: 900, fontSize: "20px" }}
            >
              ¿Cómo funciona si se renta por Airbnb?
            </span>
            <br />
            <br />
            &bull;La casa se alquila en Airbnb por $10,000 la noche.
            <br />
            &bull;Como posees el 0.1% de la propiedad (1 token de los 1,000),
            recibirás tu parte proporcional de las ganancias de la renta.
            <br />
            En este caso, ganarías $10 por noche.
            <br />
            &bull;Si la casa aumenta su valor en el mercado, tus tokens también
            se vuelven más valiosos.
            <br />
            Por ejemplo, si la propiedad sube a $1,200,000, ahora cada token
            vale $1,200 en lugar de $1,000, y
            <br />
            podrías venderlo con ganancias.
            <br />
            <br />
            <span
              style={{ color: "#524092", fontWeight: 900, fontSize: "20px" }}
            >
              Beneficios
            </span>
            <br />
            <br />
            1. No necesitas el millón completo para invertir; puedes empezar con
            una fracción.
            <br />
            2. Ganas dinero con las rentas de Airbnb.
            <br />
            3. Si decides vender tu token, puedes hacerlo fácilmente en el
            mercado secundario.
            <br />
            <br />
            <span
              style={{ color: "#524092", fontWeight: 900, fontSize: "20px" }}
            >
              ¿Cómo Funciona?
            </span>
            <br />
            <br />
            <span style={{ color: "#524092" }}>1. Selección del Inmueble:</span>
            Se elige una propiedad que será tokenizada.
            <br />
            Puede ser un edificio comercial, una casa o incluso un terreno.
            <br />
            <span style={{ color: "#524092" }}>
              2. Aportación al fideicomiso:
            </span>
            Se crea un fideicomiso digital y se agrega el inmueble para mayor
            seguridad legal.
            <br />
            <span style={{ color: "#524092" }}>3. Creación de Tokens:</span>Los
            derechos de la propiedad se dividen en partes más pequeñas
            <br />
            que se convierten en tokens digitales.
            <br />
            <span style={{ color: "#524092" }}>4. Registro en Blockchain:</span>
            Los tokens se registran en una blockchain, un sistema
            descentralizado
            <br />
            que asegura que las transacciones
            <br />
            sean transparentes y seguras.
            <br />
            <span style={{ color: "#524092" }}>5. Venta de Tokens:</span>Los
            tokens se ponen a disposición de inversionistas en una plataforma
            digital
            <br />
            totalmente personalizada por proyecto, donde pueden comprarlos,
            venderlos o negociarlos.
            <br />
            <span style={{ color: "#524092" }}>
              6. Distribución de Ganancias:
            </span>
            Los titulares de tokens reciben ingresos proporcionales generados
            por la propiedad,
            <br />
            como rentas o ganancias por ventas. desde su origen hasta el
            consumidor final.
            <br />
            <br />
            <span
              style={{ color: "#524092", fontWeight: 900, fontSize: "20px" }}
            >
              <Image
                src="/img/que-es-la-tokenizacion-inmobiliaria-2.png"
                alt=""
                width={700}
                height={700}
              />
            </span>
            <br />
            <br />
            Tokenización vs. Compra Tradicional de Inmuebles
            <br />
            Como puedes ver, la tokenización ofrece una alternativa moderna y
            eficiente al modelo tradicional de inversión en bienes raíces.
            <br />
            Fital está revolucionando y democratizando esta industria, y tú
            ¿Quieres ser parte de la evolución digital?
            <br />
            <br />
            {/* <hr /> */}
            <br />
            Si te interesa participar en la tokenización inmobiliaria
            <br />
            <Link
              href={"/PageContacto"}
              style={{
                textDecorationLine: "underline",
              }}
            >
              {/* <Typography sx={{
                                textDecorationLine: 'underline'
                            }}> */}
              contacta a un experto.
              {/* </Typography> */}
            </Link>
          </Typography>
        </Box>
        <Box>
          <Box>
            <Typography
              sx={{
                color: "black",
                fontSize: "40px",
                pt: 10,
              }}
            >
              También podría interesarte:
            </Typography>
          </Box>
          <hr />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: {
                xs: "center",
                sm: "normal",
                md: "normal",
                lg: "normal",
              },
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                // padding: {xs:'25px', sm:'100px', md:'100px', lg:'100px',},
                padding: "20px",
              }}
            >
              <Box
                sx={{
                  backgroundImage: "url(../img/bgUno.jpg)",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: { xs: "350px", sm: "300px", md: "300px", lg: "300px" },
                  height: {
                    xs: "350px",
                    sm: "300px",
                    md: "300px",
                    lg: "300px",
                  },
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <Box
                  sx={{
                    marginTop: {
                      xs: "200px",
                      sm: "150px",
                      md: "150px",
                      lg: "150px",
                    },
                    padding: "0px 0px 20px 20px",
                  }}
                >
                  <Box>
                    {/* <Typography>
                                            FitalCoin:
                                        </Typography> */}
                    <Typography>
                      Las Ventajas de Adentrarte en el Mundo del Blockchain
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  marginTop: "25px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link href={"/"}>
                  <Typography
                    sx={{
                      border: "2px solid #FFC72C",
                      borderRadius: "50px",
                      width: "150px",
                      textAlign: "center",
                      padding: "10px 0px",
                      color: "black",
                    }}
                  >
                    Leer más
                  </Typography>
                </Link>
              </Box>
            </Box>
            <Box
              sx={{
                // padding: {xs:'25px', sm:'100px', md:'100px', lg:'100px',},
                padding: "20px",
              }}
            >
              <Box
                sx={{
                  backgroundImage: "url(../img/Que-es-el-blockchain.png)",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: { xs: "350px", sm: "300px", md: "300px", lg: "300px" },
                  height: {
                    xs: "350px",
                    sm: "300px",
                    md: "300px",
                    lg: "300px",
                  },
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <Box
                  sx={{
                    marginTop: {
                      xs: "200px",
                      sm: "150px",
                      md: "150px",
                      lg: "150px",
                    },
                    padding: "0px 0px 20px 20px",
                  }}
                >
                  <Box>
                    <Typography>¿Qué es el blockchain?</Typography>
                    <Typography>
                      ¿Por qué es importante en la economía digital?
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  marginTop: "25px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link href={"/Que-es-el-blockchain"}>
                  <Typography
                    sx={{
                      border: "2px solid #FFC72C",
                      borderRadius: "50px",
                      width: "150px",
                      textAlign: "center",
                      padding: "10px 0px",
                      color: "black",
                    }}
                  >
                    Leer más
                  </Typography>
                </Link>
              </Box>
            </Box>
            <Box
              sx={{
                // padding: {xs:'25px', sm:'100px', md:'100px', lg:'100px',},
                padding: "20px",
              }}
            >
              <Box
                sx={{
                  backgroundImage:
                    "url(../img/claves-invertir-bienes-raices-criptomonedas.png)",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: { xs: "350px", sm: "300px", md: "300px", lg: "300px" },
                  height: {
                    xs: "350px",
                    sm: "300px",
                    md: "300px",
                    lg: "300px",
                  },
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <Box
                  sx={{
                    marginTop: {
                      xs: "200px",
                      sm: "150px",
                      md: "150px",
                      lg: "150px",
                    },
                    padding: "0px 0px 20px 20px",
                  }}
                >
                  <Box>
                    {/* <Typography>
                                            Wallet vs. App Bancaria:
                                        </Typography> */}
                    <Typography>
                      Claves para Invertir en
                      <br />
                      Bienes Raíces con Criptomonedas
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  marginTop: "25px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link href={"/claves-invertir-bienes-raices-criptomonedas"}>
                  <Typography
                    sx={{
                      border: "2px solid #FFC72C",
                      borderRadius: "50px",
                      width: "150px",
                      textAlign: "center",
                      padding: "10px 0px",
                      color: "black",
                    }}
                  >
                    Leer más
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: { xs: "50px", sm: "100px", md: "100px", lg: "100px" },
          width: { xs: "90%", sm: "35%", md: "25%", lg: "25%" },
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <TextField
            placeholder="Buscar post"
            variant="outlined"
            required={true}
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                border: "2px solid #524092",
                borderRadius: "50px",
              },
              //estilos para el hover del input
              "&:hover:not(.Mui-focused)": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#524092",
                },
              },
              //estilos para el input cuando esta en focus entra y sale el cursor del campo
              " .Mui-focused": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#524092",
                },
              },
            }}
          />
          <Box
            sx={{
              backgroundColor: "#524092",
              borderRadius: "100px",
              width: "55px",
              height: "55px",
              marginLeft: "-50px",
            }}
          >
            <IconButton
              type="button"
              sx={{
                p: "15px",
                color: "white",
              }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "50px",
          }}
        >
          <Typography
            sx={{
              color: "#524092",
              fontSize: "25px",
              borderBottom: "2px solid #FFC72C",
            }}
          >
            Más Post
          </Typography>
        </Box>
        {customLinks.map(({ ruta, links }, id) => (
          <Box key={id}>
            <Link
              href={ruta}
              style={{
                color: "#606060",
                textDecoration: "underline",
              }}
            >
              {links}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Articulo;
