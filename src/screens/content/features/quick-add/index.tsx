import React from "react";
import { addBlockedDomains } from "../../../../services/storage";
import './styles.scss';

export default function QuickAdd() {

    const onAdd = () => {
        const domain = location.host.slice(4, location.host.length - 1);
        addBlockedDomains({
            failures: [],
            preventions: [],
            url: domain,
            name: domain
        });
    }

    return (
        <div id="quick-add-addiction">
            <button onClick={onAdd}>Block this website</button>
        </div>
    )
}