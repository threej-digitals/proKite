
chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {
    // insert script to kite website only
    if(/.*kite.zerodha.com.*/.test(tab.url) && info.status === 'complete'){
        await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['helper.js','content_script.js']
        });

        await chrome.scripting.insertCSS({
            target: { tabId: tab.id },
            files: ["content.css"]
        });
    }
});
