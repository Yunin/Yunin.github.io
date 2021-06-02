//markdown support plantuml
module.exports = {
    lineNumbers: true,
    extendMarkdown: (md) => {
        md.set({
            breaks: true
        });
        md.use(require("markdown-it-plantuml-ex"));
    },
};