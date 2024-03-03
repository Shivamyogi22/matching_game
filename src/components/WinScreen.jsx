import React from "react";
import monkeyImage from "../assets/monkey2.png"; // Import the monkey2.png image

function WinScreen({ handleTryAgain }) {
    return (
        <div className="flex flex-col items-center justify-center max-h-screen">
            <img src={monkeyImage} alt="Monkey" className="w-56 h-56 mb-4" />{" "}
            {/* Add the monkey image */}
            <h2 className="text-3xl font-semibold text-center mb-6">
                Congratulations! You Win!
            </h2>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md text-lg font-semibold hover:bg-blue-600"
                onClick={handleTryAgain}
            >
                Play Again
            </button>
        </div>
    );
}

export default WinScreen;
