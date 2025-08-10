import { useEffect, useState } from "react";
import { isErr } from "../../../../../shared/helpers/errors";
import { getBlockedDomain } from "../../../../../shared/services/storage";
import { BlockedDomain } from "../../../../../shared/types/types";

export default function useBlockedDomain(domainId: number): BlockedDomain | undefined {

    const [domain, setDomain] = useState<BlockedDomain>();

    useEffect(() => {

        (async () => {
            const result = await getBlockedDomain(domainId);

            if (isErr(result)) {
                console.log("Failed to get blocked domain with id", domainId);
                return;
            }

            setDomain(result.value);
        })();

    }, [domainId]);

    return domain;
}