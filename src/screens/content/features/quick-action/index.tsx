import { motion, PanInfo } from "framer-motion";
import React, { useState } from "react";

export type QuickActionProps = {
    icon: string;
    title: string;
    edgePadding: number;
    onClick?: () => void;
}

export default function QuickAction(props: QuickActionProps) {

    const { icon, title, edgePadding, onClick } = props;
    const [removed, setRemoved] = useState<boolean>(false);
    const [pos, setPos] = useState<{ x: number, y: number }>({ x: 0, y: 0 });

    const onDragEnd = (_: any, panEvent: PanInfo) => {

        const { x, y } = panEvent.point;

        setPos({ x, y });
    }

    if (removed) return null;

    return (
        <motion.div
            drag
            dragMomentum={false}
            onDragEnd={onDragEnd}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            animate={{
                x: pos.x,
                y: pos.y,
            }}
            style={{
                position: "fixed",
                transform: "translate(-50%, -50%)",
                top: 0,
                left: 0,
                background: "tomato",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: 60,
                height: 60,
                cursor: "grab",
                zIndex: 999999999,
            }}
        >
            <p onClick={() => setRemoved(true)}>X</p>
            <img src={chrome.runtime.getURL(icon)} onClick={onClick} />
            <p>{title}</p>
        </motion.div>
    )
}