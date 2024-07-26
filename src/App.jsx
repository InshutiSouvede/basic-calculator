import { nanoid } from 'nanoid'
import './App.css'
import Number from './components/Numbers'
import { useState } from 'react'
import Operator from './components/Operator'

function App() {
  const [resultField, setResultField] = useState("0")
  const [value1, setValue1] = useState(0)
  const [resultGiven, setResultGiven] = useState(false)
  const [op, setOp] = useState('')
  const [currentExpression, setCurrentExpression] = useState(0)
  const [prevExpression, setPrevExpression] = useState(0)
  const numArr = [7, 8, 9, 4, 5, 6, 1, 2, 3], basicOperator = ['÷', 'x', '-', '+', '=']

  const numbers = numArr.map((el) => <Number handleClick={holdNumber} key={nanoid()} number={el} />)
  const operators = basicOperator.map((el) => <Operator handleOperation={holdOperator} key={nanoid()} bgColor="bg-orange-400" color="text-white" label={el} />)
  function holdNumber(event) {
    const num = event.target.textContent
    if(resultGiven){
      console.log("Number clicked right after equal")
      setPrevExpression(0)
      setCurrentExpression(0)
    }else{
      console.log("Number clicked after some other value")
    }
    
    setResultField(prev => {      
      if (prev === '0'&& num!=='.'||resultGiven) {
        return num
      }
      if (num == '.') {
        if (prev.includes('.')) return prev
      }
      return prev + num
    })
    setResultGiven(false)
  }
  function computeCurrentExpression(v1,operator,value2){
    if (operator == '+') {
      return parseFloat((parseFloat(v1) + +value2).toFixed(7))
    }
    if (operator == '-') {
      return parseFloat((parseFloat(v1) - +value2).toFixed(7))
    }
    if (operator == 'x') {
      return parseFloat((+v1 * +value2).toFixed(7))
    }
    if (operator == '÷') {
      return parseFloat((parseFloat(v1) / +value2).toFixed(7))
    }
    if (operator == '%') {
      return parseFloat((parseFloat(v1) % +value2).toFixed(7))
    }
    return value2
  }
  function holdOperator(event) {
    const operator = event.target.textContent

    if (operator == 'AC') {
      setResultField('0')
      
    }
    else if (operator == '+/-') {
      setResultField(prev => (+prev) * -1)
    }
    else if (operator === '=') {
      let computedValue;
      console.log("In equal, previous expression",prevExpression,"current expression",currentExpression,"current operation ",op," current value in result field",resultField)
      const newExpression = computeCurrentExpression(currentExpression,op,resultField)
      console.log("previous expression is going to be",currentExpression,"current expression is going to be",newExpression)
      setResultGiven(true)
      setResultField(newExpression)
    }
    else {
      let newExpression;
      setResultGiven(false)
      setOp(operator)
      console.log("previous expression",prevExpression,"current expression",currentExpression,"current operation ",op," current value in result field",resultField)
      if(resultGiven){
        newExpression = computeCurrentExpression(0,'',resultField)
      }else{

       newExpression = computeCurrentExpression(currentExpression,op,resultField)
      }

      console.log("previous expression is going to be",currentExpression,"current expression is going to be",newExpression)
      // setValue1(resultField)
      setResultField('0')
      setCurrentExpression(newExpression)
      setPrevExpression(currentExpression)
      setValue1(resultField)
    }

  }
  return (
    <div className='w-max py-20 m-auto'>
      <input type='text' className="text-right text-3xl px-3 text-white w-80 bg-slate-400" readOnly value={resultField} />
      <div className="gap-0 bg-red-200 grid grid-cols-[75%_25%]">
        <div className="gray grid grid-cols-3">
          <Operator handleOperation={holdOperator} bgColor="bg-gray-200" label="AC" />
          <Operator handleOperation={holdOperator} bgColor="bg-gray-200" label="+/-" />
          <Operator handleOperation={holdOperator} bgColor="bg-gray-200" label="%" />
          {numbers}
          <Number span={"col-span-2"} handleClick={holdNumber} number={0} />
          <Number handleClick={holdNumber} number="." />
        </div>
        <div className='flex flex-col'>
          {operators}
        </div>
      </div>

    </div>
  )
}

export default App
