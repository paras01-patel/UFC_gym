import formalImage from "../assets/formalll.jpeg";



function Home() {
    return (
    <div>
            <nav className="bg-gray-100 text-black w-full">
                <div className="px-8 py-4 flex justify-between items-center">
                    <h1 className="font-extrabold">
                        <span className="text-5xl">UFC</span>
                        <span className="text-2xl underline ml-1">GYM</span>
                    </h1>
                    <ul className="flex space-x-8 font-medium">
                        <li><a href="#" className="hover:text-yellow-500">LOCATIONS</a></li>
                        <li><a href="#" className="hover:text-yellow-500">CLASSES</a></li>
                        <li><a href="#" className="hover:text-yellow-500">COACHING</a></li>
                        <li><a href="#" className="hover:text-yellow-500">ABOUT</a></li>
                        <li><a href="#" className="hover:text-yellow-500">NEWS</a></li>
                        <li><a href="#" className="hover:text-yellow-500 bg-red-500">FREE PASS</a></li>
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
        what our UFC GYM Imphal Franchisee has to say about his journey with UFC GYM.</p>
       <div className="flex justify-center">
    <img 
        src={formalImage}
        alt="Formal"
        className="w-250 h-140 object-cover rounded-xl shadow-lg mt-10"
  />


</div>
        <h1 className="text-3xl font- text-center mt-12 font-serif">
            REQUEST MORE INFO
        </h1>
        <p className="mt-6 text-1xl font-serif">Fill out the form below - it only takes a few seconds and we'll reach out with more info <br />
        about franchising with UFC GYM  </p>

        </div>
        <div>
<form className="w-full mt-10">
    <div className="flex gap-10">
        <div className="w-1/2 bg-gray-100 p-6 rounded-xl">
            <label className="block text-gray-700 font-semibold mb-2"> First Name</label>
            <input type="text" placeholder="First Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        <div className="w-1/2 bg-gray-100 p-6 rounded-xl">
            <label className="block text-gray-700 font-semibold mb-2"> Last Name</label>
            <input type="text" placeholder="Last Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
    </div>

    <div className="flex gap-10 mt-12" >
        <div className="w-1/2 bg-gray-100 p-6 rounded-xl">
            <label className="block text-gray-700 font-semibold mb-2"> Model Intrest*</label>
            <input type="text" placeholder="" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        <div className="w-1/2 bg-gray-100 p-6 rounded-xl">
            <label className="block text-gray-700 font-semibold mb-2"> Phone Number*</label>
            <input type="text" placeholder="Phone number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
    </div>
    
    <div className="flex gap-10 mt-12">
        <div className="w-1/2 bg-gray-100 p-6 rounded-xl">
            <label className="block text-gray-700 font-semibold mb-2"> Email Address *</label>
            <input type="text" placeholder="Email Address" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        <div className="w-1/2 bg-gray-100 p-6 rounded-xl">
            <label className="block text-gray-700 font-semibold mb-2">
    Select State
  </label>

  <select
    required
    className="w-full px-4 py-2 border border-gray-300 rounded-lg 
               focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <option value="">-- Select State </option>


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

        {/* Union Territories */}
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
</form>
        </div>

        
    </div>


);
}

export default Home;