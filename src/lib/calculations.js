/**
 * TOMCHI — soddalashtirilgan ta’limiy suv talabi modeli (rasmiy gidrologik prognoz EMAS).
 *
 * Talab = maydon × sof ehtiyoj ÷ (samaradorlik × (1 − yo‘qotish)) × (1 − tejalgan ulush)
 * Boshlang‘ich holat: an’anaviy sug‘orish, samaradorligi E0 = 45% (model taxmini).
 */
export const E0 = 0.45;
export const M = {
  an: ['An’anaviy sug‘orish', 45],
  pe: ['Yomg‘irlatib sug‘orish', 70],
  to: ['Tomchilatib sug‘orish', 90],
};
/** a: ga, n: m³/ga, e/l/s: 0..1 oralig‘idagi kasrlar */
export const wd = (a, n, e, l, s = 0) => (a * n) / (e * (1 - l)) * (1 - s);
/** p: {area, need, eff(%), loss(%), saved(%)} */
export function calc(p) {
  const l = p.loss / 100;
  const W0 = wd(p.area, p.need, E0, l);
  const W1 = wd(p.area, p.need, p.eff / 100, l, p.saved / 100);
  return { W0, W1, save: W0 - W1, chg: ((W1 - W0) / W0) * 100 };
}
