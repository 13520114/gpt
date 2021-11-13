const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
  mode: mode,

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader:  "babel-loader"
        }
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },

  plugins: [new MiniCssExtractPlugin()],

  devtool: "source-map",
  devServer: {
    static: "./dist"
  }
};
