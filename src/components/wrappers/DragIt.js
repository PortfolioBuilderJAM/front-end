import React, { useState } from "react";
import Draggable from "react-draggable";

export const DragIt = props => {
	const [ activeDrags, setActiveDrags ] = useState(0);
	const [ deltaPosition, setDeltaPosition ] = useState({ x: 0, y: 0 });
	const { children } = props;

	const handleDrag = (e, ui) => {
    const { x, y } = deltaPosition;
    setDeltaPosition(
			{
      
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
		);
  };

  const handleStart = () => {
    setActiveDrags(activeDrags + 1);
  };

  const handleStop = () => {
    setActiveDrags(activeDrags - 1);
  };

	return (
		<Draggable
			axis="both"
			handle=".handle"
			defaultPosition={{x: 0, y: 0}}
			position={null}
			scale={1}
			onStart={handleStart}
			onDrag={handleDrag}
			onStop={handleStop}
		>
			<div>
				{ children }
			</div>
		</Draggable>
	);

}

