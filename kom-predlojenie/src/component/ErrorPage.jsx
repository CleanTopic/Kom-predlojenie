import './errorPage.css';

const ErrorPage = () => {
    return (
        <div className='Container_Error'>
            <div className="overlay-dark"></div> 
            <div className="text-overlay">
                <div className="ErrorCode">404</div>
                <h1 className="Title_error">Произошла ошибка при загрузке данных</h1>
                <p className="Disc_error">Тут без фиксиков не обойтись...
                </p>
            </div>
        </div>
    );
}

export default ErrorPage;