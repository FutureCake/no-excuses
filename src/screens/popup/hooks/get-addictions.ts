import { useEffect, useState } from "react";
import { BlockedDomain, ExtensionMessage } from "../../../Utils/types";

export default function getAddictions() {

    const [addictions, setAddictions] = useState<BlockedDomain[]>([]);

    useEffect(() => {
        getSavedAddictions();
    }, []);

    const getSavedAddictions = async (): Promise<void> => {

        const savedAddictions = await chrome.runtime.sendMessage<ExtensionMessage, BlockedDomain[]>({
            sender: "content",
            recipient: "background",
            action: "get"
        });
        setAddictions(savedAddictions);
    }

    return addictions;
}