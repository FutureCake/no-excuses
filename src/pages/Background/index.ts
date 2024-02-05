import { BlockedDomain } from "../../Components/Addiction/Addiction";
import { ExtensionMessage } from "../../Utils/types";

const blocked: BlockedDomain[] = [
    {
        id: 12334,
        domain: "www.youtube.com"
    },
    {
        id: 12335,
        domain: "www.instagram.com"
    },
    {
        id: 12336,
        domain: "www.buzzfeed.com"
    }
]

chrome.runtime.onMessage.addListener((message: ExtensionMessage, _, response) => {
    response(blocked);
});


// chrome.webRequest.onBeforeRequest.addListener((details) => {
// }, {urls: ["<all_urls>"]})