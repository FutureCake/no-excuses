import React, { useEffect, useState } from 'react';
import AddAddiction from '../../Components/AddAddiction/AddAddiction';
import Addictions from '../../Components/Addictions';
import { BlockedDomain } from '../../Components/Addictions/Addiction/Addiction';
import { AddictionsContext, IAddictionsContext } from '../../Components/AddictionsContext';
import QuickAddAddiction from '../../Components/QuickAddAddiction';
import './Popup.scss';


function Popup() {

    const [addictions, setAddictions] = useState<BlockedDomain[]>([]);

    useEffect(() => {

    });

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

    // async componentDidMount(): Promise < void> {
    //     this.setState({
    //         addictions: await chrome.runtime.sendMessage<ExtensionMessage, BlockedDomain[]>({
    //             sender: "content",
    //             recipient: "background",
    //             action: "get"
    //         })
    //     });
    // }



    return (
        <AddictionsContext.Provider value={ctx}>
            <div id='popup'>
                <h1 id='title'>Your addictions</h1>
                <div id='addictions-manager'>
                    <Addictions addictions={addictions} onRemove={() => { }} />
                    <AddAddiction onNew={() => { }} />
                </div>
                <QuickAddAddiction onNew={() => { }} />
            </div>
        </AddictionsContext.Provider>
    );
}

export default Popup;
