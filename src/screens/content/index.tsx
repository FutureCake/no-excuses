import React, { useState } from "react";
import { addBlockedDomains } from "../../shared/services/storage";
import Overlay from "./features/overlay";
import QuickAction from "./features/quick-action";
import useIsBlockedDomain from "./hooks/is-blocked";

export default function Content() {

    const blockedId = useIsBlockedDomain(location.href);
    const [exited, setExited] = useState<boolean>(false);

    const onBlock = () => {
        addBlockedDomains(location.href.slice(4));
    }

    if (exited) return <QuickAction icon={""} title={"Block website again"} onClick={() => setExited(false)} />
    else if (blockedId !== undefined) return <Overlay addictionId={blockedId} onRemove={() => setExited(true)} />
    else return <QuickAction icon="" title="Block this website" onClick={onBlock} />
}