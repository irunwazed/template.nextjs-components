'use client'
import { useEffect, useState } from "react";

export const ControlTheme = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [theme, setTheme] = useState('');

    // useEffect(() => {
    //     const _theme = localStorage.getItem("theme")
    //     if (_theme == "dark") setTheme("dark")
    //     setIsMounted(true)
    // }, [])


    // useEffect(() => {
    //     if (theme == 'dark') {
    //         document.documentElement.classList.add("dark")
    //         localStorage.setItem("theme", "dark")
    //     } else {
    //         document.documentElement.classList.remove("dark")
    //         localStorage.setItem("theme", "light")
    //     }
    // }, [theme])
    
    const handleChange = (e:any) => {
        console.log("tart", e.target.value)
        if (theme != 'dark') {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
            setTheme("dark")
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
            setTheme("light")
        }
    }

    // if (!isMounted) {
    //     return null
    // }

    return (
        <>
            <div>
                <label>Tema : </label>
                <div className="w-12 h-7 bg-secondary rounded-full">
                    <label className="relative bg-blue-400 rounded-full w-20 h-8 cursor-pointer" htmlFor="switch-theme">
                        <input onChange={handleChange} id="switch-theme" type="checkbox" className="sr-only peer"  />
                        <div className="absolute size-[20px] bg-secondary-foreground rounded-full top-1 left-1 peer-checked:left-5 transition-all duration-500"></div> 
                    </label>
                    <div className="relative left-14 top-[2px]">{theme}</div>
                    
                    {/* <button onClick={() => setTheme('light')}>light</button>
                    <button onClick={() => setTheme('dark')}>Dark</button> */}
                </div>
            </div>
        </>
    )

}
