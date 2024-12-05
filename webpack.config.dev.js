const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    liveReload: true,
    hot: true,
    open: true,
    static: ['./'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,  // Pour extraire le CSS dans un fichier séparé
          'css-loader',                  // Pour traiter le CSS
          'postcss-loader',              // Pour traiter Tailwind via PostCSS
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',  // Génère un fichier CSS dans le répertoire de sortie
    }),
  ],
});
