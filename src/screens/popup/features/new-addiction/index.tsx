import React, { ChangeEvent, KeyboardEvent } from "react";
import { isErr } from "../../../../shared/helpers/errors";
import { addBlockedDomains } from "../../../../shared/services/storage";
import "../../../../shared/styles/buttons.scss";
import "../../../../shared/styles/inputs.scss";
import useValidUrl from "./hooks/valid-url";
import "./style.scss";

export default function NewAddiction() {

    const { valid, domain, setUrl, url } = useValidUrl();

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const formatted = e.target.value.trim().toLowerCase();
        setUrl(formatted);
    }

    const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        const key = e.key;

        if (key === 'Enter') {
            addAddiction();
        }
    }

    const addAddiction = async () => {
        if (!domain || !valid) return;

        const result = await addBlockedDomains(domain);

        if (isErr(result)) console.log("something went wrong while adding");

        setUrl("");
    }

    return (
        <div id="new-addiction">
            <input
                className="addiction-text-input-18"
                type="text"
                placeholder="Add a new addiction url"
                value={url}
                onChange={onChange}
                onKeyDown={onKeyPress}
            />
            {valid &&
                <button id="add-addiction" className="addiction-button-18" onClick={addAddiction}>
                    Add&nbsp;<span>{domain}</span>
                </button>
            }
        </div>
    );
}