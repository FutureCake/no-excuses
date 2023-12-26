console.log('This is the background page.');

chrome.webRequest.onBeforeRequest.addListener((details) => {
    console.log(details.url);
}, {urls: ["<all_urls>"]});