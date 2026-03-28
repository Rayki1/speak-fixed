import{r as n,j as e,L as Y}from"./vendor-react-DyGG4kxI.js";import{d as G,b as F,R as O}from"./index-z4R9Fw8x.js";function X({open:o,title:A="Round Complete",score:g=0,practiced:u=0,difficulty:l="medium",theme:E="default",onReplay:T,onNextLevel:h,exitTo:M="/oneplayer"}){const[s,c]=n.useState(0),[P,k]=n.useState(!1),[N,v]=n.useState({unlocked:!1,isNew:!1}),w=n.useRef(null),i=n.useRef(null),p=n.useRef(null),_={pronunciation:{icon:"🎤",glow:"bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.14),transparent_36%)]",accent:"from-violet-500 via-fuchsia-500 to-pink-500"},spelling:{icon:"✏️",glow:"bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.12),transparent_36%)]",accent:"from-blue-500 via-violet-500 to-pink-500"},vocabulary:{icon:"📖",glow:"bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.2),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.12),transparent_36%)]",accent:"from-emerald-500 via-cyan-500 to-teal-500"},scramble:{icon:"🔀",glow:"bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.14),transparent_36%)]",accent:"from-violet-500 via-indigo-500 to-sky-500"},phrase:{icon:"💬",glow:"bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.14),transparent_36%)]",accent:"from-amber-500 via-orange-500 to-yellow-500"},vocabmatch:{icon:"🔗",glow:"bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.2),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_36%)]",accent:"from-cyan-500 via-sky-500 to-blue-500"},default:{icon:"🏆",glow:"bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.12),transparent_36%)]",accent:"from-violet-500 via-fuchsia-500 to-yellow-400"}}[E]||{icon:"🏆",glow:"bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.12),transparent_36%)]",accent:"from-violet-500 via-fuchsia-500 to-yellow-400"},a=n.useMemo(()=>G(g,u,l),[g,u,l]),L=a.label==="LEGENDARY!"||a.label==="PRO!",f=n.useMemo(()=>F(l),[l]),j=f?`Go ${f.toUpperCase()}`:"Next Level",z=n.useMemo(()=>Array.from({length:14},(t,r)=>({id:r,left:`${8+Math.random()*84}%`,top:`${10+Math.random()*70}%`,size:`${6+Math.random()*8}px`,delay:`${Math.random()*2.4}s`,duration:`${2.8+Math.random()*2.6}s`,opacity:`${.25+Math.random()*.45}`})),[]),d=(t,r,S,B="triangle",C=.018)=>{if(typeof window>"u")return;const R=window.AudioContext||window.webkitAudioContext;if(R)try{w.current||(w.current=new R);const m=w.current;m.state==="suspended"&&m.resume().catch(()=>{});const x=m.createOscillator(),b=m.createGain();x.type=B,x.frequency.value=t,x.connect(b),b.connect(m.destination);const y=m.currentTime+r/1e3,$=y+S/1e3;b.gain.setValueAtTime(1e-4,y),b.gain.exponentialRampToValueAtTime(C,y+.02),b.gain.exponentialRampToValueAtTime(1e-4,$),x.start(y),x.stop($)}catch{}};if(n.useEffect(()=>{if(!o)return;c(0);const t=[setTimeout(()=>c(1),500),setTimeout(()=>c(2),1e3),setTimeout(()=>c(3),1500),setTimeout(()=>c(4),2500),setTimeout(()=>c(5),3e3)];return()=>t.forEach(r=>clearTimeout(r))},[o,g,u,l]),n.useEffect(()=>{if(!o||l!=="hard"){v({unlocked:!1,isNew:!1});return}try{const t="speaks-hard-cleared",r=window.localStorage.getItem(t)==="1";r||window.localStorage.setItem(t,"1"),v({unlocked:!0,isNew:!r})}catch{v({unlocked:!0,isNew:!1})}},[o,l]),n.useEffect(()=>{if(o)try{i.current||(i.current=new Audio("/mc.m4a")),p.current||(p.current=new Audio("/maney.m4a")),i.current.volume=.22,p.current.volume=a.label==="LEGENDARY!"?.42:a.label==="PRO!"?.34:.24;const t=[setTimeout(()=>{i.current.currentTime=0,i.current.play().catch(()=>{})},980),setTimeout(()=>{p.current.currentTime=0,p.current.play().catch(()=>{})},2420)];return d(420,480,110,"sine",.01),d(620,980,120,"triangle",.014),d(760,1500,160,"triangle",.018),a.label==="LEGENDARY!"?(d(940,2420,220,"sawtooth",.02),d(1180,2540,240,"triangle",.018)):a.label==="PRO!"&&d(860,2440,180,"triangle",.016),()=>t.forEach(r=>clearTimeout(r))}catch{return}},[o,a.label]),!o)return null;const D=()=>{if(!(!h||!f)){k(!0);try{i.current&&(i.current.currentTime=0,i.current.volume=.28,i.current.play().catch(()=>{}))}catch{}setTimeout(()=>{h(),k(!1)},950)}};return e.jsxs("div",{className:`fixed inset-0 z-[120] flex items-center justify-center px-3 sm:px-4 py-4 transition-all duration-700 ${s>=1?"bg-[radial-gradient(circle_at_top,rgba(30,41,59,0.55),rgba(2,6,23,0.9)_60%)] backdrop-blur-sm":"bg-black/0"}`,children:[P&&e.jsx("div",{className:"absolute inset-0 z-[200] flex items-center justify-center bg-black/85 backdrop-blur-sm",children:e.jsxs("div",{className:"text-center px-6 py-8 rounded-3xl border border-cyan-300/35 bg-cyan-500/10 shadow-[0_0_45px_rgba(34,211,238,0.25)] transition-all",children:[e.jsx("p",{className:"text-[10px] uppercase tracking-[0.35em] text-cyan-200/80",children:"Level Up"}),e.jsx("p",{className:"mt-3 text-3xl md:text-4xl font-black text-cyan-100 transition-all advancing-pulse",children:j}),e.jsx("div",{className:"mt-4 h-1 w-56 max-w-[70vw] rounded-full bg-cyan-300/20 overflow-hidden",children:e.jsx("span",{className:"block h-full advancing-bar"})})]})}),e.jsxs("div",{className:"victory-shell relative w-full max-w-3xl overflow-hidden rounded-[30px] border border-white/15 bg-[#090c1a]/97 shadow-[0_24px_120px_rgba(0,0,0,0.72)]","data-phase":s,children:[e.jsx("div",{className:`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${_.accent} opacity-95`}),e.jsx("div",{className:`absolute inset-0 ${_.glow}`}),e.jsx("div",{className:"absolute inset-0 victory-sheen"}),e.jsx("div",{className:"absolute inset-0 victory-noise"}),e.jsx("div",{className:"absolute -top-24 -left-16 h-64 w-64 rounded-full bg-violet-600/20 blur-[110px] pointer-events-none"}),e.jsx("div",{className:"absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-fuchsia-600/20 blur-[120px] pointer-events-none"}),e.jsx("div",{className:"pointer-events-none absolute inset-0",children:z.map(t=>e.jsx("span",{className:"victory-spark",style:{left:t.left,top:t.top,width:t.size,height:t.size,opacity:t.opacity,animationDelay:t.delay,"--sparkle-duration":t.duration}},t.id))}),L&&s>=4&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"pointer-events-none absolute inset-0 overflow-hidden",children:[Array.from({length:a.label==="LEGENDARY!"?26:16}).map((t,r)=>e.jsx("span",{className:"victory-confetti",style:{left:`${8+Math.random()*16}%`,bottom:`${-6+Math.random()*8}%`,animationDelay:`${r*55}ms`}},`left-${r}`)),Array.from({length:a.label==="LEGENDARY!"?26:16}).map((t,r)=>e.jsx("span",{className:"victory-confetti",style:{right:`${8+Math.random()*16}%`,bottom:`${-6+Math.random()*8}%`,animationDelay:`${r*55}ms`}},`right-${r}`))]})}),e.jsxs("div",{className:"relative px-5 py-7 sm:px-7 sm:py-8 md:px-10 md:py-10",children:[e.jsxs("div",{className:`text-center transition-all duration-700 ${s>=2?"translate-y-0 opacity-100":"-translate-y-8 opacity-0"}`,children:[e.jsx("p",{className:"text-[10px] uppercase tracking-[0.42em] text-white/40",children:"Victory Banner"}),e.jsx("h2",{className:"mt-4 text-3xl sm:text-4xl md:text-5xl font-black tracking-[0.09em] text-white drop-shadow-[0_4px_24px_rgba(255,255,255,0.2)]",children:"LEVEL COMPLETE!"}),e.jsx("p",{className:"mt-3 text-white/78 text-sm md:text-base font-medium",children:A})]}),e.jsxs("div",{className:`mt-8 flex flex-col items-center transition-all duration-700 ${s>=2?"scale-100 opacity-100":"scale-90 opacity-0"}`,children:[e.jsxs("div",{className:`relative flex h-28 w-28 items-center justify-center rounded-full border text-5xl ${a.accent==="gold"?"border-yellow-300/45 bg-gradient-to-br from-yellow-300/20 to-orange-500/20 text-yellow-200 legendary-medal":a.accent==="silver"?"border-slate-300/45 bg-gradient-to-br from-slate-300/18 to-slate-500/20 text-slate-100 pro-medal":a.accent==="good"?"border-cyan-300/35 bg-cyan-500/10 text-cyan-200 good-medal":"border-orange-300/35 bg-orange-500/10 text-orange-100 retry-medal"}`,children:[a.label==="LEGENDARY!"&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"legendary-burst-ring"}),e.jsx("span",{className:"legendary-burst-rays"})]}),e.jsx("span",{className:"absolute -top-3 -right-3 text-xl drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]",children:_.icon}),a.icon]}),e.jsx("p",{className:`mt-4 text-xl md:text-3xl font-black tracking-[0.18em] ${a.accent==="gold"?"text-yellow-200":a.accent==="silver"?"text-slate-100":a.accent==="good"?"text-cyan-200":"text-orange-200"}`,children:a.label}),e.jsxs("p",{className:"mt-2 text-[11px] uppercase tracking-[0.2em] text-white/65",children:["Performance ",a.percent,"%"]}),N.unlocked&&e.jsxs("div",{className:"mt-4 rounded-2xl border border-amber-300/35 bg-amber-500/10 px-4 py-3 text-center shadow-[0_0_22px_rgba(251,191,36,0.2)]",children:[e.jsx("p",{className:"text-[10px] uppercase tracking-[0.3em] text-amber-200/80",children:"Hard Clear Badge"}),e.jsx("p",{className:"mt-1 text-lg font-black text-amber-100",children:"🏅 HARD CLEARED"}),e.jsx("p",{className:"text-[10px] text-amber-100/70 uppercase tracking-[0.2em]",children:N.isNew?"New Unlock":"Already Unlocked"})]})]}),e.jsx("div",{className:`mt-8 transition-all duration-700 ${s>=3?"translate-y-0 opacity-100":"translate-y-6 opacity-0"}`,children:e.jsxs("div",{className:"score-panel rounded-[24px] border border-white/15 bg-white/[0.06] px-4 py-5 sm:px-5 sm:py-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",children:[e.jsx("p",{className:"text-[10px] uppercase tracking-[0.3em] text-white/55",children:"Total Score"}),e.jsx(O,{end:g,duration:1200,startImmediately:s>=3,triggerKey:`${o}-${g}-${s}`,className:"mt-2 inline-block text-5xl md:text-6xl font-black text-yellow-300 score-roll drop-shadow-[0_3px_16px_rgba(250,204,21,0.35)]"}),e.jsxs("div",{className:"mt-4 grid grid-cols-2 gap-2.5 sm:gap-3",children:[e.jsxs("div",{className:"rounded-2xl border border-white/15 bg-black/25 px-3 py-3 sm:px-4",children:[e.jsx("p",{className:"text-[10px] uppercase tracking-[0.2em] text-white/55",children:"Practiced"}),e.jsx("p",{className:"mt-1 text-2xl font-black text-cyan-300 tabular-nums",children:u})]}),e.jsxs("div",{className:"rounded-2xl border border-white/15 bg-black/25 px-3 py-3 sm:px-4",children:[e.jsx("p",{className:"text-[10px] uppercase tracking-[0.2em] text-white/55",children:"Rank"}),e.jsx("p",{className:"mt-1 text-2xl font-black text-white",children:a.label.replace("!","")})]})]})]})}),e.jsxs("div",{className:`mt-7 grid grid-cols-1 ${h?"sm:grid-cols-3":"sm:grid-cols-2"} gap-2.5 sm:gap-3 transition-all duration-700 ${s>=5?"translate-y-0 opacity-100":"translate-y-8 opacity-0"}`,children:[e.jsx("button",{onClick:T,className:"relative h-12 sm:h-13 overflow-hidden rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 text-white font-black tracking-[0.16em] shadow-[0_14px_42px_rgba(168,85,247,0.35)] transition-all hover:-translate-y-1 hover:shadow-[0_18px_56px_rgba(168,85,247,0.5)] active:scale-95 shine-sweep",children:"Play Again"}),h&&f&&e.jsx("button",{onClick:D,className:"h-12 sm:h-13 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-500 text-white font-black tracking-[0.16em] shadow-[0_14px_42px_rgba(34,211,238,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_18px_56px_rgba(34,211,238,0.45)] active:scale-95",children:j}),e.jsx(Y,{to:M,className:"h-12 sm:h-13 rounded-2xl border border-white/20 bg-white/8 hover:bg-white/14 text-white font-bold tracking-[0.16em] transition-all hover:-translate-y-1 hover:border-white/35 active:scale-95 flex items-center justify-center",children:"Back"})]})]})]}),e.jsx("style",{children:`
        @keyframes medalSpin {
          0% { transform: scale(0.8) rotate(-12deg); opacity: 0; }
          40% { transform: scale(1.08) rotate(8deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }

        @keyframes medalPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.04); }
        }

        @keyframes legendaryBurst {
          0% { transform: scale(0.6); opacity: 0; }
          40% { transform: scale(1.15); opacity: 0.9; }
          100% { transform: scale(1.35); opacity: 0; }
        }

        @keyframes legendaryRays {
          0% { transform: rotate(0deg) scale(0.9); opacity: 0; }
          30% { opacity: 0.85; }
          100% { transform: rotate(26deg) scale(1.08); opacity: 0; }
        }

        @keyframes medalBounce {
          0% { transform: translateY(12px) scale(0.9); opacity: 0; }
          45% { transform: translateY(-6px) scale(1.06); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }

        @keyframes confettiRain {
          0% { transform: translate3d(0, 0, 0) rotate(0deg); opacity: 0; }
          15% { opacity: 1; }
          100% { transform: translate3d(var(--drift, 0px), -520px, 0) rotate(420deg); opacity: 0; }
        }

        @keyframes shineSweep {
          0%, 68%, 100% { transform: translateX(-130%); opacity: 0; }
          78% { opacity: 0.65; }
          92% { transform: translateX(130%); opacity: 0; }
        }

        @keyframes scorePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.06); }
        }

        @keyframes advancingPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes advancingBar {
          0% { width: 0%; }
          100% { width: 100%; }
        }

        @keyframes panelFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        @keyframes sheenMove {
          0% { transform: translateX(-30%); opacity: 0.2; }
          50% { opacity: 0.5; }
          100% { transform: translateX(30%); opacity: 0.2; }
        }

        @keyframes sparkleFloat {
          0% { transform: translate3d(0, 8px, 0) scale(0.7); opacity: 0; }
          30% { opacity: 0.9; }
          100% { transform: translate3d(0, -18px, 0) scale(1.15); opacity: 0; }
        }

        .legendary-medal { animation: medalSpin 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards, medalPulse 2.2s ease-in-out infinite 0.9s; box-shadow: 0 0 45px rgba(250, 204, 21, 0.28); }
        .legendary-burst-ring {
          position: absolute;
          inset: -12px;
          border: 2px solid rgba(250, 204, 21, 0.65);
          border-radius: 999px;
          animation: legendaryBurst 1.1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .legendary-burst-rays {
          position: absolute;
          inset: -26px;
          border-radius: 999px;
          background: conic-gradient(from 0deg, rgba(250,204,21,0) 0deg, rgba(250,204,21,0.75) 24deg, rgba(250,204,21,0) 52deg, rgba(253,224,71,0.8) 80deg, rgba(250,204,21,0) 112deg, rgba(255,255,255,0.55) 140deg, rgba(250,204,21,0) 180deg, rgba(250,204,21,0.75) 220deg, rgba(250,204,21,0) 252deg, rgba(253,224,71,0.8) 290deg, rgba(250,204,21,0) 322deg, rgba(255,255,255,0.6) 350deg);
          filter: blur(10px);
          animation: legendaryRays 1.2s ease-out forwards;
        }
        .pro-medal { animation: medalSpin 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards, medalPulse 2.5s ease-in-out infinite 0.8s; box-shadow: 0 0 40px rgba(226, 232, 240, 0.2); }
        .good-medal { animation: medalBounce 0.75s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .retry-medal { animation: medalBounce 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .victory-confetti {
          position: absolute;
          width: 11px;
          height: 16px;
          border-radius: 3px;
          background: linear-gradient(180deg, #fde68a, #f59e0b);
          opacity: 0;
          --drift: 0px;
          animation: confettiRain 3.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .victory-confetti:nth-child(3n) { background: linear-gradient(180deg, #f9a8d4, #ec4899); --drift: 55px; }
        .victory-confetti:nth-child(3n+1) { background: linear-gradient(180deg, #93c5fd, #22d3ee); --drift: -48px; }
        .score-roll { animation: scorePulse 1.2s ease-in-out infinite; }
        .advancing-pulse { animation: advancingPulse 0.6s ease-in-out infinite; }
        .advancing-bar {
          background: linear-gradient(90deg, #22d3ee, #38bdf8, #60a5fa);
          animation: advancingBar 0.95s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .victory-shell { animation: panelFloat 9s ease-in-out infinite; }
        .victory-sheen {
          background: linear-gradient(120deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02), rgba(255,255,255,0.08));
          mix-blend-mode: screen;
          opacity: 0.28;
          animation: sheenMove 7s ease-in-out infinite;
        }
        .victory-noise {
          background-image: radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 4px 4px;
          opacity: 0.06;
        }
        .victory-spark {
          position: absolute;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255,255,255,0.95), rgba(255,255,255,0.2));
          box-shadow: 0 0 18px rgba(255,255,255,0.35);
          animation: sparkleFloat var(--sparkle-duration, 3.4s) ease-in-out infinite;
        }
        .score-panel {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .score-panel:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08);
        }
        .shine-sweep::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(110deg, transparent 15%, rgba(255,255,255,0.42) 45%, transparent 70%);
          transform: translateX(-130%);
          animation: shineSweep 3s ease-in-out infinite;
        }

        @media (max-width: 640px) {
          .victory-shell {
            border-radius: 24px;
            animation: none;
          }
          .victory-sheen {
            opacity: 0.18;
          }
          .victory-noise {
            opacity: 0.04;
          }
        }
      `})]})}export{X as G};
