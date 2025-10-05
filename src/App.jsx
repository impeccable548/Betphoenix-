import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { FiActivity, FiZap, FiLock, FiTrendingUp, FiSmartphone, FiStar } from "react-icons/fi";

// FeatureCard
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="cursor-pointer bg-white rounded-2xl p-6 shadow-lg min-w-[250px] flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
    {Icon && <Icon className="text-yellow-400 w-8 h-8 mb-3" />}
    <h3 className="text-xl font-bold text-yellow-400 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Hero Section
const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-center justify-center flex-1 bg-gradient-to-br from-yellow-50 via-orange-100 to-red-100 text-center py-20 px-6">
      <h1 className="text-6xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-600 mb-6">BetPhoenix</h1>
      <p className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">Rise to Victory, Bet with Confidence</p>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">Experience lightning-fast payouts, live odds, and unbeatable security.</p>
      <div className="flex gap-4 flex-wrap justify-center">
        <button onClick={() => navigate("/login")} className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition">Login</button>
        <button onClick={() => navigate("/signup")} className="bg-black text-yellow-400 px-8 py-4 rounded-full font-bold hover:scale-105 transition">Sign Up</button>
      </div>
    </section>
  );
};

// Landing Page
const Landing = () => {
  const features = [
    { icon: FiActivity, title: 'Live Betting', description: 'Real-time odds and instant bets.' },
    { icon: FiZap, title: 'Instant Payouts', description: 'Get winnings fast.' },
    { icon: FiLock, title: 'Secure Wallet', description: 'Bank-grade security.' },
    { icon: FiTrendingUp, title: 'Advanced Stats', description: 'Analytics for informed decisions.' },
    { icon: FiSmartphone, title: 'Mobile App', description: 'Bet anywhere anytime.' },
    { icon: FiStar, title: 'Best Odds', description: 'Competitive odds guaranteed.' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="flex justify-between items-center p-6 bg-black text-white">
        <h1 className="text-2xl font-bold">BetPhoenix</h1>
        <div className="space-x-4">
          <button onClick={() => window.location.href="/login"} className="px-4 py-2 bg-yellow-400 rounded-lg font-bold hover:bg-yellow-300 transition">Login</button>
          <button onClick={() => window.location.href="/signup"} className="px-4 py-2 border-2 border-yellow-400 rounded-lg font-bold hover:bg-yellow-50 transition">Sign Up</button>
        </div>
      </nav>

      <Hero />

      {/* Features */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black text-center text-yellow-500 mb-12">Why Choose BetPhoenix?</h2>
          <div className="overflow-x-auto pb-8 flex gap-6 px-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {features.map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </div>
        </div>
      </section>

      <footer className="p-6 bg-black text-white text-center">&copy; 2025 BetPhoenix. All rights reserved.</footer>
    </div>
  );
};

// Forms
const AuthForm = ({ type, onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    onSubmit(username);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h2 className="text-4xl font-black text-yellow-500 mb-8">{type}</h2>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} className="mb-4 px-4 py-2 border rounded-lg w-80"/>
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="mb-4 px-4 py-2 border rounded-lg w-80"/>
      <button onClick={handleSubmit} className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:scale-105 transition">Submit</button>
      <button onClick={() => navigate("/")} className="mt-4 underline text-gray-700">Back</button>
    </div>
  );
};

// Dashboard
const Dashboard = ({ username }) => {
  const [balance, setBalance] = useState(1000);
  const [history, setHistory] = useState([]);
  const [matches, setMatches] = useState([
    { id: 1, teams: "Manchester United vs Chelsea", odds: 1.8 },
    { id: 2, teams: "Real Madrid vs Barcelona", odds: 2.1 },
    { id: 3, teams: "Liverpool vs Arsenal", odds: 1.5 },
  ]);

  const placeBet = (match, stake) => {
    const won = Math.random() < 0.5;
    const payout = won ? stake * match.odds : -stake;
    setBalance(prev => prev + payout);
    setHistory(prev => [...prev, { match: match.teams, stake, result: won ? "Won" : "Lost", payout }]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Nav */}
      <nav className="flex justify-between items-center p-6 bg-black text-white">
        <h1 className="text-2xl font-bold">BetPhoenix</h1>
        <div className="space-x-4">
          <span className="px-4 py-2 font-bold">Balance: ${balance.toFixed(2)}</span>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12 flex flex-col gap-8">
        <h2 className="text-4xl font-black text-yellow-500 mb-6">Welcome, {username || "Player"}!</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Live Matches */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-3">Live Matches</h3>
            <ul>
              {matches.map(m => (
                <li key={m.id} className="flex justify-between items-center mb-2">
                  <span>{m.teams} - Odds: {m.odds}</span>
                  <button onClick={() => placeBet(m, 50)} className="ml-2 bg-yellow-400 text-black px-2 py-1 rounded-lg font-bold hover:scale-105 transition">Bet $50</button>
                </li>
              ))}
            </ul>
          </div>

          {/* History */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-3">Betting History</h3>
            <ul>
              {history.map((h, i) => (
                <li key={i}>{h.match} - ${h.stake} - {h.result} - Payout: ${h.payout.toFixed(2)}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <footer className="p-6 bg-black text-white text-center">&copy; 2025 BetPhoenix. All rights reserved.</footer>
    </div>
  );
};

// Main App
export default function App() {
  const [username, setUsername] = useState("");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<AuthForm type="Login" onSubmit={setUsername} />} />
        <Route path="/signup" element={<AuthForm type="Sign Up" onSubmit={setUsername} />} />
        <Route path="/dashboard" element={<Dashboard username={username} />} />
      </Routes>
    </Router>
  );
}