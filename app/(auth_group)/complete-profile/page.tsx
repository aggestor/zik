"use client"
import BlueButtons from "@/components/BlueButtons";
import TextBox from "@/components/TextBox";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import {BsImage} from "react-icons/bs"

export default function SignUp(){
    const [imageFileURL, setImageFileURL]  = useState("/login.jpg")
    const imagePicker = useRef<any>()
    const handlePickImage = ()=> imagePicker.current?.click()
    const pickImage = () =>{

    }

   return <div className="w-10/12 mx-auto h-[500px]  shadow-lg flex shadow-gray-200 bg-white rounded">
        
        <div className="w-[45%] h-full bg-gradient-to-b p-4 from-white  via-sky-100 to-blue-50">
            <h1 className="text-gray-900 w-11/12 mx-auto font-bold text-3xl text-center">Restez connecter avec <span className="text-blue-600">des milliers d&apos;artistes</span> venant de partout  avec <span className="text-blue-600">Art.cd</span> !</h1>
            <div className="w-full h-72">
                <Image alt="Image login illustration" src={"/illustration.png"} sizes="500%" height={0} width={0} className="w-full  mix-blend-color-burn  h-full"/>
            </div>
        </div>
        <form className="w-[55%] py-4 px-2 h-full">
            <h2 className="text-blue-600 font-bold text-xl text-center">Art.cd</h2>
            <p className="text-gray-600 text-center font-semibold">Finalisation de l&apos;inscription de l&apos;artiste.</p>
            <div className=" mt-3 h-[355px] p-2 overflow-y-auto overflow-x-hidden  __scrollbar   w-11/12 mx-auto">
               <div className="border rounded-full h-40 relative w-40 mx-auto">
                    <Image className="w-full h-full object-cover rounded-full" src={imageFileURL} alt="User avatar" sizes="100%" height={0} width={0}/>
                    <span onClick={handlePickImage} className="w-7 h-7 grid place-items-center text-white transition-all duration-700 cursor-pointer hover:shadow-lg hover:shadow-blue-300 hover:ring-2 hover:ring-blue-600 bg-blue-600 rounded-full absolute bottom-2 right-4">
                        <BsImage className="w-4 h-4"/>
                    </span>
               </div>
               <input onChange={pickImage} ref={imagePicker} hidden type="file" name="fileInput" accept="images/png,images/jpeg" />
               
                <div className="my-3">
                    <BlueButtons.BaseBlueButton text="Finaliser l'inscription" width="full"/>
                </div>
                <small className="mt-3 text-gray-600">Pas pret(e)  ?<Link className="text-blue-600 underline" href={"/profil"}> Revenir plutard.</Link>  </small>
            </div>
            <div className="mx-auto text-sm w-full text-center text-gray-400 mt-3">&copy; Copyright 2023 Art.cd.</div>

        </form>
   </div>
}