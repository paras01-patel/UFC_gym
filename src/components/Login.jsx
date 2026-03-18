import React from "react";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        
        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
          Login
        </h1>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Button */}
        <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-white hover:text-red-600 border border-red-600 transition">
          Login
        </button>

        {/* Extra */}
        <p className="text-center text-sm mt-4 text-gray-600">
          Don’t have an account? <span className="text-red-600 cursor-pointer">Sign up</span>
        </p>

      </div>

    </div>
  );
}

export default Login;