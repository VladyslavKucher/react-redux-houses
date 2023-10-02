import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__terms'>
        <h2 className='footer__h2'>
          About project:
        </h2>

        <h3 className='footer__h3'>
          Portfolio project of West Palm Beach, Real Estate (not commercial). <br />
          This project has been done by Vladyslav Kucher. <br /> 
          Used technologies: React, Redux, JavaScript, HTML, CSS, SCSS, GIT. <br />
          Photos were taken from zillow.com
        </h3>
      </div>

      <div className='footer__h3'>
      © Vladyslav Kucher, 2023 - All rights reserved.
      </div>
    </div>
  )
}

export default Footer
