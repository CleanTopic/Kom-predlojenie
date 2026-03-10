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
                    <tr className="page_Items-header">
                        <th className="page__Header-item">Заголовок 1</th>
                        <th className="page__Header-item">Заголовок 2</th>
                        <th className="page__Header-item">Заголовок 3</th>
                        <th className="page__Header-item">Заголовок 4</th>
                        <th className="page__Header-item">Заголовок 5</th>
                        <th className="page__Header-item">Заголовок 6</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="page_Items-row">
                        <td className="page__Item">Значение 1</td>
                        <td className="page__Item">Значение 2</td>
                        <td className="page__Item">Значение 3</td>
                        <td className="page__Item">Значение 4</td>
                        <td className="page__Item">Значение 5</td>
                        <td className="page__Item">Значение 6</td>
                    </tr>
                </tbody>

            </table>

        </div>
    );


};


export default Page1;