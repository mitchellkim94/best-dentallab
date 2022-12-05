import React from "react";
import { useSwipeable } from "react-swipeable";

interface SwipeProps {
    contents: JSX.Element[];
}

export default function SwipeContainer(props: SwipeProps) {
    const handlers = useSwipeable({});

    return (
        <div className="swipe_container" {...handlers}>
            {
                props.contents.map(content => {
                    return (
                        <div className="swipe_slot">
                            { content }
                        </div>
                    )
                })
            }
        </div>
    );
}