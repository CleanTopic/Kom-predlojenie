import React, { Component } from 'react'
import { useState, useEffect } from 'react'


function getMoreAboutItems(items) {

    const [itemsInfo, setItemsInfo] = useState([]);

    useEffect(() => {
        const fetchItemsInfo = async () => {
            try {
                const response = await fetch('http://localhost:3000/item-info/getInfoItem', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({  itemIds: items.map(item => item.id) })
                });
                const data = await response.json();
                console.log(data);
                setItemsInfo(data);
            } catch (error) {
                console.error('Error fetching items info:', error);
            }
        };

        fetchItemsInfo();
    }, [items]);

    return itemsInfo;
}



export default class Page2 extends Component (props) {
  render() {
    return (
      <div className='pdfPage'>
        
        <h1 className='second-page-header'>

            Подробнее о товаре:

        </h1>

        <table className='page_Items'>

            <tbody>
                { getMoreAboutItems(props.items).map((item) => {
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.coating}</td>
                        <td>{item.thickness}</td>
                        <td>{item.molding_type}</td>
                        <td>{item.size}</td>
                        <td>{item.color}</td>
                        <td>{item.door_type}</td>
                        <td>{item.brend}</td>

                        <td className='table_price'>Цена:</td>
                        <td className='table_oldPrice'>{item.oldPrice}</td>
                        <td className='table_newPrice'>{item.price}</td>    
                    </tr>
                }   
            ) }
                

            </tbody>


        </table>


      </div>
    )
  }
}
