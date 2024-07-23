import { nanoid } from 'nanoid'
import './App.css'
import Button from './components/Button'

function App() {
  const numArr = [7,8,9,4,5,6,1,2,3]
  return (
    <div className='w-max py-20 m-auto'>
    <input type='text' className="h-10 bg-slate-400 w-full"  value={0} />
    <div className="gap-0 bg-red-200 grid grid-cols-[75%_25%]">
      <div className="gray grid grid-cols-3">
      <Button isOperator={false} value ="AC"/>
      <Button isOperator={false} value ="+/-"/>
      <Button isOperator={false} value ="%"/>      
      {numArr.map((el)=><Button key={nanoid()} isOperator={false} value={el} />)}
      <Button span = {"col-span-2"} value ={0}/>
      <Button isOperator={false} value ="."/>
      </div>
      <div className='flex flex-col'>
      <Button isOperator = {true} value ="AC"/>
      <Button isOperator = {true} value ="AC"/>
      <Button isOperator = {true} value ="AC"/>
      <Button isOperator = {true} value ="AC"/>
      <Button isOperator = {true} value ="AC"/>
      </div>
    </div>
      
    </div>
  )
}

export default App
