import React from "react";
import video from "../../assets/Nasa ame.mp4";

const Game = () => {
  return (
    <div>
      <video src={video} width="1000" height="1000" controls autoPlay />
      <button className="p-2 w-full bg-bluetxt text-white mt-4">Play GAME</button>
    </div>
  );
};

export default Game;
