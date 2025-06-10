import { Card } from "react-bootstrap"
const VehicleCard = ({ car }) => {
  return (
    <>
      <Card className="vehicle-card">
        <Card.Img variant="top" src="/images/vehicles/vehicle1.jpg" />
        <Card.Body>
          <Card.Title>
            <a href={`vehicle/${car.id}`}>
              {car.brand} {car.model}
            </a>
          </Card.Title>
          <Card.Text>
            {car.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}
export default VehicleCard;