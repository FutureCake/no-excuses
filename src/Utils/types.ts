import { BlockedDomain } from "../Components/Addiction/Addiction";

type Entity = "background" | "content" | "popup" | "newTab";
type Action = "update" | "remove" | "get" | "add" | "set";

interface ExtensionMessage {
    sender: Entity;
    recipient: Entity;
    action?: Action;
    domains?: BlockedDomain[] | BlockedDomain;
}

export {
    Action, Entity, ExtensionMessage
};

