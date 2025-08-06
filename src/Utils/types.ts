export type Entity = "background" | "content" | "popup" | "newTab";
export type Action = "close-tab" | "toggle-quick-add";

export interface ExtensionMessage<T = undefined> {
    sender: Entity;
    recipient: Entity;
    action: Action;
    data?: T
}

export interface BlockedDomain {
    id: number;
    name: string;
    url: string;
}

export type Ok<T> = { type: 'ok'; value: T };
export type Err<E extends Error> = { type: 'err'; error: E };

export type Result<T, E extends Error = Error> = Ok<T> | Err<E>;