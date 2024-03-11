'use client'
import { Button } from "@/components/ui/button"
import { useEffect } from "react"


export default function Components() {


  useEffect(() => {
    document.documentElement.classList.add("dark")
    document.documentElement.classList.add("bg-black")
  }, [])

  return (
    <>
      <div className="flex bg-black text-white">
        <div className="h-screen border-r border-slate-600/50 w-[250px]">
          Menu
        </div>
        <div className="w-full p-3">
          <h2 className="font-bold my-3 text-4xl">Component</h2>
          <ButtonComponent />
        </div>
      </div>
    </>
  )
}

const ButtonComponent = () => {
  return (
    <>
      <section>
        <h3 className="text-xl font-semibold my-1">Button</h3>
        <Button >My Button</Button>
      </section>
    </>
  )
}