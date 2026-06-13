import { useState, useEffect } from 'react';

// Tipe Tab untuk Navigasi
type TabType = 'home' | 'perkembangan' | 'pelatihan' | 'curhat' | 'minishop' | 'biodata';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'splash' | 'auth' | 'main'>('splash');
  const [activeTab, setActiveTab] = useState<TabType>('home');

  // Loading Splash Screen (2 detik)
  useEffect(() => {
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => setCurrentScreen('auth'), 2000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  // ==========================================
  // LAYAR 1: SPLASH SCREEN
  // ==========================================
  if (currentScreen === 'splash') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-brand-cream">
        <div className="text-6xl mb-4 animate-bounce">🦘</div>
        <h1 className="text-3xl font-bold text-brand-dark tracking-tight">Manulife</h1>
        <p className="text-brand-green font-medium tracking-widest mt-1 uppercase text-sm">Parenting</p>
        <div className="mt-8 flex space-x-2">
          <div className="w-3 h-3 bg-brand-yellow rounded-full animate-ping"></div>
          <div className="w-3 h-3 bg-brand-green rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-brand-dark rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    );
  }

  // ==========================================
  // LAYAR 2: LOGIN / REGISTER
  // ==========================================
  if (currentScreen === 'auth') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-brand-cream p-6">
        <div className="w-full max-w-sm bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <div className="text-5xl mb-2">🦘</div>
            <h2 className="text-2xl font-bold text-brand-dark">Selamat Datang!</h2>
          </div>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setCurrentScreen('main'); }}>
            <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-green focus:outline-none text-brand-dark" required />
            <input type="password" placeholder="Kata Sandi" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-green focus:outline-none text-brand-dark" required />
            <button type="submit" className="w-full bg-brand-yellow text-brand-dark font-bold text-lg py-3 rounded-xl shadow-[0_4px_0_0_#d19d1a] active:shadow-none active:translate-y-1 transition-all">MASUK</button>
          </form>
        </div>
      </div>
    );
  }

  // ==========================================
  // KOMPONEN KONTEN TAB (Sesuai Workflow)
  // ==========================================

  const renderHome = () => (
    <div className="space-y-4">
      <div className="bg-brand-yellow text-brand-dark p-5 rounded-2xl shadow-[0_4px_0_0_#d19d1a]">
        <h2 className="text-lg font-black leading-tight">Fitur dari Aplikasi</h2>
        <p className="text-sm font-medium mt-1 opacity-80">(Fokusnya ke pemberdayaan ibu)</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <button onClick={() => setActiveTab('perkembangan')} className="bg-brand-darker p-4 rounded-xl border border-white/20 text-left hover:bg-brand-green transition-colors">
          <div className="text-3xl mb-2">📈</div>
          <h3 className="font-bold text-brand-cream text-sm">Perkembangan Anak</h3>
          <p className="text-xs text-gray-400 mt-1">Konsep Duolingo</p>
        </button>
        <button onClick={() => setActiveTab('pelatihan')} className="bg-brand-darker p-4 rounded-xl border border-white/20 text-left hover:bg-brand-green transition-colors">
          <div className="text-3xl mb-2">🎓</div>
          <h3 className="font-bold text-brand-cream text-sm">Pelatihan Ortu</h3>
          <p className="text-xs text-gray-400 mt-1">Konsep Ruangguru</p>
        </button>
        <button onClick={() => setActiveTab('curhat')} className="bg-brand-darker p-4 rounded-xl border border-white/20 text-left hover:bg-brand-green transition-colors">
          <div className="text-3xl mb-2">🤖</div>
          <h3 className="font-bold text-brand-cream text-sm">Curhat dgn AI</h3>
          <p className="text-xs text-gray-400 mt-1">Emergency & Baby Blues</p>
        </button>
        <button onClick={() => setActiveTab('minishop')} className="bg-brand-darker p-4 rounded-xl border border-white/20 text-left hover:bg-brand-green transition-colors">
          <div className="text-3xl mb-2">🛍️</div>
          <h3 className="font-bold text-brand-cream text-sm">E-commerce</h3>
          <p className="text-xs text-gray-400 mt-1">Minishop Terintegrasi</p>
        </button>
      </div>
    </div>
  );

  const renderPerkembangan = () => (
    <div className="flex flex-col items-center py-4">
      <div className="bg-brand-green text-brand-cream p-4 rounded-2xl mb-8 w-full shadow-[0_4px_0_0_#4c7057]">
        <h3 className="text-lg font-black">Perkembangan Anak</h3>
        <p className="text-xs mt-1">Tahun 1 = per 3 bulan | Tahun 2-5 = per 6 bulan</p>
      </div>

      <div className="relative flex flex-col items-center space-y-10 w-full">
        <div className="absolute top-0 bottom-0 w-4 bg-white/5 left-1/2 -translate-x-1/2 z-0 rounded-full"></div>
        
        {/* Node 1 */}
        <div className="relative z-10 translate-x-12 cursor-pointer group">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 bg-white text-brand-dark font-bold px-4 py-2 rounded-xl text-xs shadow-lg opacity-0 group-hover:opacity-100 transition-opacity w-48 text-center pointer-events-none">
            <ul className="text-left space-y-1">
              <li>• Fun fact (Checklist DDTK, KPSP)</li>
              <li>• Do & Donts parenting</li>
              <li>• Video Stimulasi</li>
            </ul>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white"></div>
          </div>
          <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center text-2xl shadow-[0_8px_0_0_#d19d1a] border-4 border-brand-dark active:translate-y-2">
            Materi
          </div>
        </div>

        {/* Node 2 */}
        <div className="relative z-10 -translate-x-8 cursor-pointer group">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-brand-dark font-bold px-4 py-2 rounded-xl text-xs shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Video khusus edukasi ortu (general skills)
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white"></div>
          </div>
          <div className="w-24 h-24 bg-brand-green rounded-full flex items-center justify-center text-3xl shadow-[0_8px_0_0_#4c7057] border-4 border-white active:translate-y-2">
            ▶️
          </div>
        </div>
      </div>
    </div>
  );

  const renderPelatihan = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-brand-yellow mb-6">Pelatihan Ortu (Ruangguru)</h2>
      
      <div className="bg-brand-darker p-4 rounded-xl border-l-4 border-brand-green">
        <h3 className="font-bold text-lg">Materi Per-Dots</h3>
        <ul className="mt-2 space-y-2 text-sm text-gray-300">
          <li className="flex items-center space-x-2"><span>📄</span><span>Materi baca</span></li>
          <li className="flex items-center space-x-2"><span>📺</span><span>Materi tonton</span></li>
          <li className="flex items-center space-x-2"><span>📝</span><span>Materi (Latihan)</span></li>
        </ul>
      </div>

      <div className="bg-brand-darker p-4 rounded-xl border-l-4 border-brand-yellow mt-4">
        <h3 className="font-bold text-lg">Info Webinar</h3>
        <p className="mt-2 text-sm text-gray-300">PTAND ortu</p>
      </div>
    </div>
  );

  const renderBiodata = () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center text-3xl">👤</div>
        <div>
          <h2 className="text-xl font-bold">Biodata Keluarga</h2>
          <p className="text-brand-green text-sm">Fase: 0-6 bulan digratiskan</p>
        </div>
      </div>

      <div className="bg-brand-darker p-5 rounded-xl border border-white/10 space-y-4 text-sm">
        <div className="border-b border-white/10 pb-4">
          <p className="text-gray-400 mb-1">Status Akun</p>
          <p className="font-medium">Satu akun langganan dipakai 2 orang (pasangan ortu)</p>
        </div>
        <div>
          <p className="text-gray-400 mb-1">Profile Perkembangan</p>
          <p className="font-medium">Keluarga saat ini pada tahap apa</p>
        </div>
      </div>
    </div>
  );

  const renderCurhat = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-brand-yellow mb-4">Curhat dgn ANI</h2>
      <div className="bg-brand-darker p-4 rounded-xl border border-white/10 space-y-3 text-sm">
        <div className="bg-white/5 p-3 rounded-lg">Simple Test menyusun modul untuk ortu</div>
        <div className="bg-white/5 p-3 rounded-lg border-l-2 border-red-500">Emergency baby blues</div>
        <div className="bg-white/5 p-3 rounded-lg border-l-2 border-brand-yellow">Daftar kontak emergency layanan yang tersedia</div>
      </div>
    </div>
  );

  // ==========================================
  // RENDER UTAMA APLIKASI
  // ==========================================
  return (
    <div className="min-h-screen flex flex-col justify-between bg-brand-dark text-brand-cream relative overflow-hidden">
      
      {/* HEADER GLOBAL */}
      <header className="bg-brand-darker p-4 sticky top-0 z-50 flex justify-between items-center border-b border-white/10">
        <h1 className="font-bold text-lg text-brand-yellow tracking-wide">Manulife</h1>
        <div className="bg-brand-cream text-brand-dark text-xs px-3 py-1 rounded-full font-bold shadow-sm">
          Sistem Duit: Bayar
        </div>
      </header>

      {/* AREA KONTEN DINAMIS */}
      <main className="flex-1 w-full max-w-md mx-auto p-5 overflow-y-auto pb-24">
        {activeTab === 'home' && renderHome()}
        {activeTab === 'perkembangan' && renderPerkembangan()}
        {activeTab === 'pelatihan' && renderPelatihan()}
        {activeTab === 'biodata' && renderBiodata()}
        {activeTab === 'curhat' && renderCurhat()}
        {activeTab === 'minishop' && <div className="text-center mt-10 text-gray-400">🛍️ E-commerce / Minishop</div>}
      </main>

      {/* NAVBAR BAWAH */}
      <footer className="bg-brand-darker border-t border-white/10 py-3 px-6 fixed bottom-0 w-full z-50">
        <div className="max-w-md mx-auto flex justify-between items-center text-gray-400">
          <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center ${activeTab === 'home' ? 'text-brand-yellow' : 'hover:text-white'}`}>
            <span className="text-2xl">🏠</span>
            <span className="text-[10px] mt-1">Beranda</span>
          </button>
          <button onClick={() => setActiveTab('perkembangan')} className={`flex flex-col items-center ${activeTab === 'perkembangan' ? 'text-brand-yellow' : 'hover:text-white'}`}>
            <span className="text-2xl">📈</span>
            <span className="text-[10px] mt-1">Tumbuh</span>
          </button>
          <button onClick={() => setActiveTab('curhat')} className={`flex flex-col items-center ${activeTab === 'curhat' ? 'text-brand-yellow' : 'hover:text-white'}`}>
            <span className="text-2xl">🤖</span>
            <span className="text-[10px] mt-1">Curhat AI</span>
          </button>
          <button onClick={() => setActiveTab('pelatihan')} className={`flex flex-col items-center ${activeTab === 'pelatihan' ? 'text-brand-yellow' : 'hover:text-white'}`}>
            <span className="text-2xl">🎓</span>
            <span className="text-[10px] mt-1">Pelatihan</span>
          </button>
          <button onClick={() => setActiveTab('biodata')} className={`flex flex-col items-center ${activeTab === 'biodata' ? 'text-brand-yellow' : 'hover:text-white'}`}>
            <span className="text-2xl">👤</span>
            <span className="text-[10px] mt-1">Profil</span>
          </button>
        </div>
      </footer>
    </div>
  );
}