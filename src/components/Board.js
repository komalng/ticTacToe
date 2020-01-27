import React from 'react';
import Square from './Square';
import calculateWinner from '../Helper';

export default class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      players: Array(9).fill(''),
      isXTurn: true,
      winner: ''
    }
  }
  onClickHandle = (index) => {
    const { players, winner } = this.state;
    if (players[index] !== '' || winner) {
      return
    }
    players[index] = this.state.isXTurn ? "X" : 'O';
    let myWinner = calculateWinner(players);
    if (myWinner) {
      this.setState({
        winner: myWinner
      })
    }
    console.log(index);
    this.setState({
      player: players,
      isXTurn: !this.state.isXTurn
    })

  }

  /** This function is retuning a component
   * @name renderSquare
   * @function
   * @param {number} index of a square like 0,1,2
   * @return {component} This is returning component with the player.Means X or Y.
   */
  renderSquare = (index) => {
    return <Square player={this.state.players[index]} handleClick={() => this.onClickHandle(index)} />
  }
  render() {
    return (
      <div>
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div>
          {
            this.state.winner ? <h1>congrates :- {this.state.winner}</h1> : <h2>{this.state.isXTurn ? 'X' : 'O'}</h2>
          }
        </div>
      </div>

    );
  }
}