import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faYoutube,faInstagram,faXTwitter,faFacebookF } from "@fortawesome/free-brands-svg-icons";
import './Footerr.css'
export default function Footerr() {
  return (
    <div className='footerr'>
      <div className="footer-icons">
        <FontAwesomeIcon icon={faFacebookF} size="2x" />
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        <FontAwesomeIcon icon={faXTwitter} size="2x" />
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </div>
      <ul>
        <li>Audio Discription</li>
        <li>Help Centre</li>
        <li>Gift Card</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms Of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preference</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>&copy; 1997-2025 Netflix,Inc</p>
    </div>
  )
}
