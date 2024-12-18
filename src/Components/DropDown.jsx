import React, { useState } from 'react';

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Category');
  const [categories, setCategories] = useState([
    'All Category',
    'Data Analytics',
    'Design & Creative',
    'Full Stack',
    'IT & Networking',
    'Writing'
  ]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCategorySelect = (category) => {
    // Move the selected category to the top
    const updatedCategories = categories.filter(c => c !== category);
    updatedCategories.unshift(category);
    setCategories(updatedCategories);

    setSelectedCategory(category);
    setIsOpen(false);
  };

  return (
    <div>
      <div className="relative inline-block text-left z-10">
        <div>
          <button
            type="button"
            className="w-96 h-12 text-sm text-gray-400 inline-flex justify-between items-center rounded-md border font-poppins border-gray-300 shadow-sm px-4 py-2 bg-white font-medium hover:bg-gray-50 focus:outline-none"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded={isOpen}
            onClick={toggleDropdown}
          >
            {selectedCategory}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-96 font-poppins rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="py-1" role="none">
              {categories.map((category, index) => (
                <a
                  key={index}
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;
