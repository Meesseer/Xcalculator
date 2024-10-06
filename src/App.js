import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [resultValue, setResultValue] = useState('');

  const handleNumberClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleoperatorClick = (op) => {
    setInput((prevInput) => prevInput + op);
  }

  const handleEqualClick = () => {
    try {
      const result = eval(input);
      setResultValue(result.toString());
    } catch (error) {
      setResultValue('Error');
    }
  }

 

 

  const handleClearClick = () => {
    setInput('');
    setResultValue('')
  };

  return (
    <div className="App">
        <h1>React Calculator</h1>
        <input type='text' value={input} readOnly></input>
        <h3>{resultValue}</h3>
        <div className='App-header'>
            <div>
              <button onClick={()=> handleNumberClick('7')} style={{width: '40px', height: '40px'}}>7</button>
              <button onClick={()=> handleNumberClick('8')} style={{width: '40px', height: '40px'}}>8</button>
              <button onClick={()=> handleNumberClick('9')} style={{width: '40px', height: '40px'}}>9</button>
              <button onClick={()=> handleoperatorClick('+')} style={{width: '40px', height: '40px'}}>+</button>
            </div>

            <div>
              <button onClick={()=> handleNumberClick('4')} style={{width: '40px', height: '40px'}}>4</button>
              <button onClick={()=> handleNumberClick('5')} style={{width: '40px', height: '40px'}}>5</button>
              <button onClick={()=> handleNumberClick('6')} style={{width: '40px', height: '40px'}}>6</button>
              <button onClick={()=> handleoperatorClick('-')} style={{width: '40px', height: '40px'}}>-</button>
            </div>

            <div>
              <button onClick={()=> handleNumberClick('1')}style={{width: '40px', height: '40px'}}>1</button>
              <button onClick={()=> handleNumberClick('2')} style={{width: '40px', height: '40px'}}>2</button>
              <button onClick={()=> handleNumberClick('3')} style={{width: '40px', height: '40px'}}>3</button>
              <button onClick={()=> handleoperatorClick('*')} style={{width: '40px', height: '40px'}}>*</button>
            </div>

            <div>
              <button onClick={handleClearClick} style={{width: '40px', height: '40px'}}>C</button>
              <button onClick={()=> handleNumberClick('0')} style={{width: '40px', height: '40px'}}>0</button>
              <button onClick={handleEqualClick} style={{width: '40px', height: '40px'}}>=</button>
              <button onClick={()=> handleoperatorClick('/')} style={{width: '40px', height: '40px'}}>/</button>
            </div>
        </div>
    </div>

  );
}

export default App;


