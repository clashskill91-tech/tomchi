export default function Hero() {
  return (
    <>
<div className="hero nd"><canvas id="hero" aria-hidden="true"></canvas>
<div><div className="sub">O‘zbekiston suv kelajagi</div><h1>TOMCHI</h1><h2>Suvni anglash — kelajakni asrash.</h2>
<p className="mu">Suv resurslarini o‘rganing, turli ssenariylarni sinab ko‘ring va suvni tejash imkoniyatlarini kashf eting.</p>
<p><a className="btn" href="#xarita">Xaritani o‘rganish</a> <a className="btn o" href="#sim">Simulyatsiyani boshlash</a></p>
<p className="chips"><span>3D relyef xarita</span><span>Jonli simulyator</span><span>Ochiq metodologiya</span></p>
<p id="gl" className="mu" hidden>WebGL mavjud emas — 3D sahna o‘rniga oddiy fon ko‘rsatilmoqda.</p></div></div>
    </>
  );
}
