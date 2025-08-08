import React, { useEffect, useState } from "react";
import useBlockedDomains from "../../shared/hooks/domains";
import Overlay from "./features/overlay";
import QuickAdd from "./features/quick-add";

export default function Content() {

    const addictions = useBlockedDomains();
    const [matchedAddictionId, setMatchedAddictionId] = useState<number>();
    const [quickAddVisible, setQuickAddVisible] = useState<boolean>(true);
    const [exited, setExited] = useState<boolean>(false);

    useEffect(() => {

        if (!addictions || exited) return;

        for (let i = 0; i < addictions.length; i++) {
            const addiction = addictions[i];

            if (location.href.includes(addiction.url)) {
                setMatchedAddictionId(addiction.id);
                return;
            }
        }

        setMatchedAddictionId(undefined);

    }, [addictions, exited]);

    const onRemoveOverlay = () => {
        setExited(true);
        setQuickAddVisible(false);
        setMatchedAddictionId(undefined);
    }

    if (matchedAddictionId !== undefined) return <Overlay addictionId={matchedAddictionId} onRemove={onRemoveOverlay} />
    else if (quickAddVisible) return <QuickAdd />
    else if (exited) return <button onClick={() => setExited(false)}>Help me and block this shit again</button>
    else return null;

}