import { Octokit } from "@octokit/core";

const TOKEN = process.env.ACCESS_TOKEN;

const GITHUB_OWNER = process.env.NEXT_PUBLIC_GITHUB_OWNER
  ? process.env.NEXT_PUBLIC_GITHUB_OWNER
  : "dpgabot";

const GITHUB_REPO = process.env.NEXT_PUBLIC_GITHUB_REPO
  ? process.env.NEXT_PUBLIC_GITHUB_REPO
  : "submission-form";

const GITHUB_ASSIGNEES = process.env.GITHUB_ASSIGNEES
  ? process.env.GITHUB_ASSIGNEES.split(", ")
  : ["nathanfletcher", "nathanbaleeta"];

function buildIssueBody(values) {
  return `
    ## What were you trying to do
    ${values.toDo}

    ## Expected Behavior
    ${values.expectedResults}
    
    ## Current Behavior
    ${values.actualResults}
    
    ## Environment used
    ${values.environment}
    
    ## Steps to Reproduce
    ${values.stepsToReproduce}

    Created on: _${values.date}_
    
    `;
}
export default async (req, res) => {
  const octokit = new Octokit({
    auth: TOKEN,
  });

  if (req.method === "POST") {
    let values = JSON.parse(req.body);
    let octoResp = await octokit.request("POST /repos/{owner}/{repo}/issues", {
      owner: GITHUB_OWNER,
      repo: GITHUB_REPO,
      title: values.issueTitle || "Issue on " + GITHUB_REPO,
      body: buildIssueBody(values),
      assignees: ["dpgabot"],
    });
    if (octoResp.data.html_url) {
      res.writeHead(302, {
        Location: `/thank-you?issueUrl=${octoResp.data.html_url}`,
      });
      res.end();
    } else {
      console.log(octoResp);
      res.writeHead(302, {
        Location: `/submission-error`,
      });
      res.end();
    }

  }
};
