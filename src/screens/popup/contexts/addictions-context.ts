import { createContext } from "react";
import { BlockedDomain } from "../../../utils/types";

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