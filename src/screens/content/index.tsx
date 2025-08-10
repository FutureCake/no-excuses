import React, { useState } from "react";
import Add from "../../assets/icons/add.png";
import Block from "../../assets/icons/block.png";
import { addBlockedDomains } from "../../shared/services/storage";
import Overlay from "./features/overlay";
import QuickAction from "./features/quick-action";
import useIsBlockedDomain from "./hooks/is-blocked";

export default function Content() {

    const blockedId = useIsBlockedDomain(location.href);
    const [exited, setExited] = useState<boolean>(false);

    const onBlock = () => {
        addBlockedDomains(location.hostname.slice(5));
    }

    if (exited && blockedId !== undefined) return <QuickAction icon={Block} title="Block website again" onClick={() => setExited(false)} edgePadding={25} />
    else if (blockedId !== undefined) return <Overlay addictionId={blockedId} onRemove={() => setExited(true)} />
    else return <QuickAction icon={Add} title="Block this website" onClick={onBlock} edgePadding={25} />
}