import React, { Component } from 'react'



export default class Page2 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='pdfPage'>

                <h1 className='second-page-header'>

                    Подробнее о товаре:

                </h1>

                <table className="page_Items">
                    <tbody>
                        {props.itemInfo?.items?.map((item) => (
                            <tr key={item.id}>
                                <td colSpan="11" className="itemCell">

                                    <div className="itemRow">

                                        <div className="itemImage">
                                            <img src={item.picUrl} alt={item.name} />
                                        </div>

                                        <div className="itemInfo">
                                            <p><b>{item.name}</b></p>
                                            <p>Покрытие: {item.coating}</p>
                                            <p>Толщина: {item.thickness}</p>
                                            <p>Молдинг: {item.molding}</p>
                                            <p>Размер: {item.size}</p>
                                            <p>Цвет: {item.color}</p>
                                            <p>Тип двери: {item.door_type}</p>
                                            <p>Производитель: {item.manufacturer}</p>

                                            <div className="priceBlock">
                                                <span className="table_oldPrice">{item.old_price}</span>
                                                <span className="table_newPrice">{item.new_price}</span>
                                            </div>
                                        </div>

                                    </div>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>


            </div>
        )
    }
}
