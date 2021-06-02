//plugins
module.exports = [
    [
        'vuepress-plugin-mygitalk', {
            // 是否启用(关闭请设置为false)(default: true)
            enable: true,
            // 是否开启首页评论(default: true)
            home: true,
            // Gitalk配置
            gitalk: {
                // GitHub Application Client ID.
                clientID: 'd2fae2d69a57e6b975b3',
                // GitHub Application Client Secret.
                clientSecret: '972c2087c15e013de339e77a37870822da2c03f8',
                // GitHub repository. 存储评论的 repo
                repo: 'Yunin.github.io',
                // GitHub repository 所有者，可以是个人或者组织。
                owner: 'Yunin',
                // 设置语言(default: zh-CN)
                language: 'zh-CN',
            }
        }
    ],
    ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
    }],
    [
        '@vuepress/google-analytics',
        {
            'ga': '' // UA-00000000-0
        }
    ],
    ['@vuepress/active-header-links', {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
    }],
    ['@vuepress/back-to-top']
];