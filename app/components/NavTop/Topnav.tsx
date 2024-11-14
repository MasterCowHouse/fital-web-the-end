"use client";

import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; //libreria instalado
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/img/logo-fital.svg";
import { Typography } from "@mui/material";

// Dropdown
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// End Dropdown
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";

export default function TopNav() {
  // Dropdown
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // End Dropdown
  // nuevo
  // const [openAbrir, setOpenAbrir] = React.useState<boolean>(true);
  const [openAbrir, setOpenAbrir] = React.useState<boolean>(false);

  const handleClickDos = () => {
    setOpenAbrir(!openAbrir);
  };
  //end nuevo
  const [menuIcon, setIcon] = useState<boolean>(false);

  const handleSmallerScreensNavigation = () => {
    setIcon(!menuIcon);
  };
  // Contador
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const target = new Date("12/13/2024 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box className="bg-[#352B5E] w-full ease-in duration-300 fixed top-0 left-0 z-10">
      <Box className="max-w-[1366px] mx-auto h-[100px] flex justify-between items-center p-4">
        <Box>
          {/* <Link href={'/PageWallet'}> */}
          <Link href={"/"}>
            <Image
              src={logo}
              alt="Logo FItal"
              // width={235}
              width={70}
              height={90}
            />
          </Link>
        </Box>
        {/* <Box className="hidden md:flex uppercase"> */}
        <Box className="hidden md:flex">
          <Link
            href={"/"}
            className="text-[#FFFFFF] font-semibold text-1xl lg:text-[20px] mr-4 lg:mr-8"
          >
            Inicio
          </Link>
          {/* //Dropdown */}
          <Button
            // href={'/PageTokenizacion'}
            // className="text-[#FFFFFF] font-semibold text-1xl lg:text-[20px] mr-4 lg:mr-8 normal-case"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              // border: '1px solid red',
              padding: "0px",
              margin: "0px",
            }}
          >
            <Typography
              className="text-[#FFFFFF] font-semibold text-1xl lg:text-[20px] mr-4 lg:mr-8 normal-case"
              sx={
                {
                  // border: '1px solid red'
                }
              }
            >
              Servicios{" "}
              <ExpandMoreIcon
                sx={
                  {
                    // border: '1px solid red'
                  }
                }
              />
            </Typography>

            {/* <svg data-testid="DeleteIcon"></svg> */}
            {/* <svg data-testid="ExpandMoreIcon"></svg> */}
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={handleClose}
              sx={{
                color: "#524092",
                "&:hover": {
                  bgcolor: "#524092",
                  color: "white",
                },
              }}
            >
              <Link href={"/PageTokenizacion"}>Tokenización de Inmuebles</Link>
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              sx={{
                color: "#524092",
                "&:hover": {
                  bgcolor: "#524092",
                  color: "white",
                },
              }}
            >
              <Link href={"/PageFideicomiso"}>Fideicomiso Digital</Link>
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              sx={{
                color: "#524092",
                "&:hover": {
                  bgcolor: "#524092",
                  color: "white",
                },
              }}
            >
              <Link href={"/PageWallet"}>Fital Wallet</Link>
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              sx={{
                color: "#524092",
                "&:hover": {
                  bgcolor: "#524092",
                  color: "white",
                },
              }}
            >
              <Link href={"/PageCompraDeTokens"}>Compra de Tokens</Link>
            </MenuItem>
          </Menu>
          <Link
            href={"/PageBlog"}
            className="text-[#FFFFFF] font-semibold text-1xl lg:text-[20px] mr-4 lg:mr-8"
          >
            Blog
          </Link>
          <Link
            href={"/PageContacto"}
            className="text-[#FFFFFF] font-semibold text-1xl lg:text-[20px]"
          >
            Contacto
          </Link>
        </Box>
        <Box className="hidden md:flex">
          <Box className="flex">
            <Box
              className="timer-wrapper"
              sx={{
                backgroundColor: "#524092",
                px: 2,
                py: 0.5,
                borderRadius: "100px",
              }}
            >
              <Box className="timer-inner">
                <Box
                  className="timer-segment"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      className="time"
                      sx={{
                        marginLeft: "10px",
                      }}
                    >
                      {days} días
                    </Typography>
                    {/* <Typography
                      className="time"
                      sx={{
                        marginLeft: "10px",
                      }}
                    >
                      {hours}-horas /
                    </Typography> */}
                    {/* <Typography
                      className="time"
                      sx={{
                        marginLeft: "10px",
                      }}
                    >
                      {minutes}-minutos /
                    </Typography>
                    <Typography
                      className="time"
                      sx={{
                        marginLeft: "10px",
                      }}
                    >
                      {seconds}-segundos
                    </Typography> */}
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 900,
                        color: "#FFC72C",
                      }}
                    >
                      Tu Wallet
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Icono de menu */}
        <Box
          onClick={handleSmallerScreensNavigation}
          className="flex md:hidden"
        >
          {menuIcon ? (
            <AiOutlineClose size={25} className="text-[#FFFFFF]" />
          ) : (
            <AiOutlineMenu size={25} className="text-[#FFFFFF]" />
          )}
        </Box>
        {/* Pantalla menu Hamburger */}
        <Box
          className={
            menuIcon
              ? "md:hidden absolute top-[100px] right-0 bottum-0 left-0 flex justify-center items-center w-full h-screen bg-[#352B5E] text-white ease-in duration-300"
              : "md:hidden absolute top-[100px] right-0 left-[-100%] flex justify-center items-center w-full h-screen bg-slate-800 text-white text-center ease-in duration-300"
          }
        >
          {/* Pantalla menu Hamburger Links*/}
          <Box className="w-full">
            <Box
              onClick={handleSmallerScreensNavigation}
              className="py-5 font-bold text-left text-2xl cursor-pointer"
              sx={{
                marginLeft: "15px",
              }}
            >
              <Link href={"/"}>Inicio</Link>
            </Box>
            <Box>
              <ListItemButton onClick={handleClickDos}>
                <Typography className="py-5 font-bold text-left text-2xl cursor-pointer">
                  Servicios
                  {openAbrir ? <ExpandLess /> : <ExpandMore />}
                </Typography>
              </ListItemButton>
              <Collapse in={openAbrir} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <Box onClick={handleSmallerScreensNavigation}>
                      <Link href={"/PageTokenizacion"}>
                        Tokenización de Inmuebles
                      </Link>
                    </Box>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <Box onClick={handleSmallerScreensNavigation}>
                      <Link href={"/PageFideicomiso"}>Fideicomiso Digital</Link>
                    </Box>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <Box onClick={handleSmallerScreensNavigation}>
                      <Link href={"/PageWallet"}>Fital Wallet</Link>
                    </Box>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <Box onClick={handleSmallerScreensNavigation}>
                      <Link href={"/PageCompraDeTokens"}>Compra de Tokens</Link>
                    </Box>
                  </ListItemButton>
                </List>
              </Collapse>
            </Box>
            <Box
              onClick={handleSmallerScreensNavigation}
              className="py-5 font-bold text-left text-2xl cursor-pointer"
              sx={{
                marginLeft: "15px",
              }}
            >
              <Link href={"/PageBlog"}>Blog</Link>
            </Box>
            <Box
              onClick={handleSmallerScreensNavigation}
              className="py-5 font-bold text-left text-2xl cursor-pointer"
              sx={{
                marginLeft: "15px",
              }}
            >
              <Link href={"/PageContacto"}>Contacto</Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
