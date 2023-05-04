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
            <div className="footer-caption">О компании</div>
            <div>
              <ul>
                <li>Партнёрская программа</li>
                <li>Вакансии</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="footer-caption">Меню</div>
            <div>
              <ul>
                <li>Расчёт стоимости</li>
                <li>Услуги</li>
                <li>Виджеты</li>
                <li>Интеграции</li>
                <li>Наши клиенты</li>
              </ul>

              <div>
                <ul>
                  <li>Кейсы</li>
                  <li>Благодарственные письма</li>
                  <li>Сертификаты</li>
                  <li>Блог на Youtube</li>
                  <li>Вопрос / Ответ</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="footer-caption">Контакты</div>
            <ul>
              <li>+7 555 555-55-55</li>
              <li>
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
              </li>
              <li>Москва, Путевой проезд 3с1, к 902</li>
            </ul>
            <div>
              <p>©WELBEX 2022. Все права защищены.</p>
              <p>Политика конфиденциальности</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
