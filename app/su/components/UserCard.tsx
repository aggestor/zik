import { UserInfoType } from "@/type"
import Image from "next/image"

declare type Props = {
    layout?:"grid"| "list",
    infos: UserInfoType
}
const UserCard : React.FC<Props> = ({layout = "grid", infos}) =>{
    if(layout === "grid")
    return <div className="w-52 h-52 rounded overflow-hidden p-2">
        <div className="w-full h-full cursor-pointer transform hover:scale-105 transition-transform duration-700 border relative">
            <Image className="w-full h-full object-cover rounded" sizes="100%" src={infos.image || "/placeholder.jpg"} alt="Black man" width={0} height={0}/>
            <div className="absolute bottom-0 flex flex-col h-10 p-0.5 bg-gray-900 backdrop-blur w-full rounded-b bg-opacity-40">
               <span className="text-sm font-semibold">{infos.name}</span>
               <small className="text-gray-300 text-xs">{infos.type}</small>
            </div>
        </div>
    </div>
    else return <div></div>
}

export default UserCard