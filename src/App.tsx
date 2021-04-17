import React, { useState } from "react";
import FakeScreen from "./Screens/FakeScreen";
import { fullscreen, getClipboardImage } from './Helpers/Utils/utils'

function App() {
    const [backgroundImage, setBackgroundImage] = useState("");

    const onImageLoaded = (image: string) => {
        setBackgroundImage(image);
        fullscreen();
    }

    const handleOnPaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
        getClipboardImage(e.clipboardData, onImageLoaded);
    };

    if (backgroundImage)
      return <FakeScreen image={backgroundImage} />

    return (
        <div onPaste={handleOnPaste} className="page">
           Print Screen and Ctrl+V
        </div>
    );
}

export default App;
