'use client'
import { Header } from "@/components/layouts/header";
import { Message } from "@/components/layouts/message";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Terminal } from "lucide-react"
import { Calendar } from "@/components/ui/calender";
import { Toast, ToastDescription, ToastTitle } from "@/components/ui/toast";

export default function Home() {
  return (
    <main>
      <div className="bg-stone-100 dark:bg-background-dark text-black dark:text-white w-full h-full min-h-screen ">
        <Header />
        <div className=" xl:flex xl:flex-wrap xl:place-content-center pt-14">
          <div className="pt-2 flex gap-2 flex-col sm:flex-row justify-center">
            <div className="sm:w-[250px]">
              <ProfilCard />
            </div>
            <div className="w-full sm:w-[640px]">
              <PostPage />
            </div>
            <div className="hidden xl:block w-[300px]">
              <SidePage />
            </div>
          </div>
        </div>

      </div>
      <Message />
    </main>
  );
}

const tes = () => {

}

const ProfilCard = () => {
  return (
    <Card className="bg-white">
      <div className="bg-slate-600 w-full h-[80px] rounded-t-lg">
      </div>
      <div className=" flex flex-col justify-center items-center">
        <div className="relative -top-[40px]">
          {/* <img className="inline-block size-20 rounded-full " src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description"></img> */}
        </div>
        <div className="-mt-8 font-semibold">
          Ahmad Khairun Aryad
        </div>
        <div className="text-sm mb-2 text-secondary-foreground">
          FullStack Developer
        </div>
        <form>
          <Button type="button" onClick={() => alert("dsfdf")} variant="secondary">Show Profile2</Button>
        </form>
        <Toast variant="default" className="fixed right-5 top-5 z-50 w-[300px] ">
          <Terminal className="h-4 w-4" />
          <ToastTitle>Heads up!</ToastTitle>
          <ToastDescription>
            You can add components and dependencies to your app using the cli.
          </ToastDescription>
        </Toast>
      </div>
    </Card>
  )
}
const list = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
}
const PostPage = () => {
  return (
    <Card className="bg-white">
      <div className="flex w-full p-2 items-center">
        <div className="flex-none mr-2">
          {/* <img className="inline-block size-16 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description"></img> */}
        </div>
        <div className="shrink w-full">
          <Textarea className="rounded-full h-[10px] w-full bg-white"></Textarea>
        </div>
      </div>
    </Card>
  )
}

const SidePage = () => {
  return (
    <Card className="bg-white">
      <div className="font-semibold">
        Ahmad Khairun Aryad
      </div>
      <div className="text-sm mb-2 text-secondary">
        FullStack Developer
      </div>
    </Card>
  )
}


