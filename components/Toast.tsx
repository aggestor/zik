"use client"
import { BsCheckCircle, BsExclamationCircleFill, BsX } from "react-icons/bs"
import {useContext, useEffect} from "react"
import ToastContext from "@/contexts/ToastContext"


export const ToastContainer : React.FC = () =>{
    const {toastData,setData} = useContext(ToastContext)
    if(toastData?.display === true)
    return <div className={`absolute   w-[400px] bg-white text-gray-600 ${toastData?.type == "normal" ?"text-blue-600":(toastData?.type === "success"? "text-green-600" : "text-red-600")} shadow rounded-l p-0.5 z-50 top-5 right-2 max-h-[200px]`}>
        <div className="w-full relative items-center  flex h-full">
            <span onClick={() => setData && setData({display:false})} className="w-7 absolute top-1 right-1 h-7 p-0.5 hover:bg-blue-100 rounded-lg  grid place-items-center cursor-pointer text-gray-600"><BsX className="w-6 h-6"/></span>
            <p className="absolute top-1 text-black left-14 font-bold text-lg">{toastData?.title}</p>
                <span className="absolute top-2 left-1">
                {toastData?.type === "success" ? <BsCheckCircle className="w-10 h-10"/> : <BsExclamationCircleFill className="w-10 h-10"/>}
                </span>
           <div className="w-[90%]  ml-14  mt-7 h-full flex justify-between">
                <p className="w-full">{toastData?.message} lore</p>
           </div>
        </div>
    </div>
    return <></>
}

