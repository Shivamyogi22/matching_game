import React from "react";
import monkeyImage from "../assets/monkey1.png";

function EntryPage({ onStartClick }) {
    return (
        <div className="flex justify-center items-center">
            <img
                src={monkeyImage}
                alt="Monkey"
                className=" inset-0 object-cover w-48 h-48 mx-auto top-[50%]"
            />
            <button
                className="px-8 py-4 bg-yellow-500 text-white font-bold rounded-full shadow-lg border border-yellow-600 hover:bg-yellow-600 hover:border-yellow-700 transform transition duration-300 hover:scale-105 z-10"
                onClick={onStartClick}
            >
                Start
            </button>
        </div>
    );
}

export default EntryPage;
