'use client'
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Message = () => {

    const [isMessage, setIsMessage] = useState(false);
    const [isIsi, setIsIsi] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
           setIsIsi(isMessage)
        }, 1000)
    }, [isMessage])

    return (
        <motion.div
         className="hidden sm:block fixed bottom-0 right-4 w-[300px]" 
         layout 
  transition={{ type: "tween", duration: 0.6, }}
  
        >
            <div className={"bg-white px-4 py-2 rounded-t-md shadow-md text-sm flex items-center border-b border-slate-400/30"}>
                <div>
                    {/* <img className="inline-block size-8 mr-2 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description"></img> */}
                    <div className="relative bottom-2 left-6 rounded-full size-[10px] bg-green-700 border border-white border-spacing-2"></div>
                </div>
                <div className="w-[200px]">Message</div>
                <div onClick={() => setIsMessage(!isMessage)}>
                    {isMessage ?
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
                        </svg>
                    }
                </div>

            </div>

    {/* <motion.div
      layout
      style={{ height: isMessage ? "100px" : "0px" }}
      className="bg-white"
    ></motion.div> */}
            <motion.div transition={{ delay: 2 }} 
            
            className={"bg-white p-2 transition-all" +(isMessage ? " visible" : " fixed invisible")}
            
        style={{ height: isMessage ? "500px" : "0px" }}
            >
                    <input type="text" placeholder="Cari" className={(isMessage ? " visible" : " fixed invisible")} />
                    <div className="overflow-y-scroll max-h-[500px]">

                <div>
                    tesss
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum quis mollitia velit vel sed qui eum enim ullam ab, alias ea reprehenderit sint repellendus excepturi incidunt necessitatibus facere facilis sit!
                </div>
                <div>
                    tesss
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum quis mollitia velit vel sed qui eum enim ullam ab, alias ea reprehenderit sint repellendus excepturi incidunt necessitatibus facere facilis sit!
                </div>
                <div>
                    tesss
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum quis mollitia velit vel sed qui eum enim ullam ab, alias ea reprehenderit sint repellendus excepturi incidunt necessitatibus facere facilis sit!
                </div>
                <div>
                    tesss
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum quis mollitia velit vel sed qui eum enim ullam ab, alias ea reprehenderit sint repellendus excepturi incidunt necessitatibus facere facilis sit!
                </div>
                <div>
                    tesss
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum quis mollitia velit vel sed qui eum enim ullam ab, alias ea reprehenderit sint repellendus excepturi incidunt necessitatibus facere facilis sit!
                </div>
                    </div>
            </motion.div>
        </motion.div>
    )
}
