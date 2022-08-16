const UserDetails = ({ name, age, occupation }) => {
  return (
    <div>
      <ul>
        <li>Nome: {name}</li>
        <li>Age: {age}</li>
        <li>Occupation: {occupation}</li>
      </ul>
      {age >= 18 && <h3>{name} PODE DIRIGIR!!!</h3>}
    </div>
  )
}

export default UserDetails
 