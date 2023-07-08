import { FunctionComponent } from "react";
declare type Props = {
    label?: string
    placeholder?: string,
    name:string
    type?:string
    onChange?:(e:any)=> void
    value?:string | number | readonly string[]
    error?: Record<string, string[]>
}
const TextBox: FunctionComponent<Props> = ({label, placeholder, type = "text", name,onChange,value,error}) =>{
    return<div>
        <div className={`focus-within:text-blue-600 transition-all w-full duration-[400] focus-within:font-semibold ${error && error[name] ? ' text-red-600' : 'text-gray-600'}  flex flex-col`}>
                <label htmlFor={name} className="ml-1">{label}</label>
                <input value={value} onChange={onChange} className={`h-9 transition-all duration-300 focus:font-normal focus-within:ring-2 focus:ring-blue-600 px-1.5 border ${error && error[name] && 'border-red-600'} rounded-lg outline-none text-gray-700`} name={name} id={name} placeholder={placeholder} type={type}/>
        </div>
        {error && error[name] && <small className="text-red-600">{error[name][0]}</small>}
    </div>
}

export default TextBox