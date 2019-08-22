import React from 'react';
import $ from 'jquery';

class DrawTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            col: 9,
            row: 9,
            gameArray1: [],
            gameArray2: []
        }
        for (var r = 1; r <= this.state.row; r++) {
            let row = [];
            for (var c = 1; c <= this.state.col; c++) {
                row.push(c);
            }
            this.state.gameArray1.push(r);
            this.state.gameArray2.push(row);
        }
    }
    validateRowData(row, cellValue) {
        var result = false;
        console.log('validate row data', row, $('#element' + row).children().length);
        for (var i = 1; i <= 9; i++) {
            console.log('scan for row', 'element', row + i);
            var data = Number($("#element" + row + i).innerHTML);
            console.warn('data', data);
        }
        return true;
    }
    validateColData(col, cellValue) {
        var result = false;
        for (var i = 1; i <= 9; i++) {
            var _cellData = Number(document.getElementById("element" + i + col).innerHTML);
            console.log('sacan for col', 'element' + i + col,cellValue,_cellData);
            if (_cellData === cellValue) {
                break;
            }
            else {
                result = true;
            }
        }
        return result;
    }
    setData(e, row, col) {

    }
    clickOnCell(e, row, col) {
        console.log('click on cell', e.target, e.target.tagName, row, col);
        var typeCount = Number(e.target.getAttribute('type'));
        if (typeCount === 9) {
            typeCount = 0;
        }
        if (typeCount === 0) {
            typeCount = 1;
        }
        else if (typeCount > 0) {
            typeCount = typeCount + 1;
        }
        e.target.setAttribute('type', typeCount);
        console.warn('before assignement type count', typeCount);
        if (this.validateRowData(row, typeCount) && this.validateColData(col, typeCount)) {
            e.target.innerHTML = typeCount;
        } else {

        }
    }
    render() {
        console.log(this.state);
        return (

            <div className="sudoku set-game">
                <table >
                    <tbody>
                        {
                            this.state.gameArray1.map((row, i) => {
                                var cols = this.state.gameArray2[i].map((col, j) => {
                                    return (
                                        <td id={`element${row}${col}`} data-id={`element${row}${col}`} onClick={e => this.clickOnCell(e, row, col)} data-row={row} data-col={col} className={(j + 1) % 3 !== 0 ? "game-row game-row-sep" : "game-row group-col"} key={j}>

                                        </td>)
                                });
                                return (<tr id={`element${row}`} data-id={`element${row}`} className={(i + 1) % 3 !== 0 ? "game-row-sep" : "group"} key={i} data-row={row}>{cols}</tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        )

    }

}
export default DrawTable; 