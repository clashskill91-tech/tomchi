export default function Simulator() {
  return (
    <>
<section id="sim"><h2>Suvni tejash simulyatori</h2>
<div className="grid c2"><div className="g"><h3>Boshlang‘ich holat va ssenariy sozlamalari</h3>
<p className="mu" style={{fontSize:'13px'}}>Boshlang‘ich holat: an’anaviy sug‘orish, samaradorligi 45% (model taxmini, o‘lchov emas).</p>
<div className="row"><label htmlFor="meth">Sug‘orish usuli (ssenariy)</label><select id="meth" defaultValue="to"><option value="an">An’anaviy sug‘orish</option><option value="pe">Yomg‘irlatib sug‘orish</option><option value="to">Tomchilatib sug‘orish</option></select></div>
<div id="ctl"></div>
<p><button className="btn o" id="rst">Sozlamalarni tiklash</button> <button className="btn o" id="meto">Metodologiya</button> <button className="btn" id="csv">CSV hisobot</button> <button className="btn o" id="prn">Chop etish</button></p></div>
<div className="g"><h3>Natijalarni solishtirish</h3>
<p><span className="bd m">Model hisob-kitobi</span> <span className="mu" style={{fontSize:'13px'}}>Davr: bir sug‘orish mavsumi, birlik: mln m³</span></p>
<div className="kp"><div><span className="mu">Boshlang‘ich suv talabi</span><b id="k0"></b></div><div><span className="mu">Ssenariydagi talab</span><b id="k1"></b></div><div><span className="mu">Tejalgan suv</span><b id="k2"></b></div><div><span className="mu">Talab o‘zgarishi</span><b id="k3"></b></div></div>
<div id="b1" role="img" aria-label="Boshlang‘ich holat va ssenariy talabi diagrammasi"></div>
<p id="expl"></p></div></div>
<div className="grid c2" style={{marginTop:'16px'}}>
<div className="g"><h3>Suv oqimi tasviri</h3><p className="mu" style={{fontSize:'13px'}}>Konseptual tasvir: yuqori qator — boshlang‘ich, pastki qator — ssenariy. Zarrachalar soni hisoblangan talabga mutanosib.</p><canvas id="flow" width="600" height="130" aria-label="Suv oqimi zarrachalari"></canvas>
<div className="tanks" style={{marginTop:'12px'}}><div className="tk"><i id="t0" style={{background:'var(--mu)'}}></i></div><div className="tk"><i id="t1" style={{background:'var(--cy)'}}></i></div><span className="mu" style={{fontSize:'12px'}}>Rezervuar: illyustrativ shkala (boshlang‘ich = 100%)</span></div></div>
<div className="g"><h3>Usullar solishtiruvi</h3><div id="b2"></div><h3>Viloyatlar bo‘yicha tejalish</h3><span className="bd">Namoyish uchun namunaviy ma’lumot</span> <span className="mu" style={{fontSize:'12px'}}>(namunaviy maydon × joriy model)</span><div id="b3"></div></div></div></section>
    </>
  );
}
