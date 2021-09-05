import '../styling/Footer.css'

import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-columns'>
                <div>
                    <p className='column-header line-after'>Resources</p>
                    <Link to="/construction" className="footer-nav">Help Center</Link>
                </div>
                <div>
                    <p className='column-header line-after'>Meet the team</p>
                    <Link to="/construction" className="footer-nav">About Us</Link>
                    <Link to="/construction" className="footer-nav">The Blog</Link>
                </div>
            </div>
            <div className='footer-copyright'>
                © Pintform
            </div>
        </footer>
    );
}
  
export default Footer;
  