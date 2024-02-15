import React from "react";
//6a. Receieve two props - name and description
export const Tile = ({ name, description }) => {
  return (
    <div className="tile-container">
      {/* 6b. Render the name */}
      <p className="tile-title">{name}</p>

      {/* 6b. Render each value in the description object */}
      {Object.values(description).map((value, index) => (
        <p key={index} className="tile">
          {value}
        </p>
      ))}
    </div>
  );
};
