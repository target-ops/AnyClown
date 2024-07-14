chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getGitUrl") {
    let gitUrl = window.location.href;
    let supportedDomains = [
      'github.com',
      'gitlab.com',
      'bitbucket.org'
    ];
    
    let domain = new URL(gitUrl).hostname;
    
    if (supportedDomains.includes(domain)) {
      chrome.runtime.sendMessage({action: "cloneToVSCode", gitUrl: gitUrl});
    } else {
      alert("This extension only supports GitHub, GitLab, and Bitbucket repositories.");
    }
  }
});