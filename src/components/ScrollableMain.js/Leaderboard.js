import React from 'react';

const Leaderboard = () => {
  return (
    <div className="bg-bluebg rounded-lg shadow-lg px-4 h-full text-bluetxt">
      <div className='flex justify-center font-bold text-3xl p-2 '> Leaderboard </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="py-2 text-left">Rank</th>
            <th className="py-2 text-left">User</th>
            <th className="py-2 text-left">Score</th>
          </tr>
        </thead>
        <tbody>
          
          <tr>
            <td className="border-t border-gray-300 py-2">1</td>
            <td className="border-t border-gray-300 py-2">User 1</td>
            <td className="border-t border-gray-300 py-2">900</td>
          </tr>
          <tr>
            <td className="border-t border-gray-300 py-2">2</td>
            <td className="border-t border-gray-300 py-2">User 2</td>
            <td className="border-t border-gray-300 py-2">800</td>
          </tr>
          <tr>
            <td className="border-t border-gray-300 py-2">3</td>
            <td className="border-t border-gray-300 py-2">User 3</td>
            <td className="border-t border-gray-300 py-2">700</td>
          </tr>
          <tr>
            <td className="border-t border-gray-300 py-2">4</td>
            <td className="border-t border-gray-300 py-2">User 4</td>
            <td className="border-t border-gray-300 py-2">700</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
