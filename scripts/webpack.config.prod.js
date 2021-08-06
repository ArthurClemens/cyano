const config = require('./webpack.config');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const { env } = process;

config.mode = 'production';

config.optimization = {
  minimizer: [new TerserPlugin()],
};

config.plugins.push(new CompressionPlugin());

if (env.ANALYSE) {
  config.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = config;
