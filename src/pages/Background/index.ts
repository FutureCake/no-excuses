import { BlockedDomain } from "../../Components/Addictions/Addiction/Addiction";
import { ExtensionMessage } from "../../Utils/types";

const blocked: BlockedDomain[] = [
    {
        id: 12334,
        domain: "www.youtube.com",
        blockedOn: "23/02/2022",
        displayName: "Youtube"
    },
    {
        id: 12335,
        domain: "www.instagram.com",
        blockedOn: "23/02/2022",
        displayName: "Instagram"
    },
    {
        id: 12336,
        domain: "www.buzzfeed.com",
        blockedOn: "23/02/2022",
        displayName: "BuzzFeed"
    }
]

chrome.runtime.onMessage.addListener((message: ExtensionMessage, _, response) => {
    response(blocked);
});


// chrome.webRequest.onBeforeRequest.addListener((details) => {
// }, {urls: ["<all_urls>"]})