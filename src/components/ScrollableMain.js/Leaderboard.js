import React from "react";
import { leaderboardData } from "./Data";

const Leaderboard = () => {
 

  return (
    <div className="bg-bluebg rounded-lg shadow-lg px-4 h-full text-bluetxt">
      <div className="flex justify-center font-bold text-2xl p-2 ">
        Leaderboard
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="flex justify-evenly">
            <th className="py-2 text-left">Rank</th>
            <th className="py-2 text-left">User</th>
            <th className="py-2 text-left">Score</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {leaderboardData.map((entry, index) => (
            <tr key={index} className="flex w-full justify-evenly">
              <td className="border-t border-gray-300 py-2">{entry.rank}</td>
              <td className="border-t border-gray-300 py-2">{entry.user}</td>
              <td className="border-t border-gray-300 py-2">{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
