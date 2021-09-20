const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src/index.js'),
	mode: 'production',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle[contenthash].js',
		publicPath: '/',
		clean: true,
	},
	resolve: {
		extensions: ['.js'],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: { minimize: true},
					},
				],
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				type: 'asset',
				test: /\.(png|jpg|svg)$/i,
			},
		],
	},

	plugins: [
		new htmlWebPackPlugin({
			injet: true,
			template: path.resolve(__dirname, 'public/index.html'),
			filename: './index.html',
		}),
	],
};
