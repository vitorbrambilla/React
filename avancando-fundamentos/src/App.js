import { useState } from 'react';

// CSS
import './App.css';

// Components
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

// Images
import Landscape from './assets/img2.jpg';
import UserDetails from './components/UserDetails';

const App = () => {

  // const name = 'Vitor'
  const [userName] = useState('Enzo')

  const cars = [
    {id: 1, brand: 'Ferrari', color: 'Amarelo', newCar: true, km: 0},
    {id: 2, brand: 'KIA', color: 'Branco', newCar: false, km: 15000},
    {id: 3, brand: 'Renault', color: 'Azul', newCar: false, km: 10000},
  ]

  const showMessage = () => {
    console.log('Evento do componente pai')
  }

  const [message, setMessage] = useState('')

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  const pessoas = [
    { id: 1, name: 'Vitor', age: 18, occupation: 'Programmer' },
    { id: 2, name: 'Enzo', age: 15, occupation: 'Doctor' },
    { id: 3, name: 'Lucca', age: 3, occupation: 'Soccer Player' },
  ]

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="img1" />
      </div>

      {/* Imagem em src/asset */}
      <div>
        <img src={Landscape} alt="Landscape" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand='VW' km={100000} color='Azul' newCar={false} />
      {/*reaproveitando*/}
      <CarDetails brand='Ford' km={0} color='Vermelho' newCar={true} />
      <CarDetails brand='Fiat' km={4500} color='Branco' newCar={false} />
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails 
          key={car.id}
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          newCar={car.newCar} 
        />
      ))}
      {/* fragment */}
      <Fragment propFragment='teste' />
      {/* children */}
      <Container myValue='testing'>
        <p>Este é o conteúdo</p>
      </Container>
      <Container myValue='testing 2'>
        <h5>Este é o segundo conteúdo</h5>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/* desafio */}
      {pessoas.map((pessoa) => (
        <UserDetails 
          key={pessoa.id}
          name={pessoa.name}
          age={pessoa.age}
          occupation={pessoa.occupation}
        />
      ))}
    </div>
  );
}

export default App;
