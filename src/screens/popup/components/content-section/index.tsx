import React, { PropsWithChildren } from "react";

export type ContentSectionProps = PropsWithChildren & {
    title: string;
    onClose?: () => void;
}

export default function ContentSection(props: ContentSectionProps) {

    const { title, children, onClose } = props;

    return (
        <section>
            <div>
                <h2>{title}</h2>
                {onClose && <h3 onClick={onClose}>close</h3>}
            </div>
            {children}
        </section>
    );
}