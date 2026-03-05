import { Link } from "react-router-dom";
import ab1 from "../assets/ab1.jpg";
import boxer from "../assets/boxer.webp"
import bo2 from "../assets/bo2.jpg"
import bo3 from "../assets/bo3.webp"
import bo4 from "../assets/bo4.jpg"







function About(){
    return(
<div>
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
                <li><a href="#" className="hover:text-yellow-500 bg-red-500">FREE PASS</a></li>
            </ul>
        </div>
    </nav>
    <div className="w-full h-150 bg-cover bg-center flex flex-col items-center pt-50"style={{ backgroundImage: `url(${boxer})` }}>
        <h1 className="text-white text-6xl font-bold">
            COCHING AT UFC GYM
        </h1>
        <p className="text-white text-center text-2xl mt-4">
            elite coaches. You'll be equipped with a program designed to meet your unique needs and <br />
            With the right coach the impossible becomes possible. Maximize your potential with our <br />
            a partner who will push you to go further and go faster.
        </p>
    </div>
    
    <div className="flex mt-10 ml-40" >
        <div className="">
            <img src={ab1} alt="ab1"  className="w-150 h-90" />
        </div>
        <div className="text-center items-center ml-30"> 
            <h1 className="font-bold mt-20 w-full text-2xl">
                U F C
            </h1>
            <p className="mt-5 text-xl pr-2">UFC GYM was founded in 2009 as the first major brand extension <br />
                of premium global sports brand and premier MMA organization,<br />
                UFC®. A close partnership continues, ensuring cutting-edge training <br />
                techniques are accessible through UFC GYM programming. <br /> 
            
            </p>
        </div>
    </div>

        <div className="flex mt-10 " >
        <div className="text-center items-center ml-40"> 
            <h1 className="font-bold mt-20 w-full text-2xl">
                Elite Coaches
            </h1>
            <p className="mt-5 text-xl pr-2 ml-2">
                Our coaches are elite athletes who have dedicated their lives to<br />
                fitness. They must pass a rigorous, science-backed certification<br />
                process designed exclusively for UFC GYM. <br />
                <i className="text-2xl mt-10 ">FIND OUT MORE</i> <br /> 
            
            </p>
        </div>
        <div className="ml-30">
            <img src={bo2} alt="bo2"  className="w-150" />
        </div>
    </div>

    <div className="flex mt-10 ml-40" >
        <div className="">
            <img src={bo3} alt="ab1"  className="w-150 h-90" />
        </div>
        <div className="text-center items-center ml-30"> 
            <h1 className="font-bold mt-20 w-full text-2xl">
                CREATE YOUR TRANING MIX
            </h1>
            <p className="mt-5 text-xl pr-2 ml-2">
                Invest in yourself with confidence! Choose a membership tier that <br />
                works for you and find everything you need under one roof. <br />
                Options include access to unlimited group fitness classes, <br />
                specialized MMA training, Youth Classes, Traditional and Functional <br />
                Training and more! <br />
            </p>
        </div>
    </div>

        <div className="flex mt-10 " >
        <div className="text-center items-center ml-40"> 
            <h1 className="font-bold mt-20 w-full text-2xl">
                MORE THAN A GYM 
            </h1>
            <p className="mt-5 text-xl pr-2 ml-2">
                Join our inclusive community of like-minded fitness enthusiasts. The <br />
                energy and friendly competition will drive you to new levels of <br />
                excellence while forging friendships in and out of the gym. <br /> 
            </p>
        </div>
        <div className="ml-30">
            <img src={bo4} alt="bo2"  className="w-150" />
        </div>
    </div>
    
        
</div>




)
}
export default About