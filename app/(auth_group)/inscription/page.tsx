import BasicPageBanner from "@/components/BasicPageBanner";
import BlueButtons from "@/components/BlueButtons";
import TextBox from "@/components/TextBox";
import Image from "next/image";
import Link from "next/link";

export default function SignUp(){
   return <div className="w-10/12 mx-auto h-[500px]  shadow-lg flex shadow-gray-200 bg-white rounded">
        
        <div className="w-[45%] h-full bg-gradient-to-b p-4 from-white  via-sky-100 to-blue-50">
            <h1 className="text-gray-900 w-11/12 mx-auto font-bold text-3xl text-center">Restez connecter avec <span className="text-blue-600">des milliers d&apos;artistes</span> venant de partout  avec <span className="text-blue-600">Art.cd</span> !</h1>
            <div className="w-full h-72">
                <Image alt="Image login illustration" src={"/illustration.png"} sizes="500%" height={0} width={0} className="w-full  mix-blend-color-burn  h-full"/>
            </div>
        </div>
        <form className="w-[55%] py-4 px-2 h-full">
            <h2 className="text-blue-600 font-bold text-xl text-center">Art.cd</h2>
            <p className="text-gray-600 text-center font-semibold">Inscription de l&apos;artiste.</p>
            <div className=" mt-3 h-[355px] p-2 overflow-y-auto overflow-x-hidden  __scrollbar   w-11/12 mx-auto">
                <div className="w-9/12">
                    <TextBox name="firstName" label="Nom" type="text" placeholder="Votre nom"/>
                </div>
                <div className="w-full flex space-x-2">
                    <TextBox name="secondName" label="PostNom" type="text" placeholder="Votre post-nom"/>
                    <TextBox name="lastName" label="Prenom" type="text" placeholder="Votre prenom"/>
                </div>
                <div className="w-7/12">
                    <TextBox name="phoneNumber" label="Telephone" type="phone" placeholder="Avec le code du pays"/>
                </div>
                <div className="w-9/12">
                    <TextBox name="email" label="E-mail" type="email" placeholder="Votre adresse email"/>
                </div>
                <div className="w-full flex space-x-2">
                    <TextBox name="birthPlace" label="Lieu de naissance" type="text" placeholder=""/>
                    <TextBox name="birthday" label="Date de naissance" type="date" placeholder=""/>
                </div>
                <div className="w-full flex space-x-2">
                    <TextBox name="birthPlace" label="Province" type="text" placeholder="Province ou vous vivez actuellement"/>
                    <TextBox name="birthday" label="Ville/Village" type="text" placeholder="Ville ou Village"/>
                </div>
                <small className="mt-2 text-gray-600">En cliquant sur le bouton <b>&apos;Enregistrer les informations&apos;</b> vous acceptez <Link className="text-blue-600 underline" href={"/reinitialiser-mot-de-passe"}> notre politique de confidentialites.</Link> ansi que <Link className="text-blue-600 underline" href={"/reinitialiser-mot-de-passe"}> nos conditions d&apos;utilisations.</Link>  </small>
                <div className="my-3">
                    <BlueButtons.BaseBlueButton text="Enregistrer les informations" width="full"/>
                </div>
                <small className="mt-3 text-gray-600">Pas encore inscrit  ?<Link className="text-blue-600 underline" href={"/inscription"}> Inscrivez-vous.</Link>  </small>
            </div>
            <div className="mx-auto text-sm w-full text-center text-gray-400 mt-3">&copy; Copyright 2023 Art.cd.</div>

        </form>
   </div>
}