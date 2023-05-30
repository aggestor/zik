"use client"
import GoBack from "@/components/GoBack";
import { useState } from "react";
import {BsGrid3X3, BsList, BsListOl, BsPlus } from "react-icons/bs";
import UserCard from "../components/UserCard";
import { BaseBlueButton } from "@/components/BlueButtons";
import CategoryCard from "../components/CategoryCard";

export const metadata = {
    title :"Toutes les categories"
}
export default function Users(){
    const [layout, setLayout] = useState("grid")
    const [filter, setFilter] = useState("default")
    const [showFilters, setShowFilters] = useState(false)
    const handleShowFilters = () => setShowFilters(!showFilters)
    const handleSetLayout = () =>{
        if(layout === "grid"){
            setLayout("list")
        }else setLayout("grid")
    }
    const onClickAddBtn = () =>{

    }
    return <div className="w-11/12 mx-auto h-[95%]">
        <div className="w-full border-b  flex h-10 items-center justify-between  rounded text-gray-700">
          <div className="flex items-center">
          <GoBack/>  <span className="font-semibold text-gray-800 text-lg ml-3">Toutes les catégories</span>
          </div>
          <div className="flex space-x-2 relative items-center">
            <span className="font-semibold">249</span>
            <span onClick={handleSetLayout} className="rounded cursor-pointer bg-gray-700 text-white flex items-center p-1 border">
                {layout === "grid" ? <BsGrid3X3 className="h-4 w-4"/> : <BsListOl className="h-4 w-4"/>}
            </span>
            <BaseBlueButton onClick={onClickAddBtn}>
                <BsPlus/>
            </BaseBlueButton>
          </div>
        </div>
        <div className="flex mt-3 flex-wrap">
            <CategoryCard infos={{name:"Aggestor", type:"Peintre", image: "/alex-perri-At__EKm5PGE-unsplash.jpg"}}/>
            <CategoryCard infos={{name:"Mahili Mathe", type:"Musicien", image: "/charlie-green-3JmfENcL24M-unsplash.jpg"}}/>
            <CategoryCard infos={{name:"Rostand Molo", type:"Comedien", image: "/prince-akachi-4Yv84VgQkRM-unsplash.jpg"}}/>
            <CategoryCard infos={{name:"Rosalina Mathe", type:"Decoratrice", image: "/szocs-viola-ThOuFQa8dJA-unsplash.jpg"}}/>
        </div>

    </div>
}