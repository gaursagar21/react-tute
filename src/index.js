import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: false,
        }
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext?'X':'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i) {
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
    }

    createBoard = () => {
        let board = []

        // Outer loop to create parent
        for (let i = 0; i < 3; i++) {
            let children = []
            for (let j = 0; j < 3; j++) {
                children.push(this.renderSquare(3*i+j))
            }
            //Create the parent and add the children
            board.push(<div className="board-row">{children}</div>)
        }
        return board
    }

    render() {
        const status = 'Next player: ' + (this.state.xIsNext?'X':'O');

        return (
        <div>
            <div className="status">{status}</div>
            {this.createBoard()}
        </div>
        );
    }
}

class Game extends React.Component {
render() {
    return (
    <div className="game">
        <div className="game-board">
        <Board />
        </div>
        <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
        </div>
    </div>
    );
}
}

// ========================================

ReactDOM.render(
<Game />,
document.getElementById('root')
);
