import Link from "next/link"
import { ReactNode } from "react"

type Props = {
    children ?:ReactNode
    href:string
    current?:string
    text?:string
}
const SideMenuItem : React.FC<Props> = ({children,href,current,text}) =>{
    return <Link href={href} className="w-full flex items-center space-x-2 px-1 my-1.5 rounded-lg hover:bg-blue-100 h-10 bg-white">
        <span className="border rounded p-0.5">{children}</span><span>{text}</span>
     </Link>
             
}

export default SideMenuItem