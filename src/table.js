import React from 'react';

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

    render() {
        console.log(this.state);
        return (

            <div className="sudoku set-game">
                <table >
                    <tbody>
                        {
                            this.state.gameArray1.map((row, i) => {
                                var cols = this.state.gameArray2[i].map((col, j) => {
                                    return (<td data-row={row} data-col={col} className={(j+1)%3!==0?"game-row-sep":"group-col"} key={j}>{col}</td>)
                                });
                                return (<tr className={(i+1)%3!==0?"game-row-sep":"group"} key={i} data-row={row}>{cols}</tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        )

    }

}
export default DrawTable; 