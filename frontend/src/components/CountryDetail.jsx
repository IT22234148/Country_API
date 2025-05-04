import { useEffect, useState } from 'react';

export default function CountryDetail({ country, onClose }) {
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    if (!country) return;
    fetch(`https://restcountries.com/v3.1/alpha/${country.cca3}`)
      .then(res => res.json())
      .then(data => setDetail(data[0]))
      .catch(err => console.error('Error loading country detail', err));
  }, [country]);

  if (!country || !detail) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50 px-6">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-2xl w-full relative overflow-y-auto max-h-[90vh] transition-all transform hover:scale-105 ease-in-out duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 text-2xl font-semibold hover:text-gray-800 transition"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="mb-8">
          <img
            src={detail.flags.png}
            alt={detail.name.common}
            className="w-full h-64 object-cover rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105"
          />
        </div>

        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center tracking-wide">
          {detail.name.common}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-800 text-lg">
          <p><span className="font-semibold text-black text-xl">Official Name:</span> {detail.name.official}</p>
          <p><span className="font-semibold text-black text-xl">Capital:</span> {detail.capital?.join(', ')}</p>
          <p><span className="font-semibold text-black text-xl">Region:</span> {detail.region}</p>
          <p><span className="font-semibold text-black text-xl">Subregion:</span> {detail.subregion}</p>
          <p><span className="font-semibold text-black text-xl">Population:</span> {detail.population.toLocaleString()}</p>
          <p><span className="font-semibold text-black text-xl">Languages:</span> {detail.languages ? Object.values(detail.languages).join(', ') : 'N/A'}</p>
          <p><span className="font-semibold text-black text-xl">Timezones:</span> {detail.timezones?.join(', ')}</p>
          <p>
            <span className="font-semibold text-black text-xl">Currency:</span>{' '}
            {detail.currencies
              ? Object.values(detail.currencies)
                  .map(c => `${c.name} (${c.symbol})`)
                  .join(', ')
              : 'N/A'}
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={`https://www.google.com/maps/search/?q=${detail.name.common}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white rounded-lg py-3 px-8 text-lg font-semibold hover:bg-blue-500 transition duration-300 transform hover:scale-105"
          >
            View on Map
          </a>
        </div>
      </div>
    </div>
  );
}
