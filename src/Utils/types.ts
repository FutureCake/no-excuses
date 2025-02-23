export type Entity = "background" | "content" | "popup" | "newTab";
export type Action = "update" | "remove" | "get" | "add" | "set";

export interface ExtensionMessage {
    sender: Entity;
    recipient: Entity;
    action?: Action;
    domains?: BlockedDomain[] | BlockedDomain;
}

export interface BlockedDomain {
    name: string;
    urls: string[];
}

