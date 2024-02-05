import React, { Component, ReactNode } from "react";

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
            <div style={{ position: "fixed", left: 0, top: 0, zIndex: 10000000, backgroundColor: "green", width: "100vw", height: "100vh" }}></div>
        );
    }
}

export default BlockedOverlay;
export { BlockedOverlayProps };
