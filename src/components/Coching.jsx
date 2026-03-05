import formalImage from "../assets/c.png";
import gym2 from "../assets/gym2.jpg";
import gym3 from "../assets/gym3.jpg";
import daractor1 from "../assets/daractor1.jpg"
import daractor2 from "../assets/daractor2.jpg"



import { Link } from "react-router-dom";

function Coching(){
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


        <div className="w-full h-170 bg-cover bg-center flex flex-col items-center pt-50"style={{ backgroundImage: `url(${formalImage})` }}>
            <h1 className="text-white text-5xl font-bold">
                COCHING AT UFC GYM
            </h1>

            <p className="text-white text-center mt-4">
            With the right coach the impossible becomes possible. Maximize your potential with our <br />
            elite coaches. You'll be equipped with a program designed to meet your unique needs and <br />
            a partner who will push you to go further and go faster.
            </p>
        </div>
        
        <div className="flex mt-10 ml-20" >
            <div className="">
                <img src={gym2} alt="gym" />
            </div>
            <div className="text-center items-center ml-60"> 
                <h1 className="font-bold mt-20 w-full text-2xl">
                    PEROSNAL TRINING
                </h1>
                <p className="mt-5 text-xl">Get paired with your perfect fit. Our coaches are experts <br />
                    in their individual disciplines. We'll match you with the <br />
                    right coach, who will design a plan unique to your goals, <br />
                    lifestyle and experience. From Muay Thai to functional <br /> 
                    fitness, beginner to competitive athlete, we have a <br />
                    coach for you! <i className="font-medium"> FIND OUT MORE→</i>
                </p>
            </div>
        </div>

        <div className="flex mt-10 ml-15" >
            <div className="text-center items-center ml-20"> 
                <h1 className="font-bold mt-20 w-full text-2xl">
                    COACHING PROGRAM
                </h1>
                <p className=" text-xl">Every UFC GYM coach must pass a rigorous, science- <br />
                    backed certification process, exclusively designed for us <br />
                    by leading industry experts. Our elite program directors <br />
                    ensure coaches stay up to date on cutting-edge industry <br />
                    developments through ongoing education opportunities. <br />
                <i className="font-medium">  FIND OUT MORE→</i>
                </p>
            </div>
            <div className="ml-50">
                <img src={gym3} alt="gym" />
            </div>
        </div>
        <div className="w-full h-200 bg-sky-50 mt-5 pt-20">
            <div>
                <h1 className="text-center text-4xl ">
                    WORLD CLASS PROGRAM DIRECTORS
                </h1>
                <p className="text-center pt-10 text-xl">Access elite level programs designed and led by some of the best in the industry. Our <br />
                    MMA-fitness experience is unparalleled. Get results and get results the right way. You’re <br />
                    learning from the best.
                </p>
            </div>
            <div className="flex justify-center gap-10 items-center pt-10"> 
                <div>
                <img src={daractor1} alt="daractor1"  className="w-150"/>
                <h1 className="text-3xl">BRANDON BENDER</h1>
                <h2 className="text-2xl">DIRECTOR, MMA</h2>
                </div>
                <div>
                <img src={daractor2 } alt="daractor2"  className="w-150 h-99"/>
                <h1 className="text-3xl">LAURA AIELLO</h1>
                <h2 className="text-2xl">GLOBAL PROGRAM DIRECTOR</h2>
                </div>
            </div>            
        </div>

    </div>
    
    )
}
export default Coching