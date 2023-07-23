import { FunctionComponent } from "react";
declare type Props = {
    label?: string
    placeholder?: string,
    name:string
    onChange?:(e:any)=> void
    value?:string | number | readonly string[]
    error?: Record<string, string[]>
}
const Textarea: FunctionComponent<Props> = ({label, placeholder,value, name,error,onChange}) =>{
    return <div>
        <div className={`focus-within:text-blue-600 transition-all  w-full duration-[400] focus-within:font-semibold my-2 ${error && error[name] ? ' text-red-600' : 'text-gray-600'} flex flex-col`}>
            <label htmlFor={name} className="ml-1">{label}</label>
            <textarea value={value} onChange={onChange} className={`transition-all duration-300 focus:font-normal resize-none h-[100px] w-full focus-within:ring-2 border focus:ring-blue-600 px-1.5 ${error && error[name] && 'border-red-600'} rounded-lg outline-none text-gray-700`} name={name} id={name} placeholder={placeholder}></textarea>
    </div>
     {error && error[name] && <small className="text-red-600">{error[name][0]}</small>}
     </div>
}

export default Textarea