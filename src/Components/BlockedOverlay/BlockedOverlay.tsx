import React, { Component, ReactNode } from "react";
import "./BlockedOverlay.scss";

interface BlockedOverlayProps {

}

interface BlockedOverlayState {

}

class BlockedOverlay extends Component<BlockedOverlayProps, BlockedOverlayState> {
    constructor(props: BlockedOverlayProps) {
        super(props)    
    }

    componentDidMount(): void {
        // get all the data for this website
    }

    render(): ReactNode {
        return (
            <div id="container">
                <h1>Hey hey hey hey</h1>
                <h2>XYZ is not going to make you happier</h2>
                
                <h3>And already the 10th time today</h3>
                <p>This is the 40th time you want to access youtube this week</p>
                <p>This is the 194th time you want to access youtube this month</p>
                <p>This is the 1234th time since installing this extension on 1/1/2023</p>

                <div>
                    <h2>If you really need to enter what is your excuse this time?</h2>
                <input type="text" name="excuse" id="excuse" placeholder="I need to watch a video on how to safe somebody from choking..."/>
                </div>
            </div>
        );
    }
}

export default BlockedOverlay;
export { BlockedOverlayProps };
