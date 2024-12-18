import React, { useState, useMemo, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import countryList from "react-select-country-list";
import { IoSettings } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
function ProfileCompletion() {
  const navigate = useNavigate();
  const location = useLocation();
  const { email, role } = location.state;

  const [profileData, setProfileData] = useState({
    name: '',
    experience: '',
    education: '',
    skillset: [],
    LinkedIn: '',
    GitHub: '',
    bio: '',
    country: '',
    profilePic: '',
    about: '',
    services: '',
    organization: '',
    mobileNumber: '',
    companyDetails: '',
    qual: '',
    des: ''
  });
  const [skill, setSkill] = useState('');
  const [skills, setSkills] = useState([]);

  const handleInputChange1 = (e) => {
    setSkill(e.target.value);
  };

  const handleAddSkill = () => {
    if (skill.trim() !== '') {
      setSkills([...skills, skill]);
      setSkill('');
    }
  };

  const handleDeleteSkill = (indexToDelete) => {
    setSkills(skills.filter((_, index) => index !== indexToDelete));
  };

  const countryOptions = useMemo(() => countryList().getData(), []);

  
  const handlePhoneChange = (value) => {
    setProfileData({ ...profileData, mobileNumber: value });
  };

  const handleCountryChange = (selectedOption) => {
    setProfileData({ ...profileData, country: selectedOption.value }); 
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);
  
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  
  const handleFileChange2 = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('file', profileImage); // Append profile image to form data
      Object.keys(profileData).forEach((key) => {
        formData.append(key, profileData[key]);
      });
      const response = await fetch('http://localhost:8080/profileCompletion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...profileData, email, role }),
      });
      const data = await response.json();
      if (response.status === 200) {
        navigate('/Login');
        toast.success('Profile completed successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      
      } else {
        console.error(data.error);
        toast.success('Profile Error in completing', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.success('Profile Error in completing', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  React.useEffect(() => {
    setProfileData({ ...profileData, skillset: skills });
  }, [skills]);
  const calculateCompletionPercentage = () => {
    const fields = Object.values(profileData);
    const filledFields = fields.filter(field => field !== '' && field.length > 0);
    return Math.round((filledFields.length / fields.length) * 100);
  };

  return (
    <div>
    <div className="border-b border-b-gray-400 font-poppins">
        <div className="flex font-poppins m-5 justify-between ">
          <img src="Images/logo1.png" alt="logo" className='h-10 w-32' />
          <h1 className="text-xl mt-2">Profile Setup</h1>
          <IoSettings className="size-10 text-gray-300 cursor-pointer" />
        </div>
      </div>
    <div className="">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="mb-5 text-2xl font-bold">Complete Your Profile</h2>
        <div className="mt-4 text-center font-poppins text-xl">
            <p>Profile Completion: {calculateCompletionPercentage()}%</p>
          </div>
        <form onSubmit={handleSubmit}>
          {role === 'freelancer' && (
           <div>
           <div className="flex m-5 ml-10 mt-7 justify-between">
             <div>
               <label className="font-poppins text-xl mb-3 block">Name</label>
               <input
                 className="flex w-96 h-12 rounded border border-gray-300 placeholder:text-slate-400 font-poppins pl-4 pr-16 focus:outline-none focus:border-blue-500"
                 placeholder="Enter name"
                 type="text"
                 name="name"
                 value={profileData.name}
                 onChange={handleInputChange}
                 required
               />
             </div>
             <div>
               <label className="text-xl font-poppins mb-3 block">Email</label>
               <input
                 className="flex w-96 h-12 rounded border border-gray-300 placeholder:text-slate-400 font-poppins pl-4 pr-16 focus:outline-none focus:border-blue-500"
                 placeholder="Email id"
                 type="email"
                 name="email"
                 value={email}
                 onChange={handleInputChange}
                 required
                 disabled
               />
             </div>
             <div>
               <label className="text-xl font-poppins mb-3 block">Mobile No</label>
               <div className="relative w-96">
                 <PhoneInput
                   country={'in'}
                   value={profileData.mobileNumber}
                   onChange={handlePhoneChange}
                   inputStyle={{ width: '24rem', height: '3rem' }}
                   containerStyle={{ width: '24rem', height: '3rem' }}
                   inputClass="rounded border border-gray-300 placeholder:text-slate-400 font-poppins pl-4 pr-12 focus:outline-none focus:border-blue-500"
                   placeholder="Enter your Mobile No"
                 />
               </div>
             </div>
             <div>
               <label className="text-xl font-poppins mb-3 block">About</label>
               <input
                 className="flex w-96 h-12 rounded border border-gray-300 placeholder:text-slate-400 font-poppins pl-4 pr-16 focus:outline-none focus:border-blue-500"
                 placeholder="About"
                 type="text"
                 name="about"
                 value={profileData.about}
                 onChange={handleInputChange}
                 required
               />
             </div>
           </div>
           <div className="flex m-5 ml-10 mt-7 justify-between">
             <div>
               <label className="text-xl font-poppins mb-3 block">Country</label>
               <Select
                 options={countryOptions}
                 value={countryOptions.find(option => option.value === profileData.country)}
                 onChange={handleCountryChange}
                 className="flex placeholder:text-slate-400 font-poppins focus:outline-none focus:border-blue-500"
                 placeholder="Select your country"
                 required
                 styles={{
                   control: (base) => ({
                     ...base,
                     width: '24rem',
                     height: '3rem',
                   }),
                 }}
               />
             </div>
             <div>
               <label className="text-xl font-poppins mb-3">Experience</label>
               <input
                 className="flex w-96 h-12 rounded border border-gray-300 placeholder:text-slate-400 font-poppins pl-4 pr-16 mt-3 focus:outline-none focus:border-blue-500"
                 placeholder="Enter Years of Experience"
                 name="experience"
                 value={profileData.experience}
                 onChange={handleInputChange}
                 required
               />
             </div>
             <div>
               <label className="text-xl font-poppins mb-3">Qualification</label>
               <div className="relative w-96">
                 <input
                   className="w-full h-12 rounded border border-gray-300 placeholder:text-slate-400 font-poppins pl-4 pr-12 mt-3 focus:outline-none focus:border-blue-500"
                   placeholder="Edu Qualification"
                   name="education"
                   value={profileData.education}
                   onChange={handleInputChange}
                   required
                 />
               </div>
             </div>
             <div>
               <label className="text-xl font-poppins mb-3">Services You Offer</label>
               <div className="relative w-96">
                 <input
                   className="w-full h-12 rounded border border-gray-300 placeholder:text-slate-400 font-poppins pl-4 pr-12 mt-3 focus:outline-none focus:border-blue-500"
                   placeholder="Services"
                   name="services"
                   value={profileData.services}
                   onChange={handleInputChange}
                   required
                 />
               </div>
             </div>
           </div>
           <div className="flex m-5 ml-10 mt-7 justify-between">
             <div className="mr-4">
               <label className="text-xl font-poppins mb-3">Skill Set</label>
               <div className="relative w-99">
                 <input
                   value={skill}
                   onChange={handleInputChange1}
                   className="w-full h-12 rounded border border-gray-300 placeholder:text-slate-400 font-poppins pl-4 pr-12 mt-3 focus:outline-none focus:border-blue-500"
                   placeholder="Add Skill"
                 />
                 <button
                   type="button"
                   onClick={handleAddSkill}
                   className="h-8 absolute inset-y-0 right-4 top-5 bottom-4 px-2 text-white bg-blue-700 rounded font-poppins text-lg"
                 >
                   <FaPlus />
                 </button>
               </div>
               <div className="flex flex-wrap mt-2">
                 {skills.map((skill, index) => (
                   <div key={index} className="bg-gray-200 rounded-lg px-4 py-2 m-1 flex items-center space-x-2">
                     <span>{skill}</span>
                     <button type="button" className="text-red-500 focus:outline-none" onClick={() => handleDeleteSkill(index)}>
                       <RxCross2 />
                     </button>
                   </div>
                 ))}
               </div>
             </div>
             <div className="mr-4">
               <label className="text-xl font-poppins mb-3">LinkedIn</label>
               <div className="relative w-99">
                 <input
                   className="w-full h-12 rounded border border-gray-300 placeholder:text-slate-400 font-poppins pl-4 pr-12 mt-3 focus:outline-none focus:border-blue-500"
                   placeholder="LinkedIn Profile"
                   name="LinkedIn"
                   value={profileData.LinkedIn}
                   onChange={handleInputChange}
                   required
                 />
               </div>
             </div>
             <div className="mr-4">
               <label className="text-xl font-poppins mb-3">GitHub/Portfolio</label>
               <div className="relative w-99">
                 <input
                   className="w-full h-12 rounded border border-gray-300 placeholder:text-slate-400 font-poppins pl-4 pr-12 mt-3 focus:outline-none focus:border-blue-500"
                   placeholder="Profile"
                   name="GitHub"
                   value={profileData.GitHub}
                   onChange={handleInputChange}
                   required
                 />
               </div>
             </div>
           </div>
           <div className="flex m-5 ml-10 mt-2 justify-between">
             <div>
               <label className="font-poppins text-xl mb-2 block">Description</label>
               <textarea
                 className="flex w-99 h-40 rounded border border-gray-300 placeholder:text-slate-400 font-poppins pl-4 pr-16 focus:outline-none focus:border-blue-500"
                 type="text"
                 name="des"
                 value={profileData.des}
                 onChange={handleInputChange}
                 required
               />
             </div>
             <div className="space-x-4 ml-10">
                <label className="font-poppins text-xl items-center ml-12 block">Upload Profile</label>
                <div className="flex items-center space-x-4">
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange2}
                    accept="image/*"
                  />
                  <button
                    type="button"
                    onClick={handleButtonClick}
                    className="flex items-center justify-center w-44 h-44 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <FaUserCircle className="w-20 h-20 text-gray-500" />
                    )}
                  </button>
                </div>
              </div>

           </div>
         </div>
          )}
          {role === 'client' && (
            <div>
            <div className="flex m-5 ml-10 mt-7 justify-between">
              <div>
                <label className="font-poppins text-xl mb-3 block">Name</label>
                <input
                  className="flex w-96 h-12 rounded border border-gray-300 placeholder:text-slate-400 font-poppins pl-4 pr-16 focus:outline-none focus:border-blue-500"
                  placeholder="Enter name"
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <div>
                  <label className="text-xl font-poppins mb-3 block">Email</label>
                  <input
                    className="flex w-96 h-12 rounded border border-gray-300 placeholder:text-slate-400 font-poppins pl-4 pr-16 focus:outline-none focus:border-blue-500"
                    placeholder="Email id"
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-xl font-poppins mb-3 block">Mobile No</label>
                <div className="relative w-96">
                  <PhoneInput
                    country={'in'}
                    value={profileData.mobileNumber}
                    onChange={handlePhoneChange}
                    inputStyle={{ width: '24rem', height: '3rem' }}
                    containerStyle={{ width: '24rem', height: '3rem' }}
                    inputClass="rounded border border-gray-300 placeholder:text-slate-400 font-poppins pl-4 pr-12 focus:outline-none focus:border-blue-500"
                    placeholder="Enter your Mobile No"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="text-xl font-poppins mb-3 block">About</label>
                  <input
                    className="flex w-96 h-12 rounded border border-gray-300 placeholder:text-slate-400 font-poppins pl-4 pr-16 focus:outline-none focus:border-blue-500"
                    placeholder="About"
                    type="text"
                    name="about"
                    value={profileData.about}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex m-5 ml-10 mt-7 justify-between">
            <div>
                <label className="text-xl font-poppins mb-3 block">Country</label>
                <Select
                  options={countryOptions}
                  value={countryOptions.find(option => option.value === profileData.country)}
                  onChange={handleCountryChange}
                  className="flex placeholder:text-slate-400 font-poppins focus:outline-none focus:border-blue-500"
                  placeholder="Select your country"
                  required
                  styles={{
                    control: (base) => ({
                      ...base,
                      width: '24rem',
                      height: '3rem',
                    }),
                  }}
                />
              </div>
              <div>
                <div>
                  <label className="text-xl font-poppins mb-3">Organization</label>
                  <input
                    className="flex w-96 h-12 rounded border border-gray-300 placeholder:text-slate-400 font-poppins pl-4 pr-16 mt-3 focus:outline-none focus:border-blue-500"
                    placeholder="Name of Organization"
                    onChange={handleInputChange}
                    required
                    name="organization"
                    value={profileData.organization}
                  />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-poppins mb-3">Qualification</h1>
                <div className="relative w-96">
                  <input
                    className="w-full h-12 rounded border border-gray-300 placeholder:text-slate-400 font-poppins pl-4 pr-12 focus:outline-none focus:border-blue-500"
                    placeholder="Edu Qualification"
                    onChange={handleInputChange}
                    value={profileData.qual}
                    name="qual"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-xl font-poppins mb-3">Services</label>
                <div className="relative w-96">
                  <input
                    className="w-full h-12 rounded border border-gray-300 placeholder:text-slate-400 font-poppins pl-4 pr-12 mt-3 focus:outline-none focus:border-blue-500"
                    placeholder="Services"
                    onChange={handleInputChange}
                    value={profileData.services}
                    name="services"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex m-5 ml-10 mt-7 justify-between">
              <div>
                <label className="text-xl font-poppins mb-3">Skill Set</label>
                <div className="relative w-99">
                  <input
                    value={skill}
                    onChange={handleInputChange1}
                    className="w-full h-12 rounded border border-gray-300 placeholder:text-slate-400 font-poppins pl-4 pr-12 mt-3 focus:outline-none focus:border-blue-500"
                    placeholder="Add Skill"
                  />
                  <button
                    type="button"
                    onClick={handleAddSkill}
                    className="h-8 absolute inset-y-0 right-4 top-5 bottom-4 px-2 text-white bg-blue-700 rounded font-poppins text-lg"
                  >
                    <FaPlus />
                  </button>
                </div>
                <ul className="flex mt-4 list-disc pl-5 overflow-y-auto max-h-24">
                  {skills.map((skill, index) => (
                    <li key={index} className="text-sm font-poppins mb-1 flex items-center justify-between px-3 py-1 bg-gray-100 rounded-full">
                      <span>{skill}</span>
                      <RxCross2
                        onClick={() => handleDeleteSkill(index)}
                        className="text-red-500 cursor-pointer ml-2 size-5"
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <label className="text-xl font-poppins mb-3">LinkedIn</label>
                <div className="relative w-99">
                  <input
                    className="w-full h-12 rounded border border-gray-300 placeholder:text-slate-400 font-poppins pl-4 pr-12 mt-3 focus:outline-none focus:border-blue-500"
                    placeholder="LinkedIn Profile"
                    value={profileData.LinkedIn}
                    onChange={handleInputChange}
                    name="LinkedIn"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-xl font-poppins mb-3">Company Website</label>
                <div className="relative w-99">
                  <input
                    className="w-full h-12 rounded border border-gray-300 placeholder:text-slate-400 font-poppins pl-4 pr-12 mt-3 focus:outline-none focus:border-blue-500"
                    placeholder="Website"
                    value={profileData.companyDetails}
                    onChange={handleInputChange}
                    name="companyDetails"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex m-5 ml-10 mt-2 justify-between">
              <div>
                <label className="font-poppins text-xl mb-2 block">Description</label>
                <textarea
                  className="flex w-99 h-40 rounded border border-gray-300 placeholder:text-slate-400 font-poppins pl-4 pr-16 focus:outline-none focus:border-blue-500"
                  type="text"
                  name="des"
                  value={profileData.des}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label className="font-poppins text-xl mb-2 block">Bio</label>
                <textarea
                  className="flex w-99 h-40 rounded border border-gray-300 placeholder:text-slate-400 font-poppins pl-4 pr-16 focus:outline-none focus:border-blue-500"
                  type="text"
                  name="bio"
                  value={profileData.bio}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-x-4 ml-10">
                <label className="font-poppins text-xl items-center ml-12 block">Upload Profile</label>
                <div className="flex items-center space-x-4">
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange2}
                    accept="image/*"
                  />
                  <button
                    type="button"
                    onClick={handleButtonClick}
                    className="flex items-center justify-center w-44 h-44 bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <FaUserCircle className="w-20 h-20 text-gray-500" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          )}
          <div className="flex justify-center mt-20">
          <button type="submit" className="w-60 py-2 px-4 bg-blue-600 text-white rounded">
            Complete Profile
          </button>
          </div>
          
        </form>
      </div>
    </div>

    </div>
  );
}

export default ProfileCompletion;
