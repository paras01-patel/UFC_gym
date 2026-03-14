import { Link } from "react-router-dom";
import ab1 from "../assets/ab1.jpg";
import boxer from "../assets/boxer.webp"
import bo2 from "../assets/bo2.jpg"
import bo3 from "../assets/bo3.webp"
import bo4 from "../assets/bo4.jpg"
import about1 from "../assets/about1.png"
import about2 from "../assets/about2.png"
import about3 from "../assets/about3.png"
import about4 from "../assets/about4.png"
import about5 from "../assets/about5.jpg"
import about6 from "../assets/about6.jpg"
import pullup from "../assets/pullup.webp"









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
    

    <div>
        <h1 className="text-center text-5xl mt-20">MISTER LICENESE - INDIA</h1>
        <p className=" text-center text-xl mt-10">Artaxerxes Fitness & Lifestyle Pvt Ltd, led by master licensees Istayak Ansari and Farzad <br />
        Palia, signed an exclusive partnership agreement with UFC GYM in June 2017 to open more <br />
        than 100 gym locations throughout the Republic of India. UFC GYM is the first to combine <br />
        martial arts, functional training, and traditional fitness. UFC GYM's 'Train Different' <br />
        techniques create an experience that delivers immediate and lasting results in a safe and <br />
        fun environment.</p>
    </div>

    <div className="flex">
        <img src={about1} alt="about1.png" className="w-70 h-70 mt-30 ml-80 rounded-full object-cover"/>
        <p className="mt-40 ml-20 text-xl">
            “UFC GYM is for everyone who wants to have a place to work out <br />
            and who is looking to change up what they do when they go to the <br /> gym.”
            <h1 className="text-3xl mt-8 ml-50">Dana White </h1>
        <h2 className="text-xl mt- ml-52">PRESEDENT UFC</h2>
        </p>    
    </div>

    <div className="flex">
        <img src={about2} alt="about2.png" className="w-70 h-70 mt-30 ml-80 rounded-full object-cover"/>
        <p className="mt-40 ml-20 text-xl">
            “Our members and coaches are the heart of our Train Different <br />
            experience. It is so incredible that we’ve built this passionate UFC <br /> GYM community around the world.”
            <h1 className="text-3xl mt-8 ml-50">Adam Sedlack </h1>
        <h2 className="text-xl mt- ml-55">CEO, UFC GYM</h2>
        </p>    
    </div>

    <div className="flex">
        <img src={about3} alt="about3.png" className="w-70 h-70 mt-30 ml-80 rounded-full object-cover"/>
        <p className="mt-40 ml-20 text-xl">
        “The fitness market is booming in India and UFC GYM with its  <br />
        unique TRAIN DIFFERENT® philosophy is a one-stop shop for all <br />
            ages and athletic abilities.”
            <h1 className="text-3xl mt-8 ml-50">Farzad Palia </h1>
        <h2 className="text-xl mt- ml-40">CHAIRMAN, UFC GYM INIDA</h2>
        </p>    
    </div>

    <div className="flex">
        <img src={about4} alt="about4.png" className="w-70 h-70 mt-30 ml-80 rounded-full object-cover"/>
        <p className="mt-40 ml-20 text-xl">
            “At UFC GYM, we are building a supportive community of fitness <br />
            enthusiasts who motivate each other to achieve their goals.”
            <h1 className="text-3xl mt-8 ml-50">Istayak Ansari </h1>
        <h2 className="text-xl mt- ml-15">FOUNDER & MANAGING DIRECTOR, UFC GYM INDIA</h2>
        </p>    
    </div>


    <div>
        <h1 className="text-center text-5xl mt-20">YOU BELONG HERE </h1>
        <p className=" text-center text-xl mt-10">Experience MMA-inspired fitness in the workout environment that’s right for you. From our <br />Signature sized clubs to our more intimate mid-box clubs and boutique studios, find your fit.</p>
    </div>
    
    <div className="flex justify-center mt-50 gap-20 ">
        <div><h1 className="font-extrabold text-8xl" ><i>
                <span className="text-10xl">UFC</span>
                <span className="text-5xl underline ml-1">GYM</span></i>
            </h1>
            <p className="text-xl mt-20"> 6,000+ Sq. Ft <br /> <br />
Enjoy the ultimate gym experience at UFC GYM  <br />
Signature Clubs.The typical Signature club is 6,000 to <br />
8,000 sq. ft. With this much space, you’re sure to have <br />
 access to the amenities and equipment you want. <br />
 Standard offerings include strength training <br />
 equipments, UFC-style Octagon, large bag rack, indoor <br />
  turf, Brazilian jiu-jitsu mat area, Group Fitness studio, <br />
  weight room, robust cardio equipment, steam and full <br />
  -service locker rooms. Most Signature clubs offer a café <br />
   and retail store and all offer a wide-range of fitness <br />
   classes and Personal Training.</p>
            </div>
        <div><h1 className="font-extrabold text-8xl"><i>
                <span className="text-10xl">UFC</span>
                <span className="text-5xl underline ml-1">GYM</span></i>
            </h1>

            <p className="text-xl mt-20">
                5,000+ Sq. Ft <br /> <br />
                Our midsize UFC GYM locations offer every essential <br />
                for your fitness training experience. Try a variety of <br />
                fitness classes, including our core MMA-fitness classes, <br />
                and tap into Personal Training opportunities with top <br />
                -notch coaches. Typical club amenities include a boxing <br />
                bag rack, indoor turf, free weights, cardio and strength <br />
                training equipments.
            </p>
        </div>
    </div>

    <div className="mt-20  bg-gray-200  ">
        <h1 className="font-extrabold text-center text-blue-400 text-5xl font-sans pt-20 ">
            CLASS UFC GYM
        </h1>
        <p className="text-center text-xl mt-10 pb-20">
            Know what you want and want more of it? We hear you! These studios are a results-centric, <br />
            class-based boutique model. Take 12 of our signature as well as group fitness classes. Then <br />
            REPEAT.
        </p>
    </div>
    

    <div className="flex mt-10 ml-40" >
        <div className="">
            <img src={about5} alt="ab1"  className="w-150 h-90" />
        </div>
        <div className="text-center items-center ml-30"> 
            <h1 className="font-bold mt-20 w-full text-2xl">
                CLASS WORKOUTS
            </h1>
            <p className="mt-5 text-xl pr-2">
            Transform your body with TWELVE distinct, invigorating and <br />
            challenging class options. Each class is led by a top coach who will <br />
            motivate you through all 50 minutes.
            </p>
        </div>
    </div>

        <div className="flex mt-10 " >
        <div className="text-center items-center ml-40"> 
            <h1 className="font-bold mt-20 w-full text-2xl">
                WHY CLASS
            </h1>
            <p className="mt-5 text-xl pr-2 ml-2">
                It’s the perfect package. CLASS was designed to remove <br />
                the guesswork and ensure results. Achieve your goals and transform <br />
                into a fitter, stronger, more confident version of yourself. Bored? Not <br />
                here! The workouts constantly evolve.            
            </p>
                <i className="text-2xl mt-10 ">FIND OUT MORE</i> <br /> 
            
        </div>
        <div className="ml-30">
            <img src={about6} alt="about5"  className="w-150" />
        </div>
    </div>

    {/* WHY PEOPLE LOVE UFC GYM */}

<div className="why-gym-section">

<h1 className="why-title">
WHY PEOPLE LOVE UFC GYM
</h1>

<p className="why-subtitle">
Thousands of members trust UFC GYM to help them build strength,
confidence and discipline through world-class training programs.
</p>

<div className="why-container">

<div className="why-card">
<h2>World Class Equipment</h2>
<p>
Train with modern strength machines, professional MMA gear
and functional training zones designed for high performance workouts.
</p>
</div>

<div className="why-card">
<h2>Expert Trainers</h2>
<p>
Our certified coaches guide members with personalized training
plans and expert support to help them reach their goals faster.
</p>
</div>

<div className="why-card">
<h2>Motivating Community</h2>
<p>
Join a community of dedicated athletes and fitness enthusiasts
who push each other to improve every single day.
</p>
</div>

</div>

</div>

    <div className="w-full h-80 bg-cover bg-center flex flex-col items-center mt-1git 0"style={{ backgroundImage: `url(${pullup})` }}>
                <h1 className="text-white text-6xl pt-20">TRAIN FOR FREE TODAY </h1>
                <button className= "mt-10 bg-red-500 text-white px-6 py-3 font-bold border-2 border-red-500 hover:bg-white hover:text-red-500 transition">
                    GET YOUR FREE PASS
                </button>
            </div>
    
            <footer className="bg-black mt-5 h-100 ">
                <div className="px-8 py-4 flex justify-between items-center">
                    <h1 className="font-extrabold text-white"><i>
                        <span className="text-5xl">UFC</span>
                        <span className="text-2xl underline ml-1">GYM</span></i>
                    </h1>
                    <ul className="flex text-white space-x-8 font-medium">
                        <li><a href="#" className="hover:text-yellow-500">OWN A GYM</a></li>
                        <li><a href="#" className="hover:text-yellow-500">LOCATIONS</a></li>
                        <li><a href="#" className="hover:text-yellow-500">INTERNATIONAL</a></li>
                        <li><a href="#" className="hover:text-yellow-500">CONTACT</a></li>
                        
                    </ul>
                </div>
                <hr className="mt-4 text-white "/>
                <div className="mt-8 flex">
                    <div className="flex">
                        <ul className="text-white space-x-8 font-medium ml-100">
                            <li><a href="https://www.instagram.com/ufcgymindia/" className="hover:text-yellow-500">INSTAGRAM</a></li><br />
                            <li><a href="https://www.facebook.com/ufcgymindia" className="hover:text-yellow-500">FACEBOOK</a></li><br />
                            <li><a href="https://www.youtube.com/ufcgymindia" className="hover:text-yellow-500">YOUTUBE</a></li><br />
                            <li><a href="linkedin.com/company/ufcgymindia?originalSubdomain=in" className="hover:text-yellow-500">LINKDIN</a></li><br />
                            <li><a href="https://x.com/ufcgymindia" className="hover:text-yellow-500">TWITTER</a></li>
                        </ul>
                    </div>
                    <div className="flex mt-17">
                        <ul className="text-white space-x-8 font-medium ml-100">
                            <li><a href="#" className="hover:text-yellow-500">Privacy Policy</a></li><br />
                            <li><a href="#" className="hover:text-yellow-500">Terms of Service</a></li><br />
                        </ul>
                    </div>
                </div>
                
            </footer>
</div>




)
}
export default About