import React from "react";

const Popular = () => {
    const categories = [
        { imageSrc: "Images/Fullstack.jpg", text: "Software" },
        { imageSrc: "Images/Accounts.jpg", text: "Accounts" },
        { imageSrc: "Images/data.jpeg", text: "Data Analytics" },
        { imageSrc: "Images/marketing.jpg", text: "Marketing" },   
    ];

    return (
        <div className="mb-40">
            <div className="flex justify-center mt-16">
                <h1 className="font-poppins text-3xl mb-10">Popular Categories</h1>
            </div>
            <div className="flex justify-center mt-10">
                {categories.map((category, index) => (
                    <div key={index} className="relative mr-10">
                        <img src={category.imageSrc} alt="" className="h-48 w-80 rounded-md blur-sm"/>
                        <h1 className="absolute inset-0 flex justify-center items-center text-white font-poppins text-xl">{category.text}</h1>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-10">
                {categories.map((category, index) => (
                    <div key={index} className="relative mr-10">
                        <img src={category.imageSrc} alt="" className="h-48 w-80 rounded-md blur-sm"/>
                        <h1 className="absolute inset-0 flex justify-center items-center text-white font-poppins text-xl">{category.text}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Popular;
