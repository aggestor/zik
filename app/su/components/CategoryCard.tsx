import { CategoryInfoType } from "@/type"
import Image from "next/image"
import { BsLink } from "react-icons/bs"

declare type Props = {
    layout?:"grid"| "list",
    infos: CategoryInfoType
}
const CategoryCard : React.FC<Props> = ({layout = "grid", infos}) =>{
    if(layout === "grid")
    return <div className="w-64 h-36 rounded overflow-hidden p-2">
        <div className="w-full h-full cursor-pointer transform hover:scale-105 transition-transform duration-700 border relative">
            <Image className="w-full h-full object-cover rounded" sizes="100%" src={infos.image || "/placeholder.jpg"} alt="Black man" width={0} height={0}/>
            <div className="absolute bottom-2 flex flex-col  p-1 bg-gray-900 backdrop-blur left-2 w-fit rounded bg-opacity-40">
               <span className="text-sm font-semibold">{infos.name}</span>
            </div>
            <div className="absolute bottom-2 flex flex-col  p-1 bg-gray-900 backdrop-blur right-2 w-fit rounded bg-opacity-40">
               <BsLink/>
            </div>
        </div>
    </div>
    else return <div></div>
}

export default CategoryCard