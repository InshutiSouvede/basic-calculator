export default function Button(props){
    return (
        <div className={props.isOperator?`bg-orange-400 ${props.span?props.span:''}`:"bg-gray-200"}>
        <button className=" w-20 h-24 border border-black">{props.value}</button>
        </div>
    )
}