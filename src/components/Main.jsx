import "./Main.css";

function Main() {
  return (
    <>
      <main className="main">
        <div className="container">
          <div className="main-left">
            <div className="big-text">Зарабатывайте больше</div>
            <div className="gradient-text">с WELBEX</div>
            <div className="regular-text-left">
              Развиваем и контролируем продажи за вас
            </div>
          </div>
          <div className="main-right">
            <div className="regular-text-right">
              Вместе с
              <span className="gradient-span"> БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ </span>
              мы дарим:
            </div>
            <div>
              <div className="grid">
                <div className="grid-element">
                  <h2>Виджеты</h2>
                  <p>30 готовых решений</p>
                </div>
                <div className="grid-element">
                  <h2>Dashboard</h2>
                  <p>с показателями вашего бизнеса</p>
                </div>
                <div className="grid-element">
                  <h2>Skype Аудит</h2>
                  <p>отдела продажи и CRM системы</p>
                </div>
                <div className="grid-element">
                  <h2>35 дней</h2>
                  <p>использования CRM</p>
                </div>
              </div>
              <div>
                <button className="main-right-btn">
                  Получить консультацию
                </button>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
