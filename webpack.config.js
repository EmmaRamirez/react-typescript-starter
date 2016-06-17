const webpack = require('webpack');
const poststylus = require('poststylus');

module.exports = {
  entry: './js/index.tsx',
  output: {
    filename: './dist/bundle.js'
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
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1!postcss-loader'
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1!postcss-loader!stylus-loader'
      }
    ]
  },
  stylus: {
    use: [
      poststylus(['autoprefixer'])
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};
