import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div>
            <footer>
                <div className="footer-section">
                    <h3>EDYODA</h3>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Privacy Policy</a>
                </div>
                <div className="footer-section">
                    <h3>RESOURCES</h3>
                    <a href="#">Courses</a>
                    <a href="#">Learning Videos</a>
                    <a href="#">Educators</a>
                    <a href="#">Edyoda Stories</a>
                    <a href="#">University</a>
                </div>
                <div className="footer-section">
                    <h3>FOR ENTERPRISES</h3>
                    <a href="#">Train Your Employees</a>
                    <div className = "footer-section">
                        <h3>QUICK LINKS</h3>
                        <a href="#">Learn and Earn</a>
                        <a href="#">Become a Learning-Enabler</a>
                        <a href="#">Tips for Learning-Enabler</a>
                        <a href="#">Request New Topic</a>
                    </div>
                </div>
                <div className="footer-section">
                    <h3>CONNECT</h3>
                    <a href="#">2nd Floor #188, Survey No. - 123/1,<br/>
                        Incubes Building Next to McDonalds,<br/>
                        ITPL Main Rd, Brookefield,<br/>
                        Bengaluru, Karnataka-560037,<br/>
                        India</a><br/>
                    <a href="#"><FontAwesomeIcon icon={faEnvelope} />hello@edyoda.com</a>
                    <a href="#"><FontAwesomeIcon icon={faMapMarker} /><FontAwesomeIcon icon={faTwitter} /><FontAwesomeIcon icon={faFacebook} /><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="#">© 2023<br/>
                        zekeLabs Technologies Private Limited</a>
                </div>
            </footer>
        </div>);
}

export default Footer