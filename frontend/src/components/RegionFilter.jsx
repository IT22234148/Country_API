import React from 'react';

const regions = ['Africa','Americas','Asia','Europe','Oceania'];
export default function RegionFilter({ onSelect }) {
  return (
    <select onChange={e => onSelect(e.target.value)} className="p-2 border rounded">
      <option value="">Filter by Region</option>
      {regions.map(r => <option key={r} value={r}>{r}</option>)}
    </select>
  );
}
