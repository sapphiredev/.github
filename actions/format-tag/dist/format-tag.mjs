import { getInput, setOutput } from "@actions/core";

//#region actions/format-tag/src/format-tag.mts
function formatTag(tag) {
	const parsed$1 = /(?:^@.*\/(?<package>.*)@v?)?(?<semver>\d+.\d+.\d+)-?.*/.exec(tag);
	if (parsed$1?.groups) return {
		package: parsed$1.groups.package.replace("plugin-", ""),
		semver: parsed$1.groups.semver
	};
	return null;
}
const parsed = formatTag(getInput("tag", { required: true }));
if (parsed) {
	setOutput("package", parsed.package);
	setOutput("semver", parsed.semver);
}

//#endregion
export {  };