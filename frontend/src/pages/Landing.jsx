import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-400 via-indigo-300 to-purple-400 flex flex-col items-center justify-center px-4 py-10 relative overflow-hidden">

      {/* Decorative Gradient Bubbles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-80 h-80 bg-pink-400 rounded-full blur-3xl opacity-20 top-10 left-8 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-400 rounded-full blur-2xl opacity-20 bottom-10 right-10 animate-ping"></div>
      </div>

      {/* Welcome Banner (Above Card) */}
      <div className="relative z-10 mb-8 text-center animate-fade-in-down">
  <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 shadow-lg hover:text-indigo-700 transition duration-300 ease-in-out transform hover:scale-110 uppercase tracking-wider leading-tight">
    Welcome to the World Explorer
  </p>
</div>

      <br />

      {/* Main Content Card */}
      <div className="relative z-10 max-w-6xl w-full bg-white/40 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-14 border border-white/30 text-center">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-900 mb-6 drop-shadow-md">
          🌍 REST Countries Explorer
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-10 leading-relaxed max-w-3xl mx-auto">
          Discover and explore comprehensive information about countries around the world—flags, capitals, regions, languages, and more.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="/register">
            <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-md transition duration-300">
              Create an Account
            </button>
          </Link>
          <Link to="/login">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition duration-300">
              Login
            </button>
          </Link>
        </div>

        {/* Feature Highlights */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {[
            {
              title: '🌐 250+ Countries',
              desc: 'Explore detailed information about every recognized country.',
            },
            {
              title: '📍 Instant Search',
              desc: 'Find countries by name or filter by region with no page reloads.',
            },
            {
              title: '🗺️ Interactive Details',
              desc: 'View population, capital, languages, currencies, flags, and more.',
            },
            {
              title: '🔐 Secure Login',
              desc: 'Create a personalized experience with secure JWT authentication.',
            },
            {
              title: '📱 Fully Responsive',
              desc: 'Designed for all screen sizes—from phones to desktops.',
            },
            {
              title: '🌎 Powered by REST API',
              desc: 'Always updated with live data from the REST Countries API.',
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/70 backdrop-blur-md rounded-xl shadow-md p-6 border-l-4 border-indigo-500 hover:scale-[1.02] transform transition duration-300"
            >
              <h3 className="text-lg font-bold text-indigo-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-800 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </section>

      </div>
    </div>
  );
}
