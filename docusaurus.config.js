const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'OpenAIRE Login Docs',
  tagline: 'Secure Access Made Easy',
  url: 'https://openaire.github.io',
  baseUrl: '/login-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/openaire-favicon.ico',
  organizationName: 'openaire',
  projectName: 'login-docs',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        debug: false,
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        blog: false,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Docs',
        logo: {
          alt: 'OpenAIRE Logo',
          src: 'img/openaire-favicon.ico',
        },
        items: [
          {
            type: 'doc',
            docId: 'user/signup',
            position: 'left',
            label: 'End-User',
          },
          {
            type: 'doc',
            docId: 'manager/virtual-organisations',
            position: 'left',
            label: 'Manager',
          },
          {
            type: 'doc',
            docId: 'developer/guide-for-sps',
            position: 'left',
            label: 'Developer',
          },
          {
            type: 'doc',
            docId: 'glossary',
            position: 'left',
            label: 'Glossary',
          },
          {
            type: 'doc',
            docId: 'features',
            position: 'left',
            label: 'Features',
          },
          {
            type: 'doc',
            docId: 'use-cases',
            position: 'left',
            label: 'Use Cases',
          },
          {
            type: 'doc',
            docId: 'roadmap',
            position: 'left',
            label: 'Roadmap',
          },
          {
            href: 'https://github.com/rciam',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'grnet-logo',
          src: 'img/grnet-logo.png',
          href: 'https://grnet.gr',
        },
        copyright: `Copyright © 2016-${new Date().getFullYear()} <a href="http://www.grnet.gr/"> GRNET </a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
