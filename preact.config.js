/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {object} env - options passed to CLI.
 * @param {WebpackConfigHelpers} helpers - object with useful helpers when working with config.
 **/
export default function (config, env, helpers) {
	/** you can change config here **/
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

  // ...
  console.log(config);
  config.plugins.push(new BundleAnalyzerPlugin({
    statsFilename: 'stats.json',
    openAnalyzer: false,
    generateStatsFile: true,
  }))
  console.log(config);
}
