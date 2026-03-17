import { Link } from "react-router-dom"

function News(){

return(

<div>

{/* NAVBAR */}

<nav className="bg-gray-100 text-black w-full">
<div className="px-8 py-4 flex justify-between items-center">

<h1 className="font-extrabold">
<i>
<span className="text-5xl">UFC</span>
<span className="text-2xl underline ml-1">GYM</span>
</i>
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


{/* HERO */}

<div className="w-full h-96 bg-black flex flex-col justify-center items-center">

<h1 className="text-white text-6xl font-bold">
UFC GYM NEWS
</h1>

<p className="text-gray-300 mt-4 text-xl">
Latest updates and fitness stories from UFC GYM
</p>

</div>


{/* NEWS SECTION */}

<div className="px-20 py-20">

<h1 className="text-4xl font-bold text-center">
LATEST NEWS
</h1>

<div className="grid grid-cols-2 gap-12 mt-16">


{/* NEWS 1 */}

<div className="shadow-lg rounded-lg overflow-hidden hover:scale-105 transition">

<img 
src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61"
className="w-full h-60 object-cover"
/>

<div className="p-6">

<h2 className="text-2xl font-bold">
New UFC Gym Opens in Mumbai
</h2>

<p className="mt-4 text-gray-600">
UFC Gym continues expanding in India with a new
state-of-the-art fitness center in Mumbai offering
advanced MMA and strength training facilities.
</p>

</div>
</div>


{/* NEWS 2 */}

<div className="shadow-lg rounded-lg overflow-hidden hover:scale-105 transition">

<img 
src="https://images.unsplash.com/photo-1599058917212-d750089bc07e"
className="w-full h-60 object-cover"
/>

<div className="p-6">

<h2 className="text-2xl font-bold">
New MMA Training Program
</h2>

<p className="mt-4 text-gray-600">
UFC Gym introduces a new professional MMA training
program designed to improve strength, endurance
and combat techniques.
</p>

</div>
</div>


{/* NEWS 3 */}

<div className="shadow-lg rounded-lg overflow-hidden hover:scale-105 transition">

<img 
src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
className="w-full h-60 object-cover"
/>

<div className="p-6">

<h2 className="text-2xl font-bold">
Fitness Championship Event
</h2>

<p className="mt-4 text-gray-600">
Members from different UFC Gym locations compete
in strength, endurance and functional training
challenges.
</p>

</div>
</div>


{/* NEWS 4 */}

<div className="shadow-lg rounded-lg overflow-hidden hover:scale-105 transition">

<img 
src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f"
className="w-full h-60 object-cover"
/>

<div className="p-6">

<h2 className="text-2xl font-bold">
Youth Fitness Program Launch
</h2>

<p className="mt-4 text-gray-600">
UFC Gym launches a youth training program to help
young athletes build strength, discipline and
confidence.
</p>

</div>
</div>

</div>

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

export default News