import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function Signup() {

const [sign, set] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
});

const navigate = useNavigate();

function inputdata(e) {
    const { name, value } = e.target;
    set({ ...sign, [name]: value });
}

function handleSubmit(e) {
    e.preventDefault();

    if (!sign.name || !sign.email || !sign.password || !sign.confirm_password) {
        toast.error("All fields required ");
        return;
    }

    if (sign.password !== sign.confirm_password) {
        toast.error("Password not match ");
        return;
    }


    const userData = {
        name: sign.name,
        email: sign.email,
        password: sign.password
    };

    localStorage.setItem("user", JSON.stringify(userData));

    toast.success("Signup Successful ");

    console.log(userData);

    setTimeout(() => {
        navigate("/login");
    }, 1500);
}

return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    
        <form 
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
        >

        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
            Sign Up
        </h1>

        
        <div className="mb-4">
            <label className="block mb-1 font-medium">Full Name</label>
            <input
            type="text"
            onChange={inputdata}
            name="name"
            placeholder="Enter your name"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />
        </div>

        {/* Email */}
        <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
            type="email"
            onChange={inputdata}
            name="email"
            placeholder="Enter your email"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        </div>

        {/* Password */}
        <div className="mb-4">
            <label className="block mb-1 font-medium">Password</label>
            <input
            type="password"
            onChange={inputdata}
            name="password"
            placeholder="Create password"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400" />
        </div>

        
        <div className="mb-6">
            <label className="block mb-1 font-medium">Confirm Password</label>
            <input
            type="password"
            onChange={inputdata}
            name="confirm_password"
            placeholder="Confirm password"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        </div>

        <button 
        type="submit"
        className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-white hover:text-red-600 border border-red-600 transition"
        >
        Sign Up
        </button>

    
        <p className="text-center text-sm mt-4 text-gray-600">
        Already have an account?{" "}
        <span 
            onClick={() => navigate("/login")}
            className="text-red-600 cursor-pointer"
        >
            Login
        </span>
        </p>

    </form>

    <ToastContainer />
    </div>
);
}

export default Signup;