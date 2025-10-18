/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ['en'], // Add your languages here
    defaultLocale: 'en',
    localeDetection: false,
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true, // set to false if you might change your homepage later
      },
    ];
  },
};
