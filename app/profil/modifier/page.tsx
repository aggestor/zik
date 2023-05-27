"use client"
import BlueButtons from "@/components/BlueButtons";
import GrayButtons from "@/components/GrayButtons";
import SelectBox from "@/components/SelectBox";
import TextBox from "@/components/TextBox";
import Textarea from "@/components/Textarea";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useRef, useState } from "react";
import { AiOutlineKey, AiOutlineSetting } from "react-icons/ai";
import { BsFacebook, BsImage, BsInstagram, BsTiktok, BsTwitter, BsYoutube } from "react-icons/bs";

export default function ModifierProfile(){
    const [imageFileURL, setImageFileURL]  = useState("/placeholder.png")
    const [imageFile, setImageFile]  = useState<File>()
    const [showEditSettings,setShowEditSettings] = useState(false)
    const imagePicker = useRef<any>()
    const handlePickImage = ()=> imagePicker.current?.click()
    const pickImage = (e :ChangeEvent<HTMLInputElement>) =>{
        const fileImage = e.target.files && e.target.files[0]
        if(fileImage){
            setImageFile(fileImage)
            setImageFileURL(URL.createObjectURL(fileImage))
        }
    }
    const toggleEditSettings = () => setShowEditSettings(!showEditSettings)
    return <form className="w-11/12 relative overflow-y-auto overflow-x-hidden border shadow rounded-lg bg-white  h-[90%] flex mx-auto">
        <div className="w-[50%] py-4 px-2 h-full">
            <h2 className="text-xl font-bold text-center text-blue-600">Art.cd</h2>
            <p className="font-semibold text-center text-gray-600">Inscription de l&apos;artiste.</p>
            <div className=" mt-3  p-2    w-11/12 mx-auto">
                <div className="w-11/12">
                    <TextBox name="firstName" label="Nom" type="text" placeholder="Votre nom"/>
                </div>
                <div className="w-11/12">
                    <TextBox name="secondName" label="PostNom" type="text" placeholder="Votre post-nom"/>
                </div>
                <div className="w-11/12">
                    <TextBox name="lastName" label="Prenom" type="text" placeholder="Votre prenom"/>
                </div>
                <div className="w-11/12">
                    <TextBox name="phoneNumber" label="Telephone" type="phone" placeholder="Avec le code du pays"/>
                </div>
                <div className="w-11/12">
                    <TextBox name="email" label="E-mail" type="email" placeholder="Votre adresse email"/>
                </div>
                <div className="w-11/12">
                    <TextBox name="birthPlace" label="Lieu de naissance" type="text" placeholder=""/>
                </div>
                <div className="w-11/12">
                    <TextBox name="birthday" label="Date de naissance" type="date" placeholder=""/>
                </div>
                <div className="w-11/12">
                    <SelectBox name="birthPlace" label="Province" type="text" placeholder="Province ou vous vivez actuellement">
                        <option value={"test"}>Test</option>
                        <option value={"test2"}>Test 2</option>
                    </SelectBox>
                </div>
                <div className="w-11/12">
                    <TextBox name="birthday" label="Ville/Village" type="text" placeholder="Ville ou Village"/>
                </div>
            </div>

        </div>
        <div className="w-[50%] py-4 px-2 h-full">
            <div className=" mt-8 h-auto p-2   __scrollbar   w-11/12 ">
               <div className="relative w-40 h-40 mx-auto border rounded-full">
                    <Image className="object-cover w-full h-full rounded-full" src={imageFileURL} alt="User avatar" sizes="100%" height={0} width={0}/>
                    <span onClick={handlePickImage} className="absolute grid text-white transition-all duration-700 bg-blue-600 rounded-full cursor-pointer w-7 h-7 place-items-center hover:shadow-lg hover:shadow-blue-300 hover:ring-2 hover:ring-blue-600 bottom-2 right-4">
                        <BsImage className="w-4 h-4"/>
                    </span>
               </div>
               <input onChange={pickImage} ref={imagePicker} hidden type="file" name="fileInput" accept="images/png,images/jpeg" />
               <Textarea name="description" label="Description"  placeholder="Parlez-nous un peu sur vous"/>
              <div className="mt-5">
                    <div className="flex items-center w-full space-x-2">
                        <span className="grid w-8 h-8 text-gray-700 place-items-center">
                            <BsTiktok className="w-6 h-6"/>
                        </span>
                        <TextBox name="lastName"  type="link" placeholder="Tiktok"/>
                    </div>
                    <div className="flex items-center w-full space-x-2">
                        <span className="grid w-8 h-8 text-red-500 rounded place-items-center">
                            <BsYoutube className="w-6 h-6"/>
                        </span>
                        <TextBox name="lastName"  type="link" placeholder="Youtube"/>
                    </div>
                    <div className="flex items-center w-full space-x-2">
                        <span className="grid w-8 h-8 text-gray-700 place-items-center">
                            <BsInstagram className="w-6 h-6"/>
                        </span>
                        <TextBox name="lastName"  type="link" placeholder="Instagram"/>
                    </div>
                    <div className="flex items-center w-full space-x-2">
                        <span className="grid w-8 h-8 text-blue-600 place-items-center">
                            <BsFacebook className="w-6 h-6"/>
                        </span>
                        <TextBox name="lastName"  type="link" placeholder="Facebook"/>
                    </div>
                    <div className="flex items-center w-full space-x-2">
                        <span className="grid w-8 h-8 text-sky-500 place-items-center">
                            <BsTwitter className="w-6 h-6"/>
                        </span>
                        <TextBox name="lastName"  type="link" placeholder="Twitter"/>
                    </div>
                </div>
                <div className="mt-5">
                    <BlueButtons.BaseBlueButton text="Enregistrer les mises en jours" width="full"/>
                </div>
            </div>
        </div>
        <span onClick={toggleEditSettings} className="w-8 h-8 text-gray-600 hover:bg-blue-100 cursor-pointer grid place-items-center absolute right-3 top-3 rounded">
            <AiOutlineSetting className="w-6 h-6"/>
        </span>
        {showEditSettings && <div className="w-40 text-sm text-gray-600 flex flex-col h-auto rounded border shadow absolute bg-white top-10 right-5">
            <Link className="hover:bg-gray-200 p-1 border-b rounded" href={"/profil/modifier/mot-de-passe"}>Modifier mot de passe</Link>
            <Link className="hover:bg-gray-200 p-1 rounded" href={"/profil/modifier/mot-de-passe"}>Modifier mot de passe</Link>
        </div>}
    </form>
}