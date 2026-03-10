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
                    {props.items.map((item) => (
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
                </tbody>

            </table>

            <div className="page__Total">
                <strong>Итого:</strong> {props.total.quantity} позиция на сумму <span>{props.total.price}₽</span> {props.total.finalPrice}₽.
            </div>
        </div>
    );


};


export default Page1;