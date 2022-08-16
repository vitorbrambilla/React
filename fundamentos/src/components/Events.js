const Events = () => {

  const handleClick = (e) => {
    console.log(e)
    console.log('Clicou')
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando isso</h1>;
    } else {
      return <h1>Ou renderizando isso</h1>;
    }
  }

  return (
    <div>
      <div>
        <button onClick={handleClick}>Clique aqui!</button>
      </div>
      <div>
        <button onClick={() => console.log('Clicou 2')}>
          Clique aqui 2
        </button>
        <button onClick={() => {
          if (true) {
            console.log('Isso não deveria existir');
          }
        }}>Clique aqui 3</button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
}

export default Events;
