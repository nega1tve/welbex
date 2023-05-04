import "./Header.css";
import logo from "../assets/logo.svg";
import telegram from "../assets/telegram.svg";
import whatsapp from "../assets/whatsapp.svg";
import viber from "../assets/viber.svg";

function Header() {
  return (
    <>
      <header id="header" className="header">
        <div className="container">
          <div className="logo-section">
            <img id="logo" className="logo" src={logo} alt="logo_img" />

            <div className="header-text">
              крупный интегратор CRM в Росcии и ещё 8 странах
            </div>
          </div>

          <div className="menu-important">
            <ul>
              <li>Услуги</li>
              <li>Виджеты</li>
              <li>Интеграции</li>
              <li>Кейсы</li>
              <li>Сертификаты</li>
            </ul>
          </div>

          <div className="number">+7 555 555-55-55</div>

          <div className="logos">
            <ul>
              <li>
                <img src={telegram} title="HTML5" alt="program_img" />
              </li>
              <li>
                <img src={viber} title="CSS3" alt="program_img" />
              </li>
              <li>
                <img src={whatsapp} title="Javascript" alt="program_img" />
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
