import { FunctionComponent } from "react";
declare type Props = {
    label?: string
    placeholder?: string,
    name:string
    type?:string
    onChange?:(e:any)=> void
}
const Textarea: FunctionComponent<Props> = ({label, placeholder, type = "text", name,onChange}) =>{
    return <div className=" focus-within:text-blue-600 transition-all p-2 w-full duration-[400] focus-within:font-semibold my-2 text-gray-600 flex flex-col">
            <label htmlFor={name} className="ml-1">{label}</label>
            <textarea onChange={onChange} className="transition-all duration-300 focus:font-normal resize-none h-[100px] focus-within:ring-2 focus:ring-blue-600 px-1.5 border rounded-lg outline-none text-gray-700" name={name} id={name} placeholder={placeholder}></textarea>
    </div>
}

export default Textarea