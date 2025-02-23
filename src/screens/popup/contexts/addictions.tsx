import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { BlockedDomain } from "../../../Utils/types";

export interface IAddictionsContext {
    updateAddiction: (id: number, changes: Partial<BlockedDomain>) => void;
    removeAddiction: (id: number) => void;
    addAddiction: (data: BlockedDomain) => void;
    addictions: BlockedDomain[];
}

export const AddictionsContext = createContext<IAddictionsContext>({
    addictions: [],
    updateAddiction: (id: number, changes: Partial<BlockedDomain>): void => { throw new Error("Function not implemented."); },
    removeAddiction: (id: number): void => { throw new Error("Function not implemented."); },
    addAddiction: (data: BlockedDomain): void => { throw new Error("Function not implemented."); }
});

export function useAddictionContext(): IAddictionsContext {
    return useContext(AddictionsContext);
}

export interface AddictionsProviderProps extends PropsWithChildren {
    addictions?: BlockedDomain[];
}

export default function AddictionsProvider(props: AddictionsProviderProps) {

    const [addictions, setAddictions] = useState<BlockedDomain[]>([]);

    useEffect(() => {
        setAddictions(props.addictions ?? []);
    }, [props.addictions]);

    const updateAddiction = (id: number, changes: Partial<BlockedDomain>) => {

    }

    const removeAddiction = (id: number) => {

    }

    const addAddiction = (data: BlockedDomain) => {

    }

    const ctx = {
        addictions,
        updateAddiction,
        removeAddiction,
        addAddiction
    }

    return (
        <AddictionsContext.Provider value={ctx}>
            {props.children}
        </AddictionsContext.Provider>
    )
}