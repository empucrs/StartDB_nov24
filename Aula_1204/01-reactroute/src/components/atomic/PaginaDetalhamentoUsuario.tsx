import { useParams } from "react-router-dom";

export default function PaginaDetalhamentoUsuario(){
    const params = useParams();
    const userID = params.userID;

    return(
        <>
          <p>ID: {userID}</p>
          <p>Nome:</p>
        </>
    );

}