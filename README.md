# Kimizo Admin (separate site)

This is the admin panel of Kimizo, as its **own project**. The store (kimizo-store) no longer contains any admin page.
The admin panel talks to the store server's API, so both use the same products, orders, reviews, pre-bookings and settings.

## 1. Tell the admin panel where the store is
Open `public/config.js` and set the store address:
```js
window.KZ = { API: 'https://kimizo.vercel.app', STORE: 'https://kimizo.vercel.app' };
```
(local testing: `http://localhost:3000`)

## 2. Allow this admin site on the store server  (important)
In the **store** project's environment variables (Vercel → Settings → Environment Variables, and `.env` locally) add:
```
ADMIN_ORIGIN=https://YOUR-ADMIN-SITE.vercel.app
ADMIN_URL=https://YOUR-ADMIN-SITE.vercel.app
```
- `ADMIN_ORIGIN` lets the browser on the admin site call the store API (CORS). Several addresses can be separated by commas.
- `ADMIN_URL` is where the old `/admin` address of the store redirects to.
Redeploy the store after adding them.

## 3. Deploy the admin site
- Vercel → **Add New → Project** → import this folder (own Git repo is best). No build command is needed, the `public` folder is the site.
- Open the address, log in with the admin e-mail and password (the same `ADMIN_EMAIL` / `ADMIN_PASSWORD` of the store).

## Run on your computer
```bash
npm install
npm start      # http://localhost:4000   (store must run on http://localhost:3000)
```
For local testing set `API` to `http://localhost:3000` in `public/config.js`. `http://localhost:4000` is allowed automatically by the store when it does not run on Vercel.

## Files
```
public/index.html   the admin panel (products, orders, reviews, pre-bookings, settings, print label)
public/login.html   admin login
public/config.js    store address
vercel.json         static site + security headers (noindex, no framing)
dev-server.js       tiny local server (not used on Vercel)
```
