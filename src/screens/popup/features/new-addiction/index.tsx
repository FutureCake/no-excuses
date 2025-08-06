import React from "react";
import { addBlockedDomains } from "../../../../services/storage";
import { isErr } from "../../../../utils/helpers";
import useValidUrl from "./hooks/valid-url";
import './style.scss';

export default function NewAddiction() {

    const { valid, domain, setUrl, url } = useValidUrl();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value);
    }

    const addAddiction = async () => {
        if (!domain || !valid) return;

        const result = await addBlockedDomains({
            name: domain,
            url: domain
        });

        if (isErr(result)) console.log("something went wrong while adding");

        setUrl("");
    }

    return (
        <div id="new-addiction">
            <input id="new-addiction-input" type="text" placeholder="Add a new addiction url" value={url} onChange={onChange} />
            {valid && <button onClick={addAddiction}>{`Block ${domain}`}</button>}
        </div>
    );
}