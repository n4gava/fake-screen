import { useState, useEffect } from "react";
import { sleep } from "../../Helpers/Utils/utils";

interface MousePronkProps {
    children: React.ReactNode;
    mouseBlinkRate: number;
    blinkOnMove: boolean;
}

MousePrank.defaultProps = {
    mouseBlinkRate: 2,
    blinkOnMove: false
  };

export default function MousePrank(props: MousePronkProps) {
    const [cursor, setCursor] = useState("auto");

    const cursors = ["none", "wait", "wait", "progress"];

    const blinkCursor = async () => {
        for (let i = 0; i < 5; i++) {
            setCursor(cursors[Math.floor(Math.random() * cursors.length)]);
            await sleep(100);
        }

        setCursor("auto");
    };

    const onMouseDown = () => {
        blinkCursor();
    };

    const onMouseMove = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const random = Math.random();
        const rate = 1 - (props.mouseBlinkRate / 100);

        if (random > rate) await blinkCursor();
    };

    const divProps = {
        onMouseDown: onMouseDown,
        onMouseMove: onMouseMove,
        style: { cursor: cursor },
    };

    return <div {...divProps}>{props.children}</div>;
}
