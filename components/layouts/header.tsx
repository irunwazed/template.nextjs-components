'use client'
import { ControlTheme } from "@/app/theme"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Input } from "../ui/input"
// import { ControlTheme } from "./theme";

export function Header() {

  const [isMenuMobile, setIsMenuMobile] = useState(false)
  const [isBlur, setIsBlur] = useState(false)

  return (
    <nav >
      <div className={"absolute top-0 bottom-0 right-0 left-0 bg-black-400/50 transition-all backdrop-blur-sm "+ (isBlur?" z-10 visible": " invisible")}></div>
      <div className="fixed w-full bg-white px-3 py-2 text-primary xl:grid xl:place-content-center z-10">
        <div className="flex justify-between items-center w-full xl:w-[1200px]">
          <div className="flex items-center">
            <div className="bg-[#0b65c2] p-[3px] text-white rounded-md mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
                <path fillRule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="relative text-slate-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 absolute left-[10px] -top-[10px]">
                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
              </svg>
            </div>
            <Input className="h-[30px] w-[300px] bg-slate-100 pl-8 text-black focus:w-[430px] transition-all" placeholder="Cari..." onFocus={() => setIsBlur(true)} onBlur={() => setIsBlur(false)} />
          </div>
          {/* <ControlTheme /> */}
          <div className="flex">
            {/* mobile */}
            <div className="sm:hidden" onClick={() => setIsMenuMobile(!isMenuMobile)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
            {/* . mobile */}

            <div className="hidden sm:flex">
              <div>Beranda</div>
              <div>Galeri</div>
              <div>Berita</div>
            </div>


          </div>

        </div>
      </div>



      {/* mobile */}
      <div className={"fixed top-0 bottom-0 left-0 right-0 backdrop-blur-sm z-10 sm:hidden transition-all " + (isMenuMobile ? " visible" : " invisible")}>
        <div className={"absolute top-0 bottom-0 right-0 left-0 transition-all" + (isMenuMobile ? " opacity-100" : " opacity-0")} onClick={() => setIsMenuMobile(false)} >x</div>
        <ul className={"absolute top-0 right-0 bottom-0 w-9/12 bg-white drop-shadow-2xl p-5 transition-all duration-300" + (isMenuMobile ? " translate-x-0" : " translate-x-full")}>
          <li className="border-b border-inherit">Beranda</li>
          <li>Galeri</li>
          <li>Berita</li>
        </ul>
      </div>
      {/* . mobile */}
    </nav>
  )
}
