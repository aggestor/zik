import Link from "next/link"
import { ReactNode } from "react"

type Props = {
    children ?:ReactNode
    href:string
    current?:string
    text?:string
}
const SideMenuItem : React.FC<Props> = ({children,href,current,text}) =>{
    return <Link href={href} className="w-full flex items-center space-x-2 my-2 rounded-lg hover:bg-gray-200 h-8 bg-white">
        <span className="border rounded p-0.5">{children}</span><span>{text}</span>
     </Link>
             
}

export default SideMenuItem