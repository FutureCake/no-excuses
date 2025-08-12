import React, { useEffect, useReducer } from "react";
import objReducer from "../../../../shared/helpers/object-reducer";
import { updateBlockedDomain } from "../../../../shared/services/storage";
import "../../../../shared/styles/containers.scss";
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
    const [values, dispatch] = useReducer(objReducer<Omit<BlockedDomain, "id" | "failures" | "preventions">>, addiction ?? {
        allowExcuses: false,
        name: "",
        url: "",
        allowTimeConstraints: false,
        timeConstraints: []
    });

    useEffect(() => {
        if (!addiction) return;
        dispatch(addiction);
    }, [addiction]);

    const onSave = () => {
        updateBlockedDomain(addictionId, (current) => {
            return { ...current, ...values };
        });

        onClose?.();
    }

    if (!addiction) return null;

    return (
        <ContentSection title={`Edit ${values.name}`} onClose={onSave}>
            <section className="edit-container">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input className="addiction-text-input-18" type="text" name="name" id="name" onChange={(e) => dispatch({ name: e.target.value })} value={values.name} />
                </div>
                <div>
                    <label htmlFor="url">Url:</label>
                    <input className="addiction-text-input-18" type="text" name="url" id="url" onChange={(e) => dispatch({ url: e.target.value })} value={values.url} />
                </div>
                <div style={{ display: "flex" }}>
                    <div id="excuses-wrapper">
                        <input id="allow-excuses" name="allow-excuses" type="checkbox" onChange={(e) => dispatch({ allowExcuses: e.target.checked })} checked={values.allowExcuses} />
                        <label htmlFor="allow-excuses">Allow excuses</label>
                    </div>
                    <div id="excuses-wrapper" style={{ marginLeft: 15 }}>
                        <input id="allow-time-contstraints" name="allow-time-contstraints" type="checkbox" onChange={(e) => dispatch({ allowTimeConstraints: e.target.checked })} checked={values.allowTimeConstraints} />
                        <label htmlFor="allow-time-contstraints">Allow time constraints</label>
                    </div>
                </div>
            </section>
            <div style={{ display: "none" }}>
                <h3>Time Constraints</h3>
                <section className="addiction-content-container" id="edit-container">
                    <p>Coming soon :)</p>
                </section>
            </div>
        </ContentSection>
    )
}