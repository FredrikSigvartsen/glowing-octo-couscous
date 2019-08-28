// import styled from 'styled-components'
import React from 'react';
import classNames from 'classnames';
import Draggable from 'react-draggable'; // Both at the same time

const Cage = ({ title, onStart, onStop, onDrag, defaultPosition }) => {
  return (
    <>
      <Draggable
        grid={[25, 25]}
        onStart={onStart}
        onStop={onStop}
        onDrag={onDrag}
        defaultPosition={defaultPosition}
      >
        <div>
          <div className={classNames('box')}>
            <p>{title}</p>
          </div>
        </div>
      </Draggable>
    </>
  );
};

export default Cage;
