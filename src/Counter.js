import React from 'react';

const Counter = ({ type, desc }) => {
  const [counter, setCounter] = React.useState(0);
  const handleClick = (mode) => {
    mode ? setCounter((prev) => prev + 1) : setCounter((prev) => prev - 1);
  };
  return (
    <>
      <div>{desc}</div>
      <div> ilość pozycji:{counter}</div>
      <div className='counter'>
        <button onClick={() => handleClick(false)}>-</button>
        <div>{type * counter}</div>
        <button onClick={() => handleClick(true)}>+</button>
      </div>
    </>
  );
};

export default Counter;
