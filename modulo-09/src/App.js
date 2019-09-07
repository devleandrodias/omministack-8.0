/* O use state retorn duas funçoes a primeira
é o estado em si e a segunda propriedade usada para alterar o estado */
import React, { useState } from 'react';

function App() {
  const [techs, setTechs] = useState(['ReactJs', 'ExpressJs', 'NodeJs']);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTechs([...techs, newTech]);
    setNewTech('');
  }

  return (
    <>
      <ul>
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
