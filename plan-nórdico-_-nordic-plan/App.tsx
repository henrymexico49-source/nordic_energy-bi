
import React, { useState, useEffect } from 'react';
import { translations } from './translations';
import { Language } from './types';
import { 
  CheckIcon, 
  ShieldIcon, 
  SparklesIcon, 
  EnergyIcon, 
  MobilityIcon, 
  ConfidenceIcon, 
  ClarityIcon 
} from './components/Icons';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('es');
  const t = translations[lang];

  // Hotmart links for both Spanish and English versions
  const checkoutUrl = lang === 'es' 
    ? 'https://pay.hotmart.com/C104080238R?bid=1769388590011' 
    : 'https://pay.hotmart.com/L104099320L';
  
  // Countdown Logic (48 hours)
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'es' : 'en');
  };

  const getBenefitIcon = (iconName: string) => {
    const props = { className: "w-10 h-10 text-emerald-950" };
    switch (iconName) {
      case 'Energy': return <EnergyIcon {...props} />;
      case 'Mobility': return <MobilityIcon {...props} />;
      case 'Confidence': return <ConfidenceIcon {...props} />;
      case 'Clarity': return <ClarityIcon {...props} />;
      default: return <SparklesIcon {...props} />;
    }
  };

  const CountdownDisplay = ({ dark = false }) => (
    <div className={`flex gap-3 justify-center items-center font-black ${dark ? 'text-emerald-950' : 'text-yellow-300'}`}>
      <div className="flex flex-col items-center">
        <span className="text-2xl md:text-3xl leading-none">{timeLeft.days}</span>
        <span className="text-[10px] uppercase tracking-tighter opacity-70">{lang === 'es' ? 'Días' : 'Days'}</span>
      </div>
      <span className="text-xl pb-3">:</span>
      <div className="flex flex-col items-center">
        <span className="text-2xl md:text-3xl leading-none">{String(timeLeft.hours).padStart(2, '0')}</span>
        <span className="text-[10px] uppercase tracking-tighter opacity-70">{lang === 'es' ? 'Hrs' : 'Hrs'}</span>
      </div>
      <span className="text-xl pb-3">:</span>
      <div className="flex flex-col items-center">
        <span className="text-2xl md:text-3xl leading-none">{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span className="text-[10px] uppercase tracking-tighter opacity-70">{lang === 'es' ? 'Min' : 'Min'}</span>
      </div>
      <span className="text-xl pb-3">:</span>
      <div className="flex flex-col items-center">
        <span className="text-2xl md:text-3xl leading-none">{String(timeLeft.seconds).padStart(2, '0')}</span>
        <span className="text-[10px] uppercase tracking-tighter opacity-70">{lang === 'es' ? 'Seg' : 'Sec'}</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Countdown Bar */}
      <div className="bg-red-700 py-3 px-4 sticky top-0 z-[60] shadow-lg border-b border-red-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8">
          <p className="text-white font-black text-xs md:text-sm uppercase tracking-[0.2em] text-center">
            {lang === 'es' ? '¡OFERTA ESPECIAL TERMINA EN!' : 'SPECIAL OFFER ENDS IN!'}
          </p>
          <CountdownDisplay />
        </div>
      </div>

      {/* Header / Language Toggle */}
      <header className="relative w-full z-50 glass-effect border-b border-emerald-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl font-black tracking-tight text-emerald-950">
              {lang === 'es' ? 'Plan Nórdico' : 'Nordic Plan'}
              <span className="text-red-600">.</span>
            </span>
          </div>
          <button 
            onClick={toggleLang}
            className="px-5 py-2 rounded-full border-2 border-emerald-900 text-xs font-black hover:bg-emerald-900 hover:text-white transition-all uppercase tracking-widest text-emerald-950"
          >
            {lang === 'en' ? 'Español' : 'English'}
          </button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-20 md:pt-24 md:pb-32 bg-emerald-950">
          <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-400 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-900/20 rounded-full blur-[150px]" />
          </div>
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-3/5 text-center md:text-left">
                <span className="inline-block px-4 py-1.5 mb-6 text-xs font-black tracking-[0.3em] uppercase bg-red-600 text-white rounded-full shadow-lg">
                  {t.hero.badge}
                </span>
                <h1 className="text-5xl md:text-8xl font-[900] leading-[0.95] mb-8 tracking-tighter bg-gradient-to-br from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent filter drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]">
                  {t.hero.title}
                </h1>
                <p className="text-xl md:text-2xl text-emerald-50 mb-10 leading-relaxed font-medium opacity-90 max-w-2xl text-justify">
                  {t.hero.subtitle}
                </p>
                <div className="flex flex-col gap-5 mb-12 items-center md:items-start">
                  {t.hero.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="bg-red-600 rounded-full p-1 shadow-md">
                        <CheckIcon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white font-bold text-lg md:text-xl tracking-tight">{bullet}</span>
                    </div>
                  ))}
                </div>
                <a 
                  href={checkoutUrl}
                  className="inline-block w-full md:w-auto px-12 py-6 bg-red-600 text-yellow-300 text-2xl font-black rounded-full shadow-[0_20px_50px_rgba(220,38,38,0.6)] hover:bg-red-700 transition-all text-center transform hover:scale-[1.05] ring-8 ring-white/10 uppercase tracking-widest"
                >
                  {t.hero.cta}
                </a>
              </div>
              <div className="w-full md:w-2/5 relative">
                <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] border-8 border-white/10 transform rotate-2">
                  <img 
                    src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&q=80&w=1000" 
                    alt="Athletic woman in vibrant green nature" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-10 -left-10 bg-amber-400 p-8 rounded-[40px] shadow-2xl max-w-[220px] border-4 border-white transform -rotate-3 hidden md:block">
                  <p className="text-lg font-black text-emerald-950 leading-tight">
                    {lang === 'es' ? 'Protocolo Especial Mujer 40+' : 'Special Protocol Women 40+'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-10 border-y-4 border-emerald-900 bg-emerald-950 text-emerald-400">
          <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-10">
            <span className="text-sm font-black tracking-[0.3em] uppercase">European Standard</span>
            <span className="text-sm font-black tracking-[0.3em] uppercase text-red-500">Science First</span>
            <span className="text-sm font-black tracking-[0.3em] uppercase">Bio-Available</span>
            <span className="text-sm font-black tracking-[0.3em] uppercase text-amber-400">Expert Tested</span>
          </div>
        </section>

        {/* Hormonal Science Section */}
        <section className="py-24 bg-white relative">
          <div className="max-w-4xl mx-auto px-4 text-center mb-16 relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-emerald-950">{t.hormonal.title}</h2>
            <p className="text-xl text-stone-600 leading-relaxed font-medium">{t.hormonal.subtitle}</p>
          </div>
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
            {t.hormonal.points.map((point, i) => (
              <div key={i} className="p-12 rounded-[50px] bg-emerald-50 border-2 border-emerald-100 hover:border-red-600 transition-all group relative overflow-hidden flex flex-col h-full">
                <div className="w-16 h-16 bg-red-600 text-white rounded-[20px] flex items-center justify-center mb-8 shadow-xl transform group-hover:scale-110 transition-transform">
                  <SparklesIcon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black mb-6 text-emerald-900">{point.title}</h3>
                <p className="text-stone-700 leading-relaxed text-lg font-medium text-justify flex-grow">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Product Breakdown */}
        <section className="py-24 bg-emerald-950 text-emerald-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-amber-400 to-red-600"></div>
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter">{t.product.title}</h2>
              <p className="text-2xl font-medium opacity-70 italic">{t.product.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {t.product.items.map((item, i) => (
                <div key={i} className="flex gap-10 p-12 rounded-[60px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-amber-400 text-emerald-950 flex items-center justify-center font-black text-2xl shadow-2xl transform group-hover:-rotate-6 transition-transform">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-3xl font-black mb-4 text-white">{item.title}</h3>
                    <p className="opacity-70 leading-relaxed text-xl">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-emerald-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl md:text-6xl font-black text-center mb-24 text-emerald-950">{t.benefits.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {t.benefits.list.map((benefit, i) => (
                <div key={i} className="text-center group p-8 rounded-[40px] hover:bg-white hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-emerald-100">
                  <div className="relative w-28 h-28 mx-auto mb-10">
                    <div className="absolute inset-0 bg-amber-400 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative w-full h-full bg-white rounded-[2.5rem] flex items-center justify-center shadow-xl border-4 border-emerald-50 transform group-hover:-translate-y-2 group-hover:rotate-6 transition-transform">
                      {getBenefitIcon(benefit.icon)}
                    </div>
                  </div>
                  <h3 className="text-2xl font-black mb-5 text-emerald-900 leading-tight">{benefit.title}</h3>
                  <p className="text-stone-700 text-lg leading-relaxed font-medium">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-emerald-900 text-white overflow-hidden relative">
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-6xl font-[900] text-center mb-24 tracking-tight">{t.testimonials.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {t.testimonials.items.map((item, i) => (
                <div key={i} className="bg-emerald-950 p-12 rounded-[60px] border-2 border-emerald-800 flex flex-col shadow-2xl">
                  <div className="flex gap-1.5 mb-8">
                    {[1, 2, 3, 4, 5].map(star => (
                      <svg key={star} className="w-6 h-6 text-amber-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-2xl italic mb-10 leading-relaxed font-serif opacity-90">"{item.text}"</p>
                  <div className="flex items-center gap-5 mt-auto">
                    <div className="w-14 h-14 rounded-full bg-red-600 border-4 border-emerald-800 shadow-lg flex items-center justify-center font-black text-xl">
                      {item.name[0]}
                    </div>
                    <div>
                      <p className="font-black text-xl">{item.name}</p>
                      <p className="text-sm opacity-60 uppercase tracking-widest font-bold">{item.age} {lang === 'es' ? 'años' : 'years'}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bonus Section */}
        <section id="bonus" className="py-24 bg-white relative">
          <div className="max-w-6xl mx-auto px-4">
            <div className="rounded-[80px] p-10 md:p-24 border-[6px] border-red-600 relative bg-emerald-50/20 overflow-hidden shadow-[0_50px_100px_rgba(220,38,38,0.1)]">
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-red-50 to-transparent opacity-50" />
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 px-10 py-4 bg-red-600 text-white rounded-full text-sm font-black tracking-[0.4em] uppercase shadow-2xl z-30 ring-8 ring-white">
                {t.bonus.badge}
              </div>
              <div className="flex flex-col md:flex-row gap-20 items-center relative z-10">
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <h2 className="text-4xl md:text-7xl font-black mb-10 text-emerald-950 tracking-tighter">{t.bonus.title}</h2>
                  <p className="text-2xl text-stone-600 mb-12 font-medium leading-relaxed">{t.bonus.desc}</p>
                  <ul className="space-y-6 mb-16 inline-block md:block">
                    {t.bonus.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-5">
                        <div className="w-8 h-8 rounded-xl bg-red-600 flex items-center justify-center shadow-lg">
                           <CheckIcon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-emerald-950 font-black text-xl tracking-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-amber-100 border-l-8 border-amber-500 p-6 mb-12 rounded-r-3xl">
                    <p className="text-amber-900 font-black uppercase text-lg tracking-widest">
                      🔥 {t.bonus.limit}
                    </p>
                  </div>
                  <a 
                    href={checkoutUrl}
                    className="inline-block w-full px-12 py-7 bg-red-600 text-yellow-300 text-3xl font-black rounded-full text-center hover:bg-red-700 transition-all shadow-[0_20px_60px_rgba(220,38,38,0.4)] transform hover:-translate-y-2 uppercase tracking-widest"
                  >
                    {t.bonus.cta}
                  </a>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="aspect-square bg-white rounded-[60px] shadow-[0_60px_120px_rgba(0,0,0,0.15)] flex items-center justify-center p-16 border-4 border-emerald-100 transform -rotate-2 hover:rotate-0 transition-all duration-500">
                     <div className="w-full h-full border-[12px] border-emerald-950 rounded-[40px] bg-emerald-50 shadow-inner relative overflow-hidden flex flex-col justify-end p-12">
                        <div className="absolute inset-0 opacity-40">
                           <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=500" className="w-full h-full object-cover" alt="Morning" />
                        </div>
                        <div className="relative z-10">
                           <h4 className="text-4xl font-serif font-black text-emerald-950">{t.bonus.title}</h4>
                           <div className="w-32 h-3 bg-red-600 mt-6 rounded-full"></div>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-emerald-950 text-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-7xl font-black text-center mb-24 tracking-tighter">{t.faq.title}</h2>
            <div className="space-y-10">
              {t.faq.questions.map((item, i) => (
                <div key={i} className="bg-white/5 p-10 rounded-[40px] border-2 border-white/10 hover:border-amber-400 transition-all group">
                  <h3 className="text-2xl font-black mb-6 flex items-start gap-6 text-white group-hover:text-amber-400 transition-colors">
                    <span className="text-red-600 font-black">Q:</span> {item.q}
                  </h3>
                  <p className="opacity-70 pl-12 leading-relaxed text-xl font-medium">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section id="cta" className="py-24 bg-white overflow-hidden relative">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex justify-center mb-16">
              <div className="w-40 h-40 rounded-[3rem] bg-emerald-50 flex items-center justify-center shadow-2xl border-4 border-emerald-100 transform rotate-12">
                <ShieldIcon className="w-20 h-20 text-emerald-900" />
              </div>
            </div>
            <h2 className="text-4xl md:text-8xl font-black mb-10 text-emerald-950 tracking-tighter leading-none">{t.guarantee.title}</h2>
            <p className="text-2xl text-stone-600 mb-16 leading-relaxed max-w-2xl mx-auto font-medium">{t.guarantee.desc}</p>
            
            {/* The Buy Box - UPDATED PRICING & COUNTDOWN */}
            <div className="bg-white p-12 md:p-20 rounded-[80px] shadow-[0_100px_150px_rgba(6,78,59,0.2)] border-4 border-emerald-50 max-w-2xl mx-auto mb-16 relative overflow-visible">
              <div className="absolute top-0 right-0 p-4 translate-x-1/4 -translate-y-1/3 z-20">
                <div className="w-48 h-48 bg-red-600 text-white rounded-full flex flex-col items-center justify-center rotate-12 shadow-[0_20px_50px_rgba(220,38,38,0.5)] border-[10px] border-white">
                  <span className="text-xs font-black leading-none uppercase tracking-widest mb-1">{lang === 'es' ? 'Oferta Especial' : 'Special Offer'}</span>
                  <div className="flex flex-col items-center">
                    <span className="text-xl font-black line-through opacity-60">$37</span>
                    <span className="text-6xl font-[950] leading-none mb-1 text-yellow-300">$8</span>
                  </div>
                  <span className="text-xs opacity-90 leading-none font-black tracking-widest">{lang === 'es' ? 'PRIMEROS 50' : 'FIRST 50'}</span>
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-[900] mb-8 text-emerald-950 uppercase tracking-[0.2em]">{lang === 'es' ? 'Acceso Vitalicio' : 'Lifetime Access'}</h3>
              
              {/* Internal Timer for urgency */}
              <div className="bg-emerald-50 rounded-3xl py-6 px-4 mb-10 border-2 border-emerald-100">
                <p className="text-emerald-900 font-black text-xs uppercase tracking-widest mb-3">
                  {lang === 'es' ? 'TIEMPO RESTANTE PARA EL PRECIO DE $8:' : 'TIME REMAINING FOR $8 PRICE:'}
                </p>
                <CountdownDisplay dark={true} />
              </div>

              <ul className="text-left space-y-6 mb-12">
                {t.product.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-5 group">
                    <div className="mt-1 bg-red-600 rounded-lg p-1 shadow-md transform group-hover:scale-110 transition-transform">
                       <CheckIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-emerald-950 font-black text-xl tracking-tight leading-tight">{item.title}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href={checkoutUrl}
                className="inline-block w-full max-w-sm mx-auto py-5 bg-red-600 text-yellow-300 text-xl font-black rounded-full hover:bg-red-700 transition-all shadow-[0_15px_40px_rgba(220,38,38,0.4)] transform active:scale-95 ring-[8px] ring-red-50 uppercase tracking-widest text-center"
              >
                {t.hero.cta}
              </a>
              
              <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-40">
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-emerald-950">Secure Stripe Payment</span>
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-emerald-950">SSL Encryption</span>
              </div>
            </div>
            <p className="text-red-600 font-black text-2xl italic mb-24 tracking-[0.3em] uppercase animate-pulse">{t.guarantee.badgeText}</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-24 bg-emerald-950 text-emerald-50 border-t-8 border-red-600 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-900/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <p className="font-serif text-4xl font-[900] mb-12 tracking-tighter text-amber-400">
            {lang === 'es' ? 'Plan Nórdico' : 'Nordic Plan'}
            <span className="text-red-600">.</span>
          </p>
          <div className="flex flex-wrap justify-center gap-12 mb-16 text-sm font-black uppercase tracking-[0.4em] text-emerald-400">
            <a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-red-500 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-red-500 transition-colors">Contact Support</a>
          </div>
          <p className="text-sm opacity-30 mb-8 font-bold tracking-widest">{t.footer.rights}</p>
          <div className="h-0.5 w-24 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xs opacity-40 max-w-2xl mx-auto leading-relaxed italic font-medium">
            {t.footer.disclaimer}
          </p>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 z-[100] bg-white/90 backdrop-blur-xl border-t-4 border-red-600 shadow-2xl">
        <a 
          href={checkoutUrl}
          className="block w-full py-5 bg-red-600 text-yellow-300 text-xl font-black rounded-full text-center shadow-2xl active:scale-95 transition-all uppercase tracking-widest"
        >
          {t.hero.cta}
        </a>
      </div>
    </div>
  );
};

export default App;
