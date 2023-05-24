import './Pokemon.css';

function Pokemon(props) {


    return (
        <>
        <div className="Container">
            <div className="pokeInfo">
                <h1>{props.name}</h1>
                <img  src={props.src} alt='pokemonSprite'/>
                <p>{props.typeOne} {props.typeTwo}</p>
            </div>
        </div>
       
        </>
    )
    
}

export default Pokemon;