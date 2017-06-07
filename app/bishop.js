import Piece from './piece';
import HelperFunctions from './helper-functions';

export default class Bishop extends Piece {
	constructor(row, col, color) {
		super(row, col, color);
		this.image = color === 'white' ? '2657' : '265D';
	}
	getTargetCoordinates() {
		this.genCoordinates();
	}
	genCoordinates() {
		const potentialMoves = [];
		for (let i = this.row + 1; i <= 7; i++) {
			if (HelperFunctions.isEmpty(i, this.col)) {
				HelperFunctions.addToPotentialMoves(potentialMoves, i, Number(`${this.col + (i - this.row)}`));
			} else if (HelperFunctions.isEnemy(i, this.col, this.color)) {
				HelperFunctions.addToPotentialMoves(potentialMoves, i, this.col);
				break;
			} else {
				break;
			}
		}
		for (let i = this.row + 1; i <= 7; i++) {
			if (HelperFunctions.isEmpty(i, this.col)) {
				HelperFunctions.addToPotentialMoves(potentialMoves, i, Number(`${this.col - (i - this.row)}`));
			} else if (HelperFunctions.isEnemy(i, this.col, this.color)) {
				HelperFunctions.addToPotentialMoves(potentialMoves, i, this.col);
				break;
			} else {
				break;
			}
		}
		for (let i = this.row - 1; i >= 0; i--) {
			if (HelperFunctions.isEmpty(i, this.col)) {
				HelperFunctions.addToPotentialMoves(potentialMoves, i, Number(`${this.col + (this.row - i)}`));
			} else if (HelperFunctions.isEnemy(i, this.col, this.color)) {
				HelperFunctions.addToPotentialMoves(potentialMoves, i, this.col);
				break;
			} else {
				break;
			}
		}
		for (let i = this.row - 1; i >= 0; i--) {
			if (HelperFunctions.isEmpty(i, this.col)) {
				HelperFunctions.addToPotentialMoves(potentialMoves, i, Number(`${this.col - (this.row - i)}`));
			} else if (HelperFunctions.isEnemy(i, this.col, this.color)) {
				HelperFunctions.addToPotentialMoves(potentialMoves, i, this.col);
				break;
			} else {
				break;
			}
		}
		// for (let i = this.col - 1; i >= 0; i--) {
		// 	if (HelperFunctions.isEmpty(this.row, i)) {
		// 		HelperFunctions.addToPotentialMoves(potentialMoves, Number(`${this.row + 1}`), i);
		// 	} else if (HelperFunctions.isEnemy(this.row, i, this.color)) {
		// 		potentialMoves.push({
		// 			row: this.row,
		// 			col: i
		// 		});
		// 		break;
		// 	} else {
		// 		break;
		// 	}
		// }
		// for (let i = this.col + 1; i <= 7; i++) {
		// 	if (HelperFunctions.isEmpty(this.row, i)) {
		// 		HelperFunctions.addToPotentialMoves(potentialMoves, Number(`${this.row + 1}`), i);
		// 	} else if (HelperFunctions.isEnemy(this.row, i, this.color)) {
		// 		HelperFunctions.addToPotentialMoves(potentialMoves, this.row, i);
		// 		break;
		// 	} else {
		// 		break;
		// 	}
		// }
		HelperFunctions.highlightMoves(potentialMoves);
	}
}
