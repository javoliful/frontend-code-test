import React, { useRef, useEffect } from 'react';
import { observer } from 'mobx-react';
import interact from 'interactjs';

const BoxDraggable = (props) => {
	let { box, store } = props;

	const myBox = useRef();
	useEffect(() => {
		interact(myBox.current).draggable({
			// enable inertial throwing
			inertia: true,
			// keep the element within the area of it's parent
			modifiers: [
				interact.modifiers.restrictRect({
					restriction: 'parent',
					endOnly: true
				})
			],
			// enable autoScroll
			autoScroll: true,
			listeners: {
				move(event) {
					let x = box.left + event.dx;
					let y = box.top + event.dy;
					if (!box.isSelected) {
						box.setPosition(x, y);
					} else {
						store.moveSelected(event.dx, event.dy);
					}
				}
			}
		});
		interact(myBox.current)
			.on('tap', function (event) {
				box.toggleSelected();
			})
			.on('doubletap', function (event) {
				box.toggleIsNaming();
			});
	}, [box, store]);

	return (
		<div
			ref={myBox}
			id={props.id}
			className={`box ${box.isSelected ? 'box--selected' : ''}`}
			style={{
				backgroundColor: box.color,
				width: box.width,
				height: box.height,
				transform: `translate(${box.left}px, ${box.top}px)`
			}}
		>
			{props.children}
		</div>
	);
};

export default observer(BoxDraggable);
