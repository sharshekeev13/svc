// src/CharacterGrid.js
import React from "react";
import "./styles/characterGrid.css";

const CharacterGrid = ({ characters, onSelectCharacter }) => {
  const leftCharacters = characters.filter(
    (character) => character.side === "left"
  );
  const rightCharacters = characters.filter(
    (character) => character.side === "right"
  );

  return (
    <div className="character-grid">
      <div className="left-side">
        {leftCharacters.map((character) => (
          <div
            key={character.id}
            className={`character-cell ${
              character.id === 12 ? "special-character" : ""
            }`}
            onClick={() => onSelectCharacter(character)}
          >
            <img src={character.icon} alt={character.name} />
          </div>
        ))}
      </div>
      <div className="right-side">
        {rightCharacters.map((character) => (
          <div
            key={character.id}
            className={`character-cell ${
              character.id === 12 ? "special-character" : ""
            }`}
            onClick={() => onSelectCharacter(character)}
          >
            <img src={character.icon} alt={character.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterGrid;
