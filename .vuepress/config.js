module.exports = {
  title: 'enumist',
  description: '임상시험 피험자 관리 서비스',
  base: '/',
  themeConfig: {
    sidebar: [
      {
        title: '가이드',
        collapsable: false,
        children: ['/guide/instruction', '/guide/getting-started'],
      },
      {
        title: '고급',
        collapsable: false,
        children: ['/advanced/subject-01'],
      },
    ],
  },
};
