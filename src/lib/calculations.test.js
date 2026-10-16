import { describe, it, expect } from 'vitest';
import { calc, wd } from './calculations.js';

const base = { area: 1e5, need: 9000, eff: 45, loss: 25, saved: 0 };

describe('calc', () => {
  it('boshlang‘ich sozlamada tejalish 0', () => {
    expect(calc(base).save).toBeCloseTo(0, 6);
  });
  it('samaradorlik 90% bo‘lsa talab yarmiga tushadi', () => {
    const q = calc({ ...base, eff: 90 });
    expect(q.W1 * 2).toBeCloseTo(q.W0, 6);
  });
  it('tejalgan ulush talabni kamaytiradi', () => {
    expect(calc({ ...base, eff: 70, saved: 10 }).W1).toBeLessThan(calc({ ...base, eff: 70 }).W1);
  });
  it('maydon 2 baravar bo‘lsa talab ham 2 baravar', () => {
    expect(calc({ ...base, area: 2e5 }).W1 / calc(base).W1).toBeCloseTo(2, 9);
  });
  it('yo‘qotish oshsa talab oshadi', () => {
    expect(calc({ ...base, loss: 40 }).W1).toBeGreaterThan(calc({ ...base, loss: 10 }).W1);
  });
  it('tejalish = boshlang‘ich − ssenariy va o‘zgarish manfiy', () => {
    const q = calc({ ...base, eff: 80, loss: 20, saved: 5 });
    expect(q.save).toBeCloseTo(q.W0 - q.W1, 6);
    expect(q.chg).toBeLessThan(0);
  });
  it('wd formulasi', () => {
    expect(wd(10, 100, 0.5, 0)).toBe(2000);
  });
});
