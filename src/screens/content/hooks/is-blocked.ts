import { useEffect, useState } from "react";
import useBlockedDomains from "../../../shared/hooks/domains";

export default function useIsBlockedDomain(url: string): number | undefined {

    const blockedDomains = useBlockedDomains();
    const [blocked, setBlocked] = useState<number>();

    useEffect(() => {

        if (blockedDomains === undefined) return;

        for (let i = 0; i < blockedDomains.length; i++) {
            const addiction = blockedDomains[i];

            if (location.href.includes(addiction.url)) {
                setBlocked(addiction.id);
                return;
            }
        }

    }, [url, blockedDomains]);

    return blocked;
}