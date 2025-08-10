import React, { useState } from 'react';
import { isErr } from '../../shared/helpers/errors';
import useBlockedDomains from '../../shared/hooks/domains';
import { removeBlockedDomains } from '../../shared/services/storage';
import AddictionStats from './features/addiction-stats';
import Addictions from './features/addictions';
import EditAddiction from './features/edit-addiction';
import NewAddiction from './features/new-addiction';
import './style.scss';

export default function Popup() {

    const addictions = useBlockedDomains();

    const [content, setContent] = useState<"addictions" | "edit" | "stats">("addictions");
    const [addictionId, setAddictionId] = useState<number>();

    const onRemoveAddiction = async (id: number) => {

        const result = await removeBlockedDomains(id);
        if (isErr(result)) console.log("Failed to remove addiction");
    }

    const showView = (view: "addictions" | "edit" | "stats", id?: number) => {
        setContent(view);
        setAddictionId(id);
    };

    const onEditAddiction = (id: number) => showView("edit", id);
    const onShowAddictionStats = (id: number) => showView("stats", id);
    const onCloseAction = () => showView("addictions");

    return (
        <div id="popup">

            <h1 id="popup-title">Digital Addictions</h1>
            <NewAddiction />

            {content === "addictions" && <Addictions
                onRemoveAddiction={onRemoveAddiction}
                onEditAddiction={onEditAddiction}
                onShowAddictionStats={onShowAddictionStats}
                addictions={addictions}
            />}

            {(content === "edit" && addictionId !== undefined) &&
                <EditAddiction addictionId={addictionId} onClose={onCloseAction} />
            }

            {(content === "stats" && addictionId !== undefined) &&
                <AddictionStats addictionId={addictionId} onClose={onCloseAction} />
            }
        </div>
    )
}