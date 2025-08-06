import { Action, ExtensionMessage } from "../../utils/types";

chrome.runtime.onMessage.addListener((message: ExtensionMessage, sender) => {

    if (message.recipient !== "background") return;

    if (message.sender === "content") handleContentMessage(message.action, sender);
});

function handleContentMessage(action: Action, sender: chrome.runtime.MessageSender) {

    if (action === "close-tab") {

        const tabId = sender.tab?.id;
        if (tabId) chrome.tabs.remove(tabId);
    }
}
