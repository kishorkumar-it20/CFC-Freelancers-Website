import React, { useState } from 'react';
import { CiStar } from 'react-icons/ci';

const StarRating = ({ rating, onRatingChange }) => {
    const [hovered, setHovered] = useState(0);

    const handleMouseEnter = (index) => {
        setHovered(index);
    };

    const handleMouseLeave = () => {
        setHovered(0);
    };

    const handleClick = (index) => {
        onRatingChange(index);
    };

    return (
        <div className="flex mt-3">
            {Array.from({ length: 5 }, (_, i) => (
                <CiStar
                    key={i}
                    className={`size-6 ${i < (hovered || rating) ? 'text-yellow-400' : 'text-gray-400'} cursor-pointer`}
                    onMouseEnter={() => handleMouseEnter(i + 1)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(i + 1)}
                />
            ))}
        </div>
    );
};

export default StarRating;
