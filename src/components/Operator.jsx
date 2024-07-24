export default function Operator(props){
    return (
        <div className={`${props.bgColor} ${props.color}`}>
        <button onClick={props.handleOperation} className="w-20 text-3xl h-24 border border-black">{props.label}</button>
        </div>
    )
}