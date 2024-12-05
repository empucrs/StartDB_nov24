import { useState } from "react";

export function useToggle(valorInicial: boolean): [boolean, () => void] {
    const [valor, setValor] = useState(valorInicial);

    const toggleValor = () => {
        setValor(!valor);
    };

    /*
    //DECLARACAO EQUIVALENTE PARA FUNCAO TOGGLEVALOR
    function toggleValor() {
        setValor(!valor);
    }
    */

    return [valor, toggleValor];
}