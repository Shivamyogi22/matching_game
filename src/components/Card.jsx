import React from "react";
import { FaRegHeart } from "react-icons/fa";

function Card({ content, flipped, matched, onClick }) {
    return (
        <div
            className={`card w-32 h-32 flex items-center justify-center rounded-lg m-2 cursor-pointer border-2 border-white 
            ${
                flipped || matched
                    ? "opacity-100"
                    : "opacity-90 hover:opacity-95"
            }`}
            onClick={onClick}
            style={{
                backgroundColor:
                    flipped || matched
                        ? "rgba(173, 216, 230, 0.8)"
                        : "rgba(255, 192, 203, 0.8)",
            }}
        >
            {flipped || matched ? (
                <div className="text-lg font-extrabold text-black">
                    {content}
                </div>
            ) : (
                <div className="text-lg font-extrabold text-black">
                    <FaRegHeart />
                </div>
            )}
        </div>
    );
}

export default Card;
