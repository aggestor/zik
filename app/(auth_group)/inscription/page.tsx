import BasicPageBanner from "@/components/BasicPageBanner";
import BlueButtons from "@/components/BlueButtons";
import TextBox from "@/components/TextBox";
import Image from "next/image";
import Link from "next/link";

export default function SignUp(){
   return <div className="w-10/12 mx-auto h-[500px]  shadow-lg flex shadow-gray-200 bg-white rounded">
        
        <div className="w-[45%] h-full bg-gradient-to-b p-4 from-white  via-sky-100 to-blue-50">
            <h1 className="w-11/12 mx-auto text-3xl font-bold text-center text-gray-900">Restez connecter avec <span className="text-blue-600">des milliers d&apos;artistes</span> venant de partout  avec <span className="text-blue-600">Art.cd</span> !</h1>
            <div className="w-full h-72">
                <Image alt="Image login illustration" src={"/illustration.png"} sizes="500%" height={0} width={0} className="w-full h-full mix-blend-color-burn"/>
            </div>
        </div>
        <form className="w-[55%] py-4 px-2 h-full">
            <h2 className="text-xl font-bold text-center text-blue-600">Art.cd</h2>
            <p className="font-semibold text-center text-gray-600">Inscription de l&apos;artiste.</p>
            <div className=" mt-3 h-[355px] p-2 overflow-y-auto overflow-x-hidden  __scrollbar   w-11/12 mx-auto">
                <div className="w-9/12">
                    <TextBox name="firstName" label="Nom" type="text" placeholder="Votre nom"/>
                </div>
                <div className="flex w-full space-x-2">
                    <TextBox name="secondName" label="PostNom" type="text" placeholder="Votre post-nom"/>
                    <TextBox name="lastName" label="Prenom" type="text" placeholder="Votre prenom"/>
                </div>
                <div className="w-7/12">
                    <TextBox name="phoneNumber" label="Telephone" type="phone" placeholder="Avec le code du pays"/>
                </div>
                <div className="w-9/12">
                    <TextBox name="email" label="E-mail" type="email" placeholder="Votre adresse email"/>
                </div>
                <div className="flex w-full space-x-2">
                    <TextBox name="birthPlace" label="Lieu de naissance" type="text" placeholder=""/>
                    <TextBox name="birthday" label="Date de naissance" type="date" placeholder=""/>
                </div>
                <div className="flex w-full space-x-2">
                    <TextBox name="birthPlace" label="Province" type="text" placeholder="Province ou vous vivez actuellement"/>
                    <TextBox name="birthday" label="Ville/Village" type="text" placeholder="Ville ou Village"/>
                </div>
                <small className="mt-2 text-gray-600">En cliquant sur le bouton <b>&apos;Enregistrer les informations&apos;</b> vous acceptez <Link className="text-blue-600 underline" href={"/reinitialiser-mot-de-passe"}> notre politique de confidentialites.</Link> ansi que <Link className="text-blue-600 underline" href={"/reinitialiser-mot-de-passe"}> nos conditions d&apos;utilisations.</Link>  </small>
                <div className="my-3">
                    <BlueButtons.BaseBlueButton text="Enregistrer les informations" width="full"/>
                </div>
                <small className="mt-3 text-gray-600">Déjà  inscrit  ?<Link className="text-blue-600 underline" href={"/connexion"}> Connectez-vous.</Link>  </small>
            </div>
            <div className="w-full mx-auto mt-3 text-sm text-center text-gray-400">&copy; Copyright 2023 Art.cd.</div>

        </form>
   </div>
}