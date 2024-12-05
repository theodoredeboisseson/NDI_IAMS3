module.exports = {
  // Autres configurations...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',  // Assurez-vous que postcss-loader est utilisé ici
        ],
      },
    ],
  },
};
