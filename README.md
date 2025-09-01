# Mezkenz – Next.js 14 One‑Pager (Tailwind)

## Quickstart
```bash
npm i
npm run dev
```
- Bewerk `app/page.tsx` en vervang placeholders (naam, KBO/BTW, e-mail, LinkedIn).
- Plaats je logo in `public/MEZKENZ_logo_gray.jpg` (al toegevoegd).

## Deploy
- Vercel aanbevolen – importeer de repo, kies framework **Next.js**.

## Environment variables
- Kopieer `.env.example` naar `.env` en vul `RESEND_API_KEY`, `RESEND_FROM` en `RESEND_TO` in.
- Verifieer het adres in `RESEND_FROM` in het Resend dashboard.
- Redeploy je app na het aanpassen van de variabelen.
