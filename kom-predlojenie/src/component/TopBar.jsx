const TopNavbar = () => {
  return (
    <div className="topNavbar">

      <div className="topNavbar__right">
            
            <button className="topNavbar__button-download">
                Скачать PDF
            </button>
            
            <button className="topNavbar__button-sendToEmail">
                Отправить по почте PDF
            </button>
      </div>

    </div>
  );
};

export default TopNavbar;