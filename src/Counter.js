import React from 'react';

const Counter = ({ id, type, desc, handleSum }) => {
  const [counter, setCounter] = React.useState(0);
  const [value, setValue] = React.useState(0);

  const handleClick = (mode) => {
    mode ? setCounter((prev) => prev + 1) : setCounter((prev) => prev - 1);
  };
  React.useEffect(() => {
    counter < 0 && setCounter(0);
    setValue(counter * type);
  }, [counter, type]);
  React.useEffect(() => {
    handleSum(id, value);
  }, [value]);
  return (
    <>
      <div>{desc}</div>
      <div> ilość punktów: {type * counter}</div>
      <div className='counter'>
        <button onClick={() => handleClick(false)}>-</button>
        <div>{counter}</div>
        <button onClick={() => handleClick(true)}>+</button>
      </div>
    </>
  );
};

export default Counter;
