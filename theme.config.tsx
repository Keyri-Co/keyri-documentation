import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>Keyri Documentation</span>,
  project: {
    link: 'https://github.com/Keyri-Co',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  docsRepositoryBase: 'https://github.com/Keyri-Co/keyri-documentation',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Keyri Documentation',
      description: 'Keyri Documentation',
      openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://docs.keyri.com',
        site_name: 'Keyri Documentation',
      },
    };
  },
  footer: {
    text: `© Keyri, Inc. ${new Date().getFullYear()}`,
  },
};

export default config;
