import React from 'react';

export default function SearchBar({ onSearch }) {
    return (
      <input
        type="text"
        onChange={e => onSearch(e.target.value)}
        placeholder="Search by country name..."
        className="p-2 border rounded w-full"
      />
    );
  }
