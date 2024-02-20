const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

module.exports = withNextra({
  async redirects() {
    return [
      {
        source:
          '/:item(\\ios|device-fingerprinting-ux-and-fraud|android|react-native|flutter)',
        destination: '/mobile-sdks/:item',
        permanent: true,
      },
      {
        source:
          '/:item(\\amazon-cognito|auth0|firebase|banno-digital-banking|supabase|ping-identity|alphapoint-apex-system)',
        destination: '/integrations/:item',
        permanent: true,
      },
      {
        source: '/firebase-server-side-authentication',
        destination: '/integrations/firebase/server-side-authentication',
        permanent: true,
      },
      {
        source: '/:item(\\web-app-integration|mobile-app-setup)',
        destination: '/integrations/alphapoint-apex-system/:item',
        permanent: true,
      },
      {
        source: '/:item(\\ios-app-integration|android-app-integration)',
        destination:
          '/integrations/alphapoint-apex-system/mobile-app-setup/:item',
        permanent: true,
      },
    ];
  },
});
