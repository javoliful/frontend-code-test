import React from 'react';
import { observer } from 'mobx-react';
import BoxDraggable from './BoxDraggable';
/**
 *
 * @param {*} props
 * @returns BoxDraggable
 */
const Box = (props) => {
	const { box } = props;
	/**
	 * @param {*} e
	 * @description manage change event and set the box name
	 */
	const handleChange = (e) => {
		props.box.setName(e.target.value);
	};
	/**
	 * @param {*} e
	 * @description manage keyup event to finalize the edition
	 */
	const handleKeyUp = (e) => {
		if (e.key === 'Enter') {
			props.box.toggleIsNaming();
		}
	};
	return (
		<BoxDraggable {...props}>
			<div>{!box.isNaming ? box.name : <input onChange={handleChange} onKeyUp={handleKeyUp} value={box.name} />}</div>
		</BoxDraggable>
	);
};
export default observer(Box);
