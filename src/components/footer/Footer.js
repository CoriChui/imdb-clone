import React from 'react'

function Footer() {
  return (
    <div className="footer">
      <div className="footer__social">
        <i class="fab fa-facebook-square fa-2x"></i>
        <i class="fab fa-instagram fa-2x"></i>
        <i class="fab fa-twitch fa-2x"></i>
        <i class="fab fa-twitter fa-2x"></i>
        <i class="fab fa-youtube fa-2x"></i>
      </div>
      <div className="footer__links">
        <h4>Help</h4>
        <h4>Site Index</h4>
        <h4>Advertising</h4>
        <h4>Jobs</h4>
        <h4>Privacy Policy</h4>
      </div>
      <p>&copy; 1990-2021 by IMDb.com, Inc.</p>
    </div>
  )
}

export default Footer
