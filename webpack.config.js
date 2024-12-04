const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // точка входу
  output: {
    path: path.resolve(__dirname, 'dist'), // вихідна папка
    filename: 'bundle.js', // файл виходу
  },
  module: {
    rules: [
      {
        test: /\.js$/, // для всіх .js файлів
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // використовуємо babel-loader
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // використовуємо наш HTML-шаблон
    }),
  ],
  mode: 'development', // Режим розробки
  devtool: 'source-map', // для зручності дебагу
};
