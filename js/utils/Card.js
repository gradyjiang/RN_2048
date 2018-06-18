import React, { PureComponent } from 'react';

let id = 0;
export default class Card {
    constructor(x, y, value) {
        this.x = x;
        this.y = y;
        this.value = value;
        this.id = id++;
    }

    updatePosition(position) {
        this.x = position.x;
        this.y = position.y;
    }
}