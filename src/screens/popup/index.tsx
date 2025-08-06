import React, { useEffect, useState } from "react";
import { addBlockedDomains, getBlockedDomains } from "../../services/storage";
import { isErr } from "../../utils/helpers";
import { BlockedDomain } from "../../utils/types";
import Addictions from "./features/addictions";
import NewAddiction from "./features/new-addiction";
import './style.scss';

export default function Popup() {

    const [addictions, setAddictions] = useState<BlockedDomain[]>();

    useEffect(() => {
        getBlockedDomains().then((domains) => {

            if (isErr(domains)) return;
            setAddictions(domains.value);
        });
    }, []);

    const onBlock = async (domain: string) => {
        const updatedDomains = await addBlockedDomains({
            id: Math.random() * 1000,
            url: domain,
            name: domain
        });

        if (isErr(updatedDomains)) return;

        setAddictions(updatedDomains.value);
    }

    return (
        <div id="popup">
            <h1 id="popup-title">Digital Addictions</h1>
            <NewAddiction onBlock={onBlock} />
            <Addictions addictions={addictions} />
        </div>
    )
}