const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const pkg = require('./package.json');

const env = process.env.NODE_ENV || 'development';

module.exports = {
  entry: './src/index.tsx',
  mode: env,
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'main.js',
    chunkFilename: '[chunk].js'
  },
  plugins: [
    new WebpackNotifierPlugin({
      title: pkg.name,
      alwaysNotify: true
    }),
    new HtmlWebpackPlugin({
      title: pkg.name,
      description: pkg.description,
      template: './public/index.html'
    }),
    new WebpackPwaManifest({
      name: pkg.name,
      short_name: pkg.name,
      description: pkg.description,
      background_color: '#ffffff',
      theme_color: '#86C640',
      icons: [
        {
          src: path.resolve('public/favicon.ico'),
          sizes: "64x64 32x32 24x24 16x16",
          type: "image/x-icon"
        }
      ],
    
    })
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "@components": path.resolve(__dirname, 'src/components/'),
      "@ui": path.resolve(__dirname, 'src/components/@ui'),
      "@assets": path.resolve(__dirname, 'src/assets'),
      "@pages": path.resolve(__dirname, 'src/components/pages'),
      "@api": path.resolve(__dirname, 'src/api'),
    }
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?modules=true',
          'sass-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
    watchOptions: {
      poll: true
    },
    compress: true,
    port: 3030,
    host: 'localhost',
    hot: true,
    inline: true
  }
};