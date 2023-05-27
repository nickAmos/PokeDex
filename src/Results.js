
function Results(props) {

const myStyle = {
    width: '21%',
    height: 45,

}

function increment() {
    if (props.movepool.includes(props.choosenMove)) {
        props.setCount(prev => prev + 1);
} else {
    props.setCount(0);
    alert(`You scored: ${props.count}`)
}
    setTimeout(() => {
        props.setGeneration(prev => prev + 1);
    }, 2000)
}
   

    return(
        <>
        <button style={myStyle} onClick={() => {increment()}}>{props.poke}</button>
        </>
    )

}


export default Results;