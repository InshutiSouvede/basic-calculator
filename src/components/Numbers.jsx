export default function Numbers(props){
    return (
        <div className={props.span?'col-span-2 text-3xl':''}>
        <button onClick={props.handleClick} className="bg-gray-200 w-full h-24 border border-black">{props.number}</button>
        </div>
    )
}