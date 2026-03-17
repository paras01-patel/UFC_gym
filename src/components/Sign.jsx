function Sign() {
    
return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">      
        <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Sign Up
            </h1>
        <div className="flex flex-col gap-4">
        
        <div>
            <label className="text-sm text-gray-600">Name</label>
            <input type="text" placeholder="Enter your name"className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
        </div>

        <div>
            <label className="text-sm text-gray-600">Email</label>
            <input type="email" placeholder="Enter your email" className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
        </div>

        <div>
            <label className="text-sm text-gray-600">Age</label>
            <input type="text" placeholder="Enter your Age" className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
        </div>

        <div>
            <label className="text-sm text-gray-600">Password</label>
            <input type="password" placeholder="Enter your password" className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
        </div>

        <button className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            Submit
        </button>

        </div>
    </div>

    </div>

    
);
}

export default Sign;