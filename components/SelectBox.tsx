import { FunctionComponent,ReactNode } from "react";
declare type Props = {
    label?: string
    placeholder?: string,
    name:string
    type?:string
    children :ReactNode
    onChange?:(e:any)=> void
}
const SelectBox: FunctionComponent<Props> = ({label, placeholder, type = "text", name,onChange,children}) =>{
    return <div className=" focus-within:text-blue-600 transition-all w-full duration-[400] focus-within:font-semibold my-2 text-gray-600 flex flex-col">
            <label htmlFor={name} className="ml-1">{label}</label>
            <input list={name+label} onChange={onChange} className="h-9 transition-all duration-300 focus:font-normal focus-within:ring-2 focus:ring-blue-600 px-1.5 border rounded-lg outline-none text-gray-700" name={name} id={name} placeholder={placeholder} type={type}/>
            <datalist id={name+label}>
                {children}
            </datalist>
    </div>
}

export default SelectBox