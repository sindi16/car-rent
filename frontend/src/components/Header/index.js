import { Container, Nav, Navbar, Offcanvas, NavDropdown } from 'react-bootstrap/';
import BookForm from '../book-form';
import "./index.css";
import CustomNavbar from '../../components/Navbar';
import vidio from '../../videos/video1.mp4';

const Header = () => {
  return (
    <>
      {/* importing vidio */}
      <header className='header'>
        <CustomNavbar />
        <div>
        <video
          className="video-background"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={vidio} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

          
        <div className="header-content">
          <h1>Fast & Easy Way To Rent A Car</h1>
          <h3>A small river named Duden flows by their place and supplies it with the necessary<br />
            regelialia. It is a paradisematic country, in which roasted parts</h3>
        </div>
        </div>
        <BookForm />
      </header>
    </>
  )
}

export default Header;