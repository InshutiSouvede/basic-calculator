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
  const numArr = [7, 8, 9, 4, 5, 6, 1, 2, 3], basicOperator = ['÷', 'x', '-', '+', '=']

  const numbers = numArr.map((el) => <Number handleClick={holdNumber} key={nanoid()} number={el} />)
  const operators = basicOperator.map((el) => <Operator handleOperation={holdOperator} key={nanoid()} bgColor="bg-orange-400" color="text-white" label={el} />)
  function holdNumber(event) {
    const num = event.target.textContent
    setResultField(prev => {
      if ((prev === '0'&& num!=='.')|| resultGiven) {
        setResultGiven(false)
        return num
      }
      if (num == '.') {
        if (prev.includes('.')) return prev
      }
      return prev + num
    })
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
      setResultGiven(true)
      setResultField(prev => {
        if (op == '+') {
          return parseFloat((parseFloat(value1) + +prev).toFixed(7))
        }
        if (op == '-') {
          return parseFloat((parseFloat(value1) - +prev).toFixed(7))
        }
        if (op == 'x') {
          return parseFloat((+value1 * +prev).toFixed(7))
        }
        if (op == '÷') {
          return parseFloat((parseFloat(value1) / +prev).toFixed(7))
        }
        if (op == '%') {
          return parseFloat((parseFloat(value1) % +prev).toFixed(7))
        }
        return value1 + op + prev
      })
    }
    else {

      setValue1(resultField)
      setOp(operator)
      setResultField('0')
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
