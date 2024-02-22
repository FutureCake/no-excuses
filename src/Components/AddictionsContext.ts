import { createContext, useContext } from "react";
import { BlockedDomain } from "./Addictions/Addiction/Addiction";

interface IAddictionsContext {
    updateAddiction: (id: number, changes: Partial<BlockedDomain>) => void;
    removeAddiction: (id: number) => void;
    addAddiction: (data: BlockedDomain) => void;
    addictions: BlockedDomain[];
}

const AddictionsContext = createContext<IAddictionsContext>({
    addictions: [],
    updateAddiction: (id: number, changes: Partial<BlockedDomain>): void => { throw new Error("Function not implemented."); },
    removeAddiction: (id: number): void => { throw new Error("Function not implemented."); },
    addAddiction: (data: BlockedDomain): void => { throw new Error("Function not implemented."); }
});

function useAddictionContext(): IAddictionsContext {
    return useContext(AddictionsContext);
}

export default useAddictionContext;
export { AddictionsContext, IAddictionsContext };

