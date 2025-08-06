export type Entity = "background" | "content" | "popup" | "newTab";
export type Action = "update" | "remove" | "get" | "add" | "set";

export interface ExtensionMessage {
    sender: Entity;
    recipient: Entity;
    action?: Action;
    domains?: BlockedDomain[] | BlockedDomain;
}

export interface BlockedDomain {
    id: number;
    name: string;
    url: string;
}

export type Ok<T> = { type: 'ok'; value: T };
export type Err<E extends Error> = { type: 'err'; error: E };

export type Result<T, E extends Error = Error> = Ok<T> | Err<E>;