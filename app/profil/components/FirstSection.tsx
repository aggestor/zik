import BlueButtons from "@/components/BlueButtons";
import { BsEnvelope, BsGlobeEuropeAfrica, BsPhone } from "react-icons/bs";
import { FaBirthdayCake, FaCalendar } from "react-icons/fa";
import Image from "next/image"

export default function FirstSection(){
    return <div className="relative w-full shadow-lg shadow-gray-200 rounded-t-xl h-[360px] ">
    <div className="w-full border rounded-t-xl h-36 bg-gradient-to-l from-gray-100 via-sky-100 to-blue-200"></div>
    <div className="absolute w-40 h-40 p-1 bg-white border-2 border-white rounded-full top-14 left-4">
        <Image className="object-cover w-full h-full rounded-full" src={"/man.jpg"} alt="User avatar" sizes="100%" height={0} width={0}/>
    </div>
    <div className="flex items-center bg-white justify-end w-full h-[62px] px-2">
        <BlueButtons.SmallBlueButton text="Modifier votre profil"/>
    </div>
    <div className="flex flex-col items-center bg-white justify-around w-full px-2 pt-2 h-[150px]">
        <p className="w-full text-lg font-semibold text-gray-700">Kambale Mahili Aggestor</p>
        <p className="flex w-full text-sm text-gray-500 f"><BsGlobeEuropeAfrica className="w-5 h-5 mr-2"/><span>Nord-Kivu,Butembo.</span></p>
        <p className="flex w-full text-sm text-gray-500 f"><FaBirthdayCake className="w-5 h-5 mr-2"/><span>Goma, 12 déc 1995</span></p>
        <div className="flex w-full space-x-2 text-sm text-blue-600">
            <a href="tel:+243975513112" className="flex font-semibold cursor-pointer hover:underline w-fit"><BsPhone className="w-5 h-5 mr-2"/><span>+243 975 513 112</span></a>
            <span className="text-gray-500">|</span>
            <a href="mailto:aggeemhl@gmail.com" className="flex font-semibold cursor-pointer hover:underline w-fit"><BsEnvelope className="w-5 h-5 mr-2"/><span>Aggeemhl@gmail.com</span></a>
        </div>
        <p className="flex w-full text-sm text-gray-500 f"><FaCalendar className="w-5 h-5 mr-2"/><span>Membre depuis, 2 ans</span></p>
    </div>
</div>
}