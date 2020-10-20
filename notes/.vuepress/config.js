const wikilinks = require("@ceilfors/markdown-it-wikilinks")({
  baseURL: "/",
});

module.exports = {
  title: "Wisen's notes",
  markdown: {
    extendMarkdown: (md) => {
      md.use(wikilinks);
    },
  },
  plugins: {
    'sitemap': {
      hostname: 'https://notes.ceilfors.com/'
    },
  },
  themeConfig: {
    nav: [
      {
        text: "What's top of mind",
        link: "/§What's_top_of_mind.html",
      },
    ],
  }
};
