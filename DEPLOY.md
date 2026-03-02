# Deploy Frexora Tech

The app builds and runs as a standard Next.js app. Below are the easiest ways to deploy.

---

## Option 1: Vercel (recommended for Next.js)

1. **Push your code to GitHub** (if not already):
   ```bash
   git add .
   git commit -m "Prepare for deploy"
   git push origin main
   ```

2. **Sign in at [vercel.com](https://vercel.com)** (use “Continue with GitHub”).

3. **Import the repo**:
   - Click **Add New…** → **Project**.
   - Select your **frexora** repo (or the repo that contains this Next.js app).
   - **Root Directory**: if the Next.js app is inside a folder (e.g. `frexora`), set it to that folder.
   - Leave **Framework Preset** as Next.js.
   - Click **Deploy**.

4. **Done.** Vercel will give you a URL like `https://your-project.vercel.app`. You can add a custom domain in Project Settings.

**From CLI (optional):**
```bash
npm i -g vercel
cd c:\Users\Admin\Desktop\website\yas\frexora
vercel
```
Follow the prompts and use the same GitHub account when asked.

---

## Option 2: Netlify

1. Push code to **GitHub** (as above).

2. Sign in at **[netlify.com](https://netlify.com)** → **Add new site** → **Import an existing project** → **GitHub** → choose your repo.

3. **Build settings** (if the app is in a subfolder like `frexora`, set “Base directory” to `frexora`):
   - **Build command:** `npm run build`
   - **Publish directory:** `.next` (Netlify’s Next.js runtime will use this)
   - Or use **“Next.js”** in the framework list so Netlify sets these for you.

4. Deploy. Netlify will give you a URL and optional custom domain.

---

## Option 3: Your own server (Node)

1. **Build:**
   ```bash
   npm run build
   ```

2. **Run in production:**
   ```bash
   npm start
   ```
   The app listens on port **3000** by default. Use a process manager (e.g. PM2) and a reverse proxy (e.g. Nginx) for a real server.

3. **Environment:** Set `NODE_ENV=production` if needed.

---

## After deploy

- **Contact form:** The `/api/contact` route runs on the server. To send real emails, add an email provider (e.g. [Resend](https://resend.com)) in `src/app/api/contact/route.ts` and set any API keys in the platform’s **Environment variables**.
- **Custom domain:** Configure in your host’s dashboard (Vercel/Netlify: Project Settings → Domains).
