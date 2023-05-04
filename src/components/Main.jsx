import "./Main.css";

function Main() {
  return (
    <>
      <main className="main">
        <div className="container">
          <div className="main-left big-text">Зарабатывайте больше</div>
          <div className="main-left gradient-text">с WELBEX</div>
          <div className="main-left regular-text-left">
            Развиваем и контролируем продажи за вас
          </div>

          <div className="regular-text-right">
            Вместе с
            <span className="gradient-span"> БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ </span>
            мы дарим:
          </div>

          <h2 id="widgets" className="h2">
            Виджеты
          </h2>
          <p id="widgets-content">30 готовых решений</p>

          <h2 id="dashboard" className="h2">
            Dashboard
          </h2>
          <p id="dashboard-content">с показателями вашего бизнеса</p>

          <h2 id="skype-audit" className="h2">
            Skype Аудит
          </h2>
          <p id="skype-audit-content">отдела продажи и CRM системы</p>

          <h2 id="days" className="h2">
            35 дней
          </h2>
          <p id="days-content">использования CRM</p>

          <div className="main-btn">
            <button id="main-right-btn">Получить консультацию</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
