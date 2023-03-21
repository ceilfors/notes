const wikilinks = require("@ceilfors/markdown-it-wikilinks")({
  baseURL: "/",
});

const getAllPageNames = (directory) => {
  return glob
    .sync(`${directory}/*.md`)
    .map((f) => f.replace(`${directory}/`, ""))
    .filter((f) => f !== "README.md");
};

module.exports = {
  title: "Wisen's notes",
  markdown: {
    extendMarkdown: (md) => {
      md.use(wikilinks);
    },
  },
  plugins: {
    plausible: { domain: "notes.ceilfors.com" },
    sitemap: {
      hostname: "https://notes.ceilfors.com/",
    },
  },
  themeConfig: {
    nav: [
      {
        text: "What's top of mind",
        link: "/§What's_top_of_mind.html",
      },
    ],
  },
};
