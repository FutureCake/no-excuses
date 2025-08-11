import { useEffect, useState } from "react";
import useBlockedDomains from "../../../shared/hooks/domains";
import { BlockedDomain } from "../../../shared/types/types";

export default function useIsBlockedDomain(url: string): BlockedDomain | undefined {

    const blockedDomains = useBlockedDomains();
    const [blocked, setBlocked] = useState<BlockedDomain>();

    useEffect(() => {

        if (blockedDomains === undefined) return;

        for (let i = 0; i < blockedDomains.length; i++) {
            const addiction = blockedDomains[i];

            if (location.href.includes(addiction.url)) {
                setBlocked(addiction);
                return;
            }
        }

        setBlocked(undefined);

    }, [url, blockedDomains]);

    return blocked;
}