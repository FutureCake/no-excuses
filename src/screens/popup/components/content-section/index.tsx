import React, { PropsWithChildren } from "react";
import "./style.scss";

export type ContentSectionProps = PropsWithChildren & {
    title: string;
    onClose?: () => void;
}

export default function ContentSection(props: ContentSectionProps) {

    const { title, children, onClose } = props;

    return (
        <section className="content-section">
            <div className="content-section-header">
                <h2>{title}</h2>
                {onClose && <h3 onClick={onClose}>close</h3>}
            </div>
            {children}
        </section>
    );
}