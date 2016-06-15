const webpack = require('webpack');

module.exports = {
  entry: './js/index.tsx',
  output: {
    filename: 'bundle.js'
  },
  devtool: 'sourcemap',
  resolve: {
    extensions: ['', '.web.js', '.ts', '.js', '.jsx', '.tsx'],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.tsx?/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'ts-loader'],
      }
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};
