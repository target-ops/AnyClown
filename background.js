chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.sendMessage(tab.id, {action: "getGitUrl"});
  });
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "cloneToVSCode") {
      chrome.tabs.create({ url: `vscode://vscode.git/clone?url=${request.gitUrl}` });
    }
  });