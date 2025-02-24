import React, { useState } from "react";
import UrlActions from "./components/url-actions";
import UrlMatches from "./components/url-matches";
import UrlSegmentAction from "./components/url-segment-action";
import UrlSubdomainAction from "./components/url-subdomain-action";
import './style.scss';

export default function NewAddiction() {

    const [url, setUrl] = useState<string | undefined>(undefined);
    const [urlValid, setUrlValid] = useState<boolean>(false);
    const [action, setAction] = useState<"domain" | "subdomain" | "segment" | "exact">("exact");
    const [matches, setMatches] = useState<string[]>([]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setUrlValid(/^(https?:\/\/)?([a-zA-Z0-9-_.]+\.[a-zA-Z]{2,})(:\d+)?(\/[^\s]*)?(\?[^\s]*)?(#[^\s]*)?$/.test(value));
        setUrl(e.target.value || undefined);
    }

    const handleAction = (action: "domain" | "subdomain" | "segment" | "exact") => {

        if (url === undefined) return;

        setAction(action);
        if (action === "exact") setMatches((prev) => [...prev, url]);
        if (action === "domain") setMatches((prev) => [...prev, url.replace(/^(https?:\/\/)?([a-zA-Z0-9-_.]+\.[a-zA-Z]{2,})(:\d+)?(\/[^\s]*)?(\?[^\s]*)?(#[^\s]*)?$/, "$2")]);
    }

    return (
        <div id="new-addiction">
            <input id="new-addiction-input" type="text" placeholder="Add a new addiction url" value={url} onChange={onChange} />
            {(url !== undefined && urlValid) && <UrlActions url={url} onAction={handleAction} />}
            {(url !== undefined && action === "segment") && <UrlSegmentAction url={url} onComplete={() => { }} />}
            {(url !== undefined && action === "subdomain") && <UrlSubdomainAction url={url} onComplete={() => { }} />}
            {matches.length > 0 && <UrlMatches matches={matches} />}
        </div>
    );
}