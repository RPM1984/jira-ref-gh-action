const core = require('@actions/core');
const github = require('@actions/github');

const projectName = core.getInput('project-name');
const prDescription = github.context.payload?.pull_request?.description;
const isValid = prDescription.includes(projectName);
core.info(prDescription);
if (!isValid) {
    core.setFailed(`PR description doesn't include ${projectName}.`);
}