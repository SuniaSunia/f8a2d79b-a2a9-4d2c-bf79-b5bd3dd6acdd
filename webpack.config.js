const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');  // To resolve paths

module.exports = {
  mode: 'production',
  entry: './src/index.js',  // Entry point of the app
  output: {
    path: path.resolve(__dirname, 'build'),  // The output directory where files will be stored
    filename: '[name].[contenthash].js',  // The filename of the bundle (with hash for cache busting)
    publicPath: '/',  // Correct path for assets
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',  // Ensure this path is correct
      filename: 'index.html',  // Output filename for HTML
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',  // Split chunks for better caching
    },
    minimize: true,  // Enable minimization for production builds
  },
  devtool: 'source-map',  // Enable source maps for debugging (optional)
};
