import { BlockedDomain, ExtensionMessage } from "../../Utils/types";

const blocked: BlockedDomain[] = [
    {
        name: "youtube",
        urls: ["www.youtube.com"],
    },
    {
        name: "instagram",
        urls: ["www.instagram.com"],
    },
    {
        name: "buzzfeed",
        urls: ["www.buzzfeed.com"],
    }
]

chrome.runtime.onMessage.addListener((message: ExtensionMessage, _, response) => {
    response(blocked);
});


// chrome.webRequest.onBeforeRequest.addListener((details) => {
// }, {urls: ["<all_urls>"]})