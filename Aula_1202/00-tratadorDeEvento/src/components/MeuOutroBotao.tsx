import React from "react";

export default function MeuOutroBotao() {

    const theOtherHandleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      alert(`O botão ${event.currentTarget.name} foi clicado`);
    }

    return <button name="btnClick" onClick={theOtherHandleClick}>Clique neste outro botão</button>;
}