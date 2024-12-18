import React, { useState, useRef } from "react";
import { FaFolderPlus, FaPlus } from "react-icons/fa";
import DropDown from "../DropDown";
import { IoLocation } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  components: {
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: '1rem',
          color: 'grey'
        },
      },
    },
  },
});

const PostTask = () => {
  const [skill, setSkill] = useState('');
  const [skills, setSkills] = useState([]);
  const [task, setTask] = useState({
    name: '',
    category: '',
    location: '',
    minBudget: '',
    maxBudget: '',
    description: '',
    type: 'fixed',
  });

  const handleInputChange = (e) => {
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

  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { ...task, skills };
    toast.success('Task posted successfully!', {
      position: toast.POSITION.TOP_RIGHT,
    });
    // Clear the form
    setTask({
      name: '',
      category: '',
      location: '',
      minBudget: '',
      maxBudget: '',
      description: '',
      type: 'fixed',
    });
    setSkills([]);
    setFileName('');
  };

  return (
    <div>
      <ToastContainer />
      <div className="m-10">
        <form onSubmit={handleSubmit}>
          <h1 className="font-poppins text-2xl tracking-wide">Post a Task</h1>
          <div className="w-auto h-101 rounded-md mt-6 shadow-xl border">
            <div className="border-b border-b-gray-300">
              <div className="flex m-5 ml-10">
                <FaFolderPlus className="text-blue-800 size-8" />
                <h1 className="font-poppins text-xl mt-1 ml-3">Task Submission Form</h1>
              </div>
            </div>

            <div className="flex m-5 ml-10 mt-7 justify-between">
              <div>
                <h1 className="font-poppins text-xl mb-3">Project Name</h1>
                <input
                  className="flex w-96 h-12 rounded border border-gray-300 placeholder:text-slate-400 font-poppins pl-4 pr-16 focus:outline-none focus:border-blue-500"
                  placeholder="Eg build a website"
                  value={task.name}
                  onChange={(e) => setTask({ ...task, name: e.target.value })}
                />
              </div>
              <div>
                <div>
                  <h1 className="text-xl font-poppins mb-3">Category</h1>
                  <DropDown
                    selected={task.category}
                    onSelect={(category) => setTask({ ...task, category })}
                  />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-poppins mb-3">Location</h1>
                <div className="relative w-96">
                  <input
                    className="w-full h-12 rounded border border-gray-300 placeholder:text-slate-400 font-poppins pl-4 pr-12 focus:outline-none focus:border-blue-500"
                    placeholder="Location"
                    value={task.location}
                    onChange={(e) => setTask({ ...task, location: e.target.value })}
                  />
                  <IoLocation className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300" size={24} />
                </div>
              </div>
            </div>
            <div className="flex m-5 ml-10 mt-7 justify-between">
              <div>
                <h1 className="font-poppins text-xl mb-3">What is your estimated budget?</h1>
                <div className="flex mr-3">
                  <div className="relative w-96 mr-4">
                    <input
                      className="w-full h-12 rounded border border-gray-300 placeholder:text-slate-400 font-poppins pl-4 pr-12 focus:outline-none focus:border-blue-500"
                      placeholder="Minimum"
                      value={task.minBudget}
                      onChange={(e) => setTask({ ...task, minBudget: e.target.value })}
                    />
                    <h1 className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300 font-poppins text-xl">USD</h1>
                  </div>
                  <div className="relative w-96">
                    <input
                      className="w-full h-12 rounded border border-gray-300 placeholder:text-slate-400 font-poppins pl-4 pr-12 focus:outline-none focus:border-blue-500"
                      placeholder="Maximum"
                      value={task.maxBudget}
                      onChange={(e) => setTask({ ...task, maxBudget: e.target.value })}
                    />
                    <h1 className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300 font-poppins text-xl">USD</h1>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-poppins mb-3">What are the Skills required?</h1>
                <div className="relative w-99">
                  <input
                    value={skill}
                    onChange={handleInputChange}
                    className="w-full h-12 rounded border border-gray-300 placeholder:text-slate-400 font-poppins pl-4 pr-12 focus:outline-none focus:border-blue-500"
                    placeholder="Add Skill"
                  />
                  <button
                    onClick={handleAddSkill}
                    type="button"
                    className="h-8 absolute inset-y-0 right-4 top-2 bottom-4 px-2 text-white bg-blue-700 rounded font-poppins text-lg"
                  >
                    <FaPlus />
                  </button>
                </div>
                <ul className="flex mt-4 list-disc pl-5 overflow-y-auto max-h-24">
                  {skills.map((skill, index) => (
                    <li key={index} className="text-sm font-poppins mb-1 flex items-center justify-between px-3 py-1 bg-blue-500 text-white rounded">
                      {skill}
                      <RxCross2
                        onClick={() => handleDeleteSkill(index)}
                        className="text-red-500 cursor-pointer ml-2 size-5"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="ml-5 font-poppins flex">
              <ThemeProvider theme={theme}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  className="ml-5"
                  value={task.type}
                  onChange={(e) => setTask({ ...task, type: e.target.value })}
                >
                  <FormControlLabel value="fixed" control={<Radio />} label="Fixed Price Project" />
                  <FormControlLabel value="hourly" control={<Radio />} label="Hourly Project" />
                </RadioGroup>
              </ThemeProvider>
            </div>
            <div className="m-5 ml-10">
              <h1 className="font-poppins text-xl mb-3">Description</h1>
              <textarea
                className="w-full h-40 rounded border border-gray-300 placeholder:text-slate-400 font-poppins pl-4 pr-16 focus:outline-none focus:border-blue-500"
                value={task.description}
                onChange={(e) => setTask({ ...task, description: e.target.value })}
              />
            </div>
            <div className="flex space-x-4 ml-10">
              <div className="flex items-center space-x-4">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                />
                <button
                  onClick={handleButtonClick}
                  className="flex items-center space-x-2 text-blue-700 rounded-md border border-blue-700 px-4 py-2"
                >
                  <span>Upload File</span>
                  <FaFolderPlus />
                </button>
                <span className="font-poppins">{fileName}</span>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="ml-10 mt-5 w-40 h-12 bg-blue-800 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Post Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostTask;
