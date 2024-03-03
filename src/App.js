import React, { useState } from "react";
import EntryPage from "./components/EntryPage";
import Board from "./components/Board";
import GameOverScreen from "./components/GameOverScreen";
import WinScreen from "./components/WinScreen";
import backgroundImage from "./assets/bg_blank.png";
import ProgressBar from "@ramonak/react-progress-bar";

function App() {
    const [attempts, setAttempts] = useState(10);
    const [bananas, setBananas] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [gameWon, setGameWon] = useState(false);
    const [gameStarted, setGameStarted] = useState(false); // State to track if the game has started

    const handleStartClick = () => {
        setGameStarted(true); // Set gameStarted state to true when start button is clicked
    };

    const handleMatch = () => {
        setBananas((prevBananas) => [
            ...prevBananas,
            { id: prevBananas.length + 1, collected: true },
        ]);
    };

    const checkWin = () => {
        if (bananas.length === 6) {
            setGameWon(true);
        }
    };

    const handleTryAgain = () => {
        setAttempts(10);
        setBananas([]);
        setGameWon(false);
        setGameOver(false); // Reset game over state
    };

    const handleGameOver = () => {
        setGameOver(true);
    };

    return (
        <div
            className="min-h-screen bg-gray-100 flex justify-center items-center"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {!gameStarted ? ( // Render the EntryPage if the game hasn't started
                <EntryPage onStartClick={handleStartClick} />
            ) : (
                // Render the game components if the game has started
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">Matching Game</h1>
                    <div className="mt-2">
                        Bananas Collected: {bananas.length}
                    </div>
                    <div className="mt-4">
                        <ProgressBar
                            completed={((bananas.length / 6) * 100).toFixed(2)}
                            bgColor="#6a1b9a"
                            labelAlignment="center"
                        />
                    </div>
                    {gameWon ? (
                        <WinScreen handleTryAgain={handleTryAgain} />
                    ) : gameOver ? (
                        <GameOverScreen handleTryAgain={handleTryAgain} />
                    ) : (
                        <Board
                            attempts={attempts}
                            setAttempts={setAttempts}
                            handleMatch={handleMatch}
                            checkWin={checkWin}
                            handleGameOver={handleGameOver} // Pass handleGameOver function
                        />
                    )}
                    <div className="mt-4">Attempts Left: {attempts}</div>
                </div>
            )}
        </div>
    );
}

export default App;
