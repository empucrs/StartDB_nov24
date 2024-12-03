
export default function MeuBotao() {

    const newHandleClick = () => {
        alert('clicou no componente "meu botão"');
      }

    return <button onClick={newHandleClick}>Clique neste botão</button>;

}