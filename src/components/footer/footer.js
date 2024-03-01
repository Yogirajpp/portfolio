// Footer.js
import React, { useState } from 'react';
import './footer.css';
import instagramQR from '../../images/instagramQR.png';
import twitterQR from '../../images/twitterQR.png';
import linkedinQR from '../../images/linkedinQR.png';
import githubQR from '../../images/githubQR.png';

const Footer = () => {
  const [selectedQR, setSelectedQR] = useState(instagramQR); // Set default QR code

  const handleButtonClick = (qr) => {
    setSelectedQR(qr);
  };

  return (
    <div className="footer-container">
        <div className='footer-redirect-container'>
            
        </div>
        <div className='button-qr-container'>
            <div className="button-container">
                <button className={`button ${selectedQR === instagramQR ? 'active' : ''}`} onClick={() => handleButtonClick(instagramQR)}>Instagram</button>
                <button className={`button ${selectedQR === twitterQR ? 'active' : ''}`} onClick={() => handleButtonClick(twitterQR)}>Twitter</button>
                <button className={`button ${selectedQR === linkedinQR ? 'active' : ''}`} onClick={() => handleButtonClick(linkedinQR)}>LinkedIn</button>
                <button className={`button ${selectedQR === githubQR ? 'active' : ''}`} onClick={() => handleButtonClick(githubQR)}>GitHub</button>
            </div>
        </div>
        {selectedQR && <img className="qr-code" src={selectedQR} alt="QR Code" />}
    </div>
  );
};

export default Footer;
