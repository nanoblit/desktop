import { useRef } from "react";
import { useState } from "react";
import WindowHeader from "../window-header/WindowHeader";

function DisplayWindow() {
  const [position, setPosition] = useState({ left: 0, top: 0 });
  let mouseWindowOffset = useRef({ left: 0, top: 0 });

  const handleClose = () => {
    // Remove window from Recoil
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    // Remove ghost image
    var img = new Image();
    img.src =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
    e.dataTransfer.setDragImage(img, 0, 0);

    mouseWindowOffset.current = {
      left: e.clientX - position.left,
      top: e.clientY - position.top,
    };
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    setPosition({
      left: e.clientX - mouseWindowOffset.current.left,
      top: e.clientY - mouseWindowOffset.current.top,
    });
  };

  return (
    <div
      className="absolute border rounded overflow-hidden w-80 h-52"
      style={position}
    >
      <WindowHeader
        onClose={handleClose}
        onDragStart={handleDragStart}
        onDrag={handleDrag}
      ></WindowHeader>
      Test
    </div>
  );
}

export default DisplayWindow;
