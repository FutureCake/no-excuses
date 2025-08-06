import React from "react";
import useValidUrl from "./hooks/valid-url";
import './style.scss';

export type NewAddictionProps = {
    onBlock: (domain: string) => void;
}

export default function NewAddiction(props: NewAddictionProps) {

    const { onBlock } = props;
    const { valid, domain, setUrl, url } = useValidUrl();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value);
    }

    const addAddiction = () => {
        if (!domain || !valid) return;

        onBlock(domain);
        setUrl("");
    }

    return (
        <div id="new-addiction">
            <input id="new-addiction-input" type="text" placeholder="Add a new addiction url" value={url} onChange={onChange} />
            {valid && <button onClick={addAddiction}>{`Block ${domain}`}</button>}
        </div>
    );
}