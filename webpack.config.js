const path = require('path')

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.join(__dirname, './public'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.s?css$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	devtool: 'eval-cheap-module-source-map',
	devServer: {
		static: {
			directory: path.join(__dirname, './public'),
		},
	},
	mode: 'development',
}
