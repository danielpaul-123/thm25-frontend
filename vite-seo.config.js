// SEO and Performance optimizations for Vite build
export const seoConfig = {
  // Preload critical resources
  preload: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }
  ],
  
  // Image optimization settings
  images: {
    formats: ['webp', 'avif'],
    quality: 80,
    lazy: true
  },
  
  // Minification settings
  minify: {
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true
  }
};

export default seoConfig;
