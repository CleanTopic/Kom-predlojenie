const Page3 = (props) => {



    return (
        <div className='pdfPage'>

            <div className="page__Text-container">
                <h1 className="page__Title">
                    Коммерческое предложение составил менеджер: <span className="page__Manager">{props.manager.name}</span>
                </h1>
                <div className="manager__contacts">
                    <div className="manager__email">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            style={{ marginRight: '6px' }}
                        >
                            <path d="M0 4a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm2-1a1 1 0 00-1 1v.217l7 4.2 7-4.2V4a1 1 0 00-1-1H2zm13 2.383l-5.803 3.482L15 12.117V5.383zM14.8 13H1.2l5.803-3.252L14.8 13zM1 12.117l5.803-3.252L1 5.383v6.734z" />
                        </svg>
                        {props.manager.email}
                    </div>

                    <div className="manager__phone">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            style={{ marginRight: '6px' }}
                        >
                            <path d="M3.654 1.328a.678.678 0 00-1.015.063L1.605 2.78c-.483.536-.661 1.303-.386 1.987.287.734.755 1.922 1.42 3.243.662 1.318 1.477 2.43 2.44 3.394.964.963 2.077 1.778 3.395 2.44 1.322.665 2.51 1.133 3.245 1.42.685.275 1.45.097 1.986-.386l1.389-1.034a.678.678 0 00.063-1.015l-2.25-2.25a.678.678 0 00-.58-.176l-2.4.48a.678.678 0 01-.657-.166L6.42 6.657a.678.678 0 01-.166-.657l.48-2.4a.678.678 0 00-.176-.58l-2.25-2.25z" />
                        </svg>
                        {props.manager.phone}
                    </div>
                </div>

            </div>

        </div>
    )
}


export default Page3;