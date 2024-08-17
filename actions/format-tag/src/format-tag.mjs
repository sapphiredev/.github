import { getInput, setOutput } from '@actions/core';

function formatTag(tag) {
	const parsed = /(^@.*\/(?<package>.*)@v?)?(?<semver>\d+.\d+.\d+)-?.*/.exec(tag);

	if (parsed?.groups) {
		return {
			package: parsed.groups.package.replace('plugin-', ''),
			semver: parsed.groups.semver
		};
	}

	return null;
}


const tag = getInput('tag', { required: true });
const parsed = formatTag(tag);

if (parsed) {
	setOutput('package', parsed.package);
	setOutput('semver', parsed.semver);
}
