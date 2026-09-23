import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'SynopStudio',
  favicon: 'images/logo.jpg',

  future: {
    v4: true, 
  },

  url: 'https://pei-synopstudio.github.io',
  baseUrl: '/docs/',
  organizationName: 'PEI-SynopStudio',
  projectName: 'SynopStudio',
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'SynopStudio',
      logo: {
        alt: 'SynopStudio Logo',
        src: 'images/logo.jpg', // substituir
      },
      items: [
        {
          type: 'dropdown',
          position: 'left',
          label: 'Milestones',
          items: [
            {type: "doc", docId: "milestones/milestone1", label: "M1 - Inception"},
            //{type: "doc", docId: "milestones/milestone2", label: "M2 - Elaboration"},
            //{type: "doc", docId: "milestones/milestone3", label: "MS3 - Digital Accessibility and Usability (Construction)"},
            //{type: "doc", docId: "milestones/milestone4", label: "MS4 - MVP (Construction)"},
          ],
        },
        {
          type: 'docSidebar',
          sidebarId: 'minutesSidebar',
          position: 'left',
          label: 'Minutes',
        },
        {
          to: '/calendar',
          position: 'left',
          label: 'Calendar',
        },
        /*
        {
          to: '/team',
          position: 'left',
          label: 'Team',
        },
        */
        /*
        {
          type: 'doc',
          docId: 'report',
          position: 'left',
          label: 'Report',
        },
        */
        {
          href: 'https://github.com/PEI-SynopStudio',
          label: 'GitHub',
          position: 'right',
        }
      ]
  },
    
  footer: {
    style: 'dark',
    copyright: `Copyright © 2026/2027 SynopStudio - Universidade de Aveiro`,
  },
  prism: {
    theme: prismThemes.github,
    darkTheme: prismThemes.dracula,
    },
  },
};
export default config;
