import { ButtonProps } from "@/type";
import { FunctionComponent } from "react";

export const SmallGrayButton : FunctionComponent<ButtonProps> = ({text,width,type="button"}) =>{
    return <button type={type} className={`${width == 'full' ? 'w-full' :''}  px-1 py-0.5 hover:bg-gray-700 duration-[400] transition-all hover:shadow-lg hover:shadow-gray-400 hover:ring-2 hover:ring-gray-600 rounded-lg text-white bg-gray-600`}>{text}</button>
}
export const BaseGrayButton : FunctionComponent<ButtonProps> = ({text,width = "fit",type="button"}) =>{
    return <button type={type} className={`${ width == 'full' ? 'w-full' :''} px-1.5 py-1.5 hover:bg-gray-700 duration-[400] transition-all hover:shadow-lg hover:shadow-gray-400 hover:ring-2 hover:ring-gray-600 rounded-lg text-white bg-gray-600`}>{text}</button>
}
const GrayButtons = {SmallGrayButton,BaseGrayButton}
export default  GrayButtons