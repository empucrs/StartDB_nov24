import { useState } from "react";

interface formulario{
    nome:string;
    email:string;
    idade:number;
    eleitor:boolean;
}

export default function FormControlado() {

  const [formAtual, setFormAtual] = useState<formulario>({
    nome: '',
    email: '',
    idade: 0,
    eleitor: false
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target

    setFormAtual({
      ...formAtual,
      [name]: type === 'checkbox'? checked: value}
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //console.log(formAtual);
    alert(`Nome: ${formAtual.nome} \nEmail: ${formAtual.email} \nIdade: ${formAtual.idade} \nEleitor: ${formAtual.eleitor}`)
  };

  return (
    <form onSubmit={handleSubmit}>
        <fieldset>
        <label htmlFor="nome">
            Nome
            <input type="text" name="nome" value={formAtual.nome} placeholder="Digite seu nome" onChange={handleChange}/>
            <br />
        </label>

        <label htmlFor="email">
            Email
            <input type="email" name="email" value={formAtual.email} placeholder="Digite seu email" onChange={handleChange}/>
            <br />
        </label>

        <label htmlFor="idade">
            Idade
            <input type="number"name="idade" value={formAtual.idade} placeholder="Digite sua idade" onChange={handleChange}/>
            <br />
        </label>

        <label>
            Eleitor
            <input type="checkbox" name="eleitor" checked={formAtual.eleitor} onChange={handleChange}/>
            <br />
        </label>
        </fieldset>

        <input type="submit" value="Enviar" />
    </form>
  )
}