"use client";

import { Box } from "@mui/material";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; //libreria instalado
import Image from "next/image";
import logo from "@/public/img/logo-fital.svg";
import { Link } from "@/navigation";

export default function TopnavDropdown() {
  const [menuIcon, setIcon] = useState<boolean>(false);

  const handleSmallerScreensNavigation = () => {
    setIcon(!menuIcon);
  };
  return (
    <nav className="bg-black">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex items-center justify-between">
          <Image
            src={logo}
            alt="Logo FItal"
            // width={235}
            width={135}
            height={72}
          />
          <div
            onClick={handleSmallerScreensNavigation}
            className="text-3xl md:hidden"
          >
            {menuIcon ? (
              <AiOutlineClose size={25} className="text-[#FFFFFF]" />
            ) : (
              <AiOutlineMenu size={25} className="text-[#FFFFFF]" />
            )}
          </div>
        </div>
        <ul className="md:flex hidden items-center gap-8">
          <li>
            <Link href={"/PageFideicomiso"} className="py-7 px-3 inline-block">
              Inicio
            </Link>
          </li>
          <li className="group">
            <Link href={"/"} className="py-7 px-3 inline-block">
              Servicios
            </Link>
            <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
              <div className="bg-black p-3.5">
                <li className="text-sm text-grey-600 my-2.5">
                  <Link
                    href={"/PageFideicomiso"}
                    className="hover:text-primary"
                  >
                    Tokenización de Inmuebles
                  </Link>
                </li>
                <li className="text-sm text-grey-600 my-2.5">
                  <Link href={"/"} className="hover:text-primary">
                    Fideicomiso Digital
                  </Link>
                </li>
                <li className="text-sm text-grey-600 my-2.5">
                  <Link href={"/"} className="hover:text-primary">
                    Fital Wallet
                  </Link>
                </li>
                <li className="text-sm text-grey-600 my-2.5">
                  <Link href={"/"} className="hover:text-primary">
                    Compra de Tokens
                  </Link>
                </li>
              </div>
            </div>
          </li>
          <li>
            <Link href={"/"} className="py-7 px-3 inline-block">
              Nosotros
            </Link>
          </li>
          <li>
            <Link href={"/"} className="py-7 px-3 inline-block">
              Blog
            </Link>
          </li>
          <li>
            <Link href={"/"} className="py-7 px-3 inline-block">
              Contacto
            </Link>
          </li>
        </ul>
        <div className="md:block hidden">
          <Box className="mr-5 bg-[#524092] text-[#FFFFFF] rounded-full font-bold px-8 py-2">
            {/* <Box className="hidden md:flex"> */}
            {/* <Box className="flex"> */}
            <Link href={"/fideicomiso-digital-beneficios"}>
              Accede a tu Wallet
            </Link>
            {/* </Box> */}
            {/* </Box> */}
          </Box>
        </div>
        {/* mobil */}
        <ul
          className={`
                    md:hidden
                    bg-black
                    absolute
                    w-full
                    h-full
                    bottom-0
                    py-24
                    pl-4
                    duration-500 ${menuIcon ? "left-0" : "left-[100%]"}
                `}
        >
          <li>
            <Link href={"/PageFideicomiso"} className="py-7 px-3 inline-block">
              Inicio
            </Link>
          </li>
          <li>
            <Link href={"/"} className="py-7 px-3 inline-block">
              Servicios
            </Link>
          </li>
          <li>
            <Link href={"/"} className="py-7 px-3 inline-block">
              Nosotros
            </Link>
          </li>
          <li>
            <Link href={"/"} className="py-7 px-3 inline-block">
              Blog
            </Link>
          </li>
          <li>
            <Link href={"/"} className="py-7 px-3 inline-block">
              Contacto
            </Link>
          </li>
          <div className="py-5">
            {/* <Box className="hidden md:flex"> */}
            {/* <Box className="flex"> */}
            <Link
              href={"/fideicomiso-digital-beneficios"}
              className="mr-5 bg-[#524092] text-[#FFFFFF] rounded-full font-bold px-8 py-2"
            >
              Accede a tu Wallet
            </Link>
            {/* </Box> */}
            {/* </Box> */}
          </div>
        </ul>
      </div>
    </nav>
  );
}
