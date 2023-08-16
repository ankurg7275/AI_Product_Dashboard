// ModelControls.js
import React from 'react';

const ModelControls = ({ onStart, onStop, onConfigure }) => {
  return (
    <div className="flex items-center space-x-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={onStart}
      >
        Start
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-md"
        onClick={onStop}
      >
        Stop
      </button>
      <button
        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
        onClick={onConfigure}
      >
        Configure
      </button>
    </div>
  );
};

export default ModelControls;
