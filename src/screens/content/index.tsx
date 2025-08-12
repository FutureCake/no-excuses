import React, { useState } from "react";
import Add from "../../assets/icons/add.png";
import Block from "../../assets/icons/block.png";
import { addBlockedDomains } from "../../shared/services/storage";
import Overlay from "./features/overlay";
import QuickAction from "./features/quick-action";
import useIsBlockedDomain from "./hooks/is-blocked";

export default function Content() {

    const blocked = useIsBlockedDomain(location.href);
    const [exited, setExited] = useState<boolean>(false);

    const handleOverlayVisibility = (visible: boolean) => {
        setExited(visible);
    }

    const onBlock = () => {
        addBlockedDomains(location.hostname.slice(4));
    }

    if (exited && blocked !== undefined) return <QuickAction icon={Block} title="Block website again" onClick={() => handleOverlayVisibility(false)} edgePadding={25} />
    else if (blocked !== undefined) return <Overlay allowExcuses={blocked.allowExcuses} addictionId={blocked.id} onRemove={() => handleOverlayVisibility(true)} />
    else return <QuickAction icon={Add} title="Block this website" onClick={onBlock} edgePadding={25} />
}