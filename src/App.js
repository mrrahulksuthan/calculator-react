import {useState} from 'react'

function App() {

  const[result,setResult]=useState('');

  const handleClick=(e)=>{
    setResult(result.concat(e.target.name));
  }

  const clear = () => {
    setResult('');
  }
  
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      /*setResult('Error');*/
    }
  }

  return (
    <div className="App">
    <section className='mainSection'>
    <h2>Calculator</h2>
    <input className='displayArea' type="text" value={result} />
    <div className="keypad">
        <div className='dynamicRow'>
        <button className="highlight" onClick={clear} id="clear">A/C</button>
        <button name="+" onClick={handleClick}>+</button>
        </div>
        <div className='linearRow'>
        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
        <button name="-" onClick={handleClick}>-</button> 
        </div>
        <div className='linearRow'>
        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button name="*" onClick={handleClick}>&times;</button> 
        </div>
        <div className='linearRow'> 
        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button> 
        <button name="/" onClick={handleClick}>&divide;</button>
        </div>
        <div className='dynamicRow'> 
        <button name="0" onClick={handleClick}>0</button>
        <button onClick={calculate} id="result">=</button>
        </div>
      </div>
      </section>
    </div>
  );
}

export default App;
