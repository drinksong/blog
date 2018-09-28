module.exports = {
    // base: '/blog/'
    title: 'Drink`s blog',
    description: 'Learn young, learn fair.',
    base: '/blog/',
    themeConfig: {
        // 假定 GitHub。也可以是一个完整的 GitLab 网址
        repo: 'https://github.com/drinksong/blog',
        nav: [
            {
                text: 'Home',
                link: '/'
            },
            {
                text: 'Article',
                link: '/article/'
            },
            {
                text: 'About me',
                link: '/about/'
            }
        ],
        sidebar: {
            '/article/': [
                '',
                'react-context',
                'react-hoc',
                'shell-tut'
            ]
        }
    }
}

function genSidebarConfig (title) {
    return [
      {
        title,
        collapsable: false,
        children: [
          '',
          'test'
        ]
      }
    ]
  }