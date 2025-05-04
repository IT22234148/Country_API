import React from 'react';

export default function CountryCard({ country, onClick }) {
  return (
    <div
      onClick={() => onClick(country)}
      className="cursor-pointer p-4 border rounded shadow hover:scale-105 transition"
    >
      <img
        src={country.flags.png}
        alt={country.name.common}
        className="w-full h-auto max-h-40 object-cover rounded-t-md"
      />
      <h2 className="text-lg font-bold mt-2">{country.name.common}</h2>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital}</p>
    </div>
  );
}
