import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [role, setRole] = useState('');

  const handleGoogleSuccess = (response) => {
    console.log('Google login successful:', response);
    // Simulate navigation to profile page
    navigate('/Profile');
    toast.success('Logged in with Google!');
  };

  const handleGoogleFailure = (error) => {
    console.error('Google login failed:', error);
    toast.error('Google login failed!');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    // Simulate successful registration
    toast.success('Registered successfully!');
    navigate('/profile', { state: { email, role } });
  };

  const handleLogin = () => {
    navigate('/Login');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 font-poppins">
      <ToastContainer />
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <img src="Images/logo1.png" alt='' className='h-24 w-60 ml-80 mb-7' />
        <h2 className="mb-5 text-2xl font-bold">SIGN UP</h2>
        <p>Let's create your account!</p>
        <p className="mb-4">
          Already have an account? <span className="text-blue-500 cursor-pointer" onClick={handleLogin}>Log in!</span>
        </p>
        <form onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full py-2 px-3 mb-4 border border-gray-300 rounded"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full py-2 px-3 mb-4 border border-gray-300 rounded"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Repeat Password"
            className="w-full py-2 px-3 mb-4 border border-gray-300 rounded"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full py-2 px-3 mb-4 border border-gray-300 rounded">
            <option value="">Choose Who are You?</option>
            <option value="client">Client</option>
            <option value="freelancer">Freelancer</option>
          </select>
          <p className="text-red-500">{errorMessage}</p>
          <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded">
            Register
          </button>
        </form>
        <p className="mt-4">or</p>
        <div className="flex justify-between mt-5">
          <button className="flex py-2 px-4 border border-blue-800 text-blue-800 rounded">
            <FaFacebook className='mr-3 size-6 text-blue-800' />
            Register via Facebook
          </button>
          <GoogleLogin
            clientId="YOUR_GOOGLE_CLIENT_ID" // Replace with your actual client ID
            buttonText="Register via Google"
            onSuccess={handleGoogleSuccess}
            onFailure={handleGoogleFailure}
            cookiePolicy={'single_host_origin'}
            render={renderProps => (
              <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="flex py-2 px-4 border border-red-600 text-red-500 rounded">
                <FcGoogle className='mr-3 size-6' />
                Register via Google
              </button>
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
