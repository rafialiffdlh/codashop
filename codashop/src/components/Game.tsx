"use client";
import React, { useState } from "react";
import type { Game } from "@/app/api/datagames";
import { gamesData } from "@/app/api/datagames";

interface GameSectionProps {
  title: string;
  games: Game[];
}

const GameSection: React.FC<GameSectionProps> = ({ title, games }) => {
  const [showAll, setShowAll] = useState(false);
  const gamesToShow = showAll ? games : games.slice(0, 6);

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-white mb-4">{title}</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {gamesToShow.map((game, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-3 text-center transform hover:scale-105 transition duration-200"
          >
            <img
              src={game.imageUrl}
              alt={game.title}
              className="w-full h-24 md:h-32 lg:h-40 object-cover rounded-md mb-2"
            />
            <p className="text-white text-sm font-medium">{game.title}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-blue-500 hover:underline"
        >
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>
    </div>
  );
};

const Game: React.FC = () => {
  return (
    <div className="p-4 md:p-8 lg:p-12 bg-[#280032] min-h-screen">
      <GameSection title="Popular" games={gamesData.popular} />
      <GameSection title="New Titles" games={gamesData.newTitles} />
    </div>
  );
};

export default Game;
