"use client"
import { FunctionComponent } from "react";
declare type Props = {
    title  :string
    text : string
}
const BasicPageBanner : FunctionComponent<Props> =  ({title, text}) =>{
    return <div className="h-24 bg-gray-50 w-full ">
        <div>{title}</div>        
        <div>{text}</div>        
    </div>
}

export default BasicPageBanner
