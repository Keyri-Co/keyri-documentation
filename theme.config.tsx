import React from 'react';
import { useRouter } from 'next/router';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  head: (
    <>
      <link rel='icon' href='/favicon.ico' />
    </>
  ),
  logo: <span>Keyri Documentation</span>,
  project: {
    link: 'https://github.com/Keyri-Co',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  docsRepositoryBase: 'https://github.com/Keyri-Co/keyri-documentation',
  useNextSeoProps() {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();

    return {
      titleTemplate: '%s – Keyri Documentation',
      description: `${frontMatter.description || 'Keyri Documentation'}`,
      openGraph: {
        type: 'website',
        locale: 'en_US',
        url: `https://docs.keyri.com${asPath}`,
        site_name: 'Keyri Documentation',
      },
    };
  },
  footer: {
    text: `© Keyri, Inc. ${new Date().getFullYear()}`,
  },
};

export default config;
