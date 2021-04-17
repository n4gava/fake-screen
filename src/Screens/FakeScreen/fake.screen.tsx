import React from "react";
import MousePrank from "../../Components/MousePrank";
import WindowsAlert from "../../Components/WindowsAlert";
import "./fake.screen.scss";

interface FakeScreenProps {
    image: string;
}

export default function FakeScreen(props: FakeScreenProps) {
    const hideContextMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
    };

    const hideOnDrag = (e: React.DragEvent<HTMLImageElement>) => {
        e.preventDefault();
    };

    return (
        <MousePrank blinkOnMove mouseBlinkRate={1}>
            <div tabIndex={0} onContextMenu={hideContextMenu} className="fake-screen">
                <WindowsAlert />
                <img 
                    onDragStart={hideOnDrag}
                    className="fake-screen__background"
                    src={props.image}
                    alt="background"
                ></img>
            </div>
        </MousePrank>
    );
}
