import { BsBarChart, BsHouse } from "react-icons/bs"
import SideMenuItem from "./SideMenuItem"
import UserProfileAsMenuItem from "./UserProfileAsMenuItem"
import {AiOutlineSetting} from "react-icons/ai"

const SideMenu : React.FC = () =>{
    return <div className="w-[20%] my-3 text-gray-700 mx-6 h-full">
        <h1 className="font-bold w-full text-blue-600 text-2xl">Art.cd</h1>
        <div>
            <UserProfileAsMenuItem/>
            <div className="bg-white rounded-lg border my-2 p-2 flex flex-col">
                <SideMenuItem text="Dashboard" href="/user/dashboard"><BsBarChart/></SideMenuItem>
                <SideMenuItem text="Retour à l'acceuil" href="/"><BsHouse/></SideMenuItem>
                <SideMenuItem text="Paramètres" href="/user/settings"><AiOutlineSetting/></SideMenuItem>
            </div>
            <div className="bg-white rounded-lg border my-2 p-2 flex flex-col">
                <SideMenuItem text="Dashboard" href="/user/dashboard"><BsBarChart/></SideMenuItem>
                <SideMenuItem text="Retour à l'acceuil" href="/"><BsHouse/></SideMenuItem>
                <SideMenuItem text="Paramètres" href="/user/settings"><AiOutlineSetting/></SideMenuItem>
            </div>
        </div>
     </div>
             
}

export default SideMenu