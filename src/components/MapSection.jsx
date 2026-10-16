export default function MapSection() {
  return (
    <>
<section id="xarita"><h2>Interaktiv xarita</h2>
<div className="grid c2"><div className="g">
<div style={{display:'flex',gap:'10px',flexWrap:'wrap',alignItems:'center',marginBottom:'8px'}}><label htmlFor="layer">Qatlam:</label>
<select id="layer"><option value="d">Model talabi (tanlangan ssenariy)</option><option value="s">Hisoblangan suv tejalishi</option><option value="a">Sug‘oriladigan maydon (namunaviy)</option></select>
<label htmlFor="regsel">Viloyat:</label><select id="regsel"></select><button className="btn o" id="zi" aria-label="Yaqinlashtirish">+</button><button className="btn o" id="zo" aria-label="Uzoqlashtirish">−</button><button className="btn o" id="rst1">Ko‘rinishni tiklash</button></div>
<div className="m3" id="map3d"><canvas tabIndex="0" role="img" aria-label="O‘zbekistonning taxminiy 3D xaritasi. Strelka tugmalari bilan aylantiring, + va − bilan yaqinlashtiring"></canvas><div id="tip" className="tip" hidden></div><p id="glm" hidden>3D ko‘rinish uchun WebGL kerak. Viloyatni ro‘yxatdan tanlang.</p></div>
<div className="lg" id="legend"></div>
<p className="mu" style={{fontSize:'13px'}}><span className="bd">Namoyish uchun namunaviy ma’lumot</span> Bu rasmiy xarita emas: rasmiy chegara ma’lumoti yuklanmagani uchun kontur, viloyat chegaralari va daryolar (Amudaryo, Sirdaryo) taxminiy chizilgan. Ustun balandligi faqat tanlangan qatlam qiymatini bildiradi, haqiqiy relyefni emas. Sichqoncha bilan aylantiring, katakni bosib viloyatni tanlang.</p></div>
<div className="g" id="detail" aria-live="polite"></div></div></section>
    </>
  );
}
