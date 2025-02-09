import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
  {
    text: '快速入门',
    link: '/zh/quickStarted/intro.md',
  },
  {
    text: '帮助文档',
    link: '/zh/guide/',
  },
  {
    text: 'API',
    link: '/zh/api/',
  },
  {
    text: '了解更多',
    children: [
      {
        text: '深入',
        children: [
          '/zh/advanced/任务分布式执行.md',
          '/zh/advanced/集成代码分析工具.md',
        ],
      },
      {
        text: '文章',
        children: [

        ],
      },
    ]
  },
  {
    text: '社区',
    children: [
      '/zh/community/contribute.md',
      '/zh/community/changelog.md',
      '/zh/community/joingroup.md',
      {
        text: '体验官方版本',
        link: 'https://tca.tencent.com/',
      }
    ]
  },
]
