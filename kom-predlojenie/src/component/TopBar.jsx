
import './topBar.css';

const TopNavbar = (props) => {
    return (
        <div className="topNavbar">

            <div className="topNavbar__right">
                
                <button className="topNavbar__button-sendToEmail">
                    Отправить по почте PDF
                </button>
            </div>

        </div>
    );
};

export default TopNavbar;