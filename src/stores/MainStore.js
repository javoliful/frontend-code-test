import { types } from 'mobx-state-tree';
import uuid from 'uuid/v4';
import BoxModel from './models/Box';
import getRandomColor from '../utils/getRandomColor';
import { values } from 'mobx';

export const MainStore = types
	.model('MainStore', {
		boxes: types.array(BoxModel)
	})
	.actions((self) => {
		return {
			addBox(name, left, top) {
				const box = BoxModel.create({ name, left, top, id: uuid(), color: getRandomColor() });
				self.boxes.push(box);
			},
			deleteSelected() {
				self.boxes = values(self.boxes).filter((box) => !box.isSelected);
			},
			moveSelected(x, y) {
				values(self.boxes)
					.filter((box) => box.isSelected)
					.forEach((box) => {
						let nx = box.left + x;
						let ny = box.top + y;
						box.setPosition(nx, ny);
					});
			},
			setColorSelected(color) {
				values(self.boxes)
					.filter((box) => box.isSelected)
					.forEach((box) => {
						box.setColor(color);
					});
			}
		};
	})
	.views((self) => ({
		get selectedBoxes() {
			return values(self.boxes).filter((box) => box.isSelected).length;
		}
	}));
