import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {

const [data, setData] = useState({
    email: "",
    password: ""
});
const navigate = useNavigate();

function handleChange(e) {
    
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
}

function handleSubmit(e) {
    e.preventDefault();

    
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
    alert("No user found, please signup first ");
    return;
    }

    // match c
    if (
    data.email === storedUser.email &&
    data.password === storedUser.password
    ) {
    alert("Login Successful ");
        navigate("/");
    
    } else {
    alert("Invalid Email or Password ");
    }
}

return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    
    <form 
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
    >
        
        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
        Login
        </h1>

        <div className="mb-4">
        <label className="block mb-1 font-medium">Email</label>
        <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full p-2 border rounded-lg"
        />
        </div>

        <div className="mb-6">
        <label className="block mb-1 font-medium">Password</label>
        <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full p-2 border rounded-lg"
            />
        </div>

        <button 
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg"
        >
            Login
        </button>

    </form>
    </div>
    );
}

export default Login;