import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {
	return [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
		template: paths.html
	}),
	new MiniCssExtractPlugin({
		filename: isDev ? "css/[name].[contenthash:8].css" : "css/[name].[contenthash:8].css",
		chunkFilename: isDev ? "css/[name].[contenthash:8].css" : "css/[name].[contenthash:8].css",
	})
]
}