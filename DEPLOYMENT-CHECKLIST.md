# Captain Derkin Website - Deployment Checklist

Use this checklist to track your progress toward launching the Captain Derkin website.

## 📋 Setup Phase

### GitHub Repository
- [x] Repository created (`Captain-Derkin-Site`)
- [x] All files committed to `main` branch
- [x] `.gitignore` configured
- [ ] Repository pushed to GitHub

### Code Review
- [x] HTML validated (semantic, accessible)
- [x] CSS optimized (< 100KB)
- [x] JavaScript functional (< 10KB)
- [x] All links use relative paths
- [x] No hardcoded localhost URLs

---

## 🎨 Asset Replacement

### Branding Assets (`/docs/assets/branding/`)
- [ ] `app-icon-1024.png` (1024×1024)
- [ ] `app-icon-rounded.png` (1024×1024)
- [ ] `captain-derkin-shield.png` (512×512 recommended)
- [ ] `feature-graphic-1024x500.png` (1024×500)
- [ ] `favicon-32.png` (32×32)
- [ ] `favicon-192.png` (192×192)
- [ ] `favicon-512.png` (512×512)
- [ ] All images optimized for web (< 500KB each)
- [ ] Deleted branding README.md after replacing

### Screenshot Assets (`/docs/assets/screenshots/`)
- [ ] `ios-1.png` - Main gameplay
- [ ] `ios-2.png` - Special cards
- [ ] `android-1.png` - Strategy
- [ ] `android-2.png` - Ranks/rewards
- [ ] Images optimized (< 500KB each)
- [ ] Deleted screenshots README.md after replacing

### Character Assets (`/docs/assets/characters/`)
- [ ] `barnaby-bones.png` (200×200 minimum)
- [ ] `jolly-corbin.png` (200×200 minimum)
- [ ] `salty-sue.png` (200×200 minimum)
- [ ] `vera-vortex.png` (200×200 minimum)
- [ ] Images optimized (< 100KB each)
- [ ] Deleted characters README.md after replacing

---

## 🔗 Content Updates

### Store Links (`/docs/index.html`)
- [ ] App Store URL updated (line ~80)
- [ ] Google Play URL updated (line ~88)
- [ ] Both links tested and working

### Contact Information
- [ ] Email addresses verified:
  - [ ] `apps@ditmerpartners.com` (centralized contact for press/support/legal)

### Legal Pages
- [ ] Privacy policy reviewed (`/docs/legal/privacy.html`)
- [ ] Terms of service reviewed (`/docs/legal/terms.html`)
- [ ] Company address added (if applicable)
- [ ] Jurisdiction specified in terms
- [ ] Last updated dates current

### Social Links (`/docs/index.html` footer)
- [ ] Twitter URL updated
- [ ] Facebook URL updated
- [ ] Instagram URL updated
- [ ] Or removed if not using social media

---

## 🚀 Deployment

### GitHub Pages Setup
- [ ] Go to repository Settings → Pages
- [ ] Source set to: `main` branch
- [ ] Folder set to: `/docs`
- [ ] Saved and deployment initiated
- [ ] Wait 5-10 minutes for deployment
- [ ] Site live at: `https://aditmer.github.io/Captain-Derkin-Site/`

### Custom Domain (Optional)
- [ ] Domain purchased
- [ ] DNS configured (A records or CNAME)
- [ ] CNAME file added to `/docs/`
- [ ] Custom domain set in GitHub Pages settings
- [ ] HTTPS enforced after DNS propagation
- [ ] Test custom domain loads correctly

---

## 🧪 Testing

### Desktop Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] All navigation links work
- [ ] Smooth scrolling functions
- [ ] Images load correctly
- [ ] No console errors

### Mobile Testing
- [ ] iPhone Safari (actual device or simulator)
- [ ] Android Chrome (actual device or simulator)
- [ ] Mobile menu toggles correctly
- [ ] Store buttons sized appropriately
- [ ] Touch targets minimum 44×44px
- [ ] Horizontal scrolling not present
- [ ] Images scale properly

### Tablet Testing
- [ ] iPad or similar tablet
- [ ] Layout responsive at tablet size
- [ ] Touch navigation works
- [ ] No overlapping elements

### Functionality Testing
- [ ] Mobile navigation toggle works
- [ ] All anchor links scroll smoothly
- [ ] Screenshot lightbox opens and closes
- [ ] Store buttons link correctly
- [ ] Download links work (press kit)
- [ ] Legal page links work
- [ ] Footer links work
- [ ] Back to home links work from legal pages

---

## 📊 Performance

### Lighthouse Audit (Chrome DevTools)
- [ ] Performance score: 90+ (green)
- [ ] Accessibility score: 90+ (green)
- [ ] Best Practices score: 90+ (green)
- [ ] SEO score: 90+ (green)
- [ ] Address any red/yellow issues

### Page Speed
- [ ] Test on [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Mobile score: 80+ (green)
- [ ] Desktop score: 90+ (green)
- [ ] First Contentful Paint: < 2s
- [ ] Largest Contentful Paint: < 2.5s

### Optimization
- [ ] All images compressed/optimized
- [ ] No images larger than 500KB
- [ ] CSS file < 100KB
- [ ] JS file < 10KB
- [ ] Total page size < 2MB (with images)

---

## 🔍 SEO

### Meta Tags
- [ ] Title tag present and correct
- [ ] Meta description present (< 160 chars)
- [ ] Open Graph tags present
- [ ] Twitter Card tags present
- [ ] Canonical URL set (if using custom domain)

### Social Media Preview
- [ ] Test on [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Test on [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Preview image displays correctly
- [ ] Title and description correct

### Search Engines
- [ ] `robots.txt` accessible
- [ ] `sitemap.xml` accessible
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools

---

## ♿ Accessibility

### WCAG Compliance
- [ ] All images have alt text
- [ ] Color contrast ratios meet WCAG AA
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] ARIA labels on interactive elements
- [ ] Headings in logical order (h1 → h2 → h3)

### Screen Reader Testing
- [ ] Test with VoiceOver (Mac/iOS)
- [ ] Test with NVDA or JAWS (Windows)
- [ ] All content readable
- [ ] Navigation makes sense
- [ ] Images described appropriately

---

## 📱 Analytics (Optional)

### Setup
- [ ] Google Analytics account created
- [ ] Tracking code added to `index.html`
- [ ] Events configured (store clicks, etc.)
- [ ] Or alternative: Plausible, Fathom, etc.

### Privacy Compliance
- [ ] Cookie consent if using tracking cookies
- [ ] Privacy policy updated with analytics mention
- [ ] GDPR compliance if targeting EU
- [ ] CCPA compliance if targeting California

---

## 🎉 Launch

### Pre-Launch
- [ ] All checklist items above completed
- [ ] Final review of all pages
- [ ] Test all links one more time
- [ ] Clear browser cache and test fresh
- [ ] Get second person to review

### Launch Day
- [ ] Announce on social media
- [ ] Share link with App Store/Play Store listings
- [ ] Update app store descriptions with website link
- [ ] Email press contacts (if applicable)
- [ ] Monitor analytics for first visitors

### Post-Launch
- [ ] Monitor for broken links
- [ ] Check analytics daily first week
- [ ] Respond to feedback
- [ ] Fix any reported issues
- [ ] Celebrate! 🎊

---

## 📝 Notes & Issues

Use this space to track any issues or notes during setup:

```
Date: ___________
Issue: _________________________________________________________
Resolution: ____________________________________________________

Date: ___________
Issue: _________________________________________________________
Resolution: ____________________________________________________

Date: ___________
Issue: _________________________________________________________
Resolution: ____________________________________________________
```

---

## 🆘 Quick Links

- **Repository**: `https://github.com/aditmer/Captain-Derkin-Site`
- **Live Site**: `https://aditmer.github.io/Captain-Derkin-Site/`
- **Setup Guide**: `/docs/SETUP.md`
- **Visual Reference**: `/VISUAL-REFERENCE.md`
- **Project Summary**: `/PROJECT-SUMMARY.md`

---

## ✅ Final Approval

- [ ] All critical items completed
- [ ] All assets replaced
- [ ] All links working
- [ ] Performance acceptable
- [ ] Accessibility verified
- [ ] SEO optimized
- [ ] Ready for public launch

**Approved by**: ___________________  **Date**: ___________

---

**Captain Derkin website is ready to set sail! ⚓🎴**
