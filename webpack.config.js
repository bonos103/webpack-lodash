const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'production',
  entry: {
    index1: './src/index1.js',
    index2: './src/index2.js',
    index3: './src/index3.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
  },
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
}
