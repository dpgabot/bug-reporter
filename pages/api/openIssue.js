import { Octokit } from "@octokit/core";
import { useRouter } from "next/router";

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
    ${values.tryingToDo}

    ## Expected Behavior
    ${values.expectedBehaviour}
    
    ## Current Behavior
    ${values.actualResult}
    
    ## Environment used
    ${values.environment.toString}
    
    ## Steps to Reproduce
    ${values.reproductionSteps}
    
    `;
}
export default async (req, res) => {
  const octokit = new Octokit({
    auth: TOKEN,
  });

  if (req.method === "POST") {
    let values = req.body;
    let octoResp = await octokit.request("POST /repos/{owner}/{repo}/issues", {
      owner: GITHUB_OWNER,
      repo: GITHUB_REPO,
      title: values.issueTitle || "Issue on " + GITHUB_REPO,
      body: buildIssueBody(values),
      assignees: ["dpgabot"],
    });

    if (octoResp.data.html_url) {
      res.writeHead(302, {
        Location: `/thankYou?issueUrl=${octoResp.data.html_url}`,
      });
      res.end();
    } else {
      console.log(octoResp);
      res.writeHead(302, {
        Location: `/submissionError`,
      });
      res.end();
    }
  }
};
