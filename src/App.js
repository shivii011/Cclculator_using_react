import './App.css';
import { useState, useEffect } from 'react'
import { NumberFormatBase } from 'react-number-format';
function App() {
  const [preState, setPreState] = useState('')
  const [curState, setCurState] = useState('')
  const [input, setInput] = useState('0')
  const [oprator, setOperator] = useState('null')
  const [total, setTotal] = useState('false')

  const inputNum = (e) => {
    if (curState.includes(".") && e.target.innerText === ".") return
    if (total) {
      setPreState("");
    }
    curState ? setCurState((pre) => pre + e.target.innerText) : setCurState(e.target.innerText)
    setTotal(false)
  }
  useEffect(() => {
    setInput(curState);
  }, [curState]);

  useEffect(() => {
    setInput("0");
  }, []);
  const minusPlus = (e) => {
    if (curState.charAt(0) === "-") {
      setCurState(curState.substring(1));
    } else {
      setCurState("-" + curState);
    }
  }
  const operatorType = (e) => {
    setTotal(false)
    setOperator(e.target.innerText)
    if (curState === " ") return
    if (preState !== " ") {
      equals()
    }setPreState(curState)
    setCurState("")
  }
  const equals = (e) => {
if (e?.target.innerText === "=")
{
  setTotal(true)
}
  
let cal 
switch(oprator){
  case '/':
  cal= String(parseFloat(preState)/ parseFloat(curState))
break;

case '+':
  cal= String(parseFloat(preState)+ parseFloat(curState))
break;

case 'X':
  cal= String(parseFloat(preState)* parseFloat(curState))
break;

case '-':
  cal= String(parseFloat(preState)- parseFloat(curState))
break;
default:return
}
setInput("")
setPreState(cal)
setCurState("")
  }
  const percent = (e) => {
    preState
    ? setCurState(String((parseFloat(curState) / 100) * preState))
    : setCurState(String(parseFloat(curState) / 100));
  }
  const reset = (e) => {
    setPreState("")
    setCurState("")
    setInput("")
  }
  return (
    <div className='container'>
      <div className='wraper'>
        <div className='screen'>{input !== "" || input === "0" ? (
            <NumberFormatBase
              value={input}
              displayType={"text"}
              thousandSeparator={true}
            />
          ) : (
            <NumberFormatBase
              value={preState}
              displayType={"text"}
              thousandSeparator={true}
            />
          )}</div>
        <div className='btn light-gray' onClick={reset}>AC</div>
        <div className='btn light-gray' onClick={percent}>%</div>
        <div className='btn light-gray' onClick={minusPlus}>-/+</div>
        <div className='btn orange' onClick={operatorType}>/</div>
        <div className='btn' onClick={inputNum}>7</div>
        <div className='btn' onClick={inputNum}>8</div>
        <div className='btn' onClick={inputNum}>9</div>
        <div className='btn orange' onClick={operatorType}>+</div>
        <div className='btn' onClick={inputNum}>4</div>
        <div className='btn' onClick={inputNum}>5</div>
        <div className='btn' onClick={inputNum}>6</div>
        <div className='btn orange' onClick={operatorType}>X</div>
        <div className='btn' onClick={inputNum}>1</div>
        <div className='btn' onClick={inputNum}>2</div>
        <div className='btn' onClick={inputNum}>3</div>
        <div className='btn orange' onClick={operatorType}>-</div>
        <div className='btn zero' onClick={inputNum}>0</div>
        <div className='btn' onClick={inputNum}>.</div>
        <div className='btn' onClick={equals}>=</div>
      </div>
    </div>
  );
}
export default App;