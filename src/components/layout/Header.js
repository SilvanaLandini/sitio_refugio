import { BrowserRouter as Router } from 'react-router-dom';
import '../../styles/components/layout/Header.css';


const Header = (props) => {
  return (
    <header>
      <div className="holder">
        <div className="encabezado">
          <Router>
            <a href="/" rel="noreferrer">
              <img className="logo" src="logo.png" width="100" alt="Mi/Gu AU Refugio" />
              <h1>Mi/Gu AU Refugio</h1>
            </a>
          </Router>
          <img className="logos" src="img/home/facebook.png" width="30" alt="facebook" />
          <img className="logos" src="img/home/instagram.png" width="30" alt="instagram" />
          <img className="logos" src="img/home/whatsapp.png" width="30" alt="whatsapp" />
        </div>
      </div>
    </header>
  );
}

export default Header;