const core = require('@actions/core');
const github = require('@actions/github');

const projectName = core.getInput('project-name');
const prDescription = github.context.payload &&
                      github.context.payload.pull_request &&
                      github.context.payload.pull_request.body;
core.info(prDescription);
const isValid = prDescription &&
                prDescription.includes(projectName);
if (!isValid) {
    core.setFailed(`PR description doesn't include ${projectName}.`);
}