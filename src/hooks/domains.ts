import { useEffect, useState } from "react";
import { getBlockedDomains } from "../../../services/storage";
import { isErr } from "../../../utils/helpers";
import { BlockedDomain } from "../../../utils/types";
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