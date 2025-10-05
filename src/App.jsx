import React, { useState } from "react";
import { FiActivity, FiZap, FiLock, FiTrendingUp, FiSmartphone, FiStar } from "react-icons/fi";

// FeatureCard Component
const FeatureCard = ({ icon: Icon, title, description, onClick }) => (
  <div
    onClick={onClick}
    className="cursor-pointer bg-white rounded-2xl p-6 shadow-lg min-w-[250px] flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
  >
    {Icon && <Icon className="text-yellow-400 w-8 h-8 mb-3" />}
    <h3 className="text-xl font-bold text-yellow-400 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function App() {
  const [view, setView] = useState("landing"); // landing, login, signup, dashboard
  const [username, setUsername] = useState("");

  const features = [
    { icon: FiActivity, title: "Live Betting", description: "Real-time odds and instant bets." },
    { icon: FiZap, title: "Instant Payouts", description: "Get winnings fast." },
    { icon: FiLock, title: "Secure Wallet", description: "Bank-grade security." },
    { icon: FiTrendingUp, title: "Advanced Stats", description: "Analytics for informed decisions." },
    { icon: FiSmartphone, title: "Mobile App", description: "Bet anywhere anytime." },
    { icon: FiStar, title: "Best Odds", description: "Competitive odds guaranteed." },
  ];

  // Real football teams for live matches
  const footballTeams = [
    "Manchester United",
    "Chelsea",
    "Liverpool",
    "Arsenal",
    "Manchester City",
    "Tottenham Hotspur",
    "Barcelona",
    "Real Madrid",
    "Bayern Munich",
    "Juventus",
    "Paris Saint-Germain",
    "AC Milan",
  ];

  const generateMatches = () => {
    const matches = [];
    const shuffled = [...footballTeams].sort(() => 0.5 - Math.random());
    for (let i = 0; i < shuffled.length; i += 2) {
      if (shuffled[i + 1]) {
        const odds = (Math.random() * 3 + 1).toFixed(2); // random odds 1.00 - 4.00
        matches.push(`${shuffled[i]} vs ${shuffled[i + 1]} - Odds ${odds}`);
      }
    }
    return matches;
  };

  const handleLogin = () => setView("dashboard");
  const handleSignup = () => setView("dashboard");

  // Landing page view
  const renderLanding = () => (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 bg-black text-yellow-400">
        <h1 className="text-3xl font-extrabold tracking-wider">BetPhoenix</h1>
        <div className="space-x-4">
          <button
            onClick={() => setView("login")}
            className="px-4 py-2 bg-yellow-400 text-black rounded-lg font-bold hover:bg-yellow-300 transition"
          >
            Login
          </button>
          <button
            onClick={() => setView("signup")}
            className="px-4 py-2 border-2 border-yellow-400 rounded-lg font-bold hover:bg-yellow-50 transition"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center flex-1 bg-gradient-to-br from-yellow-50 via-orange-100 to-red-100 text-center py-20 px-6">
        <h1 className="text-6xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
          BetPhoenix
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
          Rise to Victory, Bet with Confidence
        </p>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
          Experience lightning-fast payouts, live odds, and unbeatable security.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <button
            onClick={() => setView("login")}
            className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition"
          >
            Login
          </button>
          <button
            onClick={() => setView("signup")}
            className="bg-black text-yellow-400 px-8 py-4 rounded-full font-bold hover:scale-105 transition"
          >
            Sign Up
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black text-center text-yellow-400 mb-12">
            Why Choose BetPhoenix?
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {features.map((f, i) => (
              <FeatureCard key={i} {...f} onClick={() => alert(`Tapped feature: ${f.title}`)} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 bg-black text-yellow-400 text-center">
        &copy; 2025 BetPhoenix. All rights reserved.
      </footer>
    </div>
  );

  // Login/Signup Form
  const renderForm = (type) => (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h2 className="text-4xl font-black text-yellow-400 mb-8">{type}</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-4 px-4 py-2 border rounded-lg w-80"
      />
      <input
        type="password"
        placeholder="Password"
        className="mb-4 px-4 py-2 border rounded-lg w-80"
      />
      <button
        onClick={type === "Login" ? handleLogin : handleSignup}
        className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:scale-105 transition"
      >
        Submit
      </button>
      <button onClick={() => setView("landing")} className="mt-4 underline text-gray-700">
        Back
      </button>
    </div>
  );

  // Dashboard view
  const renderDashboard = () => (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 bg-black text-yellow-400">
        <h1 className="text-2xl font-bold">BetPhoenix</h1>
        <div className="space-x-4">
          <button
            onClick={() => setView("landing")}
            className="px-4 py-2 bg-yellow-400 rounded-lg font-bold hover:bg-yellow-300 transition"
          >
            Home
          </button>
          <button
            onClick={() => setView("dashboard")}
            className="px-4 py-2 border-2 border-yellow-400 rounded-lg font-bold hover:bg-yellow-50 transition"
          >
            Dashboard
          </button>
        </div>
      </nav>

      {/* Dashboard content */}
      <div className="container mx-auto px-6 py-12 flex flex-col gap-8">
        <h2 className="text-4xl font-black text-yellow-400 mb-6">
          Welcome, {username || "Player"}!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Live Matches */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-3">Live Matches</h3>
            <ul>
              {generateMatches().map((match, idx) => (
                <li key={idx}>{match}</li>
              ))}
            </ul>
          </div>

          {/* Betting History */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-3">Betting History</h3>
            <ul>
              <li>Bet on Manchester United - Won</li>
              <li>Bet on Chelsea - Lost</li>
              <li>Bet on Barcelona - Won</li>
            </ul>
          </div>

          {/* Settings */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-3">Settings</h3>
            <ul>
              <li>Change Password</li>
              <li>Notification Preferences</li>
              <li>Account Info</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="p-6 bg-black text-yellow-400 text-center">
        &copy; 2025 BetPhoenix. All rights reserved.
      </footer>
    </div>
  );

  return view === "landing"
    ? renderLanding()
    : view === "login"
    ? renderForm("Login")
    : view === "signup"
    ? renderForm("Sign Up")
    : renderDashboard();
}