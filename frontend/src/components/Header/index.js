import { Container, Nav, Navbar, Offcanvas, NavDropdown } from 'react-bootstrap/';
import BookForm from '../book-form';
import "./index.css";
import CustomNavbar from '../../components/Navbar';

const Header = () => {
  return (
    <>
      <CustomNavbar />
      <header className='header'>
        <div className="header-content">
          <h1>Fast & Easy Way To Rent A Car</h1>
          <h3>A small river named Duden flows by their place and supplies it with the necessary<br />
            regelialia. It is a paradisematic country, in which roasted parts</h3>
        </div>
        <BookForm />
      </header>
    </>
  )
}

export default Header;