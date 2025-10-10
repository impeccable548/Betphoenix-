import React, { useState, useEffect } from 'react';

// Icons
const ZapIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;
const ActivityIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>;
const WalletIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path></svg>;
const GameIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="15" rx="2"></rect></svg>;
const HistoryIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
const SettingsIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle></svg>;
const MenuIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>;
const XIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;

// Typewriter Component
const Typewriter = ({ text, delay = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[index]);
        setIndex(index + 1);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [index, text, delay]);

  return <span>{displayText}</span>;
};

// Landing Page
const LandingPage = ({ onNavigate }) => {
  const [section, setSection] = useState('home');
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [mobileMenu, setMobileMenu] = useState(false);

  const features = [
    { icon: '⚡', title: 'Live Betting', desc: 'Real-time odds on 10+ matches' },
    { icon: '💰', title: 'Instant Withdrawals', desc: 'Transfer to Nigerian banks' },
    { icon: '🎰', title: 'Casino Games', desc: '5 exciting games' },
    { icon: '🛡️', title: 'Secure', desc: 'Bank-level security' },
    { icon: '📈', title: 'Best Odds', desc: 'Industry-leading' },
    { icon: '👥', title: '24/7 Support', desc: 'Always here' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-yellow-900 text-white">
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-yellow-500/30 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 text-yellow-500"><ZapIcon /></div>
            <span className="text-2xl font-bold text-yellow-500"><Typewriter text="BetPhoenix" delay={150} /></span>
          </div>

          <div className="hidden md:flex space-x-6">
            <button onClick={() => setSection('home')} className="text-yellow-400 hover:text-yellow-300">Home</button>
            <button onClick={() => setSection('about')} className="text-yellow-400 hover:text-yellow-300">About</button>
            <button onClick={() => setSection('features')} className="text-yellow-400 hover:text-yellow-300">Features</button>
            <button onClick={() => setSection('contact')} className="text-yellow-400 hover:text-yellow-300">Contact</button>
          </div>

          <div className="hidden md:flex space-x-3">
            <button onClick={() => onNavigate('login')} className="px-5 py-2 border-2 border-yellow-500 text-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-black transition font-bold">Login</button>
            <button onClick={() => onNavigate('signup')} className="px-5 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-lg font-bold">Sign Up</button>
          </div>

          <button className="md:hidden text-yellow-500" onClick={() => setMobileMenu(!mobileMenu)}>
            <div className="w-6 h-6">{mobileMenu ? <XIcon /> : <MenuIcon />}</div>
          </button>
        </div>

        {mobileMenu && (
          <div className="md:hidden pb-4 space-y-2 px-4">
            <button onClick={() => setSection('home')} className="block w-full text-left py-2 text-yellow-400">Home</button>
            <button onClick={() => setSection('about')} className="block w-full text-left py-2 text-yellow-400">About</button>
            <button onClick={() => onNavigate('login')} className="w-full px-4 py-2 border border-yellow-500 text-yellow-500 rounded-lg">Login</button>
            <button onClick={() => onNavigate('signup')} className="w-full px-4 py-2 bg-yellow-500 text-black rounded-lg">Sign Up</button>
          </div>
        )}
      </nav>

      {section === 'home' && (
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              <Typewriter text="Win Big with BetPhoenix" delay={100} />
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12">Nigeria's #1 Sports Betting Platform</p>
            <button onClick={() => onNavigate('signup')} className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-lg hover:scale-105 transition font-bold text-lg">
              Get Started - ₦1000 Bonus
            </button>
          </div>

          <div className="max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-gradient-to-br from-purple-900/50 to-black border border-yellow-500/30 rounded-xl p-6 hover:scale-105 transition">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-yellow-400">{f.title}</h3>
                <p className="text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {section === 'about' && (
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-yellow-400"><Typewriter text="About BetPhoenix" delay={80} /></h2>
            <div className="bg-gradient-to-br from-purple-900/50 to-black border border-yellow-500/30 rounded-xl p-8">
              <p className="text-lg text-gray-300 mb-4">BetPhoenix is Nigeria's premier online betting platform with the best odds on live sports and casino games.</p>
              <p className="text-lg text-gray-300">Join thousands of winners who trust us for fair play and fast payouts!</p>
            </div>
          </div>
        </section>
      )}

      {section === 'contact' && (
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-yellow-400"><Typewriter text="Contact Us" delay={80} /></h2>
            <div className="bg-gradient-to-br from-purple-900/50 to-black border border-yellow-500/30 rounded-xl p-8 space-y-4">
              <input type="text" value={contactForm.name} onChange={(e) => setContactForm({...contactForm, name: e.target.value})} placeholder="Name" className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white focus:outline-none focus:border-yellow-500" />
              <input type="email" value={contactForm.email} onChange={(e) => setContactForm({...contactForm, email: e.target.value})} placeholder="Email" className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white focus:outline-none focus:border-yellow-500" />
              <textarea value={contactForm.message} onChange={(e) => setContactForm({...contactForm, message: e.target.value})} rows="4" placeholder="Message" className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white focus:outline-none focus:border-yellow-500" />
              <button onClick={() => alert('Message sent!')} className="w-full py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-lg font-bold">Send</button>
            </div>
          </div>
        </section>
      )}

      <footer className="bg-black border-t border-yellow-500/30 py-12">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-8 text-yellow-500"><ZapIcon /></div>
            <span className="text-2xl font-bold text-yellow-500">BetPhoenix</span>
          </div>
          <div className="flex justify-center space-x-6">
            <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">f</div>
            <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">X</div>
            <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">in</div>
          </div>
          <p className="text-gray-400">© 2025 BetPhoenix. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// Login WITH FORGOT PASSWORD
const Login = ({ onLogin, onNavigate }) => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!form.username || !form.password) {
      setError('Fill all fields');
      return;
    }
    const users = JSON.parse(localStorage.getItem('bp_users') || '{}');
    if (users[form.username]?.password === form.password) {
      onLogin(form.username);
    } else {
      setError('Invalid credentials');
    }
  };

  const handleForgotPassword = () => {
    if (!form.username) {
      alert('Please enter your username first to retrieve password');
      return;
    }
    const users = JSON.parse(localStorage.getItem('bp_users') || '{}');
    if (users[form.username]) {
      alert(`Your password is: ${users[form.username].password}`);
    } else {
      alert('Username not found. Please check your username.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-yellow-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 text-yellow-500 mx-auto mb-4 animate-pulse"><ZapIcon /></div>
          <h2 className="text-4xl font-bold text-yellow-500">Welcome Back</h2>
        </div>
        <div className="bg-gradient-to-br from-purple-900/50 to-black border border-yellow-500/30 rounded-2xl p-8">
          {error && <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded-lg text-red-500 text-sm">{error}</div>}
          <div className="space-y-4">
            <input type="text" value={form.username} onChange={(e) => setForm({...form, username: e.target.value})} placeholder="Username" className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white focus:outline-none focus:border-yellow-500" />
            
            <div>
              <input type="password" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} placeholder="Password" className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white focus:outline-none focus:border-yellow-500" />
              <button onClick={handleForgotPassword} className="mt-2 text-yellow-400 hover:text-yellow-300 text-sm underline">
                Forgot/Update Password?
              </button>
            </div>

            <button onClick={handleSubmit} className="w-full py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-lg font-bold hover:scale-105 transition">Login</button>
          </div>
          <p className="mt-6 text-center text-gray-400">
            No account? <button onClick={() => onNavigate('signup')} className="text-yellow-500 font-semibold hover:text-yellow-400">Sign Up</button>
          </p>
        </div>
      </div>
    </div>
  );
};

// SignUp
const SignUp = ({ onLogin, onNavigate }) => {
  const [form, setForm] = useState({ username: '', password: '', confirm: '' });
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!form.username || !form.password || !form.confirm) {
      setError('Fill all fields');
      return;
    }
    if (form.password !== form.confirm) {
      setError('Passwords do not match');
      return;
    }
    const users = JSON.parse(localStorage.getItem('bp_users') || '{}');
    if (users[form.username]) {
      setError('Username exists');
      return;
    }
    users[form.username] = { password: form.password, balance: 1000, history: [], transactions: [] };
    localStorage.setItem('bp_users', JSON.stringify(users));
    onLogin(form.username);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-yellow-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 text-yellow-500 mx-auto mb-4 animate-pulse"><ZapIcon /></div>
          <h2 className="text-4xl font-bold text-yellow-500">Join BetPhoenix</h2>
        </div>
        <div className="bg-gradient-to-br from-purple-900/50 to-black border border-yellow-500/30 rounded-2xl p-8">
          {error && <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded-lg text-red-500 text-sm">{error}</div>}
          <div className="space-y-4">
            <input type="text" value={form.username} onChange={(e) => setForm({...form, username: e.target.value})} placeholder="Username" className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white focus:outline-none focus:border-yellow-500" />
            <input type="password" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} placeholder="Password" className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white focus:outline-none focus:border-yellow-500" />
            <input type="password" value={form.confirm} onChange={(e) => setForm({...form, confirm: e.target.value})} placeholder="Confirm" className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white focus:outline-none focus:border-yellow-500" />
            <button onClick={handleSubmit} className="w-full py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-lg font-bold">Create Account</button>
          </div>
          <p className="mt-6 text-center text-gray-400">
            Have account? <button onClick={() => onNavigate('login')} className="text-yellow-500 font-semibold">Login</button>
          </p>
        </div>
      </div>
    </div>
  );
};

// Dashboard
const Dashboard = ({ user, onLogout }) => {
  const [page, setPage] = useState('matches');
  const [sidebar, setSidebar] = useState(false);
  const [data, setData] = useState(null);
  const [mounted, setMounted] = useState(false);

  // ✅ Added updateData function
  const updateData = (newData) => {
    setData((prev) => {
      const updated = { ...prev, ...newData };

      if (typeof window !== 'undefined') {
        const users = JSON.parse(localStorage.getItem('bp_users') || '{}');
        users[user] = updated;
        localStorage.setItem('bp_users', JSON.stringify(users));
      }

      return updated;
    });
  };

  useEffect(() => {
    setMounted(true);

    if (typeof window !== 'undefined') {
      try {
        const users = JSON.parse(localStorage.getItem('bp_users') || '{}');
        if (users[user]) {
          setData(users[user]);
        } else {
          console.warn('No user found, resetting...');
          localStorage.removeItem('bp_currentUser');
          onLogout();
        }
      } catch (err) {
        console.error('Corrupted localStorage data:', err);
        localStorage.removeItem('bp_users');
        onLogout();
      }
    }
  }, [user, onLogout]);

  if (!mounted)
    return (
      <div className="h-screen flex items-center justify-center bg-black text-yellow-500">
        Initializing Dashboard...
      </div>
    );

  if (!data)
    return (
      <div className="h-screen flex items-center justify-center bg-black text-yellow-500">
        Loading your data...
      </div>
    );

  const menu = [
    { id: 'matches', icon: <ActivityIcon />, label: 'Live Matches' },
    { id: 'wallet', icon: <WalletIcon />, label: 'Wallet' },
    { id: 'games', icon: <GameIcon />, label: 'Games' },
    { id: 'history', icon: <HistoryIcon />, label: 'History' },
    { id: 'settings', icon: <SettingsIcon />, label: 'Settings' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-yellow-900 text-white">
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-yellow-500/30 z-50 px-4 h-16 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button onClick={() => setSidebar(!sidebar)} className="lg:hidden text-yellow-500">
            <div className="w-6 h-6"><MenuIcon /></div>
          </button>
          <div className="w-8 h-8 text-yellow-500"><ZapIcon /></div>
          <span className="text-xl font-bold text-yellow-500">BetPhoenix</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-2 rounded-lg font-bold text-black">
            ₦{data.balance?.toFixed(2) || '0.00'}
          </div>
          <button onClick={onLogout} className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600">
            Logout
          </button>
        </div>
      </nav>

      <aside className={`fixed left-0 top-16 h-full w-64 bg-black/90 border-r border-yellow-500/30 transform transition-transform z-40 ${sidebar ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-4 space-y-2">
          {menu.map(m => (
            <button key={m.id} onClick={() => { setPage(m.id); setSidebar(false); }} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${page === m.id ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black' : 'text-yellow-500 hover:bg-yellow-500/10'}`}>
              <div className="w-5 h-5">{m.icon}</div>
              <span className="font-semibold">{m.label}</span>
            </button>
          ))}
        </div>
      </aside>

      <main className="pt-16 lg:pl-64 p-6">
        {page === 'matches' && <Matches data={data} updateData={updateData} />}
        {page === 'wallet' && <Wallet data={data} updateData={updateData} />}
        {page === 'games' && <Games data={data} updateData={updateData} />}
        {page === 'history' && <History data={data} />}
        {page === 'settings' && <Settings data={data} updateData={updateData} />}
      </main>
    </div>
  );
};
// Matches
const Matches = ({ data, updateData }) => {
  const [matches, setMatches] = useState([]);
  const [bets, setBets] = useState({});
  const [notif, setNotif] = useState(null);

  useEffect(() => {
    const teamsList = [
      'Man United', 'Liverpool', 'Real Madrid', 'Barcelona', 'Bayern', 'Dortmund',
      'Chelsea', 'Arsenal', 'PSG', 'Marseille', 'Juventus', 'Milan',
      'Man City', 'Tottenham', 'Inter', 'Napoli', 'Atletico', 'Sevilla', 'Leicester', 'Everton'
    ];

    const shuffledTeams = [...teamsList].sort(() => 0.5 - Math.random());
    const m = [];
    for (let i = 0; i < 20; i += 2) {
      m.push({
        id: i / 2,
        home: shuffledTeams[i],
        away: shuffledTeams[i + 1],
        homeOdds: (1.5 + Math.random()).toFixed(2),
        awayOdds: (1.5 + Math.random()).toFixed(2),
        drawOdds: (2.5 + Math.random()).toFixed(2),
      });
    }
    setMatches(m);

    const interval = setInterval(() => {
      setMatches(prev =>
        prev.map(match => {
          const updateOdd = odd =>
            (parseFloat(odd) + (Math.random() - 0.5) * 0.1).toFixed(2);
          return {
            ...match,
            homeOdds: updateOdd(match.homeOdds),
            awayOdds: updateOdd(match.awayOdds),
            drawOdds: updateOdd(match.drawOdds),
          };
        })
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const bet = (id, team, odds) => {
    const amt = parseFloat(bets[id] || 0);
    const safeBalance = isNaN(data.balance) ? 0 : data.balance;

    if (!amt || amt <= 0 || amt > safeBalance) {
      setNotif({ msg: 'Invalid amount', type: 'error' });
      setTimeout(() => setNotif(null), 2000);
      return;
    }

    const win = Math.random() < 1 / parseFloat(odds);
    const payout = amt * parseFloat(odds);
    const newBal = win ? safeBalance + payout - amt : safeBalance - amt;
    const rec = {
      id: Date.now(),
      team,
      amt,
      odds: parseFloat(odds),
      result: win ? 'Won' : 'Lost',
      payout: win ? payout : 0,
      time: new Date().toLocaleString(),
    };

    updateData({
      ...data,
      balance: newBal,
      history: [rec, ...(data.history || [])],
      transactions: [rec, ...(data.transactions || [])],
    });

    setBets({ ...bets, [id]: '' });
    setNotif({
      msg: win ? `Won ₦${payout.toFixed(2)}! 🎉` : `Lost ₦${amt.toFixed(2)} 😢`,
      type: win ? 'success' : 'error',
    });
    setTimeout(() => setNotif(null), 2000);
  };

  return (
    <div>
      {notif && (
        <div
          className={`fixed top-20 right-4 z-50 px-6 py-4 rounded-lg ${
            notif.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          } text-white`}
        >
          {notif.msg}
        </div>
      )}

      <h2 className="text-3xl font-bold mb-6 text-yellow-400">Live Matches</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {matches.map(m => (
          <div
            key={m.id}
            className="bg-gradient-to-br from-purple-900/50 to-black border border-yellow-500/30 rounded-xl p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold">{m.home}</span>
              <span className="text-gray-500">VS</span>
              <span className="text-xl font-bold">{m.away}</span>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-4">
              <button
                onClick={() => bet(m.id, m.home, m.homeOdds)}
                className="bg-yellow-500/10 border border-yellow-500 text-yellow-500 rounded-lg p-3 hover:bg-yellow-500 hover:text-black transition"
              >
                <div className="text-xs">Home</div>
                <div className="text-lg font-bold">{m.homeOdds}</div>
              </button>
              <button
                onClick={() => bet(m.id, 'Draw', m.drawOdds)}
                className="bg-yellow-500/10 border border-yellow-500 text-yellow-500 rounded-lg p-3 hover:bg-yellow-500 hover:text-black transition"
              >
                <div className="text-xs">Draw</div>
                <div className="text-lg font-bold">{m.drawOdds}</div>
              </button>
              <button
                onClick={() => bet(m.id, m.away, m.awayOdds)}
                className="bg-yellow-500/10 border border-yellow-500 text-yellow-500 rounded-lg p-3 hover:bg-yellow-500 hover:text-black transition"
              >
                <div className="text-xs">Away</div>
                <div className="text-lg font-bold">{m.awayOdds}</div>
              </button>
            </div>

            <input
              type="number"
              value={bets[m.id] || ''}
              onChange={e => setBets({ ...bets, [m.id]: e.target.value })}
              placeholder="Bet amount (₦)"
              className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white focus:outline-none focus:border-yellow-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Wallet
const Wallet = ({ data, updateData }) => {
  const [showTransfer, setShowTransfer] = useState(false);
  const [showFund, setShowFund] = useState(false);
  const [transfer, setTransfer] = useState({ bank: '', account: '', amt: '' });
  const [fund, setFund] = useState({ bank: '', amt: '' });

  const banks = ['GTBank', 'First Bank', 'Access Bank', 'UBA', 'Zenith', 'Fidelity', 'Union Bank', 'Sterling', 'Stanbic', 'Wema'];
  const safeBalance = isNaN(data.balance) ? 0 : data.balance;

  const doTransfer = () => {
    const amt = parseFloat(transfer.amt);
    const fee = amt * 0.01;
    if (!transfer.bank || !transfer.account || amt <= 0 || amt + fee > safeBalance) { alert('Invalid'); return; }
    const rec = { id: Date.now(), type: 'withdrawal', bank: transfer.bank, amt, fee, time: new Date().toLocaleString() };
    updateData({ ...data, balance: safeBalance - amt - fee, transactions: [rec, ...(data.transactions || [])] });
    setTransfer({ bank: '', account: '', amt: '' });
    setShowTransfer(false);
    alert(`₦${amt} transferred!`);
  };

  const doFund = () => {
    const amt = parseFloat(fund.amt);
    if (!fund.bank || amt <= 0) { alert('Invalid'); return; }
    const rec = { id: Date.now(), type: 'deposit', bank: fund.bank, amt, time: new Date().toLocaleString() };
    updateData({ ...data, balance: safeBalance + amt, transactions: [rec, ...(data.transactions || [])] });
    setFund({ bank: '', amt: '' });
    setShowFund(false);
    alert(`₦${amt} funded!`);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-yellow-400">Wallet</h2>
      <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl p-8 mb-6">
        <p className="text-black/70 text-sm mb-2">Balance</p>
        <h3 className="text-5xl font-bold text-black mb-4">₦{safeBalance.toFixed(2)}</h3>
        <div className="flex gap-4">
          <button onClick={() => setShowTransfer(true)} className="flex-1 px-4 py-2 bg-black text-yellow-500 rounded-lg font-bold">Transfer</button>
          <button onClick={() => setShowFund(true)} className="flex-1 px-4 py-2 bg-black text-yellow-500 rounded-lg font-bold">Fund</button>
        </div>
      </div>

      {showTransfer && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-xl p-6 w-80">
            <h3 className="text-yellow-400 font-bold text-xl mb-4">Transfer Funds</h3>
            <select value={transfer.bank} onChange={e => setTransfer({ ...transfer, bank: e.target.value })} className="w-full mb-3 px-3 py-2 rounded bg-black border border-yellow-500/30 text-white">
              <option value="">Select Bank</option>
              {banks.map(b => <option key={b}>{b}</option>)}
            </select>
            <input value={transfer.account} onChange={e => setTransfer({ ...transfer, account: e.target.value })} placeholder="Account Number" className="w-full mb-3 px-3 py-2 rounded bg-black border border-yellow-500/30 text-white" />
            <input type="number" value={transfer.amt} onChange={e => setTransfer({ ...transfer, amt: e.target.value })} placeholder="Amount" className="w-full mb-4 px-3 py-2 rounded bg-black border border-yellow-500/30 text-white" />
            <button onClick={doTransfer} className="w-full bg-yellow-500 text-black rounded-lg py-2 font-bold">Confirm</button>
            <button onClick={() => setShowTransfer(false)} className="w-full mt-2 bg-gray-700 text-yellow-500 rounded-lg py-2 font-bold">Cancel</button>
          </div>
        </div>
      )}

      {showFund && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-xl p-6 w-80">
            <h3 className="text-yellow-400 font-bold text-xl mb-4">Fund Wallet</h3>
            <select value={fund.bank} onChange={e => setFund({ ...fund, bank: e.target.value })} className="w-full mb-3 px-3 py-2 rounded bg-black border border-yellow-500/30 text-white">
              <option value="">Select Bank</option>
              {banks.map(b => <option key={b}>{b}</option>)}
            </select>
            <input type="number" value={fund.amt} onChange={e => setFund({ ...fund, amt: e.target.value })} placeholder="Amount" className="w-full mb-4 px-3 py-2 rounded bg-black border border-yellow-500/30 text-white" />
            <button onClick={doFund} className="w-full bg-yellow-500 text-black rounded-lg py-2 font-bold">Confirm</button>
            <button onClick={() => setShowFund(false)} className="w-full mt-2 bg-gray-700 text-yellow-500 rounded-lg py-2 font-bold">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

// Games
const Games = ({ data, updateData }) => {
  const [amount, setAmount] = useState('');
  const [notif, setNotif] = useState(null);
  const safeBalance = isNaN(data.balance) ? 0 : data.balance;

  const playGame = (multiplier) => {
    const betAmt = parseFloat(amount);
    if (!betAmt || betAmt <= 0 || betAmt > safeBalance) {
      setNotif({ msg: 'Invalid bet amount ⚠️', type: 'error' });
      setTimeout(() => setNotif(null), 2000);
      return;
    }

    const win = Math.random() < 0.5;
    const payout = win ? betAmt * multiplier : 0;
    const newBalance = win ? safeBalance + payout - betAmt : safeBalance - betAmt;

    const rec = {
      id: Date.now(),
      type: 'game',
      amt: betAmt,
      multiplier,
      result: win ? 'Won' : 'Lost',
      payout,
      time: new Date().toLocaleString(),
    };

    updateData({
      ...data,
      balance: newBalance,
      history: [rec, ...(data.history || [])],
    });

    setAmount('');
    setNotif({
      msg: win ? `You won ₦${payout.toFixed(2)} 🎉` : `You lost ₦${betAmt.toFixed(2)} 😢`,
      type: win ? 'success' : 'error',
    });
    setTimeout(() => setNotif(null), 2000);
  };

  return (
    <div>
      {notif && (
        <div className={`fixed top-20 right-4 z-50 px-6 py-4 rounded-lg ${
          notif.type === 'success' ? 'bg-green-500' : 'bg-red-500'
        } text-white`}>
          {notif.msg}
        </div>
      )}

      <h2 className="text-3xl font-bold mb-6 text-yellow-400">Quick Games 🎮</h2>
      <input
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        placeholder="Enter bet amount (₦)"
        className="w-full mb-6 px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white focus:outline-none focus:border-yellow-500"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {[1.5, 2, 3].map((mult, i) => (
          <button
            key={i}
            onClick={() => playGame(mult)}
            className="bg-yellow-500/10 border border-yellow-500 text-yellow-500 rounded-lg p-6 hover:bg-yellow-500 hover:text-black transition text-xl font-bold"
          >
            x{mult} Multiplier
          </button>
        ))}
      </div>
    </div>
  );
};
// History
const History = ({ data }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-yellow-400">Transaction History</h2>
      {data.transactions.length === 0 ? (
        <div className="bg-gradient-to-br from-purple-900/50 to-black border border-yellow-500/30 rounded-xl p-12 text-center">
          <p className="text-gray-400 text-lg">No transactions yet</p>
        </div>
      ) : (
        <div className="space-y-4">
          {data.transactions.map(t => (
            <div key={t.id} className={`bg-gradient-to-r ${t.result === 'Won' ? 'from-green-900/30 to-black border-green-500/50' : t.result === 'Lost' ? 'from-red-900/30 to-black border-red-500/50' : 'from-purple-900/30 to-black border-purple-500/50'} border rounded-xl p-6`}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div className="flex-1 mb-3 sm:mb-0">
                  <div className="flex items-center space-x-3 mb-2">
                    {t.result && <span className={`px-3 py-1 rounded-full text-xs font-bold ${t.result === 'Won' ? 'bg-green-500' : 'bg-red-500'} text-white`}>{t.result}</span>}
                    <span className="text-yellow-500 font-bold">{t.team || t.game || t.type}</span>
                  </div>
                  <div className="text-sm text-gray-400">{t.time}</div>
                </div>
                <div className="flex items-center justify-between sm:justify-start sm:space-x-6">
                  <div className="text-center">
                    <div className="text-xs text-gray-400 mb-1">Amount</div>
                    <div className="text-white font-bold">₦{t.amt?.toFixed(2) || t.amount?.toFixed(2)}</div>
                  </div>
                  {t.odds && (
                    <div className="text-center">
                      <div className="text-xs text-gray-400 mb-1">Odds</div>
                      <div className="text-yellow-500 font-bold">{t.odds.toFixed(2)}</div>
                    </div>
                  )}
                  <div className="text-center">
                    <div className="text-xs text-gray-400 mb-1">Result</div>
                    <div className={`font-bold ${t.result === 'Won' ? 'text-green-500' : t.result === 'Lost' ? 'text-red-500' : 'text-purple-500'}`}>
                      {t.result === 'Won' ? `+₦${t.payout.toFixed(2)}` : t.result === 'Lost' ? `-₦${(t.amt || t.amount).toFixed(2)}` : `₦${t.amt.toFixed(2)}`}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Settings
const Settings = ({ data, updateData }) => {
  const [profile, setProfile] = useState({ name: '', email: '' });

  const saveProfile = () => {
    updateData({ ...data, profile });
    alert('Profile saved!');
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-yellow-400">Settings</h2>
      <div className="bg-gradient-to-br from-purple-900/50 to-black border border-yellow-500/30 rounded-xl p-8">
        <h3 className="text-xl font-bold text-yellow-400 mb-4">Profile Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-yellow-400 font-semibold mb-2">Name</label>
            <input type="text" value={profile.name} onChange={(e) => setProfile({...profile, name: e.target.value})} className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-yellow-400 font-semibold mb-2">Email</label>
            <input type="email" value={profile.email} onChange={(e) => setProfile({...profile, email: e.target.value})} className="w-full px-4 py-3 bg-black border border-yellow-500/30 rounded-lg text-white" placeholder="your@email.com" />
          </div>
          <button onClick={saveProfile} className="w-full py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-lg font-bold">Save Profile</button>
        </div>
      </div>
    </div>
  );
};

// App
const App = () => {
  const [page, setPage] = useState('landing');
  const [user, setUser] = useState(null);

  useEffect(() => {
    // ✅ Only run this on the client/browser
    if (typeof window !== 'undefined') {
      const u = localStorage.getItem('bp_currentUser');
      if (u) {
        setUser(u);
        setPage('dashboard');
      }
    }
  }, []);

  const handleLogin = (username) => {
    if (typeof window !== 'undefined') {
      setUser(username);
      localStorage.setItem('bp_currentUser', username);
      setPage('dashboard');
    }
  };

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      setUser(null);
      localStorage.removeItem('bp_currentUser');
      setPage('landing');
    }
  };

  return (
    <div>
      {page === 'landing' && <LandingPage onNavigate={setPage} />}
      {page === 'login' && <Login onLogin={handleLogin} onNavigate={setPage} />}
      {page === 'signup' && <SignUp onLogin={handleLogin} onNavigate={setPage} />}
      {page === 'dashboard' && user && <Dashboard user={user} onLogout={handleLogout} />}
    </div>
  );
};
// Debug Overlay for Mobile
if (typeof window !== 'undefined') {
  window.onerror = function (message, source, lineno, colno, error) {
    const errorBox = document.createElement('div');
    errorBox.style.position = 'fixed';
    errorBox.style.bottom = '0';
    errorBox.style.left = '0';
    errorBox.style.width = '100%';
    errorBox.style.background = 'rgba(255,0,0,0.9)';
    errorBox.style.color = 'white';
    errorBox.style.padding = '10px';
    errorBox.style.fontSize = '14px';
    errorBox.style.zIndex = '9999';
    errorBox.style.whiteSpace = 'pre-wrap';
    errorBox.innerText = `🔥 JS Error:\n${message}\nLine: ${lineno}\nSource: ${source}`;
    document.body.appendChild(errorBox);
  };
}
export default App;