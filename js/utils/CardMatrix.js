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
        this.matrix[card.x][card.y] = card;
    }

    getRandomFreeCard() {
        let freeCards = this.getFreeCards();
        if (freeCards.length > 0) {
            return freeCards[Math.floor(Math.random() * freeCards.length)];
        }
    }

    getFreeCards() {
        let cards = [];
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (this.matrix[i][j] == null) {
                    cards.push({x: i, y: j});
                }
            }
        }
        return cards;
    }

    isExist(obj) {
        if (this.hadShowArr.length === 0) {
            return false;
        }

        for (let i = 0; i < this.hadShowArr.length; i++) {
            if (this.hadShowArr[i].x === obj.x && this.hadShowArr[i].y === obj.y) {
                return true;
            }
        }
        return false;
    }
}