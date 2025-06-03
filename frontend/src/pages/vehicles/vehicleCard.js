import { Card } from "react-bootstrap"
const VehicleCard = ({ car }) => {
  console.log('cars', car);
  return (
    <>
      <Card className="vehicle-card">
        <Card.Img variant="top" src="/images/vehicles/vehicle1.jpg" />
        <Card.Body>
          <Card.Title>{car.brand} {car.model}</Card.Title>
          <Card.Text>
            {car.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}
export default VehicleCard;