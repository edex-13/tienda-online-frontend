const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src/index.js'),
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/',
		clean: true,
	},
	resolve: {
		extensions: ['.js'],
    alias: {
      'styles': path.resolve(__dirname, 'src/resources/styles/'),
      'images': path.resolve(__dirname, 'src/resources/images/'),
      'components': path.resolve(__dirname, 'src/main/components/'),
      'routes': path.resolve(__dirname, 'src/main/routes/'),
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
					},
				],
			},
			{
				test: /\.scss$/,
				use: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader'],
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
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		compress: true,
		open: true,
		historyApiFallback: true,
		port: 3005,
	},
};
