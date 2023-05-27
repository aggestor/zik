import Image from "next/image"
import Link from "next/link"

const UserProfileAsMenuItem : React.FC = () =>{
    return <Link href="/user/profile" className="w-full relative flex hover:bg-blue-100 cursor-pointer items-center space-x-2 my-2 rounded-lg border h-20 bg-white">
        <div className="w-16 h-16 rounded-full">
            <Image priority alt="Image login illustration" src={"/placeholder.png"} sizes="100%" height={0} width={0} className="w-16 h-16 rounded-full"/>
        </div>
        <div className="text-sm">
            <p className="font-semibold">Kambale Agge</p>
            <p>Aggestor@gmail.com</p>
            <p>+243975513112</p>
        </div>
        <span className="w-4 h-4 rounded-full bg-green-500 absolute -top-2 -right-1"></span>
     </Link>
             
}

export default UserProfileAsMenuItem