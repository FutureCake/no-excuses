import React from "react";
import { getHint } from "../../helpers/get-hint";
import './style.scss';

export interface UrlActionProps {
    url: string;
    onAction: (action: "domain" | "subdomain" | "segment" | "exact") => void;
}

export default function UrlActions(props: UrlActionProps) {

    const { url, onAction } = props;

    const [hint, setHint] = React.useState<string | undefined>(undefined)

    const showHint = (action: "domain" | "subdomain" | "segment" | "exact") => {
        const hint = getHint(action, url);
        setHint(hint);
    }

    const hideHint = () => {
        setHint(undefined);
    }

    return (
        <div id="url-actions">
            <button onMouseOver={_ => showHint("domain")} onMouseLeave={hideHint} onClick={_ => onAction("domain")} className="url-action">Match entire domain</button>
            <button onMouseOver={_ => showHint("subdomain")} onMouseLeave={hideHint} onClick={_ => onAction("subdomain")} className="url-action">Match sub domain</button>
            <button onMouseOver={_ => showHint("segment")} onMouseLeave={hideHint} onClick={_ => onAction("segment")} className="url-action">Match url segment</button>
            <button onMouseOver={_ => showHint("exact")} onMouseLeave={hideHint} onClick={_ => onAction("exact")} className="url-action">Match url exactly</button>
            {hint && <div>{hint}</div>}
        </div>
    )
}