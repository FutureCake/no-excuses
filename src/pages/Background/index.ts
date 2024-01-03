import { BlockedDomain } from "../../Components/Addiction/Addiction";
import { getBlockedDomains, overwriteBlockedDomains } from "../../Services/storage.service";
import { Message, PopupMessage, ReplyMessage } from "../../Utils/types";

type Reply = (res: ReplyMessage<BlockedDomain[]>) => void;

chrome.runtime.onMessage.addListener(async (msg: PopupMessage | Message, _, response: Reply) => {
    console.log("received message from: ", msg.sender);
    if (msg.sender === "content") requestBlockedUrls(response);
    if (msg.sender === "popup") processPopupMessage(msg as PopupMessage, response);
});

// CHECK: messy af fuck...
async function processPopupMessage(message: PopupMessage, res: Reply) {
    switch (message.action) {
        case "set": setBlockedDomains(res, ...message.domains as BlockedDomain[]); break;
        case "get": requestBlockedUrls(res); break;
    }
}

async function setBlockedDomains(response: Reply, ...domains: BlockedDomain[]) {
    await overwriteBlockedDomains(...domains);
    response({
        message: "overwrote the current blocked domains",
        data: domains
    });
}

async function requestBlockedUrls(response: Reply): Promise<void> {
    const urls = await getBlockedDomains();
    response({
        message: "your requested blocked urls",
        data: urls
    });
}






// chrome.webRequest.onBeforeRequest.addListener((details) => {
// }, {urls: ["<all_urls>"]})