var id = chrome.contextMenus.create({
    "title": "在 jira 中打开",
    "contexts": ["selection"],
    "onclick": openJiraUrl
});

function openJiraUrl(info, tab) {
    var url = 'http://jira.angelcrunch.com:32909/browse/';
    var bug_id = info['selectionText'];
    chrome.tabs.create({"url":url+bug_id, "active": true});
}
