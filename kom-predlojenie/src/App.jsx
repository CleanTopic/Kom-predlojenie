import './App.css'
import Page1 from './component/Page1'
import Page2 from './component/Page2'
import { useState, useEffect } from "react";
import axios from "axios";


/* 
  Функция для получения информации возвращает JSON 

  items - массив объектов, каждый объект содержит информацию о товаре, такую как id, name, quantity, price, discountPercent, discountAmount и finalPrice, picURL, Fabric
  thinkless, pogonajtype, size, doortype.
  total - объект, содержащий общую информацию о предложении, такую как quantity, price, finalPrice и lastDayOffer.

  {
            manager: 'Абобус обыкновенный',
            items: [{
                id: 1,
                name: 'Багет-13',
                name_1c: 'Багет-13 Макиато ПЭТ ДГ 2000*800 (91)',
                quantity: 1,
                discount: 20,
                coating : 'coating type',
                thinkness: 'thinkness value',
                molding: 'molding type',
                size: 'size value',
                color: 'color value',
                door_type: 'door type value',
                manufacturer: 'manufacturer value',
                discount_price: 1000,
                new_price: 4000,
                old_price: 5000,
                picUrl: 'https://optovikk.ru/catalog/vkhodnye-dveri/dlya-doma/astra-bukle-grafit-belyy-matovyy-860kh2050-levaya/#img-2',
            }],
            totals : {
                position_quantity: 1,
                total_price: 4000,
                total_discount_price: 1000,
                total_old_price: 5000,
                last_day_offer: '2024-06-30',
            }
        }
*/


function useItemsInfo(queryParams) {
  const [itemsInfo, setItemsInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItemsInfo = async () => {
      try {
        const response = await axios.post(`http://localhost:3000/item-info/getInfoItem`, {
          offerUUID: queryParams.offerUUID,
          items: queryParams.items,
        });
        setItemsInfo(response.data);
      } catch (error) {
        setItemsInfo({ error: "Error fetching items info", details: error });
      } finally {
        setLoading(false);
      }
    };

    if (loading) {
      fetchItemsInfo();
    }
  }, queryParams);

  return { itemsInfo, loading };
}




const generatePDF = async () => {

  const element = document.getElementById('pdf').outerHTML;

  const html = '<!DOCTYPE html><html><head><meta charset="UTF-8"><link rel="stylesheet" href="http://localhost:5173/src/App.css"><title>PDF</title></head><body>' + element + '</body></html>';

  const response = await fetch("http://localhost:3000/pdf/generate", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ html: html })
  }
  )

  if (!response.ok) {
    console.error('Ошибка при генерации PDF');
  }

  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'offer.pdf';
  document.body.appendChild(a);
  a.click();
}



function App() {
  /* Получаем из query запроса url*/
  const queryParams = {
    offerUUID: '2b370497-224c-4c6a-8d41-a788c2cc028e',
    manager: 'Абобус обыкновенный',
    items: [1, 2, 3, 4, 5],
  };


  const { itemsInfo, loading } = useItemsInfo(queryParams);

  console.log(loading);
  console.log(itemsInfo);


  if (loading) return <div>Загрузка данных...</div>;

  if (!itemsInfo.items.length) return <div>Нет данных для отображения</div>;



  return (

    <div>
      <div id="pdf">
        <Page1 offerInfo={itemsInfo} />
        <Page2 offerInfo={itemsInfo} />
        <Page3 manager={itemsInfo.manager} />
      </div>
      <button onClick={generatePDF}>Сгенерировать PDF</button>
    </div>
  )
}

export default App



