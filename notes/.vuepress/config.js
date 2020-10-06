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
  themeConfig: {
    nav: [
      // { text: "Radar", link: "/radar/" },
      {
        text: "What's top of mind",
        link: "/§What's_top_of_mind.html",
      },
      // { text: "Decision Records", link: "/decisions/" },
      // { text: "Operations", link: "/operations/" },
    ],
  }
};
