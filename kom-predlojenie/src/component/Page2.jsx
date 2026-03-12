import React, { Component } from 'react'

export default class Page2 extends Component (props) {
  render() {
    return (
      <div className='pdfPage'>
        
        <h1 className='second-page-header'>

            Подробнее о товаре:

        </h1>

        <table className='page_Items'>

            <tbody>
                { props.more_about_items.map((item) => {
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
