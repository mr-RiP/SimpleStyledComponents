const Path = require('path');

module.exports = function(env) {
	return {
		entry: function() {
			const entries = {};
			
			entries.home = "./Home/ReactServerEntry.js";
			entries.reactExposer = "./ReactExposerServerEntry.js";

			return entries;
		},
		output: {
			filename: '[name]Bundle.js',
			path: Path.join(__dirname, '../Dist'),
			globalObject: '(new Function("return this")())'
		},
		devtool: 'source-map',
		resolve: {
			extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".json"]
		},
		optimization: {
			minimize: false,
			splitChunks: {
				cacheGroups: {
					default: false,
					commons: {
						test: /node_modules[\\/](?!react[\\/]|react-dom[\\/])/,
						name: "vendor",
						chunks: "initial",
						minSize: 1
					},
					react: {
						test: /node_modules[\\/](react[\\/]|react-dom[\\/])/,
						name: "reactVendor",
						chunks: "initial",
						minSize: 1
					}
				}
			}
		},
		module: {
				rules: [
					{
						test: /\.tsx?$/,
						exclude: /node_modules/,
						loader: "awesome-typescript-loader"
					},
					{
						enforce: "pre",
						test: /\.js$/,
						exclude: /node_modules/,
						use: [
							"source-map-loader"
						]
					},
					{
						test: require.resolve("react"),
						use: [{
							loader: "expose-loader",
							options: "React"
						}]
					},
					{
						test: require.resolve("react-dom"),
						use: [{
							loader: "expose-loader",
							options: "ReactDOM"
						}]
					},
					{
						test: require.resolve("react-dom/server"),
						use: [{
							loader: "expose-loader",
							options: "ReactDOMServer"
						}]
					},
					{
						test: require.resolve("styled-components"),
						use: [{
							loader: "expose-loader",
							options: "Styled"
						}]
					},
				]
		}
	}
}
