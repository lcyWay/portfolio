const path = require("path");
const Dotenv = require("dotenv-webpack");
const CopyPlugin = require("copy-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { BaseHrefWebpackPlugin } = require("base-href-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  mode: isDev ? "development" : "production",
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", "woff2"],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "tsconfig.json"),
      }),
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      favicon: path.resolve(__dirname, "public/logo.png"),
      minify: !isDev,
    }),
    new BaseHrefWebpackPlugin({ baseHref: "/" }),
    new CleanWebpackPlugin(),
    new VanillaExtractPlugin(),
    new MiniCssExtractPlugin(),
    new Dotenv({ systemvars: true }),
    ...(isDev
      ? []
      : [
          new CopyPlugin({
            patterns: [path.resolve(__dirname, "public")],
          }),
        ]),
  ],
  devServer: {
    port: 3000,
  },
  devtool: isDev && "source-map",
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["solid", "@babel/preset-typescript"],
          },
        },
      },
      {
        test: /\.ts$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-typescript"],
          },
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
        ],
      },
      {
        test: /\.woff2$/i,
        exclude: /node_modules/,
        use: {
          loader: "url-loader",
        },
      },
    ],
  },
};

