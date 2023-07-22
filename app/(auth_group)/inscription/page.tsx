"use client"
import BasicPageBanner from "@/components/BasicPageBanner";
import BlueButtons from "@/components/BlueButtons";
import SelectBox from "@/components/SelectBox";
import TextBox from "@/components/TextBox";
import useForm from "@/hooks/useForm";
import User from "@/services/User";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react"
type Error = Record<string, string[]>

export default function SignUp(){
    const [{name, password, email,phone, birthDate, birthPlace, town,state}, handleChange] = useForm({name:"", phone :"", email:"",birthPlace:"", birthDate:"", state:"", town:"", password:""})
    const [errors, setErrors] = useState<Error>()
    const registerUser = async () =>{
        const result = await User.register({name, email,phone, birthDate, birthPlace,password, town,state})
        if(result.response?.status == 422){
            setErrors((result.response as Record<string, any>).data.errors as Error)
        }
    }
   return <div className="lg:w-9/12 w-11/12 mx-auto h-[550px]  shadow-lg flex shadow-gray-200 bg-white rounded">
        
        <div className="w-[40%] h-full bg-gradient-to-b p-4 from-white  via-sky-100 to-blue-50">
            <h1 className="w-11/12 mx-auto text-3xl font-bold text-center text-gray-900">Restez connecter avec <span className="text-blue-600">des milliers d&apos;artistes</span> venant de partout  avec <span className="text-blue-600">Art.cd</span> !</h1>
            <div className="w-full h-72">
                <Image alt="Image login illustration" src={"/illustration.png"} sizes="500%" height={0} width={0} className="w-full h-full mix-blend-color-burn"/>
            </div>
        </div>
        <form className="w-[60%] py-4 px-2 h-full">
            <h2 className="text-xl font-bold text-center text-blue-600">Art.cd</h2>
            <p className="font-semibold text-center text-gray-600">Inscription de l&apos;artiste.</p>
            <div className=" mt-3 h-[400px] p-2 overflow-y-auto overflow-x-hidden  __scrollbar   w-11/12 mx-auto">
                <div className="w-9/12">
                    <TextBox value={name as string} onChange={handleChange} error={errors} name="name" label="Nom" type="text" placeholder="Votre nom"/>
                </div>
                <div className="w-7/12">
                    <TextBox value={phone as string} onChange={handleChange} error={errors} name="phone" label="Telephone" type="phone" placeholder="Avec le code du pays"/>
                </div>
                <div className="w-9/12">
                    <TextBox value={email as string} onChange={handleChange} error={errors} name="email" label="E-mail" type="email" placeholder="Votre adresse email"/>
                </div>
                <div className="w-9/12">
                    <TextBox value={password as string} onChange={handleChange} error={errors} name="password" label="Mot de passe" type="text" placeholder="Votre mot de passe"/>
                </div>
                <div className="flex w-full space-x-2">
                    <TextBox value={birthPlace as string} onChange={handleChange} error={errors} name="birthPlace" label="Lieu de naissance" type="text" placeholder=""/>
                    <TextBox value={birthDate as string} onChange={handleChange} error={errors} name="birthDate" label="Date de naissance" type="date" placeholder=""/>
                </div>
                <div className="flex w-full space-x-2">
                    <SelectBox name="state" label="Province" type="text" placeholder="Province ou vous vivez actuellement">
                        <option value={"test"}>Test</option>
                        <option value={"test2"}>Test 2</option>
                    </SelectBox>
                    <TextBox value={town as string} onChange={handleChange} error={errors}  name="town" label="Ville/Village" type="text" placeholder="Ville ou Village"/>
                </div>
                <small className="mt-2 text-gray-600">En cliquant sur le bouton <b>&apos;Enregistrer les informations&apos;</b> vous acceptez <Link className="text-blue-600 underline" href={"/reinitialiser-mot-de-passe"}> notre politique de confidentialites.</Link> ansi que <Link className="text-blue-600 underline" href={"/reinitialiser-mot-de-passe"}> nos conditions d&apos;utilisations.</Link>  </small>
                <div className="my-3">
                    <BlueButtons.BaseBlueButton onClick={registerUser} text="Enregistrer les informations" width="full"/>
                </div>
                <small className="mt-3 text-gray-600">Déjà  inscrit  ?<Link className="text-blue-600 underline" href={"/connexion"}> Connectez-vous.</Link>  </small>
            </div>
            <div className="w-full mx-auto mt-3 text-sm text-center text-gray-400">&copy; Copyright 2023 Art.cd.</div>

        </form>
   </div>
}