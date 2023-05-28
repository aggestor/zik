"use client"
import GoBack from "@/components/GoBack";
import { useState } from "react";
import { BsFilter, BsGrid3X3, BsList, BsListOl } from "react-icons/bs";

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
    return <div className="w-11/12 mx-auto h-[95%]">
        <div className="w-full flex h-10 items-center justify-between  rounded text-gray-700">
          <div className="flex items-center">
          <GoBack/>  <span className="font-semibold text-gray-800 text-lg ml-3">Tous nos utilisateurs</span>
          </div>
          <div className="flex space-x-2 relative items-center">
            <span className="font-semibold">249</span>
            <span onClick={handleSetLayout} className="rounded cursor-pointer bg-gray-700 text-white flex items-center p-1 border">
                {layout === "grid" ? <BsGrid3X3 className="h-5 w-5"/> : <BsListOl className="h-5 w-5"/>}
            </span>
            <span onClick={handleShowFilters} className="rounded cursor-pointer flex bg-gray-700 text-white items-center p-1 border">
                <BsFilter className="h-5 w-5"/>
            </span>
            {showFilters && <div className="absolute h-56 w-32 rounded top-8 right-1 bg-gray-700 shadow">

</div>}
          </div>
        </div>
    </div>
}