// Only for running the admin panel on your own computer:  npm install && npm start  ->  http://localhost:4000
// (On Vercel the "public" folder is served as a static site, this file is not used.)
const express = require('express');
const path = require('path');
const app = express();
app.disable('x-powered-by');
app.use((req, res, next) => { res.set({ 'X-Robots-Tag': 'noindex, nofollow', 'X-Frame-Options': 'DENY', 'Referrer-Policy': 'no-referrer' }); next(); });
app.use(express.static(path.join(__dirname, 'public'), { extensions: ['html'] }));
app.listen(process.env.PORT || 4000, () => console.log('Kimizo admin → http://localhost:' + (process.env.PORT || 4000)));
