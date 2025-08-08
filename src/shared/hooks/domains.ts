import { useEffect, useState } from "react";
import { isErr } from "../helpers/errors";
import { getBlockedDomains } from "../services/storage";
import { BlockedDomain } from "../types/types";
import useDomainsUpdated from "./domains-updated";

export default function useBlockedDomains() {

    const [addictions, setAddictions] = useState<BlockedDomain[]>();

    useDomainsUpdated(setAddictions);

    useEffect(() => {
        getBlockedDomains().then((domains) => {

            if (isErr(domains)) return;
            setAddictions(domains.value);
        });
    }, []);

    return addictions;
}