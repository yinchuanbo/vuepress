module.exports = {
    title: "笔记大全",
    description: '谁要是游戏人生，他就一事无成；谁不能主宰自己，永远是一个奴隶。',
    dest: 'public',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    theme: 'reco',
    themeConfig: {
        nav: [
            { text: '首页', link: '/', icon: 'reco-home' },
            { text: '时间线', link: '/timeline/', icon: 'reco-date' },
            {
                text: '文档',
                icon: 'reco-message',
                items: [
                    { text: '代码整理', link: '/docs/theme-reco/' }
                ]
            },
        ],
        sidebar: {
            '/docs/theme-reco/': [
                '',
                'theme',
                'plugin',
                'api'
            ]
        },
        type: 'blog',
        // 博客设置
        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认 “分类”
            },
            tag: {
                location: 3, // 在导航栏菜单中所占的位置，默认3
                text: '标签' // 默认 “标签”
            }
        },
        friendLink: [{
            title: 'vuepress-theme-reco',
            desc: 'A simple and beautiful vuepress Blog & Doc theme.',
            avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
            link: 'https://vuepress-theme-reco.recoluan.com'
        }, ],
        logo: '/logo.png',
        // 搜索设置
        search: true,
        searchMaxSuggestions: 10,
        // 自动形成侧边导航
        // sidebar: 'auto',
        // 最后更新时间
        lastUpdated: 'Last Updated',
        // 作者
        author: 'YinHAO',
        // 作者头像
        authorAvatar: '/avatar.png',
        // 备案号
        record: 'xxxx',
        // 项目开始时间
        startYear: '2017'
            /**
             * 密钥 (if your blog is private)
             */

        // keyPage: {
        //   keys: ['your password'],
        //   color: '#42b983',
        //   lineColor: '#42b983'
        // },

        /**
         * valine 设置 (if you need valine comment )
         */

        // valineConfig: {
        //   appId: '...',// your appId
        //   appKey: '...', // your appKey
        // }
    },
    markdown: {
        lineNumbers: true
    }
}