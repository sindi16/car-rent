import Form from 'react-bootstrap/Form';
import contactimage from '../../images/about.jpg'
import './index.css';
import CustomNavbar from "../../components/Navbar";
import Footer from '../../components/Footer';

const Contact = () => {
    return (
        <>
            <CustomNavbar />
            <div className="headofcontact">
                <img className="contactimage" src={contactimage} alt="hi" />
            </div>

            <div className="head-of-contactpage" ></div>
            <div className="contact-container">
                <h2 className="contact-title">Contact Us</h2>
                <p className="contact-subtitle">Complete the form, or leave us a message:</p>

                <div className="contact-content">
                    {/* Left Image Section */}
                    <div
                        className="contact-img"
                        style={{ backgroundImage: `url(${contactimage})` }}
                    ></div>

                    {/* Right Form Section */}
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" name="firstName" placeholder="Your first name" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" name="lastName" placeholder="Your last name" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" placeholder="Your email address" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="4" placeholder="Your message here..."></textarea>
                        </div>

                        <button type="submit" className="contact-btn">Send Message</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;