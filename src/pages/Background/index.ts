import { BlockedDomain } from "../../Components/Addiction/Addiction";
import { ExtensionMessage } from "../../Utils/types";

const blocked: BlockedDomain[] = [
    {
        id: 12334,
        url: "www.youtube.com"
    },
    {
        id: 12335,
        url: "www.instagram.com"
    },
    {
        id: 12336,
        url: "www.buzzfeed.com"
    }
]

chrome.runtime.onMessage.addListener((message: ExtensionMessage, _, response) => {
    response(blocked);
});


// chrome.webRequest.onBeforeRequest.addListener((details) => {
// }, {urls: ["<all_urls>"]})