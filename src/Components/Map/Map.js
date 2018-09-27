import React from 'react';
import './Map.css';

import Cell from '../Cell/Cell.js';

class Map extends React.Component {
    constructor(props, numberOfRows, numberOfColumns){
        super(props),

        this.state = {
            width: 3,
            height: 3,
        }
    }
    generateMap(numberOfRows, numberOfColumns) {
        let board = [];
        for(var i = 0; i < numberOfRows; i++){
            let row = [];
            for(var j = 0; j < numberOfColumns; j++){
                row.push(<Cell />);
            }
            board.push(row);
        }
        return board;
    }
    render() {
        return (
            <div>
                <p>Single Cell:</p>
                <Cell />   
                <p>Row of Three Cells:</p>
                {this.generateMap(this.state.width,this.state.height)}
            </div>
        )
    }
}

export default Map;