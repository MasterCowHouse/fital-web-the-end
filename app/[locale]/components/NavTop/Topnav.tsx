// @ts-nocheck
"use client";

import { Box } from "@mui/material";
import { useEffect, useState, useTransition } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; //libreria instalado
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
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useParams, usePathname } from "next/navigation";

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

  useEffect(() => {
    // const target = new Date("12/13/2024 23:59:59");
    const target = new Date("01/12/2025 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);
      console.log(days);
      //   const h = Math.floor(
      //     (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      //   );
      //   setHours(h);
      //   const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      //   setMinutes(m);
      //   const s = Math.floor((difference % (1000 * 60)) / 1000);
      //   setSeconds(s);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const t = useTranslations("Menu");
  // const [lang, setLang] = useState<string>("es");
  // const [isPending, startTransition] = useTransition();
  // const pathname = usePathname();
  // const params = useParams();
  // const onClick = (lang: string) => {
  //   startTransition(() => {
  //     router.replace(
  //       {
  //         pathname,
  //         params,
  //       },
  //       { locale: lang }
  //     );
  //   });
  // };

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
            {t.raw("items")[0]}
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
              {t.raw("items")[1]}
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
              <Link href={"/PageTokenizacion"}>{t.raw("services")[0]}</Link>
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
              <Link href={"/PageFideicomiso"}>{t.raw("services")[1]}</Link>
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
              <Link href={"/PageWallet"}>{t.raw("services")[2]}</Link>
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
              <Link href={"/PageCompraDeTokens"}>{t.raw("services")[3]}</Link>
            </MenuItem>
          </Menu>
          <Link
            href={"/PageBlog"}
            className="text-[#FFFFFF] font-semibold text-1xl lg:text-[20px] mr-4 lg:mr-8"
          >
            {t.raw("items")[2]}
          </Link>
          <Link
            href={"/PageContacto"}
            className="text-[#FFFFFF] font-semibold text-1xl lg:text-[20px]"
          >
            {t.raw("items")[3]}
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
                        color: "white",
                      }}
                    >
                      {/* {days} días */}
                      {t("wallet.title")}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 900,
                        color: "#FFC72C",
                      }}
                    >
                      {t("wallet.description")}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            {/* <Button
              onClick={() => {
                if (lang === "es") {
                  setLang("en");
                  onClick("en");
                }
              }}
              sx={{
                bgcolor: "#524092",
                border: 1,
                borderColor: "#707070",
                borderRadius: 30,
                width: 75,
                height: 75,
              }}
            >
              {lang}
            </Button> */}
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
              <Link href={"/"}>{t.raw("items")[0]}</Link>
            </Box>
            <Box>
              <ListItemButton onClick={handleClickDos}>
                <Typography className="py-5 font-bold text-left text-2xl cursor-pointer">
                  {t.raw("items")[1]}
                  {openAbrir ? <ExpandLess /> : <ExpandMore />}
                </Typography>
              </ListItemButton>
              <Collapse in={openAbrir} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <Box onClick={handleSmallerScreensNavigation}>
                      <Link href={"/PageTokenizacion"}>
                        {t.raw("services")[0]}
                      </Link>
                    </Box>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <Box onClick={handleSmallerScreensNavigation}>
                      <Link href={"/PageFideicomiso"}>
                        {t.raw("services")[1]}
                      </Link>
                    </Box>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <Box onClick={handleSmallerScreensNavigation}>
                      <Link href={"/PageWallet"}>{t.raw("services")[2]}</Link>
                    </Box>
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <Box onClick={handleSmallerScreensNavigation}>
                      <Link href={"/PageCompraDeTokens"}>
                        {t.raw("services")[3]}
                      </Link>
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
              <Link href={"/PageBlog"}>{t.raw("items")[2]}</Link>
            </Box>
            <Box
              onClick={handleSmallerScreensNavigation}
              className="py-5 font-bold text-left text-2xl cursor-pointer"
              sx={{
                marginLeft: "15px",
              }}
            >
              <Link href={"/PageContacto"}>{t.raw("items")[3]}</Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
