const isProd = process.env.NODE_ENV === 'production';
const repo = 'mtbtyresai';

export default {
  output: 'export',                          // static export for GitHub Pages
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  images: { unoptimized: true },             // no server-side image optimization on Pages
  trailingSlash: true
};
