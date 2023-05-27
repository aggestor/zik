"use client"
import BlueButtons from "@/components/BlueButtons";
import TextBox from "@/components/TextBox";
import Link from "next/link";
import { ChangeEvent, useRef, useState } from "react";
import {  AiOutlineSetting } from "react-icons/ai";

export default function ModifierProfile(){
    const [showEditSettings,setShowEditSettings] = useState(false)
    const toggleEditSettings = () => setShowEditSettings(!showEditSettings)
    return <form className="w-8/12 relative  overflow-x-hidden border shadow rounded-lg bg-white  h-[70%] flex mx-auto">

        <div className="w-9/12 mx-auto py-4 px-2 h-full">
        <h2 className="text-xl font-bold text-center text-blue-600">Art.cd</h2>
            <p className="font-semibold text-center text-gray-600">Modification mot de passe.</p>
            <div className=" mt-8 h-auto p-2   __scrollbar   w-full ">
            <TextBox name="old_password" label="Ancien de passe" type="password" placeholder="Votre ancien mot de passe"/>
            <TextBox name="new_password" label="Nouveau de passe" type="password" placeholder="Votre nouveau mot de passe"/>
            <TextBox name="confirm_password" label="Confirmer mot de passe" type="password" placeholder="Confirmer vore nouveau mot de passe"/>
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