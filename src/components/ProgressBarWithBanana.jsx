// ProgressBarWithBanana.js
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import bananaImage from "../assets/Banana.png";

function ProgressBarWithBanana({ percentage }) {
    return (
        <div className="flex items-center justify-center">
            <img src={bananaImage} alt="Banana" className="w-8 h-8 mr-2" />
            <ProgressBar
                completed={percentage}
                bgColor="#6a1b9a"
                baseBgColor="white"
                labelAlignment="center"
            />
        </div>
    );
}

export default ProgressBarWithBanana;
