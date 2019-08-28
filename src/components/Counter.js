// import styled from 'styled-components'
import React from 'react';

const Counter = ({ title, onIncrement, onDecrement, counter }) => (
  <div>
    <div>
      <p>{title}</p>
      <div className="has-text-right">
        <button type="button" onClick={onIncrement}>
          +
        </button>

        <p>{counter}</p>
        <button type="button" onClick={onDecrement}>
          -
        </button>
      </div>
    </div>
  </div>
);

export default Counter;
