"use client"
import BlueButtons from "@/components/BlueButtons";
import GoBack from "@/components/GoBack";
import GrayButtons from "@/components/GrayButtons";
import SelectBox from "@/components/SelectBox";
import TextBox from "@/components/TextBox";
import Textarea from "@/components/Textarea";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useRef, useState } from "react";
import { BsImage } from "react-icons/bs";
export default function ModifierProfile(){
    const [imageFileURL, setImageFileURL]  = useState("/placeholder.png")
    const [imageFile, setImageFile]  = useState<File>()
    const imagePicker = useRef<any>()
    const handlePickImage = ()=> imagePicker.current?.click()
    const pickImage = (e :ChangeEvent<HTMLInputElement>) =>{
        const fileImage = e.target.files && e.target.files[0]
        if(fileImage){
            setImageFile(fileImage)
            setImageFileURL(URL.createObjectURL(fileImage))
        }
    }
    return <form className="w-11/12 relative overflow-y-auto overflow-x-hidden border shadow rounded-lg bg-white  h-[60%] flex mx-auto">
        <div className="w-[50%] py-4 flex flex-col justify-around px-2 h-full">
            <div className=" h-full p-2 flex flex-col justify-around  __scrollbar   w-11/12 ">
            <p className="font-semibold text-center text-gray-600">Créer une nouvelle extension.</p>
               <div className="relative w-64 h-36 mx-auto border rounded">
                    <Image className="object-cover w-full h-full rounded" src={imageFileURL} alt="User avatar" sizes="100%" height={0} width={0}/>
                    <span onClick={handlePickImage} className="absolute grid text-white transition-all duration-700 bg-blue-600 rounded-full cursor-pointer w-7 h-7 place-items-center hover:shadow-lg hover:shadow-blue-300 hover:ring-2 hover:ring-blue-600 bottom-2 right-4">
                        <BsImage className="w-4 h-4"/>
                    </span>
               </div>
               <input onChange={pickImage} ref={imagePicker} hidden type="file" name="fileInput" accept="images/png,images/jpeg" />
                <div className="mt-5 cursor-pointer w-fit mx-auto flex items-center text-blue-600">
                   <GoBack/> <span className="ml-2">Retour</span>
                </div>
            </div>
        </div>
        <div className="w-[50%] py-4 px-4 flex flex-col justify-around h-full">
            <SelectBox name="name" label="Nom" type="text" placeholder="Le nom de la catégorie">
                <option value={1}>Test</option>
                <option value={2}>Test</option>
                <option value={3}>Test</option>
            </SelectBox>
            <TextBox name="name" label="Nom" type="text" placeholder="Le nom de l'extension"/>
            <Textarea name="description" label="Description"  placeholder="Descrivez cette extension"/>
            <div className="mt-3">
                <BlueButtons.BaseBlueButton text="Enregistrer les informations" width="full"/>
            </div>
        </div>
    </form>
}