# Captain Derkin Website - Setup Guide

Welcome to your Captain Derkin GitHub Pages website! This guide will help you complete the setup and deploy your site.

## 🚀 Quick Start

### 1. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/aditmer/Captain-Derkin-Site`
2. Click **Settings** (top menu)
3. Scroll to **Pages** (left sidebar)
4. Under **Source**, select:
   - **Branch**: `main`
   - **Folder**: `/docs`
5. Click **Save**
6. Your site will be available at: `https://aditmer.github.io/Captain-Derkin-Site/`

### 2. Add Your Assets

⚠️ **IMPORTANT**: All asset files are currently placeholders. Replace them with your actual game assets:

#### Branding Assets (`/docs/assets/branding/`)
- `app-icon-1024.png` (1024×1024)
- `app-icon-rounded.png` (1024×1024)
- `captain-derkin-shield.png` (512×512 recommended)
- `feature-graphic-1024x500.png` (1024×500)
- `favicon-32.png` (32×32)
- `favicon-192.png` (192×192)
- `favicon-512.png` (512×512)

See `/docs/assets/branding/README.md` for detailed guidelines.

#### Screenshots (`/docs/assets/screenshots/`)
- `ios-1.png` - Main gameplay
- `ios-2.png` - Special cards demo
- `android-1.png` - Strategy gameplay
- `android-2.png` - Ranks/rewards

See `/docs/assets/screenshots/README.md` for detailed guidelines.

#### Characters (`/docs/assets/characters/`)
- `barnaby-bones.png` (200×200 minimum)
- `jolly-corbin.png` (200×200 minimum)
- `salty-sue.png` (200×200 minimum)
- `vera-vortex.png` (200×200 minimum)

See `/docs/assets/characters/README.md` for detailed guidelines.

### 3. Update Store Links

Once your app is published, update the store links in `/docs/index.html`:

Search for `href="#"` in the download buttons section and replace with:
- **App Store**: `https://apps.apple.com/app/your-app-id`
- **Google Play**: `https://play.google.com/store/apps/details?id=your.package.name`

### 4. Customize Legal Pages (Optional)

Update the legal contact information in:
- `/docs/legal/privacy.html`
- `/docs/legal/terms.html`

Replace `[Your Address - Optional]` and `[Your Jurisdiction]` with actual details.

## 📁 File Structure

```
docs/
├── index.html              # Main website page
├── css/
│   └── styles.css          # All styling (navy/gold/tan theme)
├── js/
│   └── main.js             # Navigation, smooth scroll, lightbox
├── assets/
│   ├── branding/           # Icons, logos, feature graphics
│   ├── screenshots/        # Game screenshots (iOS & Android)
│   └── characters/         # Character portraits
├── legal/
│   ├── privacy.html        # Privacy policy
│   └── terms.html          # Terms of service
├── manifest.json           # PWA manifest
├── robots.txt              # Search engine instructions
└── sitemap.xml             # SEO sitemap
```

## 🎨 Brand Colors

The site uses your game's visual identity:

- **Navy**: `#0B0E14` (primary background)
- **Gold**: `#D9A441` (accents, buttons, headings)
- **Tan**: `#E7D7C5` (cards, frames)
- **Crimson**: `#B6403C` (callouts)
- **Off-white**: `#FAF7F2` (light section backgrounds)

Colors are defined as CSS variables in `/docs/css/styles.css` and can be easily adjusted.

## 📱 Features

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly navigation
- Hamburger menu on mobile

### Performance
- Minimal dependencies (no build system)
- < 200KB total CSS/JS
- Lazy loading images
- Optimized fonts from Google Fonts

### SEO & Accessibility
- Semantic HTML5 markup
- ARIA labels for screen readers
- High contrast ratios
- Open Graph and Twitter Card meta tags
- Sitemap and robots.txt

### Interactive Features
- Smooth scrolling to sections
- Mobile navigation toggle
- Screenshot lightbox gallery
- Sticky header with scroll effects

## 🔧 Customization

### Changing Content

Edit `/docs/index.html` to update:
- Hero tagline and description
- Feature cards
- How to Play steps
- Character names and bios
- Press kit description
- Footer links

### Styling Changes

Edit `/docs/css/styles.css`:
- CSS variables at the top for colors, spacing, fonts
- Component styles organized by section
- Responsive breakpoints clearly marked

### Adding Features

Edit `/docs/js/main.js` to:
- Add analytics tracking
- Implement additional interactions
- Customize navigation behavior

## 🌐 Custom Domain (Optional)

To use a custom domain like `captaiderkin.com`:

1. Purchase domain from registrar (Namecheap, Google Domains, etc.)
2. Add a `CNAME` file to `/docs/` containing your domain:
   ```
   captaiderkin.com
   ```
3. Configure DNS records at your registrar:
   - **A records** pointing to GitHub IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - OR **CNAME record**: `aditmer.github.io`
4. In GitHub repo Settings → Pages, enter your custom domain
5. Enable "Enforce HTTPS" after DNS propagates

## ✅ Pre-Launch Checklist

- [ ] Replace all placeholder assets
- [ ] Update App Store and Google Play links
- [ ] Test on mobile devices (iOS and Android)
- [ ] Test on tablets and desktop browsers
- [ ] Verify all links work
- [ ] Check legal pages have correct contact info
- [ ] Run Lighthouse audit (aim for green scores)
- [ ] Test page load speed
- [ ] Verify Open Graph preview on social media
- [ ] Check that images display correctly
- [ ] Enable GitHub Pages in Settings
- [ ] (Optional) Set up custom domain
- [ ] (Optional) Add Google Analytics or Plausible

## 📊 Testing Tools

- **Lighthouse**: Built into Chrome DevTools (Performance, SEO, Accessibility)
- **Mobile Testing**: Chrome DevTools device emulation
- **Social Preview**: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- **Twitter Cards**: [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- **Page Speed**: [Google PageSpeed Insights](https://pagespeed.web.dev/)

## 🆘 Troubleshooting

### Site not showing up
- Wait 5-10 minutes after enabling GitHub Pages
- Check that Pages is enabled with `main` branch and `/docs` folder
- Verify `index.html` exists in `/docs/` (not in root)

### Images not loading
- Check file paths are relative (e.g., `assets/branding/logo.png`)
- Verify asset files are actually in the `/docs/` directory
- Check file extensions match (case-sensitive on some systems)

### Styling looks broken
- Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Check that `styles.css` path is correct in HTML
- Open browser console (F12) to see errors

### Mobile menu not working
- Check that `main.js` is loading (view Network tab in DevTools)
- Verify no JavaScript errors in console
- Test on actual mobile device, not just emulator

## 📞 Support

For questions or issues with Captain Derkin:
- **Email**: support@ditmerpartners.com
- **Press**: press@ditmerpartners.com
- **Legal**: legal@ditmerpartners.com

## 🚢 Ready to Launch?

Once you've completed the checklist and tested everything:

1. Commit all changes to the `main` branch
2. Push to GitHub
3. Wait for GitHub Pages to build (usually < 1 minute)
4. Visit your site and verify everything works
5. Share your link: `https://aditmer.github.io/Captain-Derkin-Site/`

**Good luck with Captain Derkin! ⚓🎴**
