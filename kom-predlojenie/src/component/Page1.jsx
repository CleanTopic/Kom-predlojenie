import React from "react";


const Page1 = () => {

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
                    <tr>
                        <td>Значение 1</td>
                        <td>Значение 2</td>
                        <td>Значение 3</td>
                        <td>Значение 4</td>
                        <td>Значение 5</td>
                        <td>Значение 6</td>
                        <td>Значение 7</td>
                    </tr>
                </tbody>

            </table>

        </div>
    );


};


export default Page1;