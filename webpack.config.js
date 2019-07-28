module.exports = {
  mode: 'production',
  resolve: { extensions: ['.ts', '.js'] },
  target: 'node',
  entry: {
    'build/handler': './src/index.ts',
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
}
