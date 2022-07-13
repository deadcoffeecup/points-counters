import { useState } from 'react';
import Counter from './Counter';
import './App.css';

function App() {
  const [sum, setSum] = useState([0, 0, 0, 0]);
  function handleSum(id, value) {
    let newArr = [...sum];
    newArr[id] = value;
    setSum(newArr);
    console.log(id, value);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <Counter id={0} handleSum={handleSum} type={0.5} desc={'Cena 99-120'} />
        <Counter id={1} handleSum={handleSum} type={1} desc={'Cena 121-150'} />
        <Counter id={2} handleSum={handleSum} type={1.5} desc={'Cena > 151'} />
        <Counter id={3} handleSum={handleSum} type={2} desc={'Cena > 200'} />
        Suma:{' '}
        {sum.reduce((current, next) => {
          return current + next;
        })}
        <button onClick={setSum([0, 0, 0, 0])}>Reset</button>
      </header>
    </div>
  );
}

export default App;
