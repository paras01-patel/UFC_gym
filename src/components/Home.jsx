import formalImage from "../assets/formalll.jpeg";
import { Link } from "react-router-dom";



function Home() {
     const savedUser = localStorage.getItem('userdata')
            const user = savedUser ? JSON.parse(savedUser) : null  
    return (
       
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
                <li><Link to="/Signup" className="hover:text-yellow-500">SIGNUP</Link></li>


                {user ? (
            <div className="flex gap-3 items-center">
              <span>HI, {user.name.toUpperCase()}</span>
            </div>
          ) : (
            <Link to="/Sign" className="hover:underline">SIGN IN</Link>
          )}

            </ul>
        </div>
    </nav>
        <div className="text-center " >
                <h1 className="text-3xl font- text-center mt-12 font-serif">
                    JOIN THE UFC GYM FRANCHISE FAMILY
                </h1>
                <p className="mt-6 text-1xl font-serif">The benefits of the UFC GYM experience aren't exclusive to our members. As a UFC GYM <br />
                    franchisee, you'll be part of a growing family of passionate, dedicated business people <br />
                    striving to provide the best offerings in fitness to communities around the globe. Here's <br />
                    what our UFC GYM Imphal Franchisee has to say about his journey with UFC GYM.
                </p>
            <div className="flex justify-center">
                <img src={formalImage} alt="Formal" className="w-250 h-140 object-cover rounded-xl shadow-lg mt-10"/>
            </div>
                <h1 className="text-3xl font- text-center mt-12 font-serif">
                REQUEST MORE INFO
            </h1>
            <p className="mt-6 text-1xl font-serif">Fill out the form below - it only takes a few seconds and we'll reach out with more info <br />about franchising with UFC GYM  
            </p>
        </div>
        <div>
            <form className="max-w-4xl mx-auto mt-16">

                    <div className="flex gap-6 justify-center">
                        <div className="w-[45%] bg-gray-100 p-5 rounded-xl">
                            <label className="block text-gray-700 font-semibold mb-2">First Name</label>
                                <input type="text" placeholder="First Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>

                        <div className="w-[45%] bg-gray-100 p-5 rounded-xl">
                            <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
                                <input type="text" placeholder="Last Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>
                    </div>

                    <div className="flex gap-6 justify-center mt-8">
                        <div className="w-[45%] bg-gray-100 p-5 rounded-xl">
                            <label className="block text-gray-700 font-semibold mb-2">Model Intrest*</label>
                            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>

                        <div className="w-[45%] bg-gray-100 p-5 rounded-xl">
                            <label className="block text-gray-700 font-semibold mb-2">Phone Number*</label>
                            <input type="text" placeholder="Phone number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>
                    </div>

                    <div className="flex gap-6 justify-center mt-8">
                        <div className="w-[45%] bg-gray-100 p-5 rounded-xl">
                            <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                            <input type="text" placeholder="Email Address" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        </div>

                        <div className="w-[45%] bg-gray-100 p-5 rounded-xl">
                            <label className="block text-gray-700 font-semibold mb-2">Select State</label>
                            <select required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value=""> Select State </option>
                                <option>Andhra Pradesh</option>
                                <option>Arunachal Pradesh</option>
                                <option>Assam</option>
                                <option>Bihar</option>
                                <option>Chhattisgarh</option>
                                <option>Goa</option>
                                <option>Gujarat</option>
                                <option>Haryana</option>
                                <option>Himachal Pradesh</option>
                                <option>Jharkhand</option>
                                <option>Karnataka</option>
                                <option>Kerala</option>
                                <option>Madhya Pradesh</option>
                                <option>Maharashtra</option>
                                <option>Manipur</option>
                                <option>Meghalaya</option>
                                <option>Mizoram</option>
                                <option>Nagaland</option>
                                <option>Odisha</option>
                                <option>Punjab</option>
                                <option>Rajasthan</option>
                                <option>Sikkim</option>
                                <option>Tamil Nadu</option>
                                <option>Telangana</option>
                                <option>Tripura</option>
                                <option>Uttar Pradesh</option>
                                <option>Uttarakhand</option>
                                <option>West Bengal</option>
                                <option>Andaman and Nicobar Islands</option>
                                <option>Chandigarh</option>
                                <option>Dadra and Nagar Haveli and Daman and Diu</option>
                                <option>Delhi</option>
                                <option>Jammu and Kashmir</option>
                                <option>Ladakh</option>
                                <option>Lakshadweep</option>
                                <option>Puducherry</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex gap-6 justify-center mt-8">
                        <div className="w-[45%] bg-gray-100 p-5 rounded-xl">
                            <label className="block text-gray-700 font-semibold mb-2">Best Time to call*</label>
                                <select required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>Select Time</option>
                                    <option>8-10am</option>
                                    <option>10-12am</option>
                                    <option>12-2pm</option>
                                    <option>2-4pm</option>
                                    <option>4-6pm</option>
                                </select>
                        </div>

                        <div className="w-[45%] bg-gray-100 p-5 rounded-xl">
                            <label className="block text-gray-700 font-semibold mb-2">How Do You Hear About Us?*</label>
                            <select required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Social Media</option>
                                <option>Google</option>
                                <option>UFC Fan</option>
                                <option>Referral</option>
                                <option>Member of a UFC GYM Club</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-center mt-12">
                        <button className="bg-red-600 hover:bg-black text-white font-bold px-10 py-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
                            SEND MESSAGE
                        </button>
                    </div>

            </form>
        </div>   
        
        <footer className="bg-black mt-14 h-100 ">
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


);
}

export default Home;