import React from "react";

const CharacterDetailModal = ({ character, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="close-container">
          <span className="close" onClick={onClose}>     
            &times;
          </span>
        </div>

<div2></div2>
        
        <img src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
        <p>{character.title}</p>
        
      </div>
    </div>
  );
};

export default CharacterDetailModal;
