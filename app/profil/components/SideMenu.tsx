import UserProfileAsMenuItem from "./UserProfileAsMenuItem"

const SideMenu : React.FC = () =>{
    return <div className="w-[20%] my-3 text-gray-700 mx-6 h-full">
        <h1 className="font-bold w-full text-blue-600 text-2xl">Art.cd</h1>
        <div>
            <UserProfileAsMenuItem/>
        </div>
     </div>
             
}

export default SideMenu