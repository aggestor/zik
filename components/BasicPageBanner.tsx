"use client"
import { FunctionComponent } from "react";
declare type Props = {
    title  :string
    text : string
}
const BasicPageBanner : FunctionComponent<Props> =  ({title, text}) =>{
    return <div className="h-40 flex flex-col justify-center bg-gray-50 w-full ">
        <h1 className="text-gray-700 font-bold text-3xl w-6/12">{title}.</h1>        
        <p className="text-gray-600 mt-3 w-8/12">{text}</p>        
    </div>
}

export default BasicPageBanner
