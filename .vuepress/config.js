const markdown = require("./config/markdown-plantuml/");
const plugins = require("./config/plugin/");
const themeConfig = require("./config/theme/");
module.exports = {
    "title": "Yunin blog",
    "description": "Blog",
    "dest": "dist",
    "theme": "reco",
    themeConfig,
    markdown,
    plugins
}