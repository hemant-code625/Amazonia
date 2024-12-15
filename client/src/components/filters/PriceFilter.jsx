import { useState, useEffect } from 'react';

function PriceFilter({ value, onChange }) {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      onChange(localValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [localValue]);

  return (
    <div>
      <h3 className="font-medium mb-3">Price Range</h3>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <input
            type="number"
            value={localValue.min}
            onChange={(e) => setLocalValue({ ...localValue, min: Number(e.target.value) })}
            className="w-24 px-2 py-1 border rounded"
            min="0"
          />
          <span>to</span>
          <input
            type="number"
            value={localValue.max}
            onChange={(e) => setLocalValue({ ...localValue, max: Number(e.target.value) })}
            className="w-24 px-2 py-1 border rounded"
            min="0"
          />
        </div>
        
        <input
          type="range"
          min="0"
          max="5000"
          value={localValue.max}
          onChange={(e) => setLocalValue({ ...localValue, max: Number(e.target.value) })}
          className="w-full"
        />
      </div>
    </div>
  );
}

export default PriceFilter;