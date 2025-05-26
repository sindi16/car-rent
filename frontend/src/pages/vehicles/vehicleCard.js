import { Card } from "react-bootstrap"
const VehicleCard = () => {
  return (
    <>
      <Card className="vehicle-card">
        <Card.Img variant="top" src="/images/vehicles/vehicle1.jpg" />
        <Card.Body>
          <Card.Title>Luxury Sedan</Card.Title>
          <Card.Text>
            Experience the pinnacle of comfort and style with our luxury sedan, perfect for any occasion.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}
export default VehicleCard;