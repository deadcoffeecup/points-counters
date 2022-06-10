import Counter from './Counter';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Counter type={0.5} desc={'Cena 99-119'} />
        <Counter type={1} desc={'Cena 120-149'} />
        <Counter type={1.5} desc={'Cena > 150'} />
      </header>
    </div>
  );
}

export default App;
