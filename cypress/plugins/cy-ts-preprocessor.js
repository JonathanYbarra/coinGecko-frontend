const wp = require('@cypress/webpack-preprocessor');
const ts = require('@cypress/ts-preprocessor');

const webpackOptions = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: { transpileOnly: true },
      },
    ],
  },
};

const options = {
  webpackOptions,
  typescript: ts,
};

module.exports = wp(options);

