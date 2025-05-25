import './index.css';
import Footer from '../../components/Footer';
import CustomNavbar from '../../components/Navbar';
import LocationPage from '../../components/mapslink';

const Location = () => {
    return (
        <>
            <div className="location-page">
                <CustomNavbar />
                <div className="location-title">
                    <h1>Visit us at our central location.</h1>
                    <p>
                        Let the road lead you to us...<br />
                        Where passion, design, and experience come together.<br />
                        Use the map below to guide your way. We’ll be here, waiting to welcome you.
                        <LocationPage />
                    </p>
                </div>
            </div>

            <div className="location-content">
                <p>Find us in the heart of city.</p>
                <div className="map-photo"></div>
            </div>

            <Footer />
        </>
    );
};

export default Location;
