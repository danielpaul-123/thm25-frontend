# THM 2025 - Travancore Hub Meet Website

Official website for the IEEE Travancore Hub Meet 2025, a flagship 2-day student leadership and technology workshop event.

## 🚀 Features

- **Fully Optimized for SEO**: Comprehensive meta tags, Open Graph, Twitter Cards, and structured data
- **High Performance**: Code splitting, lazy loading, and optimized builds
- **Responsive Design**: Mobile-first approach with breakpoint-specific components
- **Accessible**: ARIA labels, semantic HTML, and keyboard navigation support
- **Modern Tech Stack**: React 19, Vite, Tailwind CSS 4, GSAP, Framer Motion

## 📦 Tech Stack

- **Framework**: React 19.2.0 + Vite 7.1.7
- **Styling**: Tailwind CSS 4.1.16
- **Animations**: GSAP 3.13.0 + Framer Motion (motion) 12.23.24
- **Routing**: React Router DOM 7.9.4
- **Icons**: Tabler Icons React 3.35.0

## 🎯 SEO Optimizations

### Meta Tags
- Complete title, description, and keyword meta tags
- Open Graph tags for Facebook sharing
- Twitter Card tags for Twitter sharing
- Canonical URLs
- Theme color for mobile browsers

### Structured Data (JSON-LD)
- Event schema with dates, location, and ticket pricing
- Organization schema for IEEE Travancore Hub
- Rich snippets for better search engine visibility

### Performance
- Image optimization (WebP format)
- Code splitting and lazy loading
- Minification with Terser
- GZIP compression via .htaccess
- Browser caching headers
- Preconnect to external resources

### Accessibility
- Semantic HTML5 elements (header, section, article, nav)
- ARIA labels and roles
- Proper heading hierarchy (h1-h6)
- Alt text for all images
- Keyboard navigation support

### Files
- `robots.txt` - Search engine crawler rules
- `sitemap.xml` - Complete site structure for search engines
- `manifest.json` - PWA manifest for mobile installation
- `.htaccess` - Server configuration for caching and redirects

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── ui/          # UI library components
│   ├── Aurora.jsx
│   ├── CircularText.jsx
│   ├── MagicBento.jsx
│   └── ...
├── pages/           # Page components
│   ├── Home.jsx
│   └── ComingSoon.jsx
├── sections/        # Page sections
│   ├── Landing.jsx
│   ├── AboutUs.jsx
│   ├── Features.jsx
│   ├── Schedule.jsx
│   ├── MediaGallery.jsx
│   └── Registration.jsx
├── lib/            # Utility functions
└── assets/         # Static assets
```

## 🔍 SEO Checklist

✅ Meta tags (title, description, keywords, author)
✅ Open Graph tags for social sharing
✅ Twitter Card tags
✅ Structured data (JSON-LD) for events and organization
✅ Robots.txt file
✅ XML sitemap
✅ Canonical URLs
✅ Semantic HTML with proper heading hierarchy
✅ Alt text for images
✅ ARIA labels for accessibility
✅ Mobile-friendly responsive design
✅ Fast loading with code splitting
✅ HTTPS ready (configure in .htaccess)
✅ Browser caching headers
✅ GZIP compression

## 📊 Performance Features

- **Code Splitting**: Vendor libraries split into separate chunks
- **Lazy Loading**: Routes loaded on demand with React.lazy()
- **Image Optimization**: WebP format for smaller file sizes
- **Minification**: Terser for JavaScript, CSS minification
- **Caching**: Browser caching with .htaccess rules
- **Console Removal**: Production builds remove console logs

## 🌐 Deployment

1. Update the canonical URL in `index.html` to your production domain
2. Update sitemap URLs in `public/sitemap.xml`
3. Configure SSL certificate for HTTPS
4. Uncomment HTTPS redirect in `.htaccess`
5. Build: `npm run build`
6. Deploy `dist/` folder to your web server

## 🔗 Important URLs to Update

Before deploying, update these URLs in:
- `index.html` - All meta tag URLs and Open Graph image URLs
- `public/sitemap.xml` - All page URLs
- `public/robots.txt` - Sitemap URL

## 📝 License

© 2025 IEEE Travancore Hub. All rights reserved.

## 🤝 Contributing

This is a private project for IEEE Travancore Hub Meet 2025.

---

**Built with ❤️ for the IEEE student community**
 
