import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp, BsYoutube } from "react-icons/bs";

export default function ThirdSection(){
    return <div className="w-full p-3 mt-4 text-gray-500 shadow-xl shadow-gray-200">
        <p className="w-full text-lg font-semibold text-gray-800">Réseaux sociaux</p>
        <div className="flex justify-between w-full mt-4 mb-3">
            <div className="flex w-[20%]">
                <span className="w-8 h-8 text-gray-600">
                    <BsYoutube className="w-6 h-6"/>
                </span>
                Youtube
            </div>
            <div className="flex w-[20%]">
                <span className="w-8 h-8 text-gray-600">
                    <BsInstagram className="w-6 h-6"/>
                </span>
                Instagram
            </div>
            <div className="flex w-[20%]">
                <span className="w-8 h-8 text-gray-600">
                    <BsFacebook className="w-6 h-6"/>
                </span>
                Facebook
            </div>
            <div className="flex w-[20%]">
                <span className="w-8 h-8 text-gray-600">
                    <BsTwitter className="w-6 h-6"/>
                </span>
                Twitter
            </div>
            <div className="flex w-[20%]">
                <span className="w-8 h-8 text-gray-600">
                    <BsWhatsapp className="w-6 h-6"/>
                </span>
                WhatsApp
            </div>
        </div>
</div>
}