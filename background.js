
chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {
    if(/.*kite.zerodha.com.*/.test(tab.url) && info.status === 'complete'){
        await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['helper.js','content_script.js','content.css']
        });

        await chrome.scripting.insertCSS({
            target: { tabId: tab.id },
            files: ["content.css"]
        });
    }
});

chrome.devtools.network.onRequestFinished.addListener(
    function(request) {
      console.log(request.response);
    }
);

( async ()=>{
    const [tab] = await chrome.tabs.query(({active:true, currentWindow:true}))
    const kiteUrl = new RegExp(/.*zerodha.com\/.*/i);
    if(kiteUrl.test(tab.url)){
        TABID = tab.id;
        await setup();

        simulateClick('fullScreenIcon');

        chrome.scripting.executeScript({
            target : {tabId: TABID},
            function: ()=>{
            }
        },
        (injectionResults) => {
            [{result}] = injectionResults;
            if(result){
                console.log(result);
            }
        });
    }else{
        document.querySelector('div.title').style.display='none';
        document.querySelector('#buddyContainer').innerHTML = "<h3>This extension only works in zerodha website.</h3>"
    }
})