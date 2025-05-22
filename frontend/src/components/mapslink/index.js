// src/pages/locations/index.js (or similar)
import { Button, Container } from 'react-bootstrap';
import './index.css';

const LocationPage = () => {
  const googleMapsUrl = "https://maps.app.goo.gl/xrqTDChj62cYntzM8?g_st=com.google.maps.preview.copy"; // Replace with your location

  return (
    <Container className="text-center mt-5">
      <p>We are located in the heart of Tirana. Click below to find us on the map.</p>

      <Button
        variant="warning"
        size="lg"
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Open in Google Maps
      </Button>
    </Container>
  );
};

export default LocationPage;
