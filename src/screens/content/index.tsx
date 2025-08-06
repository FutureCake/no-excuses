import React, { useEffect, useState } from "react";
import useBlockedDomains from "../../hooks/domains";
import Overlay from "./features/overlay";
import QuickAdd from "./features/quick-add";

export default function Content() {

    const addictions = useBlockedDomains();
    const [showOverlay, setShowOverlay] = useState<boolean>(false);
    const [quickAddVisible, setQuickAddVisible] = useState<boolean>(true);

    useEffect(() => {
        const isAddiction = addictions?.find((addiction) => {
            return location.href.includes(addiction.url);
        });

        setShowOverlay(isAddiction !== undefined);

    }, [addictions]);

    if (showOverlay) return <Overlay />
    else if (quickAddVisible) return <QuickAdd />
    else return null;

}