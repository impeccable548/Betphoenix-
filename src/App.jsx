import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

// --- ICONS ---
const ZapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);
const ActivityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
);
const TrendingUpIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);
const LogOutIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
    <polyline points="16 17 21 12 16 7"></polyline>
    <line x1="21" y1="12" x2="9" y2="12"></line>
  </svg>
);

// --- LOGIN ---
const Login = ({ onLogin, onNavigate }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!formData.username || !formData.password) {
      setError('Please fill all fields'); return;
    }
    const users = JSON.parse(localStorage.getItem('betphoenix_users') || '{}');
    if (users[formData.username] && users[formData.username].password === formData.password) {
      onLogin(formData.username);
    } else setError('Invalid username or password');
  };

  const handleKeyPress = e => { if (e.key === 'Enter') handleSubmit(); };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 text-yellow-500 mx-auto mb-4"><ZapIcon /></div>
          <h2 className="text-4xl font-bold text-yellow-500 mb-2">Welcome Back</h2>
          <p className="text-gray-400">Login to continue betting</p>
        </div>
        <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 rounded-2xl p-8 shadow-2xl">
          {error && <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded text-red-500 text-sm">{error}</div>}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-yellow-500 mb-2">Username</label>
              <input type="text" value={formData.username} onChange={e => setFormData({...formData, username:e.target.value})} onKeyPress={handleKeyPress} placeholder="Enter username" className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded text-white focus:outline-none focus:border-yellow-500"/>
            </div>
            <div>
              <label className="block text-sm font-semibold text-yellow-500 mb-2">Password</label>
              <input type="password" value={formData.password} onChange={e => setFormData({...formData, password:e.target.value})} onKeyPress={handleKeyPress} placeholder="Enter password" className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded text-white focus:outline-none focus:border-yellow-500"/>
            </div>
            <button onClick={handleSubmit} className="w-full py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg font-bold text-lg hover:scale-105 transition-transform">Login</button>
          </div>
          <div className="mt-6 text-center text-gray-400">Don't have an account? <button onClick={()=>onNavigate('signup')} className="text-yellow-500 hover:text-yellow-400 font-semibold">Sign Up</button></div>
        </div>
      </div>
    </div>
  );
};

// --- SIGNUP ---
const SignUp = ({ onLogin, onNavigate }) => {
  const [formData, setFormData] = useState({ username:'', password:'', confirmPassword:'' });
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!formData.username || !formData.password || !formData.confirmPassword) { setError('Fill all fields'); return; }
    if (formData.password !== formData.confirmPassword) { setError('Passwords do not match'); return; }

    const users = JSON.parse(localStorage.getItem('betphoenix_users') || '{}');
    if (users[formData.username]) { setError('Username exists'); return; }

    users[formData.username] = { password: formData.password, balance:1000, bettingHistory:[] };
    localStorage.setItem('betphoenix_users', JSON.stringify(users));
    onLogin(formData.username);
  };
  const handleKeyPress = e => { if (e.key==='Enter') handleSubmit(); };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 text-yellow-500 mx-auto mb-4"><ZapIcon /></div>
          <h2 className="text-4xl font-bold text-yellow-500 mb-2">Join BetPhoenix</h2>
          <p className="text-gray-400">Create your account and start winning</p>
        </div>
        <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 rounded-2xl p-8 shadow-2xl">
          {error && <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded text-red-500 text-sm">{error}</div>}
          <div className="space-y-6">
            <input type="text" value={formData.username} onChange={e => setFormData({...formData, username:e.target.value})} onKeyPress={handleKeyPress} placeholder="Username" className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded text-white focus:outline-none focus:border-yellow-500"/>
            <input type="password" value={formData.password} onChange={e => setFormData({...formData, password:e.target.value})} onKeyPress={handleKeyPress} placeholder="Password" className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded text-white focus:outline-none focus:border-yellow-500"/>
            <input type="password" value={formData.confirmPassword} onChange={e => setFormData({...formData, confirmPassword:e.target.value})} onKeyPress={handleKeyPress} placeholder="Confirm Password" className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded text-white focus:outline-none focus:border-yellow-500"/>
            <button onClick={handleSubmit} className="w-full py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg font-bold text-lg hover:scale-105 transition-transform">Create Account</button>
          </div>
          <div className="mt-6 text-center text-gray-400">Already have an account? <button onClick={()=>onNavigate('login')} className="text-yellow-500 hover:text-yellow-400 font-semibold">Login</button></div>
        </div>
      </div>
    </div>
  );
};

// --- DASHBOARD ---
const Dashboard = ({ currentUser, onLogout }) => {
  const [userData, setUserData] = useState({ balance:0, bettingHistory:[] });
  const [matches, setMatches] = useState([]);
  const [betAmount, setBetAmount] = useState({});
  const [notification, setNotification] = useState(null);

  useEffect(()=>{
    const users = JSON.parse(localStorage.getItem('betphoenix_users')||'{}');
    if(users[currentUser]) setUserData(users[currentUser]);

    const liveMatches = [
      {id:1, home:'Man Utd', away:'Liverpool', homeOdds:2.1, awayOdds:1.85, drawOdds:3.2, status:'LIVE'},
      {id:2, home:'Real Madrid', away:'Barcelona', homeOdds:1.95, awayOdds:2.05, drawOdds:3.5, status:'LIVE'},
      {id:3, home:'Bayern', away:'Dortmund', homeOdds:1.7, awayOdds:2.4, drawOdds:3.8, status:'LIVE'},
    ];
    setMatches(liveMatches);

    const interval = setInterval(()=>{
      setMatches(prev=>prev.map(m=>({...m, homeOdds:+(m.homeOdds+(Math.random()-0.5)*0.2).toFixed(2), awayOdds:+(m.awayOdds+(Math.random()-0.5)*0.2).toFixed(2), drawOdds:+(m.drawOdds+(Math.random()-0.5)*0.3).toFixed
(2)})));
    }, 5000);

    return () => clearInterval(interval);
  }, [currentUser]);

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const placeBet = (matchId, team, odds) => {
    const amount = parseFloat(betAmount[matchId] || 0);
    if (amount <= 0 || amount > userData.balance) {
      showNotification('Invalid bet amount', 'error');
      return;
    }

    const isWin = Math.random() < (1 / odds);
    const potentialWin = amount * odds;
    const newBalance = isWin ? userData.balance + potentialWin - amount : userData.balance - amount;

    const bet = {
      id: Date.now(),
      matchId,
      team,
      amount,
      odds,
      result: isWin ? 'Won' : 'Lost',
      payout: isWin ? potentialWin : 0,
      timestamp: new Date().toLocaleString()
    };

    const newHistory = [bet, ...userData.bettingHistory];
    const newUserData = { ...userData, balance: newBalance, bettingHistory: newHistory };

    setUserData(newUserData);

    const users = JSON.parse(localStorage.getItem('betphoenix_users') || '{}');
    users[currentUser] = newUserData;
    localStorage.setItem('betphoenix_users', JSON.stringify(users));

    setBetAmount({ ...betAmount, [matchId]: '' });
    showNotification(isWin ? `Won $${potentialWin.toFixed(2)}! 🎉` : `Lost $${amount.toFixed(2)} 😢`, isWin ? 'success' : 'error');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-yellow-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 text-yellow-500"><ZapIcon /></div>
            <span className="text-xl font-bold text-yellow-500">BetPhoenix</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-yellow-600 px-4 py-2 rounded-lg">
              <span className="font-bold text-black text-sm sm:text-base">Balance:</span>
              <span className="text-black font-bold text-sm sm:text-base">${userData.balance.toFixed(2)}</span>
            </div>
            <button onClick={onLogout} className="p-2 text-yellow-500 hover:bg-yellow-500/10 rounded-lg transition-colors" title="Logout">
              <div className="w-5 h-5"><LogOutIcon /></div>
            </button>
          </div>
        </div>
      </nav>

      {notification && (
        <div className={`fixed top-20 right-4 z-50 px-6 py-4 rounded-lg shadow-2xl ${
          notification.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`}>
          {notification.message}
        </div>
      )}

      <div className="pt-24 px-4 sm:px-6 lg:px-8 pb-12 max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          Welcome, {currentUser}!
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-yellow-500 flex items-center space-x-2">
          <div className="w-6 h-6 sm:w-8 sm:h-8"><ActivityIcon /></div>
          <span>Live Matches</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {matches.map(match => (
            <div key={match.id} className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 rounded-xl p-4 sm:p-6 hover:border-yellow-500 transition-all shadow-xl">
              <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">{match.status}</span>
              <div className="flex justify-between items-center my-4">
                <span className="text-lg sm:text-xl font-bold">{match.home}</span>
                <span className="text-gray-500 font-bold text-sm">VS</span>
                <span className="text-lg sm:text-xl font-bold">{match.away}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
                <button onClick={() => placeBet(match.id, match.home, match.homeOdds)} className="bg-yellow-500/10 hover:bg-yellow-500 hover:text-black border border-yellow-500 text-yellow-500 rounded-lg p-2 sm:p-3 transition-all transform hover:scale-105">
                  <div className="text-xs font-semibold mb-1">Home</div>
                  <div className="text-base sm:text-lg font-bold">{match.homeOdds.toFixed(2)}</div>
                </button>
                <button onClick={() => placeBet(match.id, 'Draw', match.drawOdds)} className="bg-yellow-500/10 hover:bg-yellow-500 hover:text-black border border-yellow-500 text-yellow-500 rounded-lg p-2 sm:p-3 transition-all transform hover:scale-105">
                  <div className="text-xs font-semibold mb-1">Draw</div>
                  <div className="text-base sm:text-lg font-bold">{match.drawOdds.toFixed(2)}</div>
                </button>
                <button onClick={() => placeBet(match.id, match.away, match.awayOdds)} className="bg-yellow-500/10 hover:bg-yellow-500 hover:text-black border border-yellow-500 text-yellow-500 rounded-lg p-2 sm:p-3 transition-all transform hover:scale-105">
                  <div className="text-xs font-semibold mb-1">Away</div>
                  <div className="text-base sm:text-lg font-bold">{match.awayOdds.toFixed(2)}</div>
                </button>
              </div>
              <input type="number" value={betAmount[match.id] || ''} onChange={e => setBetAmount({...betAmount, [match.id]: e.target.value})} placeholder="Enter bet amount" className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded text-white focus:outline-none focus:border-yellow-500"/>
            </div>
          ))}
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-yellow-500 flex items-center space-x-2">
          <div className="w-6 h-6 sm:w-8 sm:h-8"><TrendingUpIcon /></div>
          <span>Betting History</span>
        </h2>

        {userData.bettingHistory.length === 0 ? (
          <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 rounded-xl p-8 sm:p-12 text-center text-gray-400">
            No bets placed yet. Start betting to see your history!
          </div>
        ) : (
          <div className="space-y-4">
            {userData.bettingHistory.map(bet => (
              <div key={bet.id} className={`bg-gradient-to-r ${bet.result==='Won'?'from-green-900/30 to-black border-green-500/50':'from-red-900/30 to-black border-red-500/50'} border rounded-xl p-4 sm:p-6 shadow-lg transition-all`}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${bet.result==='Won'?'bg-green-500 text-white':'bg-red-500 text-white'}`}>{bet.result}</span>
                    <span className="text-yellow-500 font-bold">{bet.team}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">{bet.timestamp}</div>
                  <div className="flex items-center justify-between sm:justify-start sm:space-x-6">
                    <div className="text-center">
                      <div className="text-xs text-gray-400 mb-1">Bet</div>
                      <div className="text-white font-bold text-sm">${bet.amount.toFixed(2)}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-400 mb-1">Odds</div>
                      <div className="text-yellow-500 font-bold text-sm">{bet.odds.toFixed(2)}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-400 mb-1">Result</div>
                      <div className={`font-bold text-sm ${bet.result==='Won'?'text-green-500':'text-red-500'}`}>
                        {bet.result==='Won'?`+${bet.payout.toFixed(2)}`:`-${bet.amount.toFixed(2)}`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <footer className="bg-black border-t border-yellow-500/20 py-8 text-center text-gray-400">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-6 h-6 text-yellow-500"><ZapIcon /></div>
          <span className="text-xl font-bold text-yellow-500">BetPhoenix</span>
        </div>
        © 2025 BetPhoenix. All rights reserved.
      </footer>
    </div>
  );
};

// --- MAIN APP ---
const App = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('betphoenix_currentUser');
    if (user) { setCurrentUser(user); setCurrentPage('dashboard'); }
  }, []);

  const handleLogin = username => {
    setCurrentUser
(username);
    localStorage.setItem('betphoenix_currentUser', username);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('betphoenix_currentUser');
    setCurrentPage('login');
  };

  const navigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {currentPage === 'login' && <Login onLogin={handleLogin} onNavigate={navigate} />}
      {currentPage === 'signup' && <SignUp onLogin={handleLogin} onNavigate={navigate} />}
      {currentPage === 'dashboard' && currentUser && <Dashboard currentUser={currentUser} onLogout={handleLogout} />}
    </>
  );
};

// --- RENDER ---
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);