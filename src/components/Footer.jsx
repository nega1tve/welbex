import "./Footer.css";
import telegram from "../assets/telegram.svg";
import whatsapp from "../assets/whatsapp.svg";
import viber from "../assets/viber.svg";

function Footer() {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="container">
          <div>
            <div className="footer-caption about">О компании</div>
            <div className="about-content">
              <p>Партнёрская программа</p>
              <p>Вакансии</p>
            </div>
          </div>
          <div>
            <div className="footer-caption menu">Меню</div>
            <div className="menu-content__left">
              <p>Расчёт стоимости</p>
              <p>Услуги</p>
              <p>Виджеты</p>
              <p>Интеграции</p>
              <p>Наши клиенты</p>
            </div>
            <div className="menu-content__right">
              <p>Кейсы</p>
              <p className="mails">Благодарственные письма</p>
              <p>Сертификаты</p>
              <p>Блог на Youtube</p>
              <p>Вопрос / Ответ</p>
            </div>
          </div>
          <div>
            <div className="footer-caption contact">Контакты</div>
            <div className="contact-content">
              <div>
                <p>+7 555 555-55-55</p>
              </div>

              <div className=" logos">
                <img src={telegram} title="HTML5" alt="program_img" />

                <img src={viber} title="CSS3" alt="program_img" />

                <img src={whatsapp} title="Javascript" alt="program_img" />
              </div>

              <p className=" address">Москва, Путевой проезд 3с1, к 902</p>

              <div>
                <p className="copyright">©WELBEX 2022. Все права защищены.</p>
                <p>Политика конфиденциальности</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
