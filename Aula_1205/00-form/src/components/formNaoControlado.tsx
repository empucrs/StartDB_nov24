import { useRef } from "react";

interface formulario{
    nome:string;
    email:string;
    idade:number;
    eleitor:boolean;
}

export default function FormNaoControlado() {

  const formInicial: formulario = {
    nome: "",
    email: "",
    idade: 0,
    eleitor: false,
  };

  const refNome    = useRef<HTMLInputElement>(null);
  const refEmail   = useRef<HTMLInputElement>(null);
  const refIdade   = useRef<HTMLInputElement>(null);
  const refEleitor = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Nome: ${refNome.current?.value} \nEmail: ${refEmail.current?.value} \nIdade: ${refIdade.current?.value} \nEleitor: ${refEleitor.current?.checked}`);
  };

  return (
    <form onSubmit={handleSubmit}>
        <fieldset>
        <label htmlFor="nome">
            Nome
            <input type="text" name="nome" placeholder="Digite seu nome" defaultValue={formInicial.nome} ref={refNome}/>
            <br />
        </label>

        <label htmlFor="email">
            Email
            <input type="email" name="email" placeholder="Digite seu email" defaultValue={formInicial.email} ref={refEmail}/>
            <br />
        </label>

        <label htmlFor="idade">
            Idade
            <input type="number"name="idade" placeholder="Digite sua idade"  defaultValue={formInicial.idade} ref={refIdade}/>
            <br />
        </label>

        <label>
            Eleitor
            <input type="checkbox" name="eleitor" defaultChecked={formInicial.eleitor} ref={refEleitor}/>
            <br />
        </label>
        </fieldset>

        <input type="submit" value="Enviar" />
    </form>
  )
}