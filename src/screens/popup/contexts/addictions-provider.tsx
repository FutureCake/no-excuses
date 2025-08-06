import React, { PropsWithChildren, useEffect, useState } from "react";
import { addBlockedDomains, getBlockedDomains, removeBlockedDomains, updateBlockedDomain } from "../../../services/storage";
import { isErr } from "../../../utils/helpers";
import { BlockedDomain } from "../../../utils/types";
import { AddictionsContext } from "./addictions-context";

export default function AddictionsProvider(props: PropsWithChildren) {

    const [addictions, setAddictions] = useState<BlockedDomain[]>([]);

    useEffect(() => {
        getBlockedDomains().then((result) => {
            if (isErr(result)) return;
            setAddictions(result.value);
        });
    }, []);

    const updateAddiction = (id: number, changes: Partial<BlockedDomain>) => {
        updateBlockedDomain(id, changes);
    }

    const removeAddiction = (...ids: number[]) => {
        removeBlockedDomains(...ids);
    }

    const addAddiction = (addiction: BlockedDomain) => {
        addBlockedDomains(addiction);
    }

    const ctx = {
        addictions,
        updateAddiction,
        removeAddiction,
        addAddiction
    }

    return (
        <AddictionsContext.Provider value={ctx}>
            {props.children}
        </AddictionsContext.Provider>
    )
}