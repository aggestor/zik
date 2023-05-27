import BasicPageBanner from "@/components/BasicPageBanner";
import BlueButtons from "@/components/BlueButtons";
import TextBox from "@/components/TextBox";
import Image from "next/image";
import Link from "next/link";

export default function ResetPassword(){
    return <div className="w-9/12 shadow-lg flex shadow-gray-200 rounded h-[450px] bg-white">
        <form className="w-[45%] py-4 px-2 h-full">
            <h2 className="text-xl font-bold text-center text-blue-600">Art.cd</h2>
            <p className="font-semibold text-center text-gray-600">Reinitaliser mot de passe.</p>
            <div className="w-10/12 mx-auto mt-10 ">
                <TextBox name="email" label="E-mail" type="email" placeholder="Votre addresse e-mail"/>
               
                <div className="my-3">
                    <BlueButtons.BaseBlueButton text="Envoyer le lien de reintialisation" width="full"/>
                </div>
                <small className="mt-3 text-gray-600">Pas encore inscrit  ?<Link className="text-blue-600 underline" href={"/inscription"}> Inscrivez-vous.</Link>  </small>
            </div>
            <div className="w-full mx-auto mt-20 text-gray-400 text-center text-sm">&copy; Copyright 2023 Art.cd.</div>

        </form>
        <div className="w-[55%] h-full bg-gradient-to-b p-4 from-white  via-sky-100 to-blue-50">
            <h1 className="w-11/12 mx-auto text-3xl font-bold text-center text-gray-900">Restez connecter avec <span className="text-blue-600">des milliers d&apos;artistes</span> venant de partout  avec <span className="text-blue-600">Art.cd</span> !</h1>
            <div className="w-full h-72">
                <Image alt="Image login illustration" src={"/illustration.png"} sizes="500%" height={0} width={0} className="w-full h-full mix-blend-color-burn"/>
            </div>
        </div>
    </div>
}