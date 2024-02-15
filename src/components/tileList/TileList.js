import React from "react";
import { Tile } from "../../components/tile/Tile";
//5a. Receive one prop (an array of objects to render as a list)
export const TileList = ({ data }) => {
  //5b. Interatively render Tile components, using each object in the the array to pass the name and description props to each rendered Tile component

  const tiles = data.map((object, index) => {
    const { name, ...rest } = object; //Using restructuring structuring syntax to get name and ...rest for the description
    // Return a Tile component for each object in the array with the object’s name as the name prop, rest as decription and index as key
    return <Tile key={index} name={name} description={rest} />;
  });

  return <div>{tiles}</div>;
};
