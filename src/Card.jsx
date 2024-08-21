import { CardGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ElmentCard({ placeData, onDelete }) {
  let currCond = placeData.currentConditions;

  return (
    <Card >
      <Card.Img variant="top"  src={"/images/" + currCond.icon + ".svg"} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between'>
          <h2>{(placeData.address).toUpperCase()}</h2>
          <h4>{currCond.temp}</h4>
        </Card.Title>

        <CardGroup className='d-flex justify-content-between'>
          <Card.Text>{placeData.resolvedAddress} </Card.Text>
          <h6>{currCond.datetime}</h6>
        </CardGroup>

          <Card.Text>{placeData.description} </Card.Text>
          <Card.Text>Feels like: {currCond.feelslike} </Card.Text>
          <Card.Text>Humidity: {currCond.humidity} </Card.Text>
          <Card.Text>cloudcover: {currCond.cloudcover} </Card.Text>
          <Card.Text>precipitation: {currCond.precip} </Card.Text>
          <Card.Text>Rain probability: {currCond.precipprob} </Card.Text>
          <Card.Text>Wind speed: {currCond.windspeed} </Card.Text>
          <Card.Text>Snow: {currCond.snow} </Card.Text>
          <Card.Text>Sunrise: {currCond.sunrise} </Card.Text>
          <Card.Text>Sunset: {currCond.sunset} </Card.Text>
          <Button variant="primary" onClick={() => onDelete(placeData.id)}>Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default ElmentCard;