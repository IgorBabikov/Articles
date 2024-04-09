import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolves } from './buildResolves';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const {mode, paths} = options
	return {
		mode,
		entry: paths.entry,
		module: {
			rules: buildLoaders(),
		 },
		 resolve: buildResolves(),
		output: {
			filename: '[name].[contenthash].js',
			path: paths.build,
			clean: true,
		},
		plugins: buildPlugins(options)
	}

}