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
                        {props.offerInfo.items.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name_1c}</td>
                                <td>{item.quantity}</td>
                                <td>{item.old_price}</td>
                                <td>{item.discount}</td>
                                <td>{item.discount_price}</td>
                                <td>{item.new_price}</td>
                            </tr>
                        ))}
                    </>
                </tbody>

            </table>

            <div className="page_ander">
                <div className="page__Total">
                    <strong>Итого:</strong> {props.offerInfo.totals.position_quantity} позиция на сумму <span>{props.offerInfo.totals.total_old_price}₽</span> {props.offerInfo.totals.total_price}₽.
                </div>

                <p>Цена по данному коммерческому предложению актуальна в течении трех рабочих дней.</p>
                <p>Просим вас ознакомиться до <span className="page_dateAt">{props.offerInfo.totals.last_day_offer}</span></p>
            </div>
        </div>
    );


};


export default Page1;