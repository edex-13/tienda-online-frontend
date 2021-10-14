const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src/index.js'),
	mode: 'production',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle[contenthash].js',
		clean: true,
	},
	resolve: {
		extensions: ['.js'],
		alias: {
      'styles': path.resolve(__dirname, 'src/resources/styles/'),
      'images': path.resolve(__dirname, 'src/resources/images/'),
      'components': path.resolve(__dirname, 'src/main/components/'),
      'utils': path.resolve(__dirname, 'src/main/utils/'),
      'data': path.resolve(__dirname, 'src/main/data/'),
      'actions': path.resolve(__dirname, 'src/library/actions/'),
    },
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
						options: {minimize: true},
					},
				],
			},
			{
				test: /\.scss$/,
				use: [ MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader'],
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
		new MiniCSSExtractPlugin({
			filename: 'styles/[name][contenthash].css',
		}),
	],
};
