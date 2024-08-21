import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './App.css';
import ElmentCard from './Card';
const token = import.meta.env.VITE_API_TOKEN;

let nextId = 0;
function App() {
  const [places, setPlaces] = useState([]);
  const [location, setLocation] = useState('');
  const [inputV, setInputVal] = useState('');
  const [unit, setUnit] = useState('metric');


  useEffect(() => {
    if (location != '') {
      async function getData() {
        let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unit}&key=${token}`;
        let raw = await fetch(url)
        let objJs = await raw.json();
        return objJs;
      }

      getData().then(response => {
        response["id"] = nextId++;
        setPlaces([...places, response])
      });
    }

  }, [location])

  function handleSubmit(e) {
    e.preventDefault();
    setLocation(inputV);
    setInputVal('');
  }
  function handlerDelete(id) {
    const placesF = places.filter(p => p.id != id);
    setPlaces(placesF)
  }

  return (
    <div>
      <header >
        <h1>CHECK THE WEATHER</h1>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control type="text"
              placeholder="City..."
              onChange={e => setInputVal(e.target.value)} value={inputV} />
          </Form.Group>
          <Form.Select aria-label="Default select example"
            value={unit}
            onChange={e => setUnit(e.target.value)} >
            <option value="metric">Celcius</option>
            <option value="us">Fahrenheit</option>
          </Form.Select>

          <Button variant='secondary' type="submit">
            Submit
          </Button>

        </Form>
      </header>
      <main>
        <div className='cardsContainer' >
          {places.map(place => {
            return (
              <ElmentCard
                key={place.id}
                placeData={place}
                onDelete={handlerDelete}
              ></ElmentCard>
            )
          })}
        </div>

      </main>
      <footer> ODIN PROJECT &#64; Juan David Guarin</footer>

    </div>
  );
}

export default App
