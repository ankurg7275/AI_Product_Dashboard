// KeyMetrics.js
import React from 'react';

const KeyMetrics = ({ accuracy, precision, recall }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Key Performance Metrics</h2>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="text-gray-500">Accuracy</p>
          <p className="text-xl font-semibold">{accuracy}%</p>
        </div>
        <div>
          <p className="text-gray-500">Precision</p>
          <p className="text-xl font-semibold">{precision}%</p>
        </div>
        <div>
          <p className="text-gray-500">Recall</p>
          <p className="text-xl font-semibold">{recall}%</p>
        </div>
      </div>
    </div>
  );
};

export default KeyMetrics;
