import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__terms'>
        <h2 className='footer__h2'>
          Privacy Policy:
        </h2>

        <h3 className='footer__h3'>
          We are committed to safeguarding your personal information and respecting your privacy.
          Our privacy policy outlines how we collect, use, and protect your data in accordance with applicable regulations.
        </h3>

        <h2 className='footer__h2'>Terms of Use:</h2>

        <h3 className='footer__h3'>
          By accessing and using our website, you agree to abide by our terms of use.
          These terms govern your interactions with our site, content usage, and the responsibilities of both parties.
        </h3>
      </div>

      <div className='footer__h3'>
      © Company Name, 2023 - All rights reserved.
      </div>
    </div>
  )
}

export default Footer
