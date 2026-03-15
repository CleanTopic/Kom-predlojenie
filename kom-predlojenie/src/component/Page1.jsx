import React from "react";






const Page1 = (props) => {


    return (
        <div className="pdfPage">

            <div className="page__Text-container">
                <h1 className="page__Title">
                    Коммерческое предложение
                </h1>

                <h2>
                    Уважаемый партнёр,
                </h2>

                <p>
                    предлагаем вам ознакомиться с нашим коммерческим предложением — тщательно
                    продуманным, выгодным и ориентированным на ваши цели. Будем рады обсудить
                    детали и найти оптимальное решение для вашего бизнеса.
                </p>
            </div>

            <table className="page_Items">

                <thead>
                    <tr>
                        <th>№</th>
                        <th>Наименование позиции</th>
                        <th>Количество</th>
                        <th>Цена</th>
                        <th>% скидки</th>
                        <th>Сумма скидки</th>
                        <th>Ваша цена</th>
                    </tr>
                </thead>

                <tbody>
                    <>
                        {props.itemsInfo.items.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td>{item.discountPercent}</td>
                                <td>{item.discountAmount}</td>
                                <td>{item.finalPrice}</td>
                            </tr>
                        ))}
                    </>
                </tbody>

            </table>

            <div className="page_ander">
                <div className="page__Total">
                    <strong>Итого:</strong> {props.itemsInfo.totals.quantity} позиция на сумму <span>{props.itemsInfo.totals.price}₽</span> {props.itemsInfo.totals.finalPrice}₽.
                </div>

                <p>Цена по данному коммерческому предложению актуальна в течении трех рабочих дней.</p>
                <p>Просим вас ознакомиться до <span className="page_dateAt">{props.itemsInfo.totals.lastDayOffer}</span></p>
            </div>
        </div>
    );


};


export default Page1;