// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/nightOwl");
const darkCodeTheme = require("prism-react-renderer/themes/palenight");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Web3 UX",
  tagline: "",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://blockchain-ui.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "blockchain-UI-Org/", // Usually your GitHub org/user name.
  projectName: "blockchain-ui", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: ["docusaurus-plugin-sass"],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      docs: {},
      // Replace with your project's social card
      image: "img/logo.png",
      navbar: {
        // title: "Web3 UX",
        // logo: {
        //   alt: "Web3 UX",
        //   src: "img/logo.png",
        //   style: { display: "none" },
        // },
        items: [
          // {
          //   type: "doc",
          //   docId: "intro",
          //   position: "left",
          //   label: "Docs",
          // },
          // {
          //   href: "https://www.chromatic.com/library?appId=63a670b1ce0472f1c60a3f59",
          //   position: "left",
          //   label: "Library",
          //   className: "external-link",
          // },
          // {
          //   href: "/blog",
          //   position: "left",
          //   label: "Blog",
          // },
          {
            href: "https://twitter.com/ui_blockchain",
            position: "right",
            className: "fa-brands fa-twitter twitter-icon",

            "aria-label": "Twitter Page",
          },
          {
            href: "https://github.com/Blockchain-UI-Org/Library",
            position: "right",
            className: "fa-brands fa-github",
            "aria-label": "GitHub repository",
          },
          // {
          //   type: 'search',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Docs",
                to: "/docs/intro",
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Web3 UX, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
