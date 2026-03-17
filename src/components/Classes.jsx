import { Link } from "react-router-dom";

function Classes(){
    return(

       <nav className="bg-gray-100 text-black w-full">
        <div className="px-8 py-4 flex justify-between items-center">
            <h1 className="font-extrabold"><i>
                <span className="text-5xl">UFC</span>
                <span className="text-2xl underline ml-1">GYM</span></i>
            </h1>
            <ul className="flex space-x-8 font-medium">
                <li><Link to="#" className="hover:text-yellow-500">LOCATIONS</Link></li>
                <li><Link to="/Classes" className="hover:text-yellow-500">CLASSES</Link></li>
                <li><Link to="/Coching" className="hover:text-yellow-500">COCHING</Link></li>
                <li><Link to="/About" className="hover:text-yellow-500">ABOUT</Link></li>
                <li><Link to="/News" className="hover:text-yellow-500">NEWS</Link></li>
                <li><Link to="/Login" className="hover:text-yellow-500">LOGIN</Link></li>
            </ul>
        </div>
    </nav>
    )
}
export default Classes