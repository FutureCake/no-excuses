import { BlockedDomain } from "../Components/Addiction/Addiction";

type Sender = "background" | "content" | "popup" | "newTab";

interface Message {
    message: string;
    sender: Sender;
}

interface PopupMessage extends Message {
    action: "update" | "remove" | "get" | "add" | "set";
    domains?: BlockedDomain[] | BlockedDomain;
}



interface ReplyMessage<T = void> {
    message: string;
    data?: T;
}

export {
    Message,
    PopupMessage,
    ReplyMessage,
    Sender
};
