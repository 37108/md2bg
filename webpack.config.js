module.exports = {
  mode: 'production',
  resolve: { extensions: ['.ts', '.js'] },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{ loader: 'ts-loader', options: { transpileOnly: true } }],
        exclude: /node_modules/,
      },
    ],
  },
}