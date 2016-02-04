chrome.contextMenus.create({
    "title": "google 翻译",
    "contexts": ["selection"],
    "onclick": openTranslateUrl
});

function openTranslateUrl(info, tab) {
    var url = 'https://translate.google.com.hk/#auto/zh-CN/';
    var txt = info['selectionText'];
    chrome.tabs.create({"url":url+txt, "active": true});
}
