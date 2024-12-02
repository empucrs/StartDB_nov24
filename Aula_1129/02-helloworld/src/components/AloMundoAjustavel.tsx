interface AloMundoProps {
  nome: string;
}

export function AloMundoAjustavel(props: AloMundoProps) {
  return (
    <h1>Alo Mundo,{props.nome}</h1>
  )
}
