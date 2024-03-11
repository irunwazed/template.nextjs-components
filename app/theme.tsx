'use client'
import { useEffect, useState } from "react";

export const ControlTheme = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [theme, setTheme] = useState('');

    useEffect(() => {
        const _theme = localStorage.getItem("theme")
        if (_theme == "dark") setTheme("dark")
        setIsMounted(true)
    }, [])


    useEffect(() => {
        if (theme == 'dark') {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [theme])

    if (!isMounted) {
        return null
    }

    return (
        <>
            <div>
                <div>Tema : {theme}</div>
                <div>
                    <button onClick={() => setTheme('light')}>light</button>
                    <button onClick={() => setTheme('dark')}>Dark</button>
                </div>
            </div>
        </>
    )

}
