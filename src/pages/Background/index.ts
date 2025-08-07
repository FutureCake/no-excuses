import { getBlockedDomain, updateBlockedDomain } from "../../services/storage";
import { isErr } from "../../utils/helpers";
import { Action, ExtensionMessage } from "../../utils/types";

chrome.runtime.onMessage.addListener((message: ExtensionMessage<any>, sender) => {

    if (message.recipient !== "background") return;

    if (message.sender === "content") handleContentMessage(message.action, message.data, sender);
});

async function handleContentMessage(action: Action, addictionId: number, sender: chrome.runtime.MessageSender) {

    if (action === "close-tab") {

        const tabId = sender.tab?.id;
        if (tabId) chrome.tabs.remove(tabId);

        const blockedDomain = await getBlockedDomain(addictionId);

        if (isErr(blockedDomain)) return;

        updateBlockedDomain(addictionId, {
            preventions: [...blockedDomain.value.preventions, {
                datetime: new Date(),
                doubtingFor: 0
            }]
        });
    }
}
