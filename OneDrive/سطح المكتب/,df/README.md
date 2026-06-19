# تعليمات رفع المشروع إلى GitHub ونشره على Vercel

هذا الملف يوضّح الملفات المطلوبة وخطوات التحضير والرفع خطوة‑بـ‑خطوة باللغة العربية.

---

## 1) الملفات والأساسيات التي ترفعها إلى الريبو
- `package.json` (يحتوي على السكربتات `dev`, `build`, `export`)
- ملف قفل الحزم: `pnpm-lock.yaml` أو `package-lock.json` أو `yarn.lock`
- `next.config.mjs` أو `next.config.js`
- مجلد التطبيق: `app/` أو `pages/`
- مجلد الأصول الثابتة: `public/` (الصور، مجلد `video/`, الأيقونات، `favicon*`, `apple-icon.png`)
- المجلدات المصدرية: `components/`, `styles/`, `ui/`, `hooks/`, `lib/`
- TypeScript (إذا مستخدم): `tsconfig.json`, `next-env.d.ts`
- إعدادات CSS/Build إن وُجدت: `postcss.config.mjs`, `tailwind.config.js`
- `.gitignore` ويفضل `.vercelignore` (مثال محدود أدناه)
- `README.md` (هذا الملف)

## 2) مثال سكربتات من `package.json`
أضف أو تأكد من هذه السكربتات:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "export": "next build && next export"
}
```

- استخدام `pnpm` موصى عندما تملك `pnpm-lock.yaml`.

## 3) محتوى مقترح لـ`.vercelignore`
```
hostinger-final
out
website.zip
AWS
node_modules
.vscode
.env
.env.local
.DS_Store
*.log
```

## 4) أوامر محلية للتحقّق والبناء
```bash
pnpm install
pnpm build        # لبناء Next.js (SSR / hybrid)
# أو لعمل export ثابت
pnpm run export
```

## 5) رفع الريبو إلى GitHub (أوامر جاهزة)
استبدل `USERNAME/REPO` بعنوانك:
```bash
git init
git add .
git commit -m "Prepare for Vercel deployment"
git branch -M main
git remote add origin git@github.com:USERNAME/REPO.git
git push -u origin main
```

## 6) خطوات النشر على Vercel (مختصر)
1. افتح https://vercel.com وسجّل الدخول (GitHub).
2. اضغط Import Project → اختر الريبو من GitHub.
3. Vercel يكتشف Next.js تلقائياً. تحقق من الإعدادات:
   - Install Command: `pnpm install` (إن لم تختار تلقائياً)
   - Build Command: `pnpm build`  (أو `pnpm run export` إذا تستخدم `next export`)
   - Output Directory: اترك فارغاً للمشروع الطبيعي، أو ضع `out` للإصدارات المصدّرة.
4. اضف أي متغيرات بيئة (Environment Variables) في Dashboard إن لزم.
5. اضغط Deploy وانتظر انتهاء العملية.

## 7) ملاحظات شائعة للمشاكل (Troubleshooting)
- إن ظهرت صفحات بيضاء أو لا تظهر الأنماط: تحقق أن روابط الموارد لا تبدأ بشرطة `/` إن كنت تحرّر `index.html` يدوياً؛ نستخدم الآن روابط نسبية (`./_next/...`, `./images/...`).
- إن استعملت `next export` فالمجلد الناتج `out/` يحتوي كل الملفات الثابتة. بإمكانك نشر `out/` أيضاً على Netlify/Cloudflare/GitHub Pages.
- تأكد أن `public/` يحتوي كل الصور والفيديوهات المستخدمة بالمسارات الصحيحة.
- إن ظهرت أخطاء خطوط (`woff2` 404): تأكد أن `_next/static/media/` ترفع كما هي أو أن إعداد `assetPrefix` غير مضبط خطأ في `next.config`.

## 8) إذا تريد أن أفعل هذا نيابةً عنك
- أ) أستطيع عمل `git commit` و`push` من جهازك لو أعطيتني رابط الريبو أو صلاحية (SSH token) — أو إرشادك خطوة بخطوة.
- ب) أستطيع تجهيز ملف `.vercelignore` و`README.md` (موجود الآن) وملف `README-deploy-steps.md` مفصّل إن رغبت.

---

أخبرني أي خيار تريد: أرفع الملفات للريبو (أحتاج رابط الريبو)، أم أعطيك إرشادات مصورة خطوة‑بـ‑خطوة للنشر في Vercel؟
