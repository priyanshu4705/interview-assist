import { useLayoutEffect, useState } from "react";
import rough from "roughjs/bundled/rough.esm";

const gen = rough.generator();

const createElement = (x1, y1, x2, y2) => {
  const roughElement = gen.line(x1, y1, x2, y2);
  return { x1, y1, x2, y2, roughElement };
};

const DrawingTool = () => {
  const [elements, setElements] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);

  useLayoutEffect(() => {
    const canvas = document.getElementById("canvas");
    const rc = rough.canvas(canvas);
    const ctx = canvas.getContext("2d");

    // clear screen with every re-render
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw all elements
    elements.forEach((element) => rc.draw(element.roughElement));
  }, [elements]);

  const startDrawing = (event) => {
    setIsDrawing(true);
    const { clientX: posX, clientY: posY } = event;
    const newEle = createElement(posX, posY, posX, posY);
    setElements((state) => [...state, newEle]); // add latest drawing element to state
  };
  const finishDrawing = () => {
    setIsDrawing(false);
  };
  const draw = (event) => {
    if (!isDrawing) return; // not in a mousedown postion

    const { clientX: posX, clientY: posY } = event;
    const index = elements.length - 1; // lastest drawn element
    const { x1, y1 } = elements[index];
    const updatedEle = createElement(x1, y1, posX, posY);

    //update the position with the new element instead of the previous one

    const copyElement = [...elements];
    copyElement[index] = updatedEle; // replacing last index
    setElements(copyElement);
  };

  return (
    <canvas
      id="canvas"
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
    >
      Canvas
    </canvas>
  );
};

export default DrawingTool;
