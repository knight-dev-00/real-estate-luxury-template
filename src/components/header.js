import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <header>
      <div className="fluid-container">
          <div className="col-6 logo">
            <Link to="/"><img src="images/logo.png" alt="Logo" /></Link>
          </div>
          <div className="col-6">
            <nav>
              <div className="nav-bar">
                <ul>
                  <li><Link to="/condos">Condos à vendre</Link></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Accès co-propriétair</a></li>
                </ul>
              </div>
            </nav>
          </div>
      </div>
    </header>
  )
}

export default Header;
