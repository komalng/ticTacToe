import React from 'react';
  /** This component is represent the a signal square button */
export default function Square(props) {

  return (
    <div>
      <button className='square'
        onClick={props.handleClick}>
        {props.player}
      </button>
    </div>
  )

}