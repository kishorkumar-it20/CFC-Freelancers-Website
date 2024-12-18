import React from 'react';

const Monthly = () => {
    return (
        <div className='pb-10'>
            <div className="text-center">
                <h2 className="font-poppins text-2xl mt-4">Monthly Membership</h2>
                <p className="font-poppins mt-2">Details about the monthly membership plan.</p>
            </div>
            <div className='flex flex-row justify-center mt-10 space-x-10'>
                <div className='relative w-96 h-97 bg-white rounded shadow-xl border border-gray-300'>
                    <div className='absolute ml-10'>
                        <h1 className='font-poppins mt-10 text-xl'>Basic Plan</h1>
                        <p className='font-poppins mt-4 text-gray-500 text-base'>One time fee for one listing or task highlighted in search results.</p>
                        <div className='relative w-72 h-16 bg-gray-200 rounded mt-5 flex justify-center items-center'>
                            <h1 className='font-poppins text-xl'>$19/Month</h1>
                        </div>
                        <h4 className='mt-5 font-poppins text-sm'>Features of Basic Plan</h4>
                        <ul className='ml-4 mt-2 text-gray-500'>
                            <li>1 Listing</li>
                            <li>30 Days Visibility</li>
                            <li>Highlighted in Search Results</li>
                        </ul>
                        <div className="justify-center mt-5">
                            <button className="w-72 h-16 bg-blue-800 text-white rounded font-poppins text-xl">Buy</button>
                        </div>
                    </div>
                </div>
                <div className='relative w-96 h-97 bg-white rounded shadow-xl border border-gray-300'>
                    <div className='absolute ml-10'>
                        <h1 className='font-poppins mt-10 text-xl'>Basic Plan</h1>
                        <p className='font-poppins mt-4 text-gray-500 text-base'>One time fee for one listing or task highlighted in search results.</p>
                        <div className='relative w-72 h-16 bg-gray-200 rounded mt-5 flex justify-center items-center'>
                            <h1 className='font-poppins text-xl'>$19/Month</h1>
                        </div>
                        <h4 className='mt-5 font-poppins text-sm'>Features of Basic Plan</h4>
                        <ul className='ml-4 mt-2 text-gray-500'>
                            <li>1 Listing</li>
                            <li>30 Days Visibility</li>
                            <li>Highlighted in Search Results</li>
                        </ul>
                        <div className=" justify-center mt-5">
                            <button className="w-72 h-16 bg-blue-800 text-white rounded font-poppins text-xl">Buy</button>
                        </div>
                    </div>
                </div>
                <div className='relative w-96 h-97 bg-white rounded shadow-xl border border-gray-300'>
                    <div className='absolute ml-10'>
                        <h1 className='font-poppins mt-10 text-xl'>Basic Plan</h1>
                        <p className='font-poppins mt-4 text-gray-500 text-base'>One time fee for one listing or task highlighted in search results.</p>
                        <div className='relative w-72 h-16 bg-gray-200 rounded mt-5 flex justify-center items-center'>
                            <h1 className='font-poppins text-xl'>$19/Month</h1>
                        </div>
                        <h4 className='mt-5 font-poppins text-sm'>Features of Basic Plan</h4>
                        <ul className='ml-4 mt-2 text-gray-500'>
                            <li>1 Listing</li>
                            <li>30 Days Visibility</li>
                            <li>Highlighted in Search Results</li>
                        </ul>
                        <div className="justify-center mt-5">
                            <button className="w-72 h-16 bg-blue-800 text-white rounded font-poppins text-xl">Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Monthly;
