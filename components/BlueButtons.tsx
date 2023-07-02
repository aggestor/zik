import { ButtonProps } from "@/type";
import { FunctionComponent } from "react";

export const SmallBlueButton : FunctionComponent<ButtonProps> = ({text,width,children, onClick, type = "button"}) =>{
    return <button type={type} onClick={onClick} className={`${width == 'full' ? 'w-full' :''}  px-1 py-0.5 hover:bg-blue-700 duration-[400] transition-all hover:shadow-lg hover:shadow-blue-400 hover:ring-2 hover:ring-blue-600 rounded-lg text-white flex justify-around items-center bg-blue-600`}>{children || text}</button>
}
export const BaseBlueButton : FunctionComponent<ButtonProps> = ({text,width = "fit",children, type = "button",onClick}) =>{
    return <button type={type}  onClick={onClick}  className={`${ width == 'full' ? 'w-full' :''} px-1.5 py-1.5 hover:bg-blue-700 duration-[400] transition-all hover:shadow-lg hover:shadow-blue-400 hover:ring-2 hover:ring-blue-600 rounded-lg flex justify-around items-center text-white bg-blue-600`}>{children || text}</button>
}
const BlueButtons = {SmallBlueButton,BaseBlueButton}
export default  BlueButtons