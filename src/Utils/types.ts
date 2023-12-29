type Sender = "background" | "content" | "popup" | "newTab";

interface Message {
    message: string;
    sender: Sender;
}

interface OnUrlMatched extends Message{
    url: string;
    tabId: number;
}


export {
    Message,
    OnUrlMatched, Sender
};
