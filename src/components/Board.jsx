// Board.js

import React, { useState, useEffect } from "react";
import Card from "./Card";
import backgroundImage from "../assets/bg_blank.png";
import image1 from "../assets/apple.png";
import image2 from "../assets/Banana.png";
import image3 from "../assets/grape.png";
import image4 from "../assets/mango.png";
import image5 from "../assets/orange.png";
import image6 from "../assets/pineapple.png";
import image7 from "../assets/Kiwi.png";
import image8 from "../assets/Plum.png";
import image9 from "../assets/Sandwich.png";
import image10 from "../assets/papaya.png";
import image11 from "../assets/strawberry.png";
import image12 from "../assets/watermelon.png";

function Board({ attempts, setAttempts, handleMatch, checkWin, handleGameOver }) {
    const [cards, setCards] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState([]);

    useEffect(() => {
        shuffleAndDivideCards();
    }, []);

    useEffect(() => {
        checkWin(); // Check for win condition whenever cards or matchedPairs change
    }, [cards, matchedPairs, checkWin]);

    const shuffleAndDivideCards = () => {
        // Select 6 unique images randomly
        const selectedImages = shuffle([
            image1,
            image2,
            image3,
            image4,
            image5,
            image6,
            image7,
            image8,
            image9,
            image10,
            image11,
            image12,
        ]);

        const allImages= selectedImages.slice(0,6)

        // Shuffle all images again to distribute them between the sets randomly
        const shuffledAllImages = shuffle(allImages);

        // Divide the shuffled images into two sets
        const shuffledFirstSet = shuffle(shuffledAllImages
            .slice(0, 6)
            .map((image, index) => ({
                id: index + 1,
                content: <img src={image} />,
                imageIndex: index,
                flipped: false,
                matched: false,
                set: 1,
            })));

        const shuffledSecondSet = shuffle(shuffledAllImages
            .slice(0, 6)
            .map((image, index) => ({
                id: index + 7,
                content: <img src={image} />,
                imageIndex: index,
                flipped: false,
                matched: false,
                set: 2,
            })));

        setCards([...shuffledFirstSet, ...shuffledSecondSet]);
        setMatchedPairs([]); // Reset matched pairs
    };

    const handleCardClick = (id, cardSet) => {
        const selectedCard = cards.find(
            (card) => card.id === id && !card.matched
        );
        if (!selectedCard) return;

        const flippedCards = cards.filter(
            (card) => card.flipped && !card.matched
        );

        if (flippedCards.length < 2) {
            const updatedCards = cards.map((card) =>
                card.id === id ? { ...card, flipped: true } : card
            );
            setCards(updatedCards);

            const flippedUnmatchedCards = updatedCards.filter(
                (card) => card.flipped && !card.matched
            );
            if (flippedUnmatchedCards.length === 2) {
                if (
                    flippedUnmatchedCards[0].imageIndex ===
                    flippedUnmatchedCards[1].imageIndex
                ) {
                    const matchedIds = flippedUnmatchedCards.map(
                        (card) => card.id
                    );

                    // Set matched property to true for matched cards
                    const updatedMatchedCards = updatedCards.map((card) =>
                        matchedIds.includes(card.id)
                            ? { ...card, matched: true }
                            : card
                    );
                    setCards(updatedMatchedCards);
                    handleMatch();
                } else {
                    setTimeout(() => {
                        // Don't reset flipped cards if they are matched
                        const resetFlippedCards = updatedCards.map((card) =>
                            matchedPairs.includes(card.id)
                                ? card
                                : { ...card, flipped: false }
                        );
                        setCards(resetFlippedCards);
                        setAttempts((prevAttempts) => prevAttempts - 1);
                        if (attempts === 1) {
                            handleGameOver();
                        }
                    }, 1000);
                }
            }
        }
    };

    return (
        <div className="flex flex-col justify-center items-center mx-auto">
            <div className="flex">
                <div className="">
                    <h2>Set 1</h2>
                    <div className="w-[350px] flex flex-wrap">
                        {cards
                            .filter(
                                (card) =>
                                    card.set === 1 &&
                                    !matchedPairs.includes(card.id)
                            )
                            .map((card) => (
                                <Card
                                    key={card.id}
                                    {...card}
                                    onClick={() =>
                                        handleCardClick(card.id, card.set)
                                    }
                                />
                            ))}
                    </div>
                </div>

                <div>
                    <h2>Set 2</h2>
                    <div className="w-[350px] flex flex-wrap">
                        {cards
                            .filter(
                                (card) =>
                                    card.set === 2 &&
                                    !matchedPairs.includes(card.id)
                            )
                            .map((card) => (
                                <Card
                                    key={card.id}
                                    {...card}
                                    onClick={() =>
                                        handleCardClick(card.id, card.set)
                                    }
                                />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Board;

// Function to shuffle array
function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
