module.exports = {
    "title": "Yunin blog",
    "description": "Blog",
    "dest": "public",
    "head": [
        [
            "link",
            {
                "rel": "icon",
                "href": "/favicon.ico"
            }
        ],
        [
            "meta",
            {
                "name": "viewport",
                "content": "width=device-width,initial-scale=1,user-scalable=no"
            }
        ]
    ],
    "theme": "reco",
    "themeConfig": {
        "nav": [{
                "text": "Home",
                "link": "/",
                "icon": "reco-home"
            },
            {
                "text": "TimeLine",
                "link": "/timeline/",
                "icon": "reco-date"
            }
        ],
        "subSidebar": "auto",
        "type": "blog",
        "blogConfig": {
            "category": {
                "location": 2,
                "text": "Category"
            },
            "tag": {
                "location": 3,
                "text": "Tag"
            }
        },

        "logo": "/logo.png",
        "search": true,
        "searchMaxSuggestions": 10,
        "lastUpdated": "Last Updated",
        "author": "Yunin",
        "authorAvatar": "/avatar.png",
        "record": "xxxx",
        "startYear": "2021"
    },
    "markdown": {
        "lineNumbers": true,
        extendMarkdown: md => {
            md.set({
                breaks: true
            })
            md.use(require('markdown-it-plantuml-ex'))
        }
    }
}