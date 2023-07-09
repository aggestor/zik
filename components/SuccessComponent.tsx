"use client"
import {  BsCheckCircleFill } from "react-icons/bs"
import Link from "next/link"
import { useEffect, useState } from "react"
import  {usePathname} from "next/navigation"

type Props = {
    title ?: string
    message?:string
    next?: string
    nextText?:string
}
const SuccessComponent: React.FC<Props> = ({title,message,next, nextText} : Props) =>{
    const [currentNext, setCurrentNext] = useState("/")
    const pathname = usePathname()
    useEffect(()=>{
        setCurrentNext(pathname)
    },[pathname])
    return <div className="w-[500px] h-[200px]  justify-between p-3 bg-green-100 items-center flex rounded-lg shadow">
        <BsCheckCircleFill className="w-28 h-28 text-green-600"/>
        <div className="w-[70%] h-40  flex flex-col justify-center">
            <h1 className="text-black mb-1 font-bold text-xl">{title || "Success"}</h1>
            <p className="text-black mb-1">{message || " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque neque in, ea fugit minima tempore est quibusdam ipsum."}</p>
            <Link className="rounded-lg text-white p-1 bg-green-600 w-fit" href={next||currentNext }>{nextText || "Retour"}</Link>
        </div>
    </div>
}

export default SuccessComponent