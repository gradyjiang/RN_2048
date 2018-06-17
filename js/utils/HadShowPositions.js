

export default class HadShowPositions {
    constructor() {
        this.hadShowArr = [];
    }

    clear() {
        this.hadShowArr = [];
    }

    push(obj) {
        this.hadShowArr.push(obj);
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