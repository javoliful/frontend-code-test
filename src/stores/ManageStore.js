import { onSnapshot, applySnapshot } from 'mobx-state-tree';
import { MainStore } from './MainStore';

/**
 * Initiliaze state
 */
let initialState = {
	boxes: []
};
var states = [];
var currentFrame = 0;
var moveState = false;

/**
 * Rehidratate the initial state from local storage
 */
if (localStorage.getItem('boxesApp')) {
	const json = JSON.parse(localStorage.getItem('boxesApp'));
	if (MainStore.is(json)) {
		initialState = json;
	}
}

/**
 * Add first snapshots into states
 */
states.push(initialState);
/**
 * Create the first store
 */
export const store = MainStore.create(initialState);

/**
 * @function
 * @name persistState
 * @param {*} snapshot
 * @description This method pesists/saves the last snapshot/state in localstorage
 */
const persistState = (snapshot) => {
	localStorage.setItem('boxesApp', JSON.stringify(snapshot));
};

/**
 * Manage new snapshots/states
 */
onSnapshot(store, (snapshot) => {
	if (!moveState) {
		if (states.length - 1 !== currentFrame) {
			states = states.slice(0, currentFrame + 1);
		}
		states.push(snapshot);
		currentFrame = states.length - 1;
	} else if (moveState) {
		moveState = false;
	}
	persistState(snapshot);
});

/**
 * @function
 * @name previousState
 * @description select and apply the previous state.
 */
export const previousState = () => {
	moveState = true;
	if (currentFrame === 0) return;
	currentFrame--;
	applySnapshot(store, states[currentFrame]);
};

/**
 * @function
 * @name nextState
 * @description select and apply the next state.
 */
export const nextState = () => {
	moveState = true;
	if (currentFrame === states.length - 1) return;
	currentFrame++;
	applySnapshot(store, states[currentFrame]);
};
