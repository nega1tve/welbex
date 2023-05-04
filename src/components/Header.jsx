import "./Header.css";
import logo from "../assets/logo.svg";
import telegram from "../assets/telegram.svg";
import whatsapp from "../assets/whatsapp.svg";
import viber from "../assets/viber.svg";

function Header() {
  if (window.innerWidth <= 320) {
    return (
      <>
        <header id="header" className="header">
          <div className="fix-header">
            <p id="header-services">Услуги</p>
            <p id="header-widgets">Виджеты</p>
            <p id="header-integrations">Интеграции</p>
            <p id="header-cases">Кейсы</p>
          </div>
        </header>
      </>
    );
  } else {
    return (
      <>
        <header id="header" className="header">
          <div className="logo-section">
            <img id="logo" className="logo" src={logo} alt="logo_img" />

            <p className="header-text">
              крупный интегратор CRM
              <br /> в Росcии и ещё 8 странах
            </p>
          </div>
          <div className="menu-important">
            <p id="header-services">Услуги</p>
            <p id="header-widgets">Виджеты</p>
            <p id="header-integrations">Интеграции</p>
            <p id="header-cases">Кейсы</p>
            <p id="header-certifications">Сертификаты</p>
          </div>
          <div className="number">+7 555 555-55-55</div>

          <img
            id="telegram"
            src={telegram}
            title="telegram"
            alt="program_img"
          />

          <img id="viber" src={viber} title="viber" alt="program_img" />

          <img
            id="whatsapp"
            src={whatsapp}
            title="whatsapp"
            alt="program_img"
          />
        </header>
      </>
    );
  }
}

export default Header;
