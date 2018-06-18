import {
    MOVE_RIGHT,
    MOVE_DOWN,
    MOVE_LEFT,
    MOVE_UP
} from '../constants/Constants';

export default class CardMatrix {
    constructor(size) {
        this.size = size;
        this.matrix = this.makeEmptyMatrix(size);
    }

    makeEmptyMatrix(size) {
        let matrix = [];
        for (let i = 0; i < size; i++) {
            matrix[i] = []; //create Two-dimensional array here
            for (let j = 0; j < size; j++) {
                matrix[i].push(null);
            }
        }
        return matrix;
    }

    clear() {
        this.matrix = this.makeEmptyMatrix(this.size);
    }

    pushCard(card) {
        const row = card.y;
        const column = card.x;
        this.matrix[row][column] = card;
    }

    getRandomFreePosition() {
        let freeCards = this.getFreePositions();
        if (freeCards.length > 0) {
            return freeCards[Math.floor(Math.random() * freeCards.length)];
        }
    }

    getFreePositions() {
        let positions = [];
        for (let row = 0; row < this.size; row++) {
            for (let column = 0; column < this.size; column++) {
                if (this.matrix[row][column] === null) {
                    positions.push({x: column, y: row});
                }
            }
        }
        return positions;
    }

    getAvailableCards() {
        let cards = [];
        for (let row = 0; row < this.size; row++) {
            for (let column = 0; column < this.size; column++) {
                if (this.matrix[row][column] !== null) {
                    cards.push(this.matrix[row][column]);
                }
            }
        }
        return cards;
    }

    handleCardsMove(direction) {
        switch (direction) {
            case MOVE_UP:
                for (let column = 0; column < this.size; column++) {
                    //bubble sort
                    for (let row = 0; row < this.size-1; row++) {
                        for (let j = 0; j < this.size - row - 1; j++) {
                            if (this.matrix[j][column] === null && this.matrix[j+1][column] !== null) {
                                let temp = this.matrix[j][column];
                                this.matrix[j][column] = this.matrix[j+1][column];
                                this.matrix[j+1][column] = temp;
                                this.matrix[j][column].x = column;
                                this.matrix[j][column].y = j;
                            }
                        }
                    }
                }
                break;
            case MOVE_DOWN:
                for (let column = 0; column < this.size; column++) {

                    for (let row = 0; row < this.size-1; row++) {
                        for (let j = 0; j < this.size - row - 1; j++) {
                            if (this.matrix[j][column] !== null && this.matrix[j+1][column] === null) {
                                let temp = this.matrix[j][column];
                                this.matrix[j][column] = this.matrix[j+1][column];
                                this.matrix[j+1][column] = temp;
                                this.matrix[j+1][column].x = column;
                                this.matrix[j+1][column].y = j+1;
                            }
                        }
                    }
                }
                break;
            case MOVE_LEFT:
                for (let row = 0; row < this.size; row++) {
                    for (let column = 0; column < this.size-1; column++) {
                        for (let j = 0; j < this.size - column - 1; j++) {
                            if (this.matrix[row][j] === null && this.matrix[row][j+1] !== null) {
                                let temp = this.matrix[row][j];
                                this.matrix[row][j] = this.matrix[row][j+1];
                                this.matrix[row][j+1] = temp;
                                this.matrix[row][j].x = j;
                                this.matrix[row][j].y = row;
                            }
                        }
                    }
                }
                break;
            case MOVE_RIGHT:
                for (let row = 0; row < this.size; row++) {
                    for (let column = 0; column < this.size-1; column++) {
                        for (let j = 0; j < this.size - column - 1; j++) {
                            if (this.matrix[row][j] !== null && this.matrix[row][j+1] === null) {
                                let temp = this.matrix[row][j];
                                this.matrix[row][j] = this.matrix[row][j+1];
                                this.matrix[row][j+1] = temp;
                                this.matrix[row][j+1].x = j+1;
                                this.matrix[row][j+1].y = row;
                            }
                        }
                    }
                }
                break;
            default:
                throw new Error(`Wrong Direction`);
        }
    }
}