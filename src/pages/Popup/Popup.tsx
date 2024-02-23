import React, { useCallback, useEffect, useState } from 'react';
import AddAddiction from '../../Components/AddAddiction/AddAddiction';
import { BlockedDomain } from '../../Components/Addictions/Addiction/Addiction';
import AddictionsList from '../../Components/Addictions/List/AddictionsList';
import { AddictionsContext, IAddictionsContext } from '../../Components/AddictionsContext';
import QuickAddAddiction from '../../Components/QuickAddAddiction';
import { ExtensionMessage } from '../../Utils/types';
import './Popup.scss';


function Popup() {

    const [addictions, setAddictions] = useState<BlockedDomain[]>([]);

    useEffect(() => {
        getSavedAddictions();
    });

    const getSavedAddictions = useCallback(async (): Promise<void> => {

        const savedAddictions = await chrome.runtime.sendMessage<ExtensionMessage, BlockedDomain[]>({
            sender: "content",
            recipient: "background",
            action: "get"
        });
        setAddictions(savedAddictions);
    }, [])

    const onAddAddiction = (addiction: BlockedDomain): void => {
        setAddictions([...addictions, addiction]);
    }

    const onRemoveAddiction = (id: number): void => {
        const filtered = addictions.filter((addiction) => {
            return addiction.id != id;
        });

        setAddictions(filtered);
    }

    const onUpdateAddiction = (id: number, changes: Partial<BlockedDomain>): void => {

        // TODO add the logic for manipulating an item in the array.
        setAddictions(addictions);
    }

    const ctx: IAddictionsContext = {
        updateAddiction: onUpdateAddiction,
        removeAddiction: onRemoveAddiction,
        addAddiction: onAddAddiction,
        addictions: addictions
    }

    return (
        <AddictionsContext.Provider value={ctx}>
            <div id='popup'>
                <h1 id='title'>Your addictions</h1>
                <div id='addictions-manager'>
                    <AddictionsList addictions={addictions} />
                    <AddAddiction onNew={() => { }} />
                </div>
                <QuickAddAddiction onNew={() => { }} />
            </div>
        </AddictionsContext.Provider>
    );
}

export default Popup;
