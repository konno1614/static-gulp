// module.exports = {
//     mode: 'production', // development or production
//     entry: './src/ts/script.ts',
//     output: {
//         path: `${__dirname}/dest/js`,
//         filename: "script.js"
//       },
//     module: {
//       rules: [
//         {
//           test: /\.ts$/,
//           use: 'ts-loader',
//         },
//       ],
//     },
//     resolve: {
//       extensions: [
//         '.ts', '.js',
//       ],
//     },
// };

const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dest/js/'),
  },
  mode: 'production',
  watch: true,
};
