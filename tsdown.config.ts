import { defineConfig, type UserConfig } from 'tsdown';

const baseOptions: UserConfig = {
	minify: true,
	target: 'node24'
};

export default [
	defineConfig({
		...baseOptions,
		tsconfig: 'actions/format-tag/tsconfig.json',
		entry: ['actions/format-tag/src/format-tag.mts'],
		outDir: 'actions/format-tag/dist/'
	})
];
