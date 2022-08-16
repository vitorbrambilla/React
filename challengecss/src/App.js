import './App.css';
import Cars from './components/Cars';

function App() {

  const cars = [
    {id: 1, brand: 'BMW', color: 'Black', km: 1500},
    {id: 2, brand: 'Mercedes', color: 'White', km: 1200},
    {id: 3, brand: 'Ferrari', color: 'Red', km: 1400},
  ]

  return (
    <div className="App">
      <h1 className='title'>CARS</h1>
      <ul>
        {cars.map((car) => (
          <Cars 
            key={car.id}
            brand={car.brand}
            color={car.color}
            km={car.km}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
