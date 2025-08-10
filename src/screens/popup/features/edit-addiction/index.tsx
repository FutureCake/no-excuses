import React from "react";
import ContentSection from "../../components/content-section";
import useBlockedDomain from "./hooks/blocked-domain";

export type EditAddictionProps = {
    addictionId: number;
    onClose?: () => void;
}

export default function EditAddiction(props: EditAddictionProps) {

    const { addictionId, onClose } = props;
    const addiction = useBlockedDomain(addictionId);

    if (!addiction) return null;

    return (
        <ContentSection title={`Edit ${addiction.name}`} onClose={onClose}>
            <label>Allow excuse</label>
            <input type="checkbox" />
            <div>
                <h3>Time constraints</h3>
            </div>
            <button></button>
        </ContentSection>
    )
}