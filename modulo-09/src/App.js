/* O use state retorn duas funçoes a primeira
é o estado em si e a segunda propriedade usada para alterar o estado */

// useEffect sobrepoe os métodos de ciclo de vida
import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [techs, setTechs] = useState(['ReactJs', 'ExpressJs', 'NodeJs']);
  const [newTech, setNewTech] = useState('');

  // useCallback é semelhante ao useMemo só que ao invés de retornar apenas um único valor retorna uma função
  // e evita que a funçao seja montada toda vez que o estado atualizar

  const handleAdd = useCallback(() => {
    setTechs([...techs, newTech]);
    setNewTech('');
  }, [techs, newTech]);

  // recebe dois parâmetros a funçāo que vai ser executada, e quando vai ser executada

  // executa apenas na montagem do componente
  useEffect(() => {
    //   const storageTech = localStorage.getItem('techs');
    //   if (storageTech) {
    //     setTechs(JSON.stringify(storageTech));
    //   }
    //   // quando o compoente deixa de existir
    //   return () => {};
  }, []);

  // segundo parame tro é um array de dependencias que fica monitorando alteracoes em certas varáveis
  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  // useMemo é responsável por fazer calculos que nāo precisam ficar calculados toda vez que componente é rendenizado

  const techSize = useMemo(() => techs.length, [techs]);

  return (
    <>
      <ul>
        <strong>Você tem {techSize} tecnologias</strong> <br />
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
