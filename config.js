module.exports = {
  urlBase: 'https://surge.vercel.app/', // 后续部署后替换
  artifacts: [
    {
      name: 'Surge.conf',
      template: 'surge',
      provider: 'example', // 对应 provider/example.js
    },
  ],
};
