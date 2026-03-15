const Page3 = (props) => {



    return (
        <div className='pdfPage'>

            <div className="page__manager-Text-container">
                <h1 className="page__manager-Title">
                    Коммерческое предложение составил менеджер: <span className="page__Manager">{props.manager.name}</span>
                </h1>
                <div className="manager__contacts">
                    <div className="manager__email">
                        {props.manager.email}
                    </div>

                    <div className="manager__phone">
                        {props.manager.phone}
                    </div>
                </div>

            </div>

        </div>
    )
}


export default Page3;