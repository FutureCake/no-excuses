import React, { Component, ReactNode } from 'react';
import './Popup.scss';

class Popup extends Component {
    constructor(props: any) {
        super(props);
    }

    render(): ReactNode {
        return (
            <div>
                <h1>Your addictions</h1>
                <div>
                    <div id='addictions'></div>
                    <div id='new-addiction'></div>
                </div>
                <div>Add current website as addiction</div>
            </div>
        )
    }
}

export default Popup;
