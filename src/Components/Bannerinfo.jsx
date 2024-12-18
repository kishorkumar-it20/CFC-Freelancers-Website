import React, { useEffect, useState } from 'react';
const CountUpAnimation = ({
	initialValue,
	targetValue,
	text,
}) => {
	const [count, setCount] = useState(initialValue);
	const duration = 1000; // 4 seconds

	useEffect(() => {
		let startValue = initialValue;
		const interval = Math.floor(
			duration / (targetValue - initialValue));

		const counter = setInterval(() => {
			startValue += 1;
			setCount(startValue);
			if (startValue >= targetValue) {
				clearInterval(counter);
			}
		}, interval);

		return () => {
			clearInterval(counter);
		};
	}, [targetValue, initialValue]);

	return (
		<div className="container text-center mx-4">
			<span className="num text-4xl">{count}</span>
			<span className="text block mt-2">{text}</span>
		</div>
	);
};

const Bannerinfo = () => {
    return(
        <div className="bannerinfo z-10 absolute">
            <div className="mt-56 ml-96">
                <h1 className="text-white font-poppins tracking-wide text-4xl pb-7">Don't just Dream, Do</h1>
                <h4 className="text-gray-400 font-poppins tracking-normal text-2xl italic">Find the Best job in digital Industry</h4>
                <div className="flex relative mt-20 ml-32">
                    <input 
                        className="flex w-100 h-20 rounded placeholder:italic placeholder:text-slate-400 font-poppins pl-4 pr-16" 
                        placeholder="job title or keywords"
                    />
                    <div></div>
                    <button className="absolute inset-y-0 right-4 top-4 bottom-4 px-6 text-white bg-blue-700 rounded font-poppins text-lg">
                        Search
                    </button>
                </div>
                <div className="flex mt-10 ml-32 md:mt-20 text-white font-poppins">
					<CountUpAnimation
						initialValue={0}
						targetValue={115}
						text="Job Posted"
					/>
					<div className="border-l border-gray-300"></div>
					<CountUpAnimation
						initialValue={0}
						targetValue={120}
						text="Task Posted"
					/>
					<div className="border-l border-gray-300 "></div>
					<CountUpAnimation
						initialValue={0}
						targetValue={225}
						text="Freelancers"
					/>
				</div>
            </div>
        </div>
    )
}
export default Bannerinfo;
