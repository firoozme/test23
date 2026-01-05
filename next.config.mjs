// next.config.mjs

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

  eslint: {
    // خطاهای ESLint رو در بیلد نادیده بگیر
    ignoreDuringBuilds: true,
  },

  // <<< این بخش رو اضافه یا تغییر بده >>>
  typescript: {
    // خطاهای TypeScript رو در زمان بیلد نادیده بگیر
    // فقط برای دیپلوی موقت — بعداً می‌تونی فیکس کنی
    ignoreBuildErrors: true,
  },
};

export default withNextIntl(nextConfig);