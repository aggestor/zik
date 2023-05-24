import Image from "next/image"

const UserProfileAsMenuItem : React.FC = () =>{
    return <div className="w-full flex items-center space-x-2 my-2 rounded-lg border h-20 bg-white">
        <div className="w-16 h-16 rounded-full">
            <Image priority alt="Image login illustration" src={"/placeholder.png"} sizes="100%" height={0} width={0} className="w-16 h-16 rounded-full"/>
        </div>
        <div className="text-sm">
            <p className="font-semibold">Kambale Agge</p>
            <p>Aggestor@gmail.com</p>
            <p>+243975513112</p>
        </div>
     </div>
             
}

export default UserProfileAsMenuItem