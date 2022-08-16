const Challenge = () => {
  
  const n1 = 10;
  const n2 = 5;

  const handleSoma = () => {
    return console.log(n1 + n2)
  }
  
  return (
    <div>
      <p>{n1} + {n2}</p>
      <button onClick={handleSoma}>Somar</button>
    </div>
  );
}

export default Challenge;
