import React from 'react';
import { observer } from 'mobx-react';
import * as history from '../stores/ManageStore';

const Toolbar = ({ store }) => {
	return (
		<div className="toolbar">
			<button onClick={() => store.addBox('Box')}>Add Box</button>
			<button onClick={() => store.deleteSelected()}>Remove Box</button>
			<input type="color" onChange={(e) => store.setColorSelected(e.target.value)} />
			<span>{store.selectedBoxes > 0 ? store.selectedBoxes + ' box(es) selected' : 'No boxes selected'}</span>
			<button onClick={previous} title="previous state">
				&lt;
			</button>
			<button onClick={next} title="next state">
				&gt;
			</button>
		</div>
	);
};

const previous = () => {
	history.previousState();
};

const next = () => {
	history.nextState();
};

export default observer(Toolbar);
