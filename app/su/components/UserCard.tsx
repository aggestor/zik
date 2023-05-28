import Image from "next/image"

declare type Props = {
    layout?:"grid"| "list"
}
const UserCard : React.FC<Props> = ({layout}) =>{
    return <div className="w-52 h-52 rounded overflow-hidden p-2">
        <div className="w-full h-full cursor-pointer transform hover:scale-105 transition-transform duration-700 border relative">
            <Image className="w-full h-full object-cover rounded" sizes="100%" src={"/alex-perri-At__EKm5PGE-unsplash.jpg"} alt="Black man" width={0} height={0}/>
            <div className="absolute bottom-0 h-12 p-0.5 bg-gray-900 backdrop-blur w-full rounded-b bg-opacity-40">
               <p className="text-sm font-semibold"> Aggestor MHL</p>
               <small className="text-gray-300 text-xs">Peintre</small>
            </div>
        </div>
    </div>
}

export default UserCard