"use client"
import BlueButtons from "@/components/BlueButtons";
import GrayButtons from "@/components/GrayButtons";
import TextBox from "@/components/TextBox";
import Textarea from "@/components/Textarea";
import useForm from "@/hooks/useForm";
import User from "@/services/User";
import { APIError } from "@/type";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useRef, useState } from "react";
import {BsFacebook, BsImage, BsInstagram, BsTiktok, BsTwitter, BsYoutube} from "react-icons/bs"

export default function CompleteProfile(){
    const [imageFileURL, setImageFileURL]  = useState("/placeholder.png")
    const [imageFile, setImageFile]  = useState<File>()
    const [loading, setLoading]  = useState(false)
    const [showAddSocials,setShowAddSocials] = useState(false)
    const imagePicker = useRef<any>()
    const handlePickImage = ()=> imagePicker.current?.click()
    const pickImage = (e :ChangeEvent<HTMLInputElement>) =>{
        const fileImage = e.target.files && e.target.files[0]
        if(fileImage){
            setImageFile(fileImage)
            setImageFileURL(URL.createObjectURL(fileImage))
        }
    }
    const [{Instagram, TikTok, Twitter, Youtube, description, Facebook}, handleChange] = useForm({TikTok:"",Youtube:"", Twitter:"",Facebook:"",Instagram:"", description:""})
    const [errors, setErrors] = useState<APIError>()
    const toggleAddSocials = () => setShowAddSocials(!showAddSocials)
    const onClickRegister = async () => {
        setLoading(true)
        const socials = TikTok+","+Twitter+","+Instagram+","+Youtube
        const result = await User.completeProfile({description, socials,picture:imageFile as File})
        if(result.response?.status == 422){
            setErrors((result.response as Record<string, any>).data.errors as APIError)
        }
        else if(result.status == 200){

        }
        setLoading(false)
    }

   return <div className="w-10/12 mx-auto h-[500px]  shadow-lg flex shadow-gray-200 bg-white rounded">
        <div className="w-[45%] h-full bg-gradient-to-b p-4 from-white  via-sky-100 to-blue-50">
            <h1 className="w-11/12 mx-auto text-3xl font-bold text-center text-gray-900">Restez connecter avec <span className="text-blue-600">des milliers d&apos;artistes</span> venant de partout  avec <span className="text-blue-600">Art.cd</span> !</h1>
            <div className="w-full h-72">
                <Image priority alt="Image login illustration" src={"/illustration.png"} sizes="500%" height={0} width={0} className="w-full h-full mix-blend-color-burn"/>
            </div>
        </div>
        <form className="w-[55%] py-4 px-2 h-full">
            <h2 className="text-xl font-bold text-center text-blue-600">Art.cd</h2>
            <p className="font-semibold text-center text-gray-600">Finalisation de l&apos;inscription de l&apos;artiste.</p>
            <div className=" mt-3 h-[355px] p-2 overflow-y-auto overflow-x-hidden  __scrollbar   w-11/12 mx-auto">
               <div className="relative w-40 h-40 mx-auto border rounded-full">
                    <Image className="object-cover w-full h-full rounded-full" src={imageFileURL} alt="User avatar" sizes="100%" height={0} width={0}/>
                    <span onClick={handlePickImage} className="absolute grid text-white transition-all duration-700 bg-blue-600 rounded-full cursor-pointer w-7 h-7 place-items-center hover:shadow-lg hover:shadow-blue-300 hover:ring-2 hover:ring-blue-600 bottom-2 right-4">
                        <BsImage className="w-4 h-4"/>
                    </span>
               </div>
               <input onChange={pickImage} ref={imagePicker} hidden type="file" name="fileInput" accept="images/png,images/jpeg" />
               <Textarea value={description as string} onChange={handleChange} error={errors}  name="description" label="Description"  placeholder="Parlez-nous un peu sur vous"/>
                {showAddSocials && <div>
                    <div className="flex mt-2 items-center w-full space-x-2">
                        <span className="grid w-8 h-8 text-gray-700 place-items-center">
                            <BsTiktok className="w-6 h-6"/>
                        </span>
                        <TextBox onChange={handleChange} value={TikTok as string} error={errors} name="TikTok"  type="link" placeholder="Tiktok"/>
                    </div>
                    <div className="flex mt-2 items-center w-full space-x-2">
                        <span className="grid w-8 h-8 text-red-500 rounded place-items-center">
                            <BsYoutube className="w-6 h-6"/>
                        </span>
                        <TextBox onChange={handleChange} value={Youtube as string} error={errors} name="Youtube"  type="link" placeholder="Youtube"/>
                    </div>
                    <div className="flex mt-2 items-center w-full space-x-2">
                        <span className="grid w-8 h-8 text-gray-700 place-items-center">
                            <BsInstagram className="w-6 h-6"/>
                        </span>
                        <TextBox onChange={handleChange} value={Instagram as string} error={errors}  name="Instagram"  type="link" placeholder="Instagram"/>
                    </div>
                    <div className="flex mt-2 items-center w-full space-x-2">
                        <span className="grid w-8 h-8 text-blue-600 place-items-center">
                            <BsFacebook className="w-6 h-6"/>
                        </span>
                        <TextBox onChange={handleChange} value={Facebook as string} error={errors} name="Facebook"  type="link" placeholder="Facebook"/>
                    </div>
                    <div className="flex mt-2 items-center w-full space-x-2">
                        <span className="grid w-8 h-8 text-sky-500 place-items-center">
                            <BsTwitter className="w-6 h-6"/>
                        </span>
                        <TextBox onChange={handleChange} value={Twitter as string} error={errors} name="Twitter"  type="link" placeholder="Twitter"/>
                    </div>
                </div>}
                <div className="my-2">
                <GrayButtons.BaseGrayButton type="button" onClick={toggleAddSocials} text={!showAddSocials ? "Ajouter les Resaux sociaux" : "Cacher le reseaux sociaux"}/>
                </div>
                <div className="my-3">
                    <BlueButtons.BaseBlueButton onClick={onClickRegister} text="Finaliser l'inscription" width="full"/>
                </div>
                <small className="mt-3 text-gray-600">Pas pret(e)  ?<Link className="text-blue-600 underline" href={"/profil"}> Revenir plutard.</Link>  </small>
            </div>
            <div className="w-full mx-auto mt-3 text-sm text-center text-gray-400">&copy; Copyright 2023 Art.cd.</div>

        </form>
   </div>
}