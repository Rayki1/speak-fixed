import{r as s,j as e}from"./vendor-react-DyGG4kxI.js";import{a as q,g as G}from"./index-z4R9Fw8x.js";function J({time:g,points:j,gameState:y,difficulty:N,showTimer:x=!0,scoreFx:l=null,topBracketStreak:w=0}){const S=()=>{if(typeof window>"u")return"balanced";const t=Number(window.navigator?.deviceMemory||0),r=Number(window.navigator?.hardwareConcurrency||0);return t&&t<=4||r&&r<=4?"lite":"balanced"},k=()=>{if(typeof window>"u")return{intensity:"balanced",audioEnabled:!0,cameraShakeEnabled:!0,debugEnabled:!1};const t={intensity:S(),audioEnabled:!0,cameraShakeEnabled:!0,debugEnabled:!1};try{const r=window.localStorage.getItem("speaks-hud-settings");if(!r)return t;const o=JSON.parse(r);return{intensity:["lite","balanced","extreme"].includes(o?.intensity)?o.intensity:t.intensity,audioEnabled:o?.audioEnabled!==!1,cameraShakeEnabled:o?.cameraShakeEnabled!==!1,debugEnabled:!!o?.debugEnabled}}catch{return t}},[n,m]=s.useState(()=>k()),[M,O]=s.useState(!1);s.useEffect(()=>{typeof window>"u"||window.localStorage.setItem("speaks-hud-settings",JSON.stringify(n))},[n]);const R=t=>{const r=Math.floor(t/60),o=t%60;return`${String(r).padStart(2,"0")}:${String(o).padStart(2,"0")}`},C=G(N),T=Math.max(0,Number.isFinite(g)?g:0),c=C>0?T/C:0,I=c>.66?"text-emerald-300":c>.33?"text-amber-300":"text-rose-400 animate-pulse",F=c>.66?"border-emerald-500/30":c>.33?"border-amber-500/30":"border-rose-500/35",V=c>.66?"text-emerald-300/70":c>.33?"text-amber-300/70":"text-rose-300/80",i=c>.6?"calm":c>.3?"hurry":"panic",Y=w>=3,[a,$]=s.useState(null),E=s.useRef(null),f=s.useRef(null),P=s.useRef(null),d=n.intensity==="lite"?{confettiCount:9,starsCount:5,vignetteOpacity:"rgba(0,0,0,0.4)",tickVolume:.75}:n.intensity==="extreme"?{confettiCount:28,starsCount:16,vignetteOpacity:"rgba(0,0,0,0.68)",tickVolume:1.15}:{confettiCount:18,starsCount:10,vignetteOpacity:"rgba(0,0,0,0.55)",tickVolume:1},z=s.useMemo(()=>a?a.tier===1?Array.from({length:d.confettiCount}).map((t,r)=>({id:`confetti-${r}`,x:Math.random()*100,y:Math.random()*100,r:Math.random()*140-70})):a.tier===2?Array.from({length:d.starsCount}).map((t,r)=>({id:`star-${r}`,x:35+Math.random()*30,y:40+Math.random()*20})):[]:[],[a,d.confettiCount,d.starsCount]),D=s.useMemo(()=>a?.points?Array.from({length:a.tier===1?8:a.tier===2?5:3}).map((t,r)=>({id:`trail-${r}`,left:48+Math.random()*8,top:42+r*5,delay:r*70})):[],[a]),_=(t=520,r=70,o="square",b=.015)=>{if(!n.audioEnabled||typeof window>"u")return;const A=window.AudioContext||window.webkitAudioContext;if(A)try{E.current||(E.current=new A);const p=E.current;p.state==="suspended"&&p.resume().catch(()=>{});const u=p.createOscillator(),h=p.createGain();u.type=o,u.frequency.value=t,h.gain.value=b,u.connect(h),h.connect(p.destination);const v=p.currentTime;h.gain.setValueAtTime(b,v),h.gain.exponentialRampToValueAtTime(1e-4,v+r/1e3),u.start(v),u.stop(v+r/1e3)}catch{}};s.useEffect(()=>{if(!l?.key||l.key===P.current)return;P.current=l.key,$({...l}),l.multiplier>1&&_(920,90,"triangle",.02);const t=setTimeout(()=>$(null),q(l.tier));return()=>clearTimeout(t)},[l,n.audioEnabled]),s.useEffect(()=>{if(!x)return;const t=i==="calm"?1100:i==="hurry"?700:340,r=i==="calm"?430:i==="hurry"?520:620,b=(i==="calm"?.008:i==="hurry"?.012:.016)*d.tickVolume;if(f.current&&clearInterval(f.current),!!n.audioEnabled)return f.current=setInterval(()=>{_(r,45,"square",b)},t),()=>{f.current&&(clearInterval(f.current),f.current=null)}},[i,x,n.audioEnabled,d.tickVolume]);const B=i==="calm"?"Calm":i==="hurry"?"Hurry":"Panic";return e.jsxs(e.Fragment,{children:[x&&i==="panic"&&e.jsx("div",{className:"pointer-events-none fixed inset-0 z-40",style:{background:`radial-gradient(circle at center, rgba(0,0,0,0) 35%, ${d.vignetteOpacity} 100%)`}}),a&&e.jsxs("div",{className:`pointer-events-none fixed inset-0 z-[70] flex items-center justify-center ${a.tier===1&&n.cameraShakeEnabled?"fx-camera-shake":""}`,children:[a.tier===1&&e.jsx("div",{className:"absolute inset-0 overflow-hidden",children:z.map(t=>e.jsx("span",{className:"fx-confetti",style:{left:`${t.x}%`,top:`${t.y}%`,transform:`translate(-50%, -50%) rotate(${t.r}deg)`}},t.id))}),a.tier===2&&e.jsx("div",{className:"absolute inset-0 overflow-hidden",children:z.map(t=>e.jsx("span",{className:"fx-star",style:{left:`${t.x}%`,top:`${t.y}%`},children:"✦"},t.id))}),e.jsxs("div",{className:`arcade-title px-5 py-2 rounded-2xl border text-2xl sm:text-4xl font-black tracking-[0.18em] ${a.tier===1?"fx-tier1 border-yellow-300/70 text-yellow-200":a.tier===2?"fx-tier2 border-cyan-300/70 text-cyan-200":"fx-tier3 border-orange-300/70 text-orange-200"}`,children:[a.callout||(a.tier===1?"PERFECT!":a.tier===2?"GREAT!":"SAFE!"),a.tier===3&&e.jsx("span",{className:"ml-2 inline-block text-xl align-middle",children:"💧"})]}),a.points?e.jsxs("div",{className:`absolute mt-24 text-lg sm:text-2xl font-black tracking-[0.14em] ${a.tier===1?"fx-points-tier1 text-yellow-300":a.tier===2?"fx-points-tier2 text-cyan-200":"fx-points-tier3 text-orange-200"}`,children:["+",a.points]}):null,D.map(t=>e.jsx("span",{className:"fx-trail",style:{left:`${t.left}%`,top:`${t.top}%`,animationDelay:`${t.delay}ms`}},t.id))]}),e.jsxs("div",{className:"fixed top-[72px] right-3 sm:right-5 z-50 flex flex-col items-end gap-2 pointer-events-none",children:[e.jsxs("div",{className:"relative pointer-events-auto",children:[e.jsx("button",{onClick:()=>O(t=>!t),className:"rounded-xl border border-white/20 bg-black/70 px-2.5 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-white/75 shadow-lg transition hover:border-white/40 hover:text-white active:scale-95",children:"FX"}),M&&e.jsxs("div",{className:"absolute right-0 mt-2 w-52 rounded-2xl border border-white/15 bg-black/90 p-3 shadow-2xl backdrop-blur-xl",children:[e.jsx("p",{className:"text-[9px] uppercase tracking-[0.25em] text-white/40",children:"Effects"}),e.jsx("div",{className:"mt-2 flex gap-1",children:[{key:"lite",label:"Lite"},{key:"balanced",label:"Balanced"},{key:"extreme",label:"Extreme"}].map(t=>e.jsx("button",{onClick:()=>m(r=>({...r,intensity:t.key})),className:`flex-1 rounded-lg border px-2 py-1 text-[10px] font-bold transition active:scale-95 ${n.intensity===t.key?"border-cyan-300/70 bg-cyan-500/20 text-cyan-100":"border-white/15 bg-white/5 text-white/70 hover:bg-white/10"}`,children:t.label},t.key))}),e.jsxs("div",{className:"mt-3 space-y-1.5",children:[e.jsxs("button",{onClick:()=>m(t=>({...t,audioEnabled:!t.audioEnabled})),className:"w-full rounded-lg border border-white/15 bg-white/5 px-2 py-1.5 text-left text-[10px] font-bold text-white/80 transition hover:bg-white/10",children:["Audio: ",n.audioEnabled?"On":"Off"]}),e.jsxs("button",{onClick:()=>m(t=>({...t,cameraShakeEnabled:!t.cameraShakeEnabled})),className:"w-full rounded-lg border border-white/15 bg-white/5 px-2 py-1.5 text-left text-[10px] font-bold text-white/80 transition hover:bg-white/10",children:["Camera Shake: ",n.cameraShakeEnabled?"On":"Off"]}),e.jsxs("button",{onClick:()=>m(t=>({...t,debugEnabled:!t.debugEnabled})),className:"w-full rounded-lg border border-white/15 bg-white/5 px-2 py-1.5 text-left text-[10px] font-bold text-white/80 transition hover:bg-white/10",children:["Debug Panel: ",n.debugEnabled?"On":"Off"]})]})]})]}),e.jsxs("div",{className:"relative group pointer-events-auto",children:[e.jsx("div",{className:"absolute -inset-0.5 bg-gradient-to-r from-amber-500 via-yellow-300 to-orange-500 rounded-xl blur-sm opacity-45 group-hover:opacity-65 transition-opacity duration-300 animate-pulse"}),e.jsxs("div",{className:"relative bg-black/85 backdrop-blur-md border border-yellow-500/35 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl shadow-lg text-right min-w-[64px] sm:min-w-[80px]",children:[e.jsxs("span",{className:"text-[7px] sm:text-[8px] text-yellow-400/80 arcade-title tracking-[0.18em] flex items-center justify-end gap-0.5 leading-none mb-0.5",children:[e.jsx("span",{children:"✦"})," PTS ",e.jsx("span",{children:"✦"})]}),e.jsx("div",{className:`arcade-title text-xl sm:text-2xl font-black leading-none transition-all duration-300 ${y==="correct"?"text-lime-400 scale-110 drop-shadow-[0_0_10px_rgba(163,230,53,0.8)]":y==="incorrect"?"text-rose-400 drop-shadow-[0_0_10px_rgba(251,113,133,0.8)]":"bg-gradient-to-br from-yellow-200 via-amber-300 to-orange-400 bg-clip-text text-transparent"}`,children:j}),Y&&e.jsx("div",{className:"mt-1 text-[10px] font-black tracking-wider text-orange-300 drop-shadow-[0_0_8px_rgba(251,146,60,0.8)]",children:"🔥 x2"})]})]}),x&&e.jsx("div",{className:"relative pointer-events-auto",children:e.jsxs("div",{className:`relative bg-black/80 backdrop-blur-md border px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl shadow-lg text-right min-w-[64px] sm:min-w-[80px] ${F}`,children:[e.jsx("span",{className:`text-[7px] sm:text-[8px] arcade-title tracking-[0.15em] block leading-none mb-0.5 ${V}`,children:"TIME"}),e.jsx("div",{className:`arcade-title text-lg sm:text-xl font-black leading-none ${I}`,children:R(T)})]})}),n.debugEnabled&&e.jsxs("div",{className:"pointer-events-auto w-[175px] rounded-xl border border-fuchsia-400/35 bg-[#150926]/85 p-2 text-[10px] font-bold text-fuchsia-100 shadow-xl backdrop-blur-md",children:[e.jsx("p",{className:"text-[9px] uppercase tracking-[0.2em] text-fuchsia-300/80",children:"Debug HUD"}),e.jsxs("div",{className:"mt-1 space-y-0.5",children:[e.jsxs("div",{children:["Stage: ",B]}),e.jsxs("div",{children:["Ratio: ",Math.round(c*100),"%"]}),e.jsxs("div",{children:["Tier: ",a?.tier||"-"]}),e.jsxs("div",{children:["Callout: ",a?.callout||"-"]}),e.jsxs("div",{children:["Combo: ",Y?"x2 active":"off"]}),e.jsxs("div",{children:["Streak: ",w]}),e.jsxs("div",{children:["FX: ",n.intensity]})]})]}),e.jsx("style",{children:`
          @keyframes fxTier1Pop {
            0% { transform: scale(0) translateY(0); opacity: 0; }
            15% { transform: scale(1.2) translateY(0); opacity: 1; }
            55% { transform: scale(1.28) translateY(-28px); opacity: 1; }
            100% { transform: scale(1.2) translateY(-54px); opacity: 0; }
          }
          @keyframes fxTier2Float {
            0% { transform: scale(0) rotate(-10deg) translateY(0); opacity: 0; }
            25% { transform: scale(1.15) rotate(-4deg) translateY(-4px); opacity: 1; }
            70% { transform: scale(1.22) rotate(8deg) translateY(-34px); opacity: 1; }
            100% { transform: scale(1.14) rotate(12deg) translateY(-50px); opacity: 0; }
          }
          @keyframes fxTier3Wobble {
            0% { transform: scale(0) translateY(10px); opacity: 0; }
            35% { transform: scale(1.14) translateY(-2px) rotate(-7deg); opacity: 1; }
            55% { transform: scale(1.06) translateY(0) rotate(7deg); opacity: 1; }
            100% { transform: scale(0.98) translateY(14px) rotate(0deg); opacity: 0; }
          }
          @keyframes fxCameraShake {
            0%, 100% { transform: translate(0, 0); }
            10% { transform: translate(-5px, 1px); }
            20% { transform: translate(5px, -1px); }
            30% { transform: translate(-4px, 1px); }
            40% { transform: translate(4px, -1px); }
            50% { transform: translate(-3px, 1px); }
            60% { transform: translate(3px, -1px); }
            70% { transform: translate(-2px, 0); }
            80% { transform: translate(2px, 0); }
            90% { transform: translate(-1px, 0); }
          }
          @keyframes fxConfetti {
            0% { transform: translate(-50%, -50%) scale(0.4); opacity: 1; }
            100% { transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) scale(0.9); opacity: 0; }
          }
          @keyframes fxStarTwinkle {
            0% { transform: scale(0.2); opacity: 0; }
            30% { opacity: 1; }
            100% { transform: scale(1.1); opacity: 0; }
          }
          @keyframes fxPointTrail {
            0% { transform: scale(0.3) translateY(0); opacity: 0; }
            35% { opacity: 1; }
            100% { transform: scale(1) translateY(-34px); opacity: 0; }
          }
          @keyframes fxPointFloatTier1 {
            0% { transform: scale(0.8) translateY(0); opacity: 0; }
            20% { transform: scale(1.08) translateY(-6px); opacity: 1; }
            70% { transform: scale(1.12) translateY(-34px); opacity: 1; }
            100% { transform: scale(1) translateY(-62px); opacity: 0; }
          }
          @keyframes fxPointFloatTier2 {
            0% { transform: scale(0.8) translateY(0); opacity: 0; }
            30% { transform: scale(1.02) translateY(-10px); opacity: 1; }
            100% { transform: scale(1) translateY(-42px); opacity: 0; }
          }
          @keyframes fxPointFloatTier3 {
            0% { transform: scale(0.75) translateY(0); opacity: 0; }
            35% { transform: scale(1) translateY(-6px); opacity: 1; }
            100% { transform: scale(0.96) translateY(18px); opacity: 0; }
          }
          .fx-tier1 { animation: fxTier1Pop 2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; background: rgba(65, 45, 0, 0.45); box-shadow: 0 0 42px rgba(250, 204, 21, 0.5); text-shadow: 0 0 18px rgba(250, 204, 21, 0.85); }
          .fx-tier2 { animation: fxTier2Float 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards; background: rgba(7, 39, 52, 0.45); box-shadow: 0 0 28px rgba(34, 211, 238, 0.38); }
          .fx-tier3 { animation: fxTier3Wobble 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; background: rgba(57, 33, 8, 0.45); box-shadow: 0 0 22px rgba(251, 146, 60, 0.35); }
          .fx-camera-shake { animation: fxCameraShake 1.4s ease-in-out; }
          .fx-confetti {
            position: absolute;
            width: 10px;
            height: 10px;
            border-radius: 2px;
            background: linear-gradient(135deg, #fde047, #f59e0b);
            --dx: 0px;
            --dy: 0px;
            animation: fxConfetti 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }
          .fx-confetti:nth-child(odd) { --dx: 80px; --dy: -90px; }
          .fx-confetti:nth-child(even) { --dx: -80px; --dy: -90px; }
          .fx-star {
            position: absolute;
            color: #67e8f9;
            font-size: 14px;
            animation: fxStarTwinkle 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
            text-shadow: 0 0 10px rgba(103, 232, 249, 0.9);
          }
          .fx-trail {
            position: absolute;
            width: 7px;
            height: 7px;
            border-radius: 999px;
            background: radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(250,204,21,0.75) 45%, rgba(250,204,21,0) 100%);
            animation: fxPointTrail 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
            opacity: 0;
          }
          .fx-points-tier1 { animation: fxPointFloatTier1 2s cubic-bezier(0.23, 1, 0.32, 1) forwards; text-shadow: 0 0 14px rgba(250, 204, 21, 0.7); }
          .fx-points-tier2 { animation: fxPointFloatTier2 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
          .fx-points-tier3 { animation: fxPointFloatTier3 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        `})]})]})}function U({open:g,icon:j="🪙",title:y,description:N,cost:x,inventoryCount:l=0,confirmLabel:w="Purchase",confirmDisabled:S=!1,helperText:k=null,onClose:n,onConfirm:m}){return g?e.jsxs("div",{className:"fixed inset-0 z-[120] flex items-center justify-center bg-black/75 backdrop-blur-md px-4",children:[e.jsxs("div",{className:"relative w-full max-w-md overflow-hidden rounded-[30px] border border-white/10 bg-[#12121e]/95 shadow-[0_24px_90px_rgba(0,0,0,0.6)] animate-in fade-in zoom-in-95",children:[e.jsx("div",{className:"absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400"}),e.jsx("div",{className:"absolute -top-20 -left-8 h-48 w-48 rounded-full bg-pink-600/20 blur-[90px] pointer-events-none"}),e.jsx("div",{className:"absolute -bottom-24 -right-8 h-52 w-52 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none"}),e.jsxs("div",{className:"relative p-6 md:p-7",children:[e.jsx("div",{className:"mb-4 flex justify-center",children:e.jsx("div",{className:"flex h-16 w-16 items-center justify-center rounded-full border border-yellow-400/30 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 text-3xl shadow-[0_0_35px_rgba(250,204,21,0.18)]",children:j})}),e.jsx("h2",{className:"text-center text-2xl md:text-3xl font-black tracking-wide text-white",children:y}),e.jsx("p",{className:"mt-3 text-center text-sm md:text-base leading-relaxed text-white/65",children:N}),e.jsxs("div",{className:"mt-5 grid grid-cols-2 gap-3",children:[e.jsxs("div",{className:"rounded-2xl border border-yellow-500/20 bg-yellow-500/10 px-4 py-3 text-center",children:[e.jsx("p",{className:"text-[10px] uppercase tracking-[0.3em] text-yellow-300/70 font-bold",children:"Cost"}),e.jsxs("p",{className:"mt-1 text-2xl font-black text-yellow-400",children:[x," ",e.jsx("span",{className:"text-lg",children:"🪙"})]})]}),e.jsxs("div",{className:"rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-3 text-center",children:[e.jsx("p",{className:"text-[10px] uppercase tracking-[0.3em] text-cyan-300/70 font-bold",children:"Stock"}),e.jsx("p",{className:"mt-1 text-2xl font-black text-cyan-300",children:l})]})]}),k&&e.jsx("div",{className:"mt-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-xs md:text-sm text-white/70",children:k}),e.jsxs("div",{className:"mt-6 grid grid-cols-2 gap-3",children:[e.jsx("button",{onClick:n,className:"h-12 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold transition-all active:scale-95",children:"Cancel"}),e.jsx("button",{onClick:m,disabled:S,className:"h-12 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:from-slate-700 disabled:to-slate-700 disabled:text-white/50 text-white font-black shadow-lg shadow-purple-900/30 transition-all active:scale-95 disabled:cursor-not-allowed",children:w})]})]})]}),e.jsx("style",{children:`
        .animate-in {
          animation-duration: 0.35s;
          animation-fill-mode: both;
        }
        .fade-in { animation-name: fadeIn; }
        .zoom-in-95 { animation-name: zoomIn95; }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes zoomIn95 {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `})]}):null}export{U as A,J as G};
