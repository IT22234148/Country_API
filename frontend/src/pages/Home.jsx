import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import RegionFilter from '../components/RegionFilter';
import CountryCard from '../components/CountryCard';
import CountryDetail from '../components/CountryDetail';

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false); // State for dark mode

  // Initial load of all countries
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => {
        if (res.ok === false) throw new Error('Failed to load countries');
        return res.json();
      })
      .then(data => {
        setCountries(data);
        setFiltered(data);
      })
      .catch(() => {
        setError('Could not load country data. Please try again later.');
      });
  }, []);

  // Search by name
  const handleSearch = async name => {
    setError('');
    if (!name) {
      setFiltered(countries);
      return;
    }

    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      if (res.ok === false) {
        setFiltered([]);
        setError(`No countries found matching "${name}".`);
        return;
      }
      const data = await res.json();
      setFiltered(Array.isArray(data) ? data : []);
    } catch {
      setFiltered([]);
      setError('Network error during search. Please try again.');
    }
  };

  // Filter by region
  const handleFilter = async region => {
    setError('');
    if (!region) {
      setFiltered(countries);
      return;
    }

    try {
      const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
      if (res.ok === false) {
        setFiltered([]);
        setError(`No countries found in region "${region}".`);
        return;
      }
      const data = await res.json();
      setFiltered(Array.isArray(data) ? data : []);
    } catch {
      setFiltered([]);
      setError('Network error during filter. Please try again.');
    }
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-sky-100 via-white to-purple-100'} min-h-screen px-4 py-6 md:px-12 lg:px-20`}>
      <div className="sticky top-0 bg-gradient-to-r from-blue-100 via-white to-purple-100 z-10 shadow-lg py-4">
        <header className="mb-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-800 drop-shadow-md">
            🌍 REST Countries Explorer
          </h1>
          <p className="text-gray-700 mt-2 text-lg">Discover facts about every country in the world.</p>
        </header>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center px-4">
          <div className="w-full md:w-1/2">
            <SearchBar onSearch={handleSearch} />
          </div>
          <div className="w-full md:w-1/4">
            <RegionFilter onSelect={handleFilter} />
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-gray-800 text-white rounded shadow hover:bg-gray-700 transition"
          >
            Toggle Dark Mode
          </button>
        </div>
      </div>

      {/* Display any error */}
      {error && (
        <div className="text-center text-red-600 font-medium mb-4">
          {error}
        </div>
      )}

      <br/>

      {/* Country grid or fallback text */}
      {filtered.length === 0 && !error ? (
        <p className="text-center text-gray-500 text-lg">No countries found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filtered.map(c => (
            <CountryCard key={c.cca3} country={c} onClick={setSelected} />
          ))}
        </div>
      )}

      {/* Modal for details */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <CountryDetail country={selected} onClose={() => setSelected(null)} />
        </div>
      )}
    </div>
  );
}
