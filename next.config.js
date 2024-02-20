const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

module.exports = withNextra({
  async redirects() {
    return [
      {
        source: '/authentication',
        destination: '/passwordless-authentication',
        permanent: true,
      },
      {
        source: '/authentication/mobile-app-authentication',
        destination: '/passwordless-authentication/mobile-app-authentication',
        permanent: true,
      },
      {
        source: '/authentication/qr-authentication',
        destination: '/passwordless-authentication/qr-authentication',
        permanent: true,
      },
      {
        source:
          '/authentication/qr-authentication/keyri-qr-auth-features/smart-deep-linking',
        destination:
          '/passwordless-authentication/qr-authentication/deep-linking',
        permanent: true,
      },
      {
        source: '/authentication/qr-authentication/keyri-qr-widget',
        destination:
          '/passwordless-authentication/qr-authentication/qr-web-widget',
        permanent: true,
      },
      {
        source: '/authentication/qr-authentication/client-session-extension',
        destination:
          '/passwordless-authentication/qr-authentication/session-extension',
        permanent: true,
      },
      {
        source: '/authentication/qr-authentication/server-side-authentication',
        destination: '/passwordless-authentication/server-setup',
        permanent: true,
      },
      {
        source: '/authentication/passkeys',
        destination: '/passwordless-authentication/passkeys',
        permanent: true,
      },
      {
        source: '/authentication/passkeys/desktop-browser',
        destination: '/passwordless-authentication/passkeys/web',
        permanent: true,
      },
      {
        source: '/authentication/passkeys/mobile-browser',
        destination: '/passwordless-authentication/passkeys/mobile-browser',
        permanent: true,
      },
      {
        source: '/authentication/passkeys/server',
        destination: '/passwordless-authentication/passkeys/server-setup',
        permanent: true,
      },
      {
        source: '/fraud-prevention/fraud-dashboard',
        destination: '/fraud-prevention/getting-started',
        permanent: true,
      },
      {
        source: '/fraud-prevention/web-fingerprinting',
        destination: '/fraud-prevention/web-app-setup',
        permanent: true,
      },
      {
        source: '/fraud-prevention/mobile-fingerprinting',
        destination: '/fraud-prevention/mobile-app-setup',
        permanent: true,
      },
      {
        source: '/fraud-prevention/custom-rules',
        destination: '/fraud-prevention/risk-rules',
        permanent: true,
      },
      {
        source: '/fraud-prevention/custom-rules/low-code-rule-builder',
        destination: '/fraud-prevention/risk-rules/low-code-builder',
        permanent: true,
      },
      {
        source: '/fraud-prevention/custom-rules/custom-rules-cookbook',
        destination: '/fraud-prevention/risk-rules/example-custom-rules',
        permanent: true,
      },
      {
        source: '/fraud-prevention/use-cases',
        destination: '/fraud-prevention',
        permanent: true,
      },
      {
        source: '/fraud-prevention/events',
        destination: '/fraud-prevention/risk-rules/standard-event-types',
        permanent: true,
      },
      {
        source: '/mobile-sdks/:slug',
        destination: '/mobile-sdks/api-reference/:slug',
        permanent: true,
      },
      {
        source: '/mobile-security-features',
        destination: '/mobile-app-security',
        permanent: true,
      },
      {
        source: '/integrations/:path',
        destination: '/passwordless-authentication/integrations/:path',
        permanent: true,
      },
    ];
  },
});
