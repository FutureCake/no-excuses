import React, { useEffect, useState } from "react";
import useBlockedDomains from "../../hooks/domains";
import Overlay from "./features/overlay";
import QuickAdd from "./features/quick-add";

export default function Content() {

    const addictions = useBlockedDomains();
    const [matchedAddictionId, setMatchedAddictionId] = useState<number>();
    const [quickAddVisible, setQuickAddVisible] = useState<boolean>(true);

    useEffect(() => {

        if (!addictions) return;

        for (let i = 0; i < addictions.length; i++) {
            const addiction = addictions[i];

            if (location.href.includes(addiction.url)) {
                setMatchedAddictionId(addiction.id);
                return;
            }
        }

        setMatchedAddictionId(undefined);

    }, [addictions]);

    if (matchedAddictionId !== undefined) return <Overlay addictionId={matchedAddictionId} />
    else if (quickAddVisible) return <QuickAdd />
    else return null;

}