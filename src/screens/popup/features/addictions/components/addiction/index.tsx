import React, { useState } from "react";
import './style.scss';

export interface AddictionProps {
    name: string;
    index: number;
}

export default function Addiction(props: AddictionProps) {

    const { name, index } = props;
    const [hovering, setHovering] = useState(false);

    return (
        <div className="addiction" onMouseOver={() => setHovering(true)} onMouseOut={() => setHovering(false)}>
            {hovering && <h3 className="edit-addiction">Edit</h3>}
            <h3 className="addiction-title">{name}</h3>
        </div>
    )
}