import React from "react";
import { isErr } from "../../../../shared/helpers/errors";
import { addBlockedDomains } from "../../../../shared/services/storage";
import useValidUrl from "./hooks/valid-url";
import './style.scss';

export default function NewAddiction() {

    const { valid, domain, setUrl, url } = useValidUrl();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = e.target.value.trim().toLowerCase();
        setUrl(formatted);
    }

    const addAddiction = async () => {
        if (!domain || !valid) return;

        const result = await addBlockedDomains(domain);

        if (isErr(result)) console.log("something went wrong while adding");

        setUrl("");
    }

    return (
        <div id="new-addiction">
            <input id="new-addiction-input" type="text" placeholder="Add a new addiction url" value={url} onChange={onChange} />
            {valid && <button id="add-addiction" onClick={addAddiction}>{`Add ${domain}`}</button>}
        </div>
    );
}