import BasicPageBanner from "@/components/BasicPageBanner";
import BlueButtons from "@/components/BlueButtons";
import TextBox from "@/components/TextBox";
import Image from "next/image";
import Link from "next/link";

export default function SignUp(){
    return <div className="w-full flex flex-col h-full">
            <div className="h-auto flex items-center bg-white w-full">
                <div className="w-[95%] mt-7 flex items-center mx-auto ">
                    <div className="w-full">
                        <h2 className="text-blue-600 font-semibold mb-3 text-xl">Identification de l&apos;artiste.</h2>
                        <form className="w-full">
                            <div className="w-full flex justify-between space-x-4">
                                <div className="rounded-lg p-2 w-1/2 flex justify-between bg-gray-50 border">
                                    <TextBox name="firstName" label="Nom" placeholder="Votre  nom"/>
                                    <TextBox name="secondName" label="Post nom" placeholder="Votre  Post nom"/>
                                    <TextBox name="lastName" label="Prenom" placeholder="Votre Prenom"/>
                                </div>
                                <div className="rounded-lg p-2 w-1/2 flex justify-between bg-gray-50 border">
                                    <TextBox name="firstName" label="Nom" placeholder="Votre  nom"/>
                                    <TextBox name="secondName" label="Post nom" placeholder="Votre  Post nom"/>
                                </div>
                            </div>
                            <TextBox name="password" label="Mot de passe" type="password" placeholder="Votre mot de passe"/>
                            <small className="text-gray-600 mt-1.5">Mot de passe oublier ? <Link href="/reset-password" className="text-indigo-600 underline">Reinitialiser mot de passe</Link>.</small>
                    <div className="flex justify-between mt-3">
                        <BlueButtons.BaseBlueButton text="Connexion au systeme"/>
                        pi
                        <Link href="/register" className="font-semibold text-indigo-600">S&apos;inscrire &rarr;</Link>
                    </div>
                        </form>
                    </div>
                    {/* <div className="w-1/2 flex justify-center p-1">
                        <div className="w-72 h-72">
                            <Image alt="Artist illustration" className="w-full object-cover h-full" width={0} height={0} src={"/login.jpg"} sizes="100%"/>
                        </div>
                    </div> */}

                </div>
            </div>

        
    </div>
}