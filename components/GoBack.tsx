import { BsArrowLeft } from "react-icons/bs";

export default function GoBack(){
    return <div className="w-8 h-8 bg-blue-600 hover:bg-blue-700 transition-colors duration-700 hover:shadow-blue-300 cursor-pointer  hover:shadow-lg rounded-full text-white grid place-items-center">
        <BsArrowLeft/>
    </div>
}