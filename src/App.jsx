import { nanoid } from 'nanoid'
import './App.css'
import Number from './components/Numbers'
import { useState } from 'react'
import Operator from './components/Operator'

function App() {
  const [answerField, setAnswerField] = useState("0")
  const numArr = [7,8,9,4,5,6,1,2,3], basicOperator  = ['÷','X','-','+','=']
  
  const numbers = numArr.map((el)=><Number handleClick={holdNumber} key={nanoid()}  number={el} />)
  const operators = basicOperator.map((el)=><Operator key={nanoid()} bgColor = "bg-orange-400" color ="text-white" label ={el}/>)
  function holdNumber(event){
    console.log(event.target.textContent)
  }
  return (
    <div className='w-max py-20 m-auto'>
    <input type='text' className="text-right text-3xl px-3 text-white w-80 bg-slate-400"  value={answerField} />
    <div className="gap-0 bg-red-200 grid grid-cols-[75%_25%]">
      <div className="gray grid grid-cols-3">
      <Operator bgColor ="bg-gray-200"  label ="AC"/>
      <Operator bgColor ="bg-gray-200"  label ="+/-"/>
      <Operator bgColor ="bg-gray-200"  label ="%"/>      
      {numbers}
      <Number span = {"col-span-2"} handleClick={holdNumber} number ={0}/>
      <Number  handleClick={holdNumber} number ="."/>
      </div>
      <div className='flex flex-col'>
        {operators}
      </div>
    </div>
      
    </div>
  )
}

export default App
