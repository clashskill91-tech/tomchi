# TOMCHI — O‘zbekiston suv kelajagi

Suv resurslarini o‘rganish, sug‘orish ssenariylarini solishtirish va suvni tejash imkoniyatlarini ko‘rsatadigan **ta’limiy** veb-ilova (React + Vite + Three.js).

> Bu rasmiy prognoz tizimi emas. Xarita konturi, viloyat chegaralari, maydon va sof ehtiyoj qiymatlari **taxminiy / namunaviy**. “3D hikoya”dagi yillar foydalanuvchi faraziy muddati, bashorat emas.

## Ishga tushirish
```bash
npm install
npm run dev      # http://localhost:5173
npm test         # hisob-kitob testlari (vitest)
npm run build    # dist/ papkasi
```

## GitHub’ga joylash
```bash
git init
git add .
git commit -m "TOMCHI: dastlabki versiya"
git branch -M main
git remote add origin https://github.com/<foydalanuvchi>/tomchi.git
git push -u origin main
```

## Joylashtirish
- **Vercel:** repozitoriyni import qiling — Vite avtomatik aniqlanadi (build: `npm run build`, output: `dist`).
- **GitHub Pages:** `npm run build`, so‘ng `dist/` papkasini `gh-pages` branchiga joylang (`base: './'` sozlangan).

## Tuzilma
```
src/
  App.jsx              # bo‘limlarni yig‘adi, mexanikani bir marta ishga tushiradi
  components/          # Nav, Hero, MapSection, Simulator, Consequences, Learn ...
  lib/calculations.js  # sof hisob-kitob funksiyalari (+ calculations.test.js)
  engine.js            # 3D xarita, 3D hikoya, simulyator, viktorina (imperativ)
  index.css            # dizayn
```

## Model
`talab = maydon × sof ehtiyoj ÷ (samaradorlik × (1 − yo‘qotish)) × (1 − tejalgan ulush)`
Boshlang‘ich holat: an’anaviy sug‘orish, samaradorlik 45% (model taxmini).

## Ma’lumot manbalari
Tasdiqlangan raqamlar kiritilmagan; tekshirish uchun havolalar: FAO AQUASTAT, Jahon banki, Natural Earth. Aniq GeoJSON chegaralari qo‘shilsa, xarita aniqlashtiriladi.
