const webpack = require('webpack')

module.exports = {
  mode: 'production',
  resolve: { extensions: ['.ts', '.js'] },
  target: 'node',
  entry: {
    'build/bin': './src/bin/index.ts',
  },
  output: {
    path: __dirname,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{ loader: 'ts-loader', options: { transpileOnly: true } }],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new webpack.BannerPlugin({ banner: '#!/usr/bin/env node', raw: true })],
}
