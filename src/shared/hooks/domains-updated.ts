import { useEffect } from "react";
import { BlockedDomain } from "../types/types";

export default function useDomainsUpdated(onUpdate: (updates: BlockedDomain[]) => void) {

    const handleStorageChange = (
        changes: { [key: string]: chrome.storage.StorageChange },
        areaName: string
    ) => {
        if (areaName === "local" && changes.domains) {
            onUpdate(changes.domains.newValue);
        }
    };

    useEffect(() => {

        chrome.storage.onChanged.addListener(handleStorageChange);

        return () => {
            chrome.storage.onChanged.removeListener(handleStorageChange);
        };
    }, []);
}