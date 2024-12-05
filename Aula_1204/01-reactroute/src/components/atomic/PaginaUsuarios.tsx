import { Link, Outlet } from "react-router";

export default function PaginaUsuarios(){

    return(
        <>
            <h1>Lista de usuarios</h1>
            <ul>
                <li>
                    <Link to="u1"> Edson Moreno</Link>
                </li>
                <li>
                    <Link to="123"> Francisco Moreno</Link>                
                </li>
                <li>
                    <Link to="vai"> Antonio Moreno</Link>                
                </li>
            </ul>
            <Outlet/>
        </>
    );

}