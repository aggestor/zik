import { ButtonProps } from "@/type";
import { FunctionComponent } from "react";

export const SmallBlueButton : FunctionComponent<ButtonProps> = ({text,width}) =>{
    return <button className={width === 'full' ? 'w-full' :'' + " px-1 py-0.5 hover:bg-blue-700 duration-[400] transition-all hover:shadow-lg hover:shadow-blue-400 hover:ring-2 hover:ring-blue-600 rounded-lg text-white bg-blue-600"}>{text}</button>
}
export const BaseBlueButton : FunctionComponent<ButtonProps> = ({text,width = "fit"}) =>{
    return <button className={ width === 'full' ? 'w-full' :'' + " px-1.5 py-1.5 hover:bg-blue-700 duration-[400] transition-all hover:shadow-lg hover:shadow-blue-400 hover:ring-2 hover:ring-blue-600 rounded-lg text-white bg-blue-600"}>{text}</button>
}
const BlueButtons = {SmallBlueButton,BaseBlueButton}
export default  BlueButtons