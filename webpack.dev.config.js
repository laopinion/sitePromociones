const path = require("path");
const webpack = require('webpack');
/* css-loaders, style-loader y  extract-text-webpack-plugin */
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';
/* 
  Config Advanced dev
  Nota: siempre hay que copilar webpack la primera vez y luego si correr webpack-dev-server
*/
module.exports = {
  entry: {
    home: [path.resolve(__dirname, "src/entries/Home.jsx"), hotMiddlewareScript],
  },
  output: {
    path: path.resolve(__dirname, "dist/public"),
    filename: "js/[name].js"
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015", "react", "stage-2"]
          }
        }
      },
      {
        test: /\.json$/,
        exclude: /(node_modules)/,
        use: "json-loader"
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(sass|scss)$/,
        exclude: /(node_modules)/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1000000,
            fallback: "file-loader",
            name: "images/[name].[hash].[ext]"
          }
        }
      }
    ]
  },
  mode: 'development',
  plugins: [
    new ExtractTextPlugin("css/[name].css"),
    new webpack.HotModuleReplacementPlugin(),
  ]
};
