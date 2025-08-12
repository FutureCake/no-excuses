import React, { useState } from "react";
import "../../../../../../shared/styles/containers.scss";
import './style.scss';

export interface AddictionProps {
    name: string;
    id: number;
    onEdit?: (id: number) => void;
    onRemove?: (id: number) => void;
    onStats?: (id: number) => void;
}

export default function Addiction(props: AddictionProps) {

    const { name, id, onEdit, onRemove, onStats } = props;
    const [showActions, setShowActions] = useState(false);

    const setActionVisibility = (mouseOver: boolean) => {
        setShowActions(mouseOver && (!!onStats || !!onRemove || !!onEdit));
    }

    return (
        <div className="addiction addiction-content-container" onMouseOver={() => setActionVisibility(true)} onMouseOut={() => setActionVisibility(false)}>
            <h3 className="addiction-title">{name}</h3>
            {(showActions) &&
                <div className="addiction-actions">
                    {onStats && <button onClick={() => onStats(id)} className="addiction-action">Stats</button>}
                    {onEdit && <button onClick={() => onEdit(id)} className="addiction-action">Edit</button>}
                    {onRemove && <button onClick={() => onRemove(id)} className="addiction-action">Delete</button>}
                </div>
            }
        </div>
    )
}