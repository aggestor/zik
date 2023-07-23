"use client"
import BlueButtons from "@/components/BlueButtons";
import TextBox from "@/components/TextBox";
import useForm from "@/hooks/useForm";
import Auth from "@/services/Auth";
import { APIError } from "@/type";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react"

export default function Login(){
    const [{email,password}, handleChange] = useForm({email:"", password:""})
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState<APIError>()
    const onClickLogin = async () =>{
        setLoading(true)
        const result = await Auth.login(email as string,password as string)
        console.log(result);
        setLoading(false)
    }

    return <div className="md:w-9/12 w-full shadow-lg flex shadow-gray-200 rounded h-auto md:h-[450px] bg-white">
        <form className="md:w-[45%] w-full  py-4 px-2 h-full">
            <h2 className="text-blue-600 font-bold text-xl text-center">Art.cd</h2>
            <p className="text-gray-600 text-center font-semibold">Connexion de l&apos;artiste.</p>
            <div className=" mt-10 w-10/12 mx-auto">
                <TextBox onChange={handleChange} value={email as string} error={errors}  name="email" label="E-mail" type="email" placeholder="Votre addresse e-mail"/>
                <TextBox onChange={handleChange} value={password as string} error={errors} name="password" label="Mot de passe" type="password" placeholder="Votre mot de passe"/>
                <small className="mt-2 text-gray-600">Mot de passe oublier ?<Link className="text-blue-600 underline" href={"/reinitialiser-mot-de-passe"}> Reinitialiser mot de passe.</Link>  </small>
                <div className="my-3">
                    <BlueButtons.BaseBlueButton onClick={onClickLogin} text="Connexion au systeme" width="full"/>
                </div>
                <small className="mt-3 text-gray-600">Pas encore inscrit  ?<Link className="text-blue-600 underline" href={"/inscription"}> Inscrivez-vous.</Link>  </small>
            </div>
            <div className="mx-auto text-sm w-full text-center text-gray-400 mt-10">&copy; Copyright 2023 Art.cd.</div>

        </form>
        <div className="w-[55%] hidden md:block h-full bg-gradient-to-b p-4 from-white  via-sky-100 to-blue-50">
            <h1 className="text-gray-900 w-11/12 mx-auto font-bold text-3xl text-center">Restez connecter avec <span className="text-blue-600">des milliers d&apos;artistes</span> venant de partout  avec <span className="text-blue-600">Art.cd</span> !</h1>
            <div className="w-full h-72">
                <Image alt="Image login illustration" src={"/illustration.png"} sizes="500%" height={0} width={0} className="w-full  mix-blend-color-burn  h-full"/>
            </div>
        </div>
    </div>
}