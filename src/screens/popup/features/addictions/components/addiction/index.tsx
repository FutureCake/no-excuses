import React, { useState } from "react";
import { isErr } from "../../../../../../shared/helpers/errors";
import { removeBlockedDomains } from "../../../../../../shared/services/storage";
import './style.scss';

export interface AddictionProps {
    name: string;
    id: number;
}

export default function Addiction(props: AddictionProps) {

    const { name, id } = props;
    const [hovering, setHovering] = useState(false);

    const removeAddiction = async (id: number) => {
        const result = await removeBlockedDomains(id);

        if (isErr(result)) console.log("Failed to remove addiction");
    }

    return (
        <div className="addiction" onMouseOver={() => setHovering(true)} onMouseOut={() => setHovering(false)}>
            <h3 className="addiction-title">{name}</h3>
            {
                hovering &&
                <div className="addiction-actions">
                    <button onClick={() => console.log("Stats")} className="addiction-action">Stats</button>
                    <button onClick={() => console.log("Edit")} className="addiction-action">Edit</button>
                    <button onClick={() => removeAddiction(id)} className="addiction-action">Delete</button>
                </div>
            }
        </div>
    )
}