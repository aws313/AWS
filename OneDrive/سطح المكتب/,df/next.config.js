/**
 * next.config.js - prepare for static export on shared PHP hosting
 */
module.exports = {
  // produce a fully static export (next export)
  output: 'export',
  images: {
    // disable Next.js built-in image optimization so images are served as-is
    unoptimized: true,
  },
}
