import locationBg from '../../images/bg_1.jpg';

const About =  () => {
    return (
        <>
        <div
                        className="about-page"
                        style={{ backgroundImage: `url(${locationBg})` }}>
                        <div className="about-title">
                            <h1>Our Location</h1>
                            <p>Find us at the heart of the city, ready to serve you.</p>
                        </div>
                    </div>
        </>
    );
};

export default About;