const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');  // To resolve the output path

module.exports = {
  mode: 'production', // Ensure the build is in production mode
  entry: './src/index.js', // Make sure this points to your main entry point
  output: {
    path: path.resolve(__dirname, 'build'), // The output folder where your build files will go
    filename: 'bundle.js', // The name of the main JS bundle
    publicPath: '/', // Ensure assets are correctly linked for production
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }, // Minify the HTML for production
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Ensure CSS is bundled
      },
      {
        test: /\.(js|jsx)$/, // Babel loader for JavaScript and JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html', // Template for the main HTML file
      filename: './index.html', // Output filename
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all', // Split chunks for better caching
    },
    minimize: true, // Enable minimization for production builds
  },
  devtool: 'source-map', // Enable source maps for easier debugging (optional)
};
