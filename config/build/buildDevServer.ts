import { BuildOptions } from './types/config';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";


export function buildDevServer(option: BuildOptions): DevServerConfiguration {
	const {port} = option
	return {
		port,
		open: true
	}
}