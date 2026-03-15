import './App.css'
import Page1 from './component/Page1'



/* 
  Функция для получения информации возвращает JSON 

  items - массив объектов, каждый объект содержит информацию о товаре, такую как id, name, quantity, price, discountPercent, discountAmount и finalPrice, picURL, Fabric
  thinkless, pogonajtype, size, doortype.
  total - объект, содержащий общую информацию о предложении, такую как quantity, price, finalPrice и lastDayOffer.

*/

function getMoreAboutItems(offerInfo) {

  const [itemsInfo, setItemsInfo] = useState([]);
  useEffect(() => {
    const fetchItemsInfo = async () => {
      try {
        const response = await fetch('${process.env.SERVER_URL}/item-info/getInfoItem', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          /* Отправляем на сервер запрос с UUID заказа, полученным при открытии страницы, а так же массивом индексов товара */
          body: JSON.stringify({ offerUUID: offerInfo.uuid, itemIds: offerInfo.items.map(item => item.id) })
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




const generatePDF = async () => {

  const element = document.getElementById('pdf').outerHTML;

  const html = '<!DOCTYPE html><html><head><meta charset="UTF-8"><link rel="stylesheet" href="${process.env.REACT_APP_SERVER_URL}/src/App.css"><title>PDF</title></head><body>' + element + '</body></html>';

  const response = await fetch("${process.env.SERVER_URL}/pdf/generate", {
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

  /* Получаем из qvery запроса url*/
  const offerInfo = {
    offerUUID: '2b370497-224c-4c6a-8d41-a788c2cc028e',
    manager: 'Абобус обыкновенный',
    items: [1, 2, 3, 4, 5],
  };


  const itemInfo = getMoreAboutItems(offerInfo);



  return (

    <div>
      <div id="pdf">
        <Page1 offerInfo={itemInfo} />
        {/*<Page2 items={items} />*/}
      </div>
      <button onClick={generatePDF}>Сгенерировать PDF</button>
    </div>
  )
}

export default App



