import CustomButton from "./My-Button";
import './topBar.css';

const TopNavbar = ({ onDownload, onMailSend}) => {
    return (
        <div className="topNavbar">

            <div className="topNavbar__right">

                <CustomButton onClick={onDownload}>
                    Скачать PDF
                </CustomButton>

                {/*CustomButton onClick={onMailSend}>
                    Отправить по почте
                </CustomButton>*/} 
            </div>

        </div>
    );
};

export default TopNavbar;