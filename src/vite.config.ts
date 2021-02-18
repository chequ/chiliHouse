// const fs = require('fs');
const path = require('path');
// const dotenv = require('dotenv');
// const envFiles = [
//   /** default file */ `.env`,
//   /** mode file */ `.env.${process.env.NODE_ENV}`,
// ];

// for (const file of envFiles) {
//   const envConfig = dotenv.parse(fs.readFileSync(file));
//   for (const k in envConfig) {
//     process.env[k] = envConfig[k];
//   }
// }
module.exports = {
  // 反向代理
  host: '0.0.0.0',
  port: 4000,
  proxy: {
    '/api': {
      target: 'http://172.16.20.110:5050',
      changeOrigin: true,
      rewrite: (path: any) => path.replace(/^\/api/, ''),
    },
  },
};
