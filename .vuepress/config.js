const wikilinks = require("@ceilfors/markdown-it-wikilinks")({
  baseURL: "/notes/",
});

module.exports = {
  title: "Wisen's notes",
  markdown: {
    extendMarkdown: (md) => {
      md.use(wikilinks);
    },
  },
};
