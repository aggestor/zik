"use client"
import FirstSection from "./components/FirstSection"
import SecondSection from "./components/SecondSection"
import ThirdSection from "./components/ThirdSection"

export default function Profile(){
    return <div className="w-11/12 mx-auto h-[90%]  my-auto">
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
    </div>
}