import React, { useState } from "react";

export type QuickActionProps = {
    icon: string;
    title: string;
    onClick?: () => void;
}

export default function QuickAction(props: QuickActionProps) {

    const { icon, title, onClick } = props;
    const [removed, setRemoved] = useState<boolean>(false);

    if (removed) return null;

    return (
        <div>
            <img src={icon} />
        </div>
    )
}