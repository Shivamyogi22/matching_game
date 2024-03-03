import React from "react";

function GameOverScreen({ handleTryAgain }) {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-3xl font-semibold text-center mb-6">Game Over! Try again?</h2>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md text-lg font-semibold hover:bg-blue-600" onClick={handleTryAgain}>Try Again</button>
        </div>
    );
}

export default GameOverScreen;
