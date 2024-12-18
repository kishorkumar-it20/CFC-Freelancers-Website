import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSign = () => {
    navigate('/Register');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating a simple login check
    const predefinedEmail = 'user@example.com'; // Change this to your desired email
    const predefinedPassword = 'password123'; // Change this to your desired password

    if (email === predefinedEmail && password === predefinedPassword) {
      toast.success('Login successfully!');
      navigate('/'); // Navigate to home or dashboard
    } else {
      toast.error('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 font-poppins">
      <ToastContainer />
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <img src="Images/logo1.png" alt="" className="h-20 w-52 ml-40 mb-7" />
        <h2 className="mb-3 text-2xl font-bold">LogIn</h2>
        <p>We're glad to see you again!</p>
        <p className="mb-4">
          Don't have an account? <span className="text-blue-500 cursor-pointer" onClick={handleSign}>Sign Up!</span>
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full py-2 px-3 mb-4 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full py-2 px-3 mb-4 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded">
            Log In
          </button>
        </form>
        <p className="mt-4">or</p>
        <div className="flex justify-between mt-5">
          <button className="flex py-2 px-4 border border-blue-800 text-blue-800 rounded">
            <FaFacebook className="mr-3 size-6 text-blue-800" />
            Log In via Facebook
          </button>
          <button className="flex py-2 px-4 border border-red-600 text-red-500 rounded">
            <FcGoogle className="mr-3 size-6" />
            Log In via Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
