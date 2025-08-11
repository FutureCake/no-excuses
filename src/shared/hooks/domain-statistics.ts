import { useEffect, useState } from "react";
import { isErr } from "../helpers/errors";
import extractStatistics from "../helpers/extract-statistics";
import { getBlockedDomain, getBlockedDomains } from "../services/storage";
import { BlockedDomain, DomainStatistics, Result } from "../types/types";

export default function useDomainStatistics(addictionId: number): DomainStatistics | undefined;
export default function useDomainStatistics(): DomainStatistics[] | undefined;

export default function useDomainStatistics(addictionId?: number): DomainStatistics | DomainStatistics[] | undefined {

    const [statistics, setStatistics] = useState<DomainStatistics | DomainStatistics[]>();

    useEffect(() => {

        (async () => {

            let domains: Result<BlockedDomain | BlockedDomain[], Error>;

            if (addictionId) {
                domains = await getBlockedDomain(addictionId);
            } else {
                domains = await getBlockedDomains();
            }

            if (isErr(domains)) {
                console.log("Failed to fetch domain with id", addictionId);
                return;
            }

            if (Array.isArray(domains.value)) {
                setStatistics(
                    domains.value.map((domain) => {
                        return extractStatistics(domain);
                    })
                );

                return;
            }

            setStatistics(extractStatistics(domains.value));
        })();

    }, [addictionId]);

    return statistics;
}