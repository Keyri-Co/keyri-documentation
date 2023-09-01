import React from 'react';
import { useRouter } from 'next/router';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';

const logo = (
  <svg width={72} height={35} xmlns='http://www.w3.org/2000/svg'>
    <g fill='none'>
      <path
        d='M31.652 12.892c-.86 0-1.53.26-2.008.781-.307.341-.54.762-.698 1.26-.14.444.23.858.701.858h4.058c.449 0 .816-.378.706-.807-.144-.56-.403-1.01-.777-1.348-.53-.496-1.19-.744-1.982-.744Zm0-2.962c1.182 0 2.247.215 3.195.643.947.429 1.73 1.105 2.347 2.03.556.814.917 1.76 1.082 2.835.074.489.114 1.144.12 1.966a.76.76 0 0 1-.77.756h-8.153c-.44 0-.801.364-.726.792.17.963.591 1.666 1.262 2.107.513.345 1.13.517 1.852.517.765 0 1.386-.21 1.864-.63.163-.142.314-.318.453-.529.162-.245.427-.417.724-.417h2.436c.465 0 .828.406.657.833-.217.544-.584 1.095-1.101 1.65-1.217 1.336-2.921 2.004-5.112 2.004-1.808 0-3.403-.563-4.785-1.689-1.382-1.126-2.073-2.957-2.073-5.495 0-2.378.621-4.2 1.864-5.47 1.252-1.268 2.873-1.903 4.864-1.903zM41.483 27.131c0-.252.215-.452.47-.438.365.016.713.004 1.043-.038.33-.042.609-.139.835-.29.217-.143.417-.441.6-.895.19-.454.269-.73.234-.832l-4.842-13.316a.769.769 0 0 1 .732-1.026h2.45c.343 0 .646.221.745.545l2.17 7.088c.225.734 1.28.726 1.493-.01l2.046-7.066c.095-.33.4-.557.748-.557h2.261c.538 0 .913.525.733 1.025l-4.507 12.486c-.939 2.604-1.682 4.218-2.23 4.84-.547.63-1.643.945-3.285.945-.33 0-.596-.005-.796-.013-.05 0-.107 0-.17-.002a.752.752 0 0 1-.73-.756zM63.493 9.968c.055 0 .102.003.14.008.02.003.026.005.046.005.166.002.31.14.31.305v2.768c0 .33-.291.585-.626.57-.183-.01-.33-.013-.443-.013-1.495 0-2.5.47-3.012 1.411-.287.53-.43 1.344-.43 2.445v5.799a.773.773 0 0 1-.778.767h-2.187a.773.773 0 0 1-.778-.767V11.063c0-.424.348-.767.778-.767h2.232c.296 0 .537.237.537.53 0 .533.741.75 1.107.356.137-.148.268-.271.392-.37.696-.562 1.6-.844 2.712-.844zM70 7.89a.773.773 0 0 1-.778.767H67.01a.773.773 0 0 1-.777-.767V6.11c0-.424.348-.767.777-.767h2.213c.43 0 .778.343.778.767Zm-3.768 3.173c0-.424.348-.767.777-.767h2.213c.43 0 .778.344.778.767v12.203a.773.773 0 0 1-.778.767H67.01a.773.773 0 0 1-.777-.767zM7.69 24.271c-.379 0-.7-.126-.96-.378a1.356 1.356 0 0 1-.392-.964V1.385c0-.39.13-.723.391-.998a1.33 1.33 0 0 1 .962-.379h2.492c.38 0 .7.127.962.379.26.275.391.608.391.998v8.329h.036L18.586.73c.356-.482.855-.723 1.496-.723h2.848c.878 0 1.317.425 1.317 1.274 0 .252-.095.527-.285.826l-7.868 9.911 7.904 10.222c.19.252.285.516.285.791 0 .85-.44 1.274-1.318 1.274l-2.92-.035c-.616 0-1.103-.24-1.459-.723l-6.872-8.844h-.178v8.225c0 .367-.13.688-.391.964a1.331 1.331 0 0 1-.962.378z'
        style={{
          fill: 'currentColor',
          fillOpacity: 1,
        }}
        transform='translate(1 1)'
      />
      <path
        d='M0 .344C0 .154.16 0 .356 0h8.19A.35.35 0 0 1 8.9.344v2.753a.35.35 0 0 1-.356.345H.356A.35.35 0 0 1 0 3.097ZM0 5.687c0-.19.16-.344.356-.344h8.19a.35.35 0 0 1 .355.344V8.44a.35.35 0 0 1-.356.344H.356A.35.35 0 0 1 0 8.44Z'
        style={{
          fill: 'currentColor',
          fillOpacity: 1,
        }}
        transform='translate(1 1)'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.901 29.558c1.475 0 2.67-1.155 2.67-2.58 0-1.426-1.195-2.582-2.67-2.582-1.474 0-2.67 1.156-2.67 2.581 0 1.426 1.196 2.581 2.67 2.581zm0 3.442c3.442 0 6.231-2.696 6.231-6.023 0-3.326-2.79-6.022-6.23-6.022-3.442 0-6.232 2.696-6.232 6.022S5.46 33 8.901 33z'
        style={{
          fill: 'currentColor',
          fillOpacity: 1,
        }}
        transform='translate(1 1)'
      />
    </g>
  </svg>
);

const config: DocsThemeConfig = {
  head: (
    <>
      <link rel='icon' href='/favicon.ico' />
    </>
  ),
  logo,
  project: {
    link: 'https://github.com/Keyri-Co',
  },
  sidebar: {
    defaultMenuCollapseLevel: 2,
  },
  primaryHue: { light: 240, dark: 200 },
  docsRepositoryBase: 'https://github.com/Keyri-Co/keyri-documentation/blob/main',
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
        images: [{ url: '/ogImage.png' }],
      },
    };
  },
  footer: {
    text: `© Keyri, Inc. ${new Date().getFullYear()}`,
  },
};

export default config;
