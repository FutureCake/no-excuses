import React, { useEffect, useReducer } from "react";
import objReducer from "../../../../shared/helpers/object-reducer";
import { updateBlockedDomain } from "../../../../shared/services/storage";
import { BlockedDomain } from "../../../../shared/types/types";
import ContentSection from "../../components/content-section";
import useBlockedDomain from "./hooks/blocked-domain";
import "./style.scss";

export type EditAddictionProps = {
    addictionId: number;
    onClose?: () => void;
}

export default function EditAddiction(props: EditAddictionProps) {

    const { addictionId, onClose } = props;
    const addiction = useBlockedDomain(addictionId);
    const [values, dispatch] = useReducer(objReducer<Omit<BlockedDomain, "url" | "id" | "failures" | "preventions">>, addiction ?? {
        allowExcuses: false,
        name: ""
    });

    useEffect(() => {
        if (!addiction) return;
        dispatch(addiction);
    }, [addiction]);

    const onSave = () => {
        updateBlockedDomain(addictionId, (current) => {
            return { ...current, ...values };
        });
    }

    if (!addiction) return null;

    return (
        <ContentSection title={`Edit ${values.name}`} onClose={onClose}>
            <section id="edit-container">
                <div id="excuses-wrapper">
                    <input id="excuses" name="excuses" type="checkbox" onChange={(e) => dispatch({ allowExcuses: e.target.checked })} checked={values.allowExcuses} />
                    <label htmlFor="excuses">Allow excuses</label>
                </div>
                <div>
                    <label htmlFor="name">Display name</label>
                    <input type="text" name="name" id="name" onChange={(e) => dispatch({ name: e.target.value })} value={values.name} />
                </div>
                <div>
                    <h3>Time constraints</h3>
                </div>
                <button onClick={onSave}>Save edits</button>
            </section>
        </ContentSection>
    )
}