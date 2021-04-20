import { types } from 'mobx-state-tree';

const BoxModel = types
	.model('Box', {
		id: types.identifier,
		name: 'Box',
		width: 200,
		height: 100,
		color: '#FFF000',
		left: 200,
		top: 100,
		isSelected: false,
		isNaming: false
	})
	.actions((self) => ({
		setName(newName) {
			self.name = newName;
		},
		toggleIsNaming() {
			self.isNaming = !self.isNaming;
		},
		toggleSelected() {
			self.isSelected = !self.isSelected;
		},
		setSelected(selected) {
			self.isSelected = selected;
		},
		setPosition(left, top) {
			self.left = left;
			self.top = top;
		},
		setColor(color) {
			self.color = color;
		}
	}));

export default BoxModel;
