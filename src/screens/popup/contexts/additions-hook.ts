import { useContext } from "react";
import { AddictionsContext, IAddictionsContext } from "./addictions-context";

export function useAddictionContext(): IAddictionsContext {
    return useContext(AddictionsContext);
}