import "./Footer.css";
import telegram from "../assets/telegram.svg";
import whatsapp from "../assets/whatsapp.svg";
import viber from "../assets/viber.svg";

function Footer() {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-caption about">О компании</div>
        <p id="partnership" className="menu-content">
          Партнёрская программа
        </p>
        <p id="vacancies" className="menu-content">
          Вакансии
        </p>

        <div className="footer-caption menu">Меню</div>

        <p id="costing" className="menu-content">
          Расчёт стоимости
        </p>
        <p id="services" className="menu-content">
          Услуги
        </p>
        <p id="widgets-menu" className="menu-content">
          Виджеты
        </p>
        <p id="integrations" className="menu-content">
          Интеграции
        </p>
        <p id="clients" className="menu-content">
          Наши клиенты
        </p>

        <p id="cases" className="menu-content">
          Кейсы
        </p>
        <p id="mails" className="menu-content">
          Благодарственные письма
        </p>
        <p id="certificates" className="menu-content">
          Сертификаты
        </p>
        <p id="blog" className="menu-content">
          Блог на Youtube
        </p>
        <p id="QA" className="menu-content">
          Вопрос / Ответ
        </p>

        <div className="footer-caption contact">Контакты</div>

        <p id="number-contacts">+7 555 555-55-55</p>

        <img
          id="telegram-contacts"
          src={telegram}
          title="HTML5"
          alt="program_img"
        />

        <img id="viber-contacts" src={viber} title="CSS3" alt="program_img" />

        <img
          id="whatsapp-contacts"
          src={whatsapp}
          title="Javascript"
          alt="program_img"
        />

        <p className="address">Москва, Путевой проезд 3с1, к 902</p>

        <p className="copyright">©WELBEX 2022. Все права защищены.</p>
        <p className="confidential">Политика конфиденциальности</p>
      </footer>
    </>
  );
}

export default Footer;
