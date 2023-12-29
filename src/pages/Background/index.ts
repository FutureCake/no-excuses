// chrome.webRequest.onBeforeRequest.addListener((details) => {

    // if(details.url.indexOf("www.netflix") !== -1) {
    
        // console.log("found netflix send message");

        // chrome.runtime.sendMessage<OnUrlMatched>({
        //     sender: "background",
        //     message: "url matched",
        //     url: details.url,
        //     tabId: details.tabId
        // });
    // }
// }, {urls: ["<all_urls>"]});