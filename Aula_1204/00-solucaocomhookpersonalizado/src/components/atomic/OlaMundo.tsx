import { useToggle } from '../../hooks/useToggle';

function OlaMundo(){
    const [valorBooleano, setValorBooleano] = useToggle(true);
    return(
        <>
            <button onClick={setValorBooleano}>Clique</button>
            <h1>Olá mundo + {valorBooleano?"Verdadeiro":"falso"}</h1>
        </>
    )
}

export default OlaMundo;