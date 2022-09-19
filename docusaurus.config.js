// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/shadesOfPurple');
const darkCodeTheme = require('prism-react-renderer/themes/shadesOfPurple');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mon site a moi tout seul !',
  tagline: 'Je fais des trucs cools !',
  url: 'https://car-hibou-666.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/Logo_Car-Hibou-666.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Car-Hibou-666', // Usually your GitHub org/user name.
  projectName: 'car-hibou-666.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
              routeBasePath: 'tuto',
              tagsBasePath: 'tags',
              sidebarCollapsible: true,
              sidebarCollapsed: true,
              showLastUpdateAuthor: true,
              showLastUpdateTime: true,
              breadcrumbs: true,
              },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
              feedOptions: {
              type: 'rss',
              language: 'fr',
              title: 'Car-Hibou-666 Flux RSS active !',
              description: 'Chanceux que tu es ! Un nouvel article de Car-Hibou-666 vient de sortir !',
              copyright: `Copyright © ${new Date().getFullYear()} & tout Droit d'Auteur réservé a "Car-Hibou-666" !`,
            },
            path: 'blog',
            blogTitle: 'Titre de mon BLOG',
            blogDescription: 'La description de mon BLOG !',
            blogSidebarCount: 5,
            blogSidebarTitle: 'Les derniers articles :',
            tagsBasePath: 'tags',
            postsPerPage: 10, 
            authorsMapPath: 'authors.yml',
            sortPosts: 'descending',
            readingTime: ({content, defaultReadingTime}) =>
            defaultReadingTime({content, options: {wordsPerMinute: 250}}),
          },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Car-Hibou',
        logo: {
          alt: 'Car-Hibou Logo',
          src: 'img/Logo_Car-Hibou-666.png',
        },
        items: [
          {
            to: "docs/",
            label: "Tuto",
            position: "left",
          },
          { 
            to: "blog/", 
            label: "Blog", 
            position: "left" 
            },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} & tout Droit d'Auteur réservé a "Car-Hibou-666" !`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell','apacheconf','arduino','asciidoc','aspnet','awk','bash','batch','brainfuck','clike','cmake','csharp','css','csv','cypher','django','dns-zone-file','docker','editorconfig','gcode','git','graphql','http','java'],
      },
        colorMode: {
          defaultMode: 'dark',
          disableSwitch: false,
          respectPrefersColorScheme: true,
        },   
        docs: {
          sidebar: {
            hideable: true,
            autoCollapseCategories: true,
          },
        },
    }),
};

module.exports = config;
