import Link from "next/link";
import { FunctionComponent } from "react";
declare type Props = {}
const Navbar: FunctionComponent<Props> = () =>{
    return <nav className="h-14 flex justify-center bg-gray-50  text-gray-800">
        <div className="w-[92.5%] flex justify-between items-center">
            <div className="w-[80%] flex items-center justify-between">
                <Link href="/" className="font-bold text-3xl">zik<span className="text-sm text-blue-600">.com</span></Link>
                <div className="w-[40%] flex justify-between">
                <Link className="hover:text-blue-600 hover:font-semibold" href="/">Acceuil</Link>
                <Link className="hover:text-blue-600 hover:font-semibold" href="/musiques">Musiques</Link>
                <Link className="hover:text-blue-600 hover:font-semibold" href="/qui-sommes-nous">Qui sommes-nous ?</Link>
                <Link className="hover:text-blue-600 hover:font-semibold" href="/contacts">Contacts</Link>
                </div>
            </div>
            <div className="w-[20%] flex items-center justify-end space-x-4">
                <Link className="bg-blue-500 text-white px-1.5 rounded-lg py-1" href="/connexion">Connexion</Link>
                <Link className="hover:text-blue-600 hover:font-semibold"  href="/inscription">S&apos;inscrire</Link>
            </div>
        </div>
    </nav>
}
export default Navbar