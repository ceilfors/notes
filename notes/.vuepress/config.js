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
};
