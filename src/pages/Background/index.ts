
import { isErr } from "../../shared/helpers/errors";
import { getBlockedDomain, updateBlockedDomain } from "../../shared/services/storage";
import { Action, ExtensionMessage } from "../../shared/types/types";

chrome.runtime.onMessage.addListener((message: ExtensionMessage<any>, sender) => {

    if (message.recipient !== "background") return;

    if (message.sender === "content") handleContentMessage(message.action, message.data, sender);
});

async function handleContentMessage(action: Action, addictionId: number, sender: chrome.runtime.MessageSender) {

    if (action === "close-tab") {

        const tabId = sender.tab?.id;
        if (tabId) chrome.tabs.remove(tabId);

        console.log("CLOSE");

        const blockedDomain = await getBlockedDomain(addictionId);

        if (isErr(blockedDomain)) return;

        console.log(blockedDomain);

        updateBlockedDomain(addictionId, {
            preventions: [...blockedDomain.value.preventions, {
                datetime: new Date().toISOString(),
                doubtingFor: 0
            }]
        });
    }
}
